const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

const UserTypeEnum = require('../UserTypeEnum')

module.exports = new GraphQLInputObjectType({
  name: 'SignInInput',
  fields: () => ({
    username_or_email: {
      type: new GraphQLNonNull(GraphQLString)
    },

    password: {
      type: new GraphQLNonNull(GraphQLString)
    },

    user_type: {
      type: new GraphQLNonNull(UserTypeEnum)
    }
  })
})