import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourPackagePriceUpdateAdminMutation($_id: String!, $package_price: TourPackagePriceInput!) {
    admin {
      tour_package_price_update(_id: $_id, package_price: $package_price) {
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
      tour_package_price_update: {
        id: variables._id,
        package_price: variables.package_price
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
          const payload = res.admin.tour_package_price_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
