import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import WhatsIncludedEdit from './WhatsIncludedEdit'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const [isEditing, setEditing] = useState(false)
  const [showEditButton, setEditButtonVisible] = useState(false)

  const toggleEdit = () => setEditing(!isEditing)
  const toggleEditButtonVisibility = () => setEditButtonVisible(!showEditButton)

  const title = "What's Included"

  if(isEditing)
    return (
      <WhatsIncludedEdit
        title={title}
        toggleEdit={toggleEdit}
      />
    )

  return (
    <div 
      className={c.container}
      onMouseLeave={toggleEditButtonVisibility}
      onMouseEnter={toggleEditButtonVisibility}
    >
      <SectionHeader 
        title={title}
        showEditButton={showEditButton}
        onEditButtonClick={toggleEdit}
      />

      <div>
        <Typography>
          Foods: Test
        </Typography>
        <Typography>
          Drinks: Test
        </Typography>
        <Typography>
          Accomodations: Test
        </Typography>
        <Typography>
          Tickets: Test
        </Typography>
        <Typography>
          Transportation: -
        </Typography>
        <Typography>
          Equipment: 2 Days
        </Typography>
      </div>
    </div>
  )
}

export default Component