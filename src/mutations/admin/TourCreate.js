import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourCreateAdminMutation($input: TourCreateInput!) {
    admin {
      tour_create(input: $input) {
        id,
        name
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
          const payload = res.admin.tour_create
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
