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
      onMouseOver={showEditButton}
      onMouseLeave={hideEditButton}
    >
      <SectionHeader 
        title="Package Price" 
        onEditButtonClick={openEdit}
        showEditButton={editButtonVisible}
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