module.exports = (root, { user_type }, { session }) => {
  if(user_type === 'ADMIN')
    session.admin = null
  else
    session.user = null

  return {
    success: true
  }
}