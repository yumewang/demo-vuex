export const tableColumns = {
  currentPage1: [],
  subjects: [
    {
      name: 'name',
      sortField: 'name'
    },
    {
      name: 'email',
      sortField: 'email'
    },
    {
      name: 'nickname',
      sortField: 'nickname',
      callback: 'allCap'
    },
    {
      name: 'birthdate',
      sortField: 'birthdate',
      callback: 'formatDate|D/MM/Y'
    },
    {
      name: 'gender',
      sortField: 'gender',
      titleClass: 'text-center',
      dataClass: 'text-center'
    },
    {
      name: 'created_at',
      title: 'Created',
      titleClass: 'text-center',
      dataClass: 'text-center',
      callback: 'formatDate|D/MM/Y'
    },
    {
      name: '__component:custom-action',
      title: 'Component',
      titleClass: 'center aligned',
      dataClass: 'custom-action center aligned'
    },
    {
      name: '__actions',
      title: '',
      titleClass: 'text-center',
      dataClass: 'text-center'
    }
  ],
  comments: [
    {
      name: 'name',
      sortField: 'name'
    },
    {
      name: 'created_at',
      title: 'Created',
      titleClass: 'text-center',
      dataClass: 'text-center',
      callback: 'formatDate|D/MM/Y'
    },
    {
      name: '__component:custom-action',
      title: 'Component',
      titleClass: 'center aligned',
      dataClass: 'custom-action center aligned'
    },
    {
      name: '__actions',
      title: '',
      titleClass: 'text-center',
      dataClass: 'text-center'
    }
  ]
}
