import React from 'react'

export default [ 
  {
    path: '/',
    components: () => [import('./TestPage')],
  /*  query: graphql`
      query pagesHomeQuery {
        loggedOrtu {
          ...Layout,
          ...Home
        }
      }
    `,*/
    render: ([TestPage], data, context) => ({ 
      title: 'Starter App',
      component: (
        <TestPage/>
      ),
 //     chunks: ['home'],
    })
  },
]