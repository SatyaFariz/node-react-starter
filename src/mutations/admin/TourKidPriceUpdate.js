import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourKidPriceUpdateAdminMutation($_id: String!, $kid_price: TourKidPriceInput!) {
    admin {
      tour_kid_price_update(_id: $_id, kid_price: $kid_price) {
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
  const optimisticResponse = {
    admin: {
      tour_kid_price_update: {
        id: variables._id,
        kid_price: variables.kid_price
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
          const payload = res.admin.tour_kid_price_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
