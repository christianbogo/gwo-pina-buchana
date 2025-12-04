import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'neighborhood',
    title: 'Neighborhood',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'introText',
            title: 'Intro Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'marketReportPdf',
            title: 'Market Report PDF',
            type: 'file',
        }),
    ],
})
