export const reviewSchema = {
  name: 'review',
  type: 'document',
  title: 'Review and Rating',
  fields: [
    {
      name: 'review',
      type: 'string',
      title: 'Review',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
    },
  ],
}
