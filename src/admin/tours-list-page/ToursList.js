import React from 'react'
import { createPaginationContainer, graphql } from 'react-relay'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

//import Link from '../../common/Link'
import TourItem from './TourItem'

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1
  }
}))

const Component = props => {
  const c = useStyles()


  const { edges } = props.loggedAdmin.tours
  return (
    <List className={c.container}>
      {edges.map(item => {
    /*    return (
          <div key={item.cursor}>
          <Link href={`/admin/tours/${item.node.id}`}>{item.cursor}</Link>
          </div>
        )*/

        return (
          <ListItem key={item.cursor}>
            <TourItem tour={item.node}/>
          </ListItem>
        )
      })}
    </List>
  )
}


export default createPaginationContainer(Component, {
  loggedAdmin: graphql`
    fragment ToursList_loggedAdmin on LoggedAdmin @argumentDefinitions(
      first: { type: "Int", defaultValue: 12 },
      after: { type: "String", defaultValue: null }
    ) {
      tours(
        first: $first,
        after: $after
      ) @connection(key: "ToursList_tours", filters: []){
        edges {
          cursor,
          node {
            id,
            ...TourItem_tour
          }
        },
        pageInfo {
          hasNextPage,
          endCursor
        }
      }
    }
  `
}, {
  direction: 'forward',
  getConnectionFromProps(props) {
    const { loggedAdmin } = props
    return loggedAdmin && loggedAdmin.tours
  },
  getFragmentVariables(prevVars, totalCount) {
    return {
      ...prevVars,
      count: totalCount
    }
  },
  getVariables(props, { count, cursor }, fragmentVariables) {
    return {
      ...fragmentVariables,
      after: cursor
    }
  },
  query: graphql`
    query ToursListQuery($first: Int, $after: String) {
      logged_admin {        
        ...ToursList_loggedAdmin @arguments(first: $first, after: $after)        
      }
    }
  `
}) 