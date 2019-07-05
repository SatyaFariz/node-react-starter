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
  const optimisticResponse = {
    admin: {
      tour_description_update: {
        id: variables._id,
        description: variables.description
      }
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      optimisticResponse,
      variables,
      onCompleted: (res, err) => {
        if(err)
          callback && callback(null, err)
        else {
          const payload = res.admin.tour_description_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
