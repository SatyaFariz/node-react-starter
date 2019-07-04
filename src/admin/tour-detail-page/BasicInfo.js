import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import BasicInfoEdit from './BasicInfoEdit'

const useStyles = makeStyles(theme => ({
  container: {

  },

  a: {
    backgroundColor: theme.palette.grey[100],
    padding: 20
  }
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
        onEditButtonClick={openEdit}
        title="Basic Info" 
        showEditButton={showEditButton}
      />

      {isEditing ?
      <BasicInfoEdit closeEdit={closeEdit}/>
      :
      <div className={c.a}>
        <Typography>
          Province: Test
        </Typography>
        <Typography>
          City: Test
        </Typography>
        <Typography>
          Display Location: Test
        </Typography>
        <Typography>
          Name: Test
        </Typography>
        <Typography>
          Category: -
        </Typography>
        <Typography>
          Duration: 2 Days
        </Typography>
        <Typography>
          Price/Person: Test
        </Typography>
        <Typography>
          Good For: Test
        </Typography>
      </div>
      }
    </div>
  )
}

export default Component