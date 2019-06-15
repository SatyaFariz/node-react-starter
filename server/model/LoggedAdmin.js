const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const User = require('./User')

module.exports = new GraphQLObjectType({
  name: 'LoggedAdmin',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: () => 'loggedAdmin'
    },

    user_data: {
      type: User,
      resolve: root => root
    }
  })
})