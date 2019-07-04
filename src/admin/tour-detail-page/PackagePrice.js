import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import PackagePriceEdit from './PackagePriceEdit'

const useStyles = makeStyles(theme => ({
  container: {

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
      onMouseEnter={toggleEditButtonVisibility}
      onMouseLeave={toggleEditButtonVisibility}
    >
      <SectionHeader 
        title="Package Price" 
        onEditButtonClick={openEdit}
        showEditButton={showEditButton}
      />

      {isEditing ?
      <PackagePriceEdit closeEdit={closeEdit}/>
      :
      <div>
        <Typography>
          Price: Test
        </Typography>
        <Typography>
          Number of People: Test
        </Typography>
      </div>
      }
    </div>
  )
}

export default Component