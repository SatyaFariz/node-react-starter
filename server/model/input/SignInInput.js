const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

const UserTypeEnum = require('../UserTypeEnum')

module.exports = new GraphQLInputObjectType({
  name: 'SignInInput',
  fields: () => ({
    usernameOrEmail: {
      type: new GraphQLNonNull(GraphQLString)
    },

    password: {
      type: new GraphQLNonNull(GraphQLString)
    },

    userType: {
      type: new GraphQLNonNull(UserTypeEnum)
    }
  })
})