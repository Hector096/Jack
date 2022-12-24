export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'phoneNo',
      type: 'string',
      title: 'Phone No',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      name: 'isVerfied',
      type: 'boolean',
      title: 'isVerfied',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'isActive',
    },
    {
      name: 'specialization',
      type: 'reference',
      title: 'Specialization',
      to: [{type: 'specialization'}],
    },
    {
      name: 'socialProfile',
      type: 'reference',
      title: 'Social Profile',
      to: [{type: 'socialProfile'}],
    },
    {
      name: 'skills',
      type: 'reference',
      title: 'Skills',
      to: [{type: 'skill'}],
    },
    {
      name: 'role',
      type: 'reference',
      title: 'Role',
      to: [{type: 'role'}],
    },
    {
      name: 'industry',
      type: 'reference',
      title: 'Industry',
      to: [{type: 'industry'}],
    },
    {
      name: 'review',
      type: 'reference',
      title: 'Review',
      to: [{type: 'review'}],
    },
    {
      name: 'publication',
      type: 'reference',
      title: 'Publication',
      to: [{type: 'publication'}],
    },
    {
      name: 'experience',
      type: 'reference',
      title: 'Experience',
      to: [{type: 'experience'}],
    },
    {
      name: 'availability',
      type: 'reference',
      title: 'Availability',
      to: [{type: 'availability'}],
    },
  ],
}
