import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourHighlightsUpdateAdminMutation($_id: String!, $highlights: [String!]!) {
    admin {
      tour_highlights_update(_id: $_id, highlights: $highlights) {
        id,
        highlights
      }
    }
  }
`

export default (environment, variables, callback) => {
  const optimisticResponse = {
    admin: {
      tour_highlights_update: {
        id: variables._id,
        highlights: variables.highlights
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
          const payload = res.admin.tour_highlights_update
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
