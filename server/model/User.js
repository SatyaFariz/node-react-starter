const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: root => root._id.toString()
    }
  })
})