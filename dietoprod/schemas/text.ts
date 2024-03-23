import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'text',
  title: 'Text',
  type: 'document',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
