import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SectionHeader from './SectionHeader'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const [isEditing, setEditing] = useState(false)
  const [editButtonVisible, setEditButtonVisible] = useState(false)
/*
  const closeEdit = () => {
    setEditing(false)
  }*/

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
        title="Maps and Location Details"
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
      />

      <div>
        TEST
      </div>
    </div>
  )
}

export default Component