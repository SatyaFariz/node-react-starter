import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourBasicInfoUpdateAdminMutation($_id: String!, $basic_info: TourBasicInfoInput!) {
    admin {
      tour_basic_info_update(_id: $_id, basic_info: $basic_info) {
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
  const optimisticResponse = {
    admin: {
      id: variables._id,
      ...variables.basic_info
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
          const payload = res.admin.tour_basic_info_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
