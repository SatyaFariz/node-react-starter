const {
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql')

const UserInput = require('../model/input/UserInput')
const ActionInfo = require('../model/payload/ActionInfo')
const userSignUp = require('../utils/mutation-resolvers/userSignUp')

module.exports = new GraphQLObjectType({
  name: 'UserMutation',
  fields: () => ({
    signUp: {
      type: ActionInfo,
      args: {
        input: { type: new GraphQLNonNull(UserInput) }
      },
      resolve: userSignUp
    }
  })
})