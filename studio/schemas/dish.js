import { TagIcon } from '@sanity/icons'

export default {
  name: 'dish',
  title: 'Dish',
  icon: TagIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'recipe',
      title: 'Recipe',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Meals',
      name: 'meals',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Dinner', value: 'dinner' },
          { title: 'Breakfast', value: 'breakfast' },
          { title: 'Supper', value: 'supper' },
          { title: 'Dessert', value: 'dessert' },
        ],
      },
    },
    {
      name: 'dishPage',
      title: 'Dish page',
      type: 'reference',
      weak: true,
      to: [{ type: 'dishPage' }],
      description: 'Dish page',
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
      type: 'array',
      name: 'Ingredients',
      of: [
        {
          title: 'Ingredient',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Amount',
              name: 'amount',
              type: 'string',
            },
            {
              type: 'array',
              name: 'replacements',
              of: [
                {
                  name: 'ingredient',
                  title: 'ingredient',
                  type: 'object',
                  fields: [
                    {
                      title: 'Name',
                      name: 'name',
                      type: 'string',
                    },
                    {
                      title: 'Amount',
                      name: 'amount',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
