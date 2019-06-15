const updateUserPassword = require('../updateUserPassword')

module.exports = async (root, args, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  return await updateUserPassword(args, admin)
}