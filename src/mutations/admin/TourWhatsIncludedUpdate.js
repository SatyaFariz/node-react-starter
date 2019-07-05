import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourWhatsIncludedUpdateAdminMutation($_id: String!, $whats_included: TourWhatsIncludedInput!) {
    admin {
      tour_whats_included_update(_id: $_id, whats_included: $whats_included) {
        id,
        foods_included,
        drinks_included,
        transportation_included,
        equipment_included,
        tickets_included,
        accomodations_included
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_whats_included_update: {
        id: variables._id,
        ...variables.whats_included
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
          const payload = res.admin.tour_whats_included_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
