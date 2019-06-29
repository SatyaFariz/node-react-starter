const {
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql')

const UserMutation = require('../mutations/UserMutation')
const AdminMutation = require('../mutations/AdminMutation')

const SignInInput = require('../model/input/SignInInput')
const ActionInfo = require('../model/payload/ActionInfo')
const signIn = require('../utils/mutation-resolvers/signIn')

const UserTypeEnum = require('../model/UserTypeEnum')
const signOut = require('../utils/mutation-resolvers/signOut')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    user: {
      type: UserMutation,
      resolve: () => UserMutation
    },

    admin: {
      type: AdminMutation,
      resolve: () => AdminMutation
    },

    sign_in: {
      type: ActionInfo,
      args: {
        input: { type: new GraphQLNonNull(SignInInput) }
      },
      resolve: signIn
    },

    sign_out: {
      type: ActionInfo,
      args: {
        user_type: { type: new GraphQLNonNull(UserTypeEnum) }
      },
      resolve: signOut
    }
  })
})