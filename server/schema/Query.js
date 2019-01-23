const {
  GraphQLObjectType
} = require('graphql')

const LoggedUser = require('../model/LoggedUser')
const LoggedAdmin = require('../model/LoggedAdmin')

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    loggedUser: {
      type: LoggedUser,
      resolve: (root, args, { session: { user }}) => user
    },

    LoggedAdmin: {
      type: LoggedAdmin,
      resolve: (root, args, { session: { admin }}) => admin
    }
  })
})