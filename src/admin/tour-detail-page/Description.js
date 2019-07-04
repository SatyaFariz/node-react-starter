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
  const [showEditButton, setEditButtonVisibility] = useState(false)

  const toggleEdit = () => setEditing(!isEditing)

  const toggleEditButtonVisibility = () => setEditButtonVisibility(!showEditButton)

  const title = 'Description'

  if(isEditing)
    return (
      <DescriptionEdit title={title} toggleEdit={toggleEdit}/>
    )

  return (
    <div 
      className={c.container}
      onMouseLeave={toggleEditButtonVisibility}
      onMouseEnter={toggleEditButtonVisibility}
      showEditButton={showEditButton}
    >
      <SectionHeader
        showEditButton={showEditButton}
        onEditButtonClick={toggleEdit}
        title={title}
      />
     
      <div>
        <Typography>
          Province: Test
        </Typography>
      </div>
    </div>
  )
}

export default Component