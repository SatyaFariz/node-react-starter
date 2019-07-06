const {
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'CoordinateInput',
  fields: () => ({
    lat: {
      type: new GraphQLNonNull(GraphQLFloat)
    },

    lng: {
      type: new GraphQLNonNull(GraphQLFloat)
    }
  })
})