import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
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
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number',
        }),
        defineField({
            name: 'bathrooms',
            title: 'Bathrooms',
            type: 'number',
        }),
        defineField({
            name: 'squareFootage',
            title: 'Square Footage',
            type: 'number',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'neighborhood',
            title: 'Neighborhood',
            type: 'reference',
            to: [{ type: 'neighborhood' }],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
