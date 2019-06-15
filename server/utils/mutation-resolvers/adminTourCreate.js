const Tour = require('../../database/model/Tour')

module.exports = async (root, { input }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")
 
  const newTour = new Tour(input)

  console.log(newTour)
/*
  return new Promise((resolve, reject) => {
    newTour.save(err => {
      if(err) {
        console.log(err)
      } else {        
        
      }

      resolve(newTour)
    })
  })*/
}