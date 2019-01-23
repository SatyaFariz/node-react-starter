const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const User = require('./User')

module.exports = new GraphQLObjectType({
  name: 'LoggedUser',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: () => 'loggedUser'
    },

    me: {
      type: User,
      resolve: root => root
    }
  })
})