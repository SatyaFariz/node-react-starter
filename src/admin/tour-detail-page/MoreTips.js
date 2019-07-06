import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import MoreTipsEdit from './MoreTipsEdit'
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

  const more_tips = tour.more_tips || []

  return (
    <div
      className={c.container}
      onMouseOver={showEditButton}
      onMouseLeave={hideEditButton}
    >
      <SectionHeader 
        title="More Tips"
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
      />

      {isEditing ?
        <MoreTipsEdit closeEdit={closeEdit} tour={tour}/>
        :
        <div>
          {more_tips.length > 0 ?
            <div>
              {more_tips.map((item, i) => {
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
    fragment MoreTips_tour on Tour {
      id,
      more_tips,
      ...MoreTipsEdit_tour
    }
  `
})