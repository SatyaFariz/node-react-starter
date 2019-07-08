const {
  GraphQLString,
  GraphQLObjectType
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'DeletePayload',
  fields: () => ({
    deleted_id: {
      type: GraphQLString
    }
  })
})