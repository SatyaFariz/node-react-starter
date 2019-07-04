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
  const [showEditButton, setEditButtonVisible] = useState(false)

  const closeEdit = () => {
    setEditButtonVisible(true)
    setEditing(false)
  }

  const openEdit = () => {
    setEditButtonVisible(false)
    setEditing(true)
  }

  const toggleEditButtonVisibility = () => {
    if(!isEditing) {
      setEditButtonVisible(!showEditButton)
    }
  }

  return (
    <div 
      className={c.container}
      onMouseLeave={toggleEditButtonVisibility}
      onMouseEnter={toggleEditButtonVisibility}
    >
      <SectionHeader
        showEditButton={showEditButton}
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