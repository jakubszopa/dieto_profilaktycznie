import {defineType} from '@sanity-typed/types'

export const richText = defineType({
  name: 'richTextSection',
  type: 'document',
  fields: [
    {
      name: 'richText',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          name: 'richImage',
          type: 'object',
          fields: [{name: 'image', type: 'image'}, {type: 'boolean', name: 'isRight'}],
        },
      ],
    },
  ],
})
