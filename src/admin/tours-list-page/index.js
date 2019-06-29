import React from 'react'
import Layout from '../Layout'
import graphql from 'relay-runtime'

const route = {
  path: '/tours',
  components: () => [import('./ToursListPage')],
  query: graphql`
    query toursListPageAdminQuery {
      logged_admin {
        ...Layout_loggedAdmin
      }
    }
  `,
  render: ([ToursListPage], data, context) => ({ 
    title: 'Best App',
    component: (
      <Layout loggedAdmin={data.logged_admin}>
        <ToursListPage/>
      </Layout>
    )
  })
}

export default route