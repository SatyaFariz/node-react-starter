import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourMoreTipsUpdateAdminMutation($_id: String!, $more_tips: [String!]!) {
    admin {
      tour_more_tips_update(_id: $_id, more_tips: $more_tips) {
        id,
        more_tips
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_more_tips_update: {
        id: variables._id,
        more_tips: variables.more_tips
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
          const payload = res.admin.tour_more_tips_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
