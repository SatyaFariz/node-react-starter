const Itinerary = require('../../database/model/Itinerary')

module.exports = (root, { input, tour_id }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")
 
  const newItinerary = new Itinerary({ tour_id, ...input })

  return new Promise((resolve, reject) => {
    newItinerary.save((err, doc) => {
      if(err) {
        console.log(err)
      }

      resolve(doc)
    })
  })
}