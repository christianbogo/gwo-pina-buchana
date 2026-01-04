export default {
    name: 'pageAssets',
    title: 'Page Images',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Main Site Assets',
            readOnly: true,
            hidden: true,
        },
        {
            name: 'teamPageHeroImage',
            title: 'Team Page Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'teamContactImage',
            title: 'Team Contact Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'teamGroupPhoto',
            title: 'Team Group Photo (Home Page)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'exclusiveListingsImage',
            title: 'Exclusive Listings Page Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'notableSalesImage',
            title: 'Notable Sales Page Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'newDevelopmentsPageImage',
            title: 'New Developments Page Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'sothebysAdvantageImage',
            title: "Sotheby's Advantage Page Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'sothebysHeroImage',
            title: "Sotheby's Page Hero Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'sothebysExpertiseImage',
            title: "Sotheby's Page Expertise Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'sothebysBrandBenefitImage',
            title: "Sotheby's Page Brand Benefit Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'sothebysGlobalNetworkImage',
            title: "Sotheby's Page Global Network Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'homeSearchCardImage',
            title: 'Home Search Card Image (Home Page)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'homeValuationCardImage',
            title: 'Home Valuation Card Image (Home Page)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'letsConnectCardImage',
            title: "Let's Connect Card Image (Home Page)",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'neighborhoodImages',
            title: 'Neighborhood Images (for Search Page)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'neighborhoodName', type: 'string', title: 'Neighborhood Name' },
                        { name: 'slug', type: 'slug', title: 'Slug' },
                        { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
                    ],
                },
            ],
        },
        {
            name: 'auctionHeroImage',
            title: 'Auction Page Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'auctionHouseImage',
            title: 'Auction House Image (Auction Page)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'auctionInstituteImage',
            title: 'Sotheby\'s Institute Image (Auction Page)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
