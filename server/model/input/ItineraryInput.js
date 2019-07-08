const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'ItineraryInput',
  fields: () => ({
    time_description: {
      type: new GraphQLNonNull(GraphQLString)
    },

    activity_title: {
      type: new GraphQLNonNull(GraphQLString)
    },

    activity_description: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})


