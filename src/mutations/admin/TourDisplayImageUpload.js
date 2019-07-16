import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourDisplayImageUploadAdminMutation($_id: String!) {
    admin {
      tour_display_image_upload(_id: $_id) {
        id,
        secure_url
      }
    }
  }
`

export default (environment, variables, file, callback) => {
  const uploadables = { file }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      uploadables,
      onCompleted: (res, err) => {
        if(err)
          callback && callback(null, err)
        else {
          const payload = res.admin.tour_display_image_upload
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
