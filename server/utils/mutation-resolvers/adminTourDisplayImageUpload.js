const Tour = require('../../database/model/Tour')
const { ObjectId } = require('mongoose').Types
const cloudinary = require('../../lib/cloudinary')

module.exports = async (root, { _id }, { session, req }) => {
  const { admin } = session
  const { files } = req
  const file = files && files[0]

  if(!admin)
    throw new Error("You're not authorized as admin")

  if(!file)
    throw new Error('File is required.')

  const { uploader } = cloudinary.v2

  const uploaded = await uploader.upload(file.path)

  if(uploaded) {
    const display_image = {
      public_id: uploaded.public_id,
      url: uploaded.url,
      secure_url: uploaded.secure_url,
      width: uploaded.width,
      height: uploaded.height
    }

    let doc = null

    try {
      doc = await Tour.findOneAndUpdate({ _id: ObjectId(_id) }, { display_image })

      if(doc) {
        return display_image
      } else {
        throw new Error()
      }
    } catch(err) {
      uploader.destroy(uploaded.public_id)
    } finally {
      if(doc && doc.display_image) {
        uploader.destroy(doc.display_image.public_id)
      }
    }
  }
}