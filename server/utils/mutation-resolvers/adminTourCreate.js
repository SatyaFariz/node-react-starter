const Tour = require('../../database/model/Tour')

module.exports = (root, { input }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")
 
  const newTour = new Tour(input)
  let data = null

  return new Promise((resolve, reject) => {
    newTour.save((err, doc) => {
      if(err) {
        console.log(err)
      } else {        
        data = doc
      }

      resolve(data)
    })
  })
}