const {
  GraphQLObjectType
} = require('graphql')

const ActionInfo = require('./ActionInfo')
const User = require('../User')

module.exports = new GraphQLObjectType({
  name: 'UserUniqueIdentifierUpdatePayload',
  fields: () => ({
    user_data: {
      type: User
    },
    
    action_info: {
      type: ActionInfo
    }
  })
})