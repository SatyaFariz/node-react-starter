import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourBasicInfoUpdateAdminMutation($basic_info: TourBasicInfoInput!) {
    admin {
      tour_basic_info_update(basic_info: $basic_info) {
        id,
        province,
        city,
        display_location,
        name,
        category,
        duration_in_days,
        price_per_person,
        good_for
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
          const payload = res.admin.tour_basic_info_update
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
