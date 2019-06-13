const {
  GraphQLString,
  GraphQLObjectType
} = require('graphql')

const ActionInfo = require('./ActionInfo')

module.exports = new GraphQLObjectType({
  name: 'SignUpPayload',
  fields: () => ({
    user_id: {
      type: GraphQLString
    },
    action_info: {
      type: ActionInfo
    }
  })
})