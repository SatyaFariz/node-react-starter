const { idToCursor } = require('./relayCursor')

module.exports = async (first, databaseQuery, cursorBuilder) => {
  const limit = first + 1
  const data = await databaseQuery(limit)
  let { length } = data

  let hasNextPage = false
  let endCursor = null

  if(length > 0) {
    if(length > first) {
      hasNextPage = true
      data.pop()
      length--
    }

    const generateCursor = item => (
      cursorBuilder ? cursorBuilder(item) : idToCursor(item._id)
    )

    const lastItem = data[length - 1]

    endCursor = generateCursor(lastItem)

    const edges = data.map(item => ({
      cursor: generateCursor(item),
      node: item
    }))

    const pageInfo = { hasNextPage, endCursor }

    return { edges, pageInfo }
  }

  return {
    edges: [],
    pageInfo: { hasNextPage, endCursor }
  }
}