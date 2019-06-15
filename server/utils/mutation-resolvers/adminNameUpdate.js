const updateUserName = require('../updateUserName')

module.exports = async (root, args, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  return await updateUserName(args, admin)
}