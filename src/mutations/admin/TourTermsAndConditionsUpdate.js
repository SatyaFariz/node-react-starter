import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourTermsAndConditionsUpdateAdminMutation($_id: String!, $terms_and_conditions: [String!]!) {
    admin {
      tour_terms_and_conditions_update(_id: $_id, terms_and_conditions: $terms_and_conditions) {
        id,
        terms_and_conditions
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_terms_and_conditions_update: {
        id: variables._id,
        terms_and_conditions: variables.terms_and_conditions
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
          const payload = res.admin.tour_terms_and_conditions_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
