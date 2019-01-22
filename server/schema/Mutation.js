const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    test: {
      type: GraphQLString,
      resolve: () => 'Test'
    }
  })
})