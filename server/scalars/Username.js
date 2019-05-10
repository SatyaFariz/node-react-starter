const { GraphQLScalarType } = require('graphql')

const usernameValid = (username) => {
  // no less than 4 characters, no more than 30 characters
  if(username.length <  4 || username.length > 30)
    return false
  // cannot contain any whitespace
  else if(/\s/.test(username))
    return false
  else {
    // only alphanumeric and underscore
    const regexp = /^[a-zA-Z0-9_]+$/
    return username.search(regexp) !== -1
  }
}

const parse = (value) => {
  if (usernameValid(value)) {
    return value
  }
  throw new Error('Not a valid username')
}

const serialize = (value) => {
  if (usernameValid(value)) {
    return value
  }
  throw new Error('Not a valid username')
}

const parseLiteral = (ast) => {
  if (usernameValid(ast.value)) {
    return ast.value
  }
  throw new Error('Not a valid username')
}

const Username = new GraphQLScalarType({
  name: 'Username',
  description: 'Username',
  serialize: serialize,
  parseValue: parse,
  parseLiteral: parseLiteral,
})

module.exports = { Username }