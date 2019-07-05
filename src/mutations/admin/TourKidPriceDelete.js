import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourKidPriceDeleteAdminMutation($_id: String!) {
    admin {
      tour_kid_price_delete(_id: $_id) {
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
      tour_kid_price_delete: {
        id: variables._id,
        kid_price: null
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
          const payload = res.admin.tour_kid_price_delete
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
