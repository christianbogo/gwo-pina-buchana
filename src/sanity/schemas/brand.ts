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
            name: 'darkModeLogo',
            title: 'Dark Mode Logo',
            description: 'Optional. Use this if the standard logo does not look good in dark mode. If provided, we will not auto-invert the standard logo.',
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
