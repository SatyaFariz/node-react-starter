const Tour = require('../../database/model/Tour')

module.exports = (root, { input }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")
 
  const newTour = new Tour(input)

  return new Promise((resolve, reject) => {
    newTour.save((err, doc) => {
      if(err) {
        console.log(err)
      }

      resolve(doc)
    })
  })
}