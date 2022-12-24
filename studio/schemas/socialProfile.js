export const socialProfileSchema = {
    name: 'socialProfile',
    type: 'document',
    title: 'Social Profile Links',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'link',
        type: 'string',
        title: 'link',
      },
    ],
  }