const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const User = require('../model/User')
const adminNameUpdate = require('../utils/mutation-resolvers/adminNameUpdate')


module.exports = new GraphQLObjectType({
  name: 'AdminMutation',
  fields: () => ({
    name_update: {
      type: User,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: adminNameUpdate
    },
  })
})