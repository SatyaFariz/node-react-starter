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

    user_data: {
      type: User,
      resolve: root => root
    }
  })
})