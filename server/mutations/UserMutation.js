const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const User = require('../model/User')
const UserInput = require('../model/input/UserInput')
const SignUpPayload = require('../model/payload/SignUpPayload')
const ActionInfo = require('../model/payload/ActionInfo')
const userSignUp = require('../utils/mutation-resolvers/userSignUp')
const userNameUpdate = require('../utils/mutation-resolvers/userNameUpdate')
const userPhoneUpdate = require('../utils/mutation-resolvers/userPhoneUpdate')
const userAddressUpdate = require('../utils/mutation-resolvers/userAddressUpdate')
const userPasswordUpdate = require('../utils/mutation-resolvers/userPasswordUpdate')

module.exports = new GraphQLObjectType({
  name: 'UserMutation',
  fields: () => ({
    sign_up: {
      type: SignUpPayload,
      args: {
        input: { type: new GraphQLNonNull(UserInput) }
      },
      resolve: userSignUp
    },

    name_update: {
      type: User,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: userNameUpdate
    },

    phone_update: {
      type: User,
      args: {
        phone: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: userPhoneUpdate
    },

    address_update: {
      type: User,
      args: {
        address: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: userAddressUpdate
    },

    password_update: {
      type: ActionInfo,
      args: {
        current_password: { type: new GraphQLNonNull(GraphQLString) },
        new_password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: userPasswordUpdate
    }
  })
})