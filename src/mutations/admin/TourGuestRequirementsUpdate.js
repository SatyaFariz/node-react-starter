import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourGuestRequirementsUpdateAdminMutation($_id: String!, $guest_requirements: [String!]!) {
    admin {
      tour_guest_requirements_update(_id: $_id, guest_requirements: $guest_requirements) {
        id,
        guest_requirements
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_guest_requirements_update: {
        id: variables._id,
        guest_requirements: variables.guest_requirements
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
          const payload = res.admin.tour_guest_requirements_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
