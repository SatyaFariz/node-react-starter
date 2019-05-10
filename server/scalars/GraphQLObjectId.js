const { GraphQLScalarType } = require('graphql')
const { ObjectId } = require('mongoose').Types

const { isMongoId } = require('validator')

const parseObjectId = _id => {
  if (isMongoId(_id)) {
    return ObjectId(_id)
  }

  throw new Error('ObjectId must be a single String of 24 hex characters')
}

const GraphQLObjectId = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'The `ObjectId` scalar type represents a mongodb unique ID',
  serialize: String,
  parseValue: parseObjectId,
  parseLiteral: function parseLiteral (ast) {
    return parseObjectId(ast.value)
  }
})

module.exports = GraphQLObjectId