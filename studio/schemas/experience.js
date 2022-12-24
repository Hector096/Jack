export const experienceSchema = {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'designation',
      type: 'string',
      title: 'Designation',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'startDate',
      type: 'datetime',
      title: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'datetime',
      title: 'End Date',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
}
