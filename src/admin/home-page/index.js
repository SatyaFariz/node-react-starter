import React from 'react'
import Layout from '../Layout'
import graphql from 'relay-runtime'

const route = {
  path: '',
  components: () => [import('./HomePage')],
  query: graphql`
    query homePageAdminQuery {
      logged_admin {
        ...HomePage_loggedAdmin
      }
    }
  `,
  render: ([HomePage], data, context) => ({ 
    title: 'Tuan Rumah',
    component: (
      <Layout>
        <HomePage loggedAdmin={data.logged_admin}/>
      </Layout>
    )
  })
}

export default route