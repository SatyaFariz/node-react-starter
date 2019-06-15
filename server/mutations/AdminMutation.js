const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')


module.exports = new GraphQLObjectType({
  name: 'AdminMutation',
  fields: () => ({
    print_text: {
      type: GraphQLString,
      args: {
        text: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (root, { text }) => text
    },
  })
})