const updateUserPhone = require('../updateUserPhone')

module.exports = async (root, args, { session: { user }}) => {
  if(!user)
    throw new Error("You're not authenticated!")

  return await updateUserPhone(args, user)
}