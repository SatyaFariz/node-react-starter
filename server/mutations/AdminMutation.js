const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const { GraphQLEmail } = require('graphql-custom-types')

const { Username } = require('../scalars/Username')

const User = require('../model/User')
const ActionInfo = require('../model/payload/ActionInfo')
const UserUniqueIdentifierUpdatePayload = require('../model/payload/UserUniqueIdentifierUpdatePayload')
const AdminCreateInput = require('../model/input/AdminCreateInput')
const adminNameUpdate = require('../utils/mutation-resolvers/adminNameUpdate')
const adminCreate = require('../utils/mutation-resolvers/adminCreate')
const adminWhatsappUpdate = require('../utils/mutation-resolvers/adminWhatsappUpdate')
const adminAddressUpdate = require('../utils/mutation-resolvers/adminAddressUpdate')
const adminEmailUpdate = require('../utils/mutation-resolvers/adminEmailUpdate')
const adminPasswordUpdate = require('../utils/mutation-resolvers/adminPasswordUpdate')
const adminUsernameUpdate = require('../utils/mutation-resolvers/adminUsernameUpdate')

module.exports = new GraphQLObjectType({
  name: 'AdminMutation',
  fields: () => ({
    user_create: {
      type: ActionInfo,
      args: {
        input: { type: new GraphQLNonNull(AdminCreateInput) }
      },
      resolve: adminCreate
    },

    name_update: {
      type: User,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: adminNameUpdate
    },

    whatsapp_update: {
      type: User,
      args: {
        whatsapp: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: adminWhatsappUpdate
    },

    address_update: {
      type: User,
      args: {
        address: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: adminAddressUpdate
    },

    email_update: {
      type: UserUniqueIdentifierUpdatePayload,
      args: {
        email: { type: new GraphQLNonNull(GraphQLEmail) }
      },
      resolve: adminEmailUpdate
    },
    
    password_update: {
      type: ActionInfo,
      args: {
        current_password: { type: new GraphQLNonNull(GraphQLString) },
        new_password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: adminPasswordUpdate
    },

    username_update: {
      type: UserUniqueIdentifierUpdatePayload,
      args: {
        username: { type: new GraphQLNonNull(Username) }
      },
      resolve: adminUsernameUpdate
    }
  })
})