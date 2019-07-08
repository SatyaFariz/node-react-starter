import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourItineraryDeleteAdminMutation($_id: String!) {
    admin {
      tour_itinerary_delete(_id: $_id) {
        deleted_id
      }
    }
  }
`

function update(store, { _id, tour_id }) {
  const tour = store.get(tour_id)
  const itinerary = tour && tour.getLinkedRecords('itinerary')
  if(itinerary) {
    const newRecords = itinerary.filter(item => item.getValue('id') !== _id)
    tour.setLinkedRecords(newRecords, 'itinerary')
  }
}

export default (environment, variables, { tour_id }, callback) => {
  
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: store => update(store, { tour_id, ...variables }),
      optimisticUpdater: store => update(store, { tour_id, ...variables }),
      onCompleted: (res, err) => {
        if(err)
          callback && callback(null, err)
        else {
          const payload = res.admin.tour_itinerary_delete
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
