const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'ActionInfo',
  fields: () => ({
    success: {
      type: GraphQLBoolean
    },
    message: {
      type: GraphQLString
    }
  })
})