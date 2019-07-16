const Tour = require('../../database/model/Tour')
const { ObjectId } = require('mongoose').Types

module.exports = async (root, { _id }, { session, req }) => {
  const { admin } = session
  const { files } = req
  const file = files && files[0]

  if(!admin)
    throw new Error("You're not authorized as admin")

  if(!file)
    throw new Error('File is required.')

  console.log(file)  

  const image = {
    public_id: 'jdklfs',
    url: 'https://test/tes',
    secure_url: 'https://test/tes',
    width: 1000,
    height: 1000
  }

  const update = { 
    $push: { 
      images: {
        $each: [image],
        $position: 0
      } 
    }
  }

  const updateStatus = await Tour.updateOne({ _id: ObjectId(_id) }, update)
  if(updateStatus.nModified > 0) {

    return image
  }
}