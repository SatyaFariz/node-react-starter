import React from 'react'
import Layout from '../Layout'

const route = {
  path: '',
  components: () => [import('./HomePage')],
/*  query: graphql`
    query pagesHomeQuery {
      loggedOrtu {
        ...Layout,
        ...Home
      }
    }
  `,*/
  render: ([HomePage], data, context) => ({ 
    title: 'Tuan Rumah',
    component: (
      <Layout>
      <HomePage/>
      </Layout>
    )
  })
}

export default route