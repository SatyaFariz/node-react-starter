const DataLoader = require('dataloader')
const Itinerary = require('../database/model/Itinerary')

module.exports = new DataLoader(ids => {
  return Itinerary.find({ tour_id: { $in: ids }}).then(res => {
    return ids.map(id => res.filter(item => item.tour_id.toString() === id.toString()))
  })
})