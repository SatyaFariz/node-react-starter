import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import HighlightsEdit from './HighlightsEdit'
import NoDataComponent from './NoDataComponent'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { tour } = props

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)

  const closeEdit = () => {
    setEditing(false)
  }

  const openEdit = () => {
    setEditButtonVisible(false)
    setEditing(true)
  }

  const showEditButton = () => !isEditing && !editButtonVisible && setEditButtonVisible(true)

  const hideEditButton = () => !isEditing && editButtonVisible && setEditButtonVisible(false)

  const highlights = tour.highlights || []

  return (
    <div 
      className={c.container}
      onMouseOver={showEditButton}
      onMouseLeave={hideEditButton}
    >
      <SectionHeader
        title="Highlights"
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
      />

      {isEditing ?
      <HighlightsEdit closeEdit={closeEdit} tour={tour}/>
      :
      <div>
        {highlights.length > 0 ?
          <div>
            {highlights.map((item, i) => {
              return (
                <Typography key={i}>
                  - {item}
                </Typography>
              )
            })}
          </div>
          :
          <NoDataComponent onAddButtonClick={openEdit}/>
        }
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment Highlights_tour on Tour {
      id,
      highlights,
      ...HighlightsEdit_tour
    }
  `
})