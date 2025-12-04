import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Coming Soon', value: 'coming-soon' },
          { title: 'Selling', value: 'selling' },
          { title: 'Sold Out', value: 'sold-out' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range (Display)',
      type: 'string',
      description: 'e.g. "$1.5M - $2M" or "From $1.5M"',
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (Numeric)',
      type: 'number',
      description: 'Used for sorting and the Mortgage Calculator default.',
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
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Vimeo or YouTube URL',
    }),
    defineField({
      name: 'floorplanPdf',
      title: 'Floorplan PDF',
      type: 'file',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mapLocation',
      title: 'Map Location',
      type: 'geopoint',
    }),
    defineField({
      name: 'neighborhood',
      title: 'Neighborhood',
      type: 'reference',
      to: [{ type: 'neighborhood' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
      subtitle: 'status',
    },
  },
})
