import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import SectionHeader from './SectionHeader'
import GuestRequirementsEdit from './GuestRequirementsEdit'

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

  return (
    <div 
      className={c.container}
      onMouseOver={showEditButton}
      onMouseLeave={hideEditButton}
    >
      <SectionHeader 
        title="Guest Requirements"
        showEditButton={editButtonVisible}
        onEditButtonClick={openEdit}
      />

      {isEditing ?
      <GuestRequirementsEdit closeEdit={closeEdit} tour={tour}/>
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

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment GuestRequirements_tour on Tour {
      id,
      guest_requirements,
      ...GuestRequirementsEdit_tour
    }
  `
})