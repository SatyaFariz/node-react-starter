import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourPackagePriceUpdateAdminMutation($package_price: TourPackagePriceInput!) {
    admin {
      tour_package_price_update(package_price: $package_price) {
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
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (res, err) => {
        if(err)
          callback(null, err)
        else {
          const payload = res.admin.tour_package_price_update
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
