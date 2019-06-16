const { ObjectId } = require('mongoose').Types
const Tour = require('../../database/model/Tour')

module.exports = async (root, { _id, date }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  return new Promise((resolve, reject) => {
    return Tour.findOne({ _id: ObjectId(_id) }, (err, tour) => {
  
      const new_dates = tour.next_available_dates.slice(0, 9)
      
      if(!new_dates.includes(date))
        new_dates.push(date)

      new_dates.sort((a, b) => b - a)

      tour.next_available_dates = new_dates

      tour.save((err, doc) => {
        if(err) {
            console.error('ERROR!')
        }

        resolve(doc)
      })
    })
  })
  
}