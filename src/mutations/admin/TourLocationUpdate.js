import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourLocationUpdateAdminMutation($_id: String!, $location_details: String!, $location: CoordinateInput!) {
    admin {
      tour_location_update(_id: $_id, location_details: $location_details, location: $location) {
        id,
        location_details
        location {
          lat,
          lng
        }
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_location_update: {
        id: variables._id,
        location_details: variables.location_details,
        location: variables.location
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
          const payload = res.admin.tour_location_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
