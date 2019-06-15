const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: root => root.public_id
    },

    public_id: {
      type: GraphQLString
    },

    url: {
      type: GraphQLString
    },

    secure_url: {
      type: GraphQLString
    },

    height: {
      type: GraphQLFloat
    },

    width: {
      type: GraphQLFloat
    },

    caption: {
      type: GraphQLString
    },

    is_spherical: {
      type: GraphQLBoolean
    },

    spherical_url: {
      type: GraphQLString
    },

    spherical_secure_url: {
      type: GraphQLString
    }
  })
})