const {
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql')

const UserInput = require('../model/input/UserInput')
const SignUpPayload = require('../model/payload/SignUpPayload')
const userSignUp = require('../utils/mutation-resolvers/userSignUp')

module.exports = new GraphQLObjectType({
  name: 'UserMutation',
  fields: () => ({
    sign_up: {
      type: SignUpPayload,
      args: {
        input: { type: new GraphQLNonNull(UserInput) }
      },
      resolve: userSignUp
    }
  })
})