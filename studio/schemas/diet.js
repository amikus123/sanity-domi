import { TagIcon } from '@sanity/icons'

export default {
  name: 'diet',
  title: 'Diet',
  icon: TagIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      title: 'Days',
      name: 'days',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Day',
          name: 'day',
          fields: [
            {
              title: 'Dishes',
              name: 'dishes',
              type: 'array',
              of: [
                {
                  name: 'Dish',
                  title: 'dish',
                  type: 'reference',
                  weak: true,
                  to: [{ type: 'dish' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Dish replacements',
      name: 'dishReplacements',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Dish replacement',
          name: 'dishReplacement',
          fields: [
            {
              name: 'Original',
              title: 'original',
              type: 'reference',
              weak: true,
              to: [{ type: 'dish' }],
            },
            {
              title: 'Replacements',
              name: 'replacements',
              type: 'array',
              of: [
                {
                  name: 'Dish',
                  title: 'dish',
                  type: 'reference',
                  weak: true,
                  to: [{ type: 'dish' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
