const {
  GraphQLObjectType,
  GraphQLID
} = require('graphql')

const User = require('./User')

module.exports = new GraphQLObjectType({
  name: 'LoggedUser',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: () => 'loggedUser'
    },

    me: {
      type: User,
      resolve: root => root
    }
  })
})