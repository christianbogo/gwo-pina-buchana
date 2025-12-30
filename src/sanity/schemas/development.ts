import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'development',
    title: 'New Development',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Sort Order',
            type: 'number',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Current Development', value: 'Current' },
                    { title: 'Sold / Success Story', value: 'Sold' },
                    { title: 'Sothebys International Realty', value: 'Sothebys' },
                ],
                layout: 'radio',
            },
            initialValue: 'Current',
        }),
        defineField({
            name: 'imageCaption',
            title: 'Image Caption',
            type: 'string',
            description: 'Optional caption overlay for the image (e.g., "SOLD 3 UNITS"). Only used for Sold properties.',
            hidden: ({ document }) => document?.category !== 'Sold',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'photo',
        },
    },
})
