import React from 'react'
import Layout from '../Layout'
import graphql from 'relay-runtime'

const route = {
  path: '',
  components: () => [import('./HomePage')],
  query: graphql`
    query homePageAdminQuery {
      logged_admin {
        ...Layout_loggedAdmin,
        ...HomePage_loggedAdmin
      }
    }
  `,
  render: ([HomePage], data, context) => ({ 
    title: 'Tuan Rumah',
    component: (
      <Layout loggedAdmin={data.logged_admin}>
        <HomePage loggedAdmin={data.logged_admin}/>
      </Layout>
    )
  })
}

export default route