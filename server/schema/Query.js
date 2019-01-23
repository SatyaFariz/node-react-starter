const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    test: {
      type: GraphQLString,
      resolve: () => 'Test'
    }
  })
})