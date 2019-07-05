import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourDescriptionUpdateAdminMutation($_id: String!, $description: String!) {
    admin {
      tour_description_update(_id: $_id, description: $description) {
        id,
        description
      }
    }
  }
`

export default (environment, variables, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (res, err) => {
        if(err)
          callback(null, err)
        else {
          const payload = res.admin.tour_description_update
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
