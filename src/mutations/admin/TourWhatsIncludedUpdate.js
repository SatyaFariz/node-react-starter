import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourWhatsIncludedUpdateAdminMutation($whats_included: TourWhatsIncludedInput!) {
    admin {
      tour_whats_included_update(whats_included: $whats_included) {
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
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (res, err) => {
        if(err)
          callback(null, err)
        else {
          const payload = res.admin.tour_whats_included_update
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
