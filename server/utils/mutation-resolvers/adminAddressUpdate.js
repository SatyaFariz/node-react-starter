const updateUserAddress = require('../updateUserAddress')

module.exports = async (root, args, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  return await updateUserAddress(args, admin)
}