const updateUserEmail = require('../updateUserEmail')

module.exports = async (root, args, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  return await updateUserEmail(args, admin)
}