import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourPackagePriceDeleteAdminMutation($_id: String!) {
    admin {
      tour_package_price_delete(_id: $_id) {
        id,
        package_price {
          price,
          number_of_people
        }
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_package_price_delete: {
        id: variables._id,
        package_price: null
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
          const payload = res.admin.tour_package_price_delete
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
