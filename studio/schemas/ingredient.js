import { TagIcon } from '@sanity/icons'

export default {
  name: 'ingredient',
  title: 'Ingredient',
  icon: TagIcon,
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'text',
    },
  ],
}
