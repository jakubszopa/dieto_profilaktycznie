import {defineArrayMember, defineType, defineField} from '@sanity-typed/types'

export default defineType({
  name: 'page',
  type: 'document',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Title',
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
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'section',
          type: 'reference',
          to: [{type: 'heroWithPicture'}, {type: 'richTextSection'}],
        }),
      ],
    }),
  ],
})
