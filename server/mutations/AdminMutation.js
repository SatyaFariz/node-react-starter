const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const User = require('../model/User')
const ActionInfo = require('../model/payload/ActionInfo')
const AdminCreateInput = require('../model/input/AdminCreateInput')
const adminNameUpdate = require('../utils/mutation-resolvers/adminNameUpdate')
const adminCreate = require('../utils/mutation-resolvers/adminCreate')


module.exports = new GraphQLObjectType({
  name: 'AdminMutation',
  fields: () => ({
    user_create: {
      type: ActionInfo,
      args: {
        input: { type: new GraphQLNonNull(AdminCreateInput) }
      },
      resolve: adminCreate
    },

    name_update: {
      type: User,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: adminNameUpdate
    },
  })
})