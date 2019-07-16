const Tour = require('../../database/model/Tour')
const { ObjectId } = require('mongoose').Types

module.exports = async (root, { _id }) => {
  const display_image = {
    public_id: 'jdklfs',
    url: 'https://test/tes',
    secure_url: 'https://test/tes',
    width: 1000,
    height: 1000
  }

  const updateStatus = await Tour.updateOne({ _id: ObjectId(_id) }, { display_image })
  if(updateStatus.nModified > 0) {

    return display_image
  }
}