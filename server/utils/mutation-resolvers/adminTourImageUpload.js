const Tour = require('../../database/model/Tour')
const { ObjectId } = require('mongoose').Types

module.exports = async (root, { _id }) => {
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