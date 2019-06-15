const updateUserUsername = require('../updateUserUsername')

module.exports = async (root, args, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  return await updateUserUsername(args, admin)
}