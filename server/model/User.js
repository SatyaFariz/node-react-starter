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
    },

    name: {
      type: GraphQLString
    },

    username: {
      type: GraphQLString
    },

    email: {
      type: GraphQLString
    },

    phone: {
      type: GraphQLString
    },

    whatsapp: {
      type: GraphQLString
    },

    address: {
      type: GraphQLString
    }
  })
})