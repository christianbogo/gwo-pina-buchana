import type { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';

type Listing = {
    address: string;
    price: string;
    link: string;
    image: string;
    status: string;
    details: Record<string, string>;
};

const AGENT_URLS = [
    'https://www.rsir.com/homes-for-sale/?_agent=86&public_sold=1&sort=-sold_price',
    'https://www.rsir.com/homes-for-sale/?_agent=232&public_sold=1&sort=-sold_price',
    'https://www.rsir.com/homes-for-sale/?_agent=679&public_sold=1&sort=-sold_price',
];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const allListings: Listing[] = [];

        for (const url of AGENT_URLS) {
            const response = await fetch(url, {
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
                },
            });

            if (!response.ok) {
                console.error(`Failed to fetch ${url}: ${response.statusText}`);
                continue;
            }

            const html = await response.text();
            const $ = cheerio.load(html);

            $('article.columns').each((_, element) => {
                const $el = $(element);
                const container = $el.find('.product-box');

                // Extract basic info
                const link = $el.find('a.bg-stretch').attr('href');
                const price = $el.find('.price.fuelidx_propsum_price').text().trim();
                const addressStreet = $el.find('.fuelidx_propsum_address').text().trim();
                const addressCityState = $el.find('.fuelidx_propsum_address2').text().trim();
                const address = `${addressStreet}, ${addressCityState}`;
                const status = $el.find('.tag.proptag_new').text().trim() || 'Sold';

                // Extract image
                // Try data-photo first, then background-image from style
                let image = container.attr('data-photo');
                if (!image) {
                    const style = $el.find('a.bg-stretch').attr('style');
                    const match = style?.match(/url\("?(.+?)"?\)/);
                    if (match) {
                        image = match[1];
                    }
                }

                // Extract details (beds, baths, sqft, acres)
                const details: Record<string, string> = {};
                $el.find('.property-info.fuelidx_propsum_topfields li').each((_, li) => {
                    const value = $(li).find('.counter').text().trim();
                    const label = $(li).find('.title').text().trim();
                    if (label && value) {
                        details[label] = value;
                    }
                });

                if (price && addressStreet) {
                    allListings.push({
                        address,
                        price,
                        link: link ? (link.startsWith('http') ? link : `https://www.rsir.com${link}`) : '',
                        image: image || '',
                        status,
                        details
                    });
                }
            });
        }

        const firstUrlHtml = await (await fetch(AGENT_URLS[0], { headers: { 'User-Agent': 'Mozilla/5.0' } })).text();

        res.status(200).json({
            count: allListings.length,
            listings: allListings,
            debug: {
                urlsScraped: AGENT_URLS.length,
                firstUrl: AGENT_URLS[0],
                sampleHtmlLength: firstUrlHtml.length,
                testSelector: cheerio.load(firstUrlHtml)('article.columns').length,
                firstElementDebug: (() => {
                    const $ = cheerio.load(firstUrlHtml);
                    const el = $('article.columns').first();
                    return {
                        price: el.find('.price.fuelidx_propsum_price').text().trim(),
                        address: el.find('.fuelidx_propsum_address').text().trim(),
                        fullText: el.text().substring(0, 200),
                        html: el.html()?.substring(0, 500)
                    };
                })()
            }
        });
    } catch (error) {
        console.error('Scraping error:', error);
        res.status(500).json({ error: 'Failed to scrape listings', details: error instanceof Error ? error.message : String(error) });
    }
}