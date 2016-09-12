export const formColumns = {
  currentPage1: [],
  topics: [
    {
      name: 'name',
      type: 'input'
    },
    {
      name: 'email',
      type: 'textarea'
    },
    {
      name: 'nickname',
      type: 'select',
      data: {
        'Test': 'Test',
        'Hi': 'Hi'
      }
    },
    {
      name: 'birthdate',
      type: 'date',
      sortField: 'birthdate'
    },
    {
      name: 'gender',
      type: 'radio',
      data: {
        'M': 'Male',
        'F': 'Female'
      }
    }
  ],
  comments: [
    {
      name: 'name',
      type: 'input'
    },
    {
      name: 'email',
      type: 'textarea'
    },
    {
      name: 'nickname',
      type: 'select',
      data: {
        'Test': 'Test',
        'Hi': 'Hi'
      }
    },
    {
      name: 'birthdate',
      type: 'date',
      sortField: 'birthdate'
    },
    {
      name: 'gender',
      type: 'radio',
      data: {
        'M': 'Male',
        'F': 'Female'
      }
    }
  ]
}
