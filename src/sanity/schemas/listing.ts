import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'listing',
    title: 'Listing',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle (Address)',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Listing Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Exclusive Listing', value: 'exclusive' },
                    { title: 'Notable Sale', value: 'notable' }
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'status',
            title: 'Status Label',
            type: 'string',
            options: {
                list: [
                    { title: 'For Sale', value: 'For Sale' },
                    { title: 'Sold', value: 'Sold' },
                    { title: 'Pending', value: 'Pending' }
                ]
            },
            initialValue: 'For Sale'
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string',
            description: 'e.g. "$28,000,000" or "Upon Request"'
        }),
        defineField({
            name: 'zinger',
            title: 'Zinger (Stats Summary)',
            type: 'string',
            description: 'e.g. "9 BD | 11 BA | 15,118 SQ.FT."'
        }),
        defineField({
            name: 'renderOrder',
            title: 'Render Order',
            type: 'string',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'Pinned', value: 'pinned' }
                ],
                layout: 'radio'
            },
            initialValue: 'default'
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'gallery',
            title: 'Image Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'listingVideo',
            title: 'Listing Video URL',
            type: 'url',
            description: 'URL to the video (YouTube, Vimeo, or Bunny.net embed URL)'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'keyStats',
            title: 'Key Stats',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Bed', value: 'bed' },
                                { title: 'Bath', value: 'bath' },
                                { title: 'Square Feet', value: 'sqft' },
                                { title: 'Lot Size', value: 'lot' },
                                { title: 'Garage', value: 'garage' },
                                { title: 'Calendar', value: 'calendar' }
                            ]
                        }
                    },
                    { name: 'text', title: 'Text', type: 'string', description: 'e.g. "9 Beds"' }
                ]
            }]
        }),
        defineField({
            name: 'otherStats',
            title: 'Other Stats Groups',
            type: 'array',
            of: [{
                type: 'object',
                title: 'Group',
                fields: [
                    { name: 'groupName', type: 'string', title: 'Group Name' },
                    {
                        name: 'stats',
                        title: 'Stats List',
                        type: 'array',
                        of: [{
                            type: 'object',
                            fields: [
                                { name: 'name', type: 'string', title: 'Name' },
                                { name: 'value', type: 'string', title: 'Value' }
                            ]
                        }]
                    }
                ]
            }]
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'type',
            media: 'coverImage',
        },
    },
})
