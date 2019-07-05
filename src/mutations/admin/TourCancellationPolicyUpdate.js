import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourCancellationPolicyUpdateAdminMutation($_id: String!, $cancellation_policy: [String!]!) {
    admin {
      tour_cancellation_policy_update(_id: $_id, cancellation_policy: $cancellation_policy) {
        id,
        cancellation_policy
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_cancellation_policy_update: {
        id: variables._id,
        cancellation_policy: variables.cancellation_policy
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
          const payload = res.admin.tour_cancellation_policy_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
