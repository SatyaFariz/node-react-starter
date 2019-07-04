import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourKidPriceUpdateAdminMutation($kid_price: TourKidPriceInput!) {
    admin {
      tour_kid_price_update(kid_price: $kid_price) {
        id,
        kid_price {
          price_per_person,
          age_description
        }
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
          const payload = res.admin.tour_kid_price_update
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
