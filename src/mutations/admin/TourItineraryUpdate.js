import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourItineraryUpdateAdminMutation($_id: String!, $input: ItineraryInput!) {
    admin {
      tour_itinerary_update(_id: $_id, input: $input) {
        id,
        time_description,
        activity_title,
        activity_description
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_itinerary_update: {
        id: variables._id,
        ...variables
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
          const payload = res.admin.tour_itinerary_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
