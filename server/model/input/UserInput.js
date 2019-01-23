const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

const { GraphQLEmail } = require('graphql-custom-types')

module.exports = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },

    email: {
      type: new GraphQLNonNull(GraphQLEmail)
    },

    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})