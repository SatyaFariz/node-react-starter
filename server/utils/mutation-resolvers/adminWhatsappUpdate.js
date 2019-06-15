const updateUserWhatsapp = require('../updateUserWhatsapp')

module.exports = async (root, args, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  return await updateUserWhatsapp(args, admin)
}