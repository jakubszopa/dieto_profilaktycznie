import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'text',
  title: 'Text',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'direction',
      title: 'Direction',
      type: 'boolean',
    }),
  ],
})
