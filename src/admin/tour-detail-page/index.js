import React from 'react'
import Layout from '../Layout'
import graphql from 'relay-runtime'

const route = {
  path: '/tours/:tourID',
  components: () => [import('./TourDetailPage')],
  query: graphql`
    query tourDetailPageAdminQuery($tourID: String!) {
      logged_admin {
        ...Layout_loggedAdmin,
        tour(tourID: $tourID) {
          ...TourDetailPage_tour
        }
      }
    }
  `,
  render: ([TourDetailPage], data, context) => ({ 
    title: 'Best App',
    component: (
      <Layout loggedAdmin={data.logged_admin}>
        <TourDetailPage tour={data.logged_admin.tour}/>
      </Layout>
    )
  }),
  prepareVariables: ({ params }) => params
}

export default route