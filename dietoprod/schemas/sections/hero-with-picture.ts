import {defineField, defineType} from '@sanity-typed/types'
import {Slider} from '../../components/Slider'

export const heroWithPicture = defineType({
  name: 'heroWithPicture',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'text'}),
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'buttonLabel', type: 'string'}),
    defineField({
      name: 'image',
      type: 'image',
      description: 'I recommend using png for this one - for cool background effect',
    }),
    {
      name: 'imageStyle',
      type: 'string',
      options: {
        list: [
          {value: 'rounded-full', title: 'Circle'},
          {value: 'rounded-box', title: 'Rounded corners'},
        ],
      },
      initialValue: 'rounded-full',
    },
  ],
})
