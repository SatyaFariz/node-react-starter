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

const update = (store, data, tourID) => {
  const tour = store.get(tourID)
  if(tour) {
    tour.setLinkedRecord(data, 'display_image')
  }
}

export default (environment, variables, file, callback) => {
  const uploadables = { file }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      uploadables,
      updater: store => {
        const payload = store.getRootField('admin')
        const data = payload.getLinkedRecord('tour_display_image_upload', variables)
        update(store, data, variables._id)
      },
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
