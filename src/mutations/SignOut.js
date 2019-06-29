import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation SignOutMutation($user_type: UserTypeEnum!) {
    sign_out(user_type: $user_type) {
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
          const payload = res.sign_out
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
