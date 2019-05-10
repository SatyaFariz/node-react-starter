const {
  GraphQLString,
  GraphQLObjectType
} = require('graphql')

const ActionInfo = require('./ActionInfo')

module.exports = new GraphQLObjectType({
  name: 'SignUpPayload',
  fields: () => ({
    userID: {
      type: GraphQLString
    },
    actionInfo: {
      type: ActionInfo
    }
  })
})