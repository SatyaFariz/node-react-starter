module.exports = (root, { userType }, { session }) => {
  if(userType === 'ADMIN')
    session.admin = null
  else
    session.user = null

  return {
    success: true
  }
}