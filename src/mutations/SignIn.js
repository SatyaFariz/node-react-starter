import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation SignInMutation($input: SignInInput!) {
    sign_in(input: $input) {
      success,
      message
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
          const payload = res.sign_in
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
