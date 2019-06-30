import React from 'react'
import Layout from '../Layout'
import graphql from 'relay-runtime'

const route = {
  path: '/tours/:tourID',
  components: () => [import('./TourDetailPage')],
  query: graphql`
    query tourDetailPageAdminQuery {
      logged_admin {
        ...Layout_loggedAdmin
      }
    }
  `,
  render: ([TourDetailPage], data, context) => ({ 
    title: 'Best App',
    component: (
      <Layout loggedAdmin={data.logged_admin}>
        <TourDetailPage loggedAdmin={data.logged_admin}/>
      </Layout>
    )
  }),
  prepareVariables: ({ params }) => params
}

export default route