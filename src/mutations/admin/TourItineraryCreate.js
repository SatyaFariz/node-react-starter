import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TourItineraryCreateAdminMutation($tour_id: String!, $input: ItineraryInput!) {
    admin {
      tour_itinerary_create(tour_id: $tour_id, input: $input) {
        id,
        tour_id,
        time_description,
        activity_title,
        activity_description
      }
    }
  }
`

let temp_id = 0

function update(store, data) {
  const tour = store.get(data.getValue('tour_id'))
  const itinerary = tour && tour.getLinkedRecords('itinerary')
  if(itinerary) {
    itinerary.push(data)
    tour.setLinkedRecords(itinerary, 'itinerary')
  }
}

export default (environment, variables, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: store => {
        const payload = store.getRootField('admin')
        const itinerary = payload.getLinkedRecord('tour_itinerary_create', variables)
        update(store, itinerary)
      },
      optimisticUpdater: store => {
        const { input, tour_id } = variables
        const id = 'client:newItinerary:' + temp_id++
        const itinerary = store.create(id, 'Itinerary')

        itinerary.setValue(id, 'id')
        itinerary.setValue(tour_id, 'tour_id')
        for(let field in input) {
          itinerary.setValue(input[field], field)
        }

        update(store, itinerary)        
      },
      onCompleted: (res, err) => {
        if(err)
          callback && callback(null, err)
        else {
          const payload = res.admin.tour_itinerary_create
          callback && callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
