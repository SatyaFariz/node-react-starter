import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import DescriptionEdit from './DescriptionEdit'

const useStyles = makeStyles(theme => ({
  container: {

  },
}))

const Component = props => {
  const c = useStyles()

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

  return (
    <div 
      className={c.container}
      onMouseLeave={hideEditButton}
      onMouseOver={showEditButton}
    >
      <SectionHeader
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
        title="Description"
      />
     
      {isEditing ?
      <DescriptionEdit closeEdit={closeEdit}/>
      :
      <div>
        <Typography>
          Province: Test
        </Typography>
      </div>
      }
    </div>
  )
}

export default Component