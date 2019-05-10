const {
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql')

const UserMutation = require('../mutations/UserMutation')

const SignInInput = require('../model/input/SignInInput')
const ActionInfo = require('../model/payload/ActionInfo')
const signIn = require('../utils/mutation-resolvers/signIn')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    user: {
      type: UserMutation,
      resolve: () => UserMutation
    },

    signIn: {
      type: ActionInfo,
      args: {
        input: { type: new GraphQLNonNull(SignInInput) }
      },
      resolve: signIn
    }
  })
})