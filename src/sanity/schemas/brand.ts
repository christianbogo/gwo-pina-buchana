import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'brand',
    title: 'Brand / Logo',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'logo',
        },
    },
})
