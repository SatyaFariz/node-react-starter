import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import GuestRequirementsEdit from './GuestRequirementsEdit'

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
        title="Guest Requirements"
        showEditButton={showEditButton}
        onEditButtonClick={openEdit}
      />

      {isEditing ?
      <GuestRequirementsEdit closeEdit={closeEdit}/>
      :
      <div>
        <Typography>
          - dlkfj lkdjafl dsjfal sadklfjsa dsf skdfjasl dsfaj lfksdjafd slkdfjas fdfa
        </Typography>
        <Typography>
          - kldjfa kslkjaf d sdfklsajdlf  sdfkalsdjf sdlkfj assfd alskd jflsadjf s afdlsjf as
        </Typography>
        <Typography>
          - dlkfj lkdjafl dsjfal sadklfjsa dsf skdfjasl dsfaj lfksdjafd slkdfjas fdfa
        </Typography>
        <Typography>
          - kldjfa kslkjaf d sdfklsajdlf  sdfkalsdjf sdlkfj assfd alskd jflsadjf s afdlsjf as
        </Typography>
      </div>
      }
    </div>
  )
}

export default Component