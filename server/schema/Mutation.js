const {
  GraphQLObjectType
} = require('graphql')

const UserMutation = require('../mutations/UserMutation')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    user: {
      type: UserMutation,
      resolve: () => UserMutation
    }
  })
})