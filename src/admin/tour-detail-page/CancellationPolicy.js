import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import CancellationPolicyEdit from './CancellationPolicyEdit'

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
        title="Cancellation Policy"
        showEditButton={showEditButton}
        onEditButtonClick={openEdit}
      />

      {isEditing ?
      <CancellationPolicyEdit closeEdit={closeEdit}/>
      :
      <div>
        <Typography>
          - dkfjajsdlfjklasdf dskfja  dsfajlksdfj a sdfkjasdklfj  safdjalskfj
        </Typography>
        <Typography>
          - ksdjf ksjflasd f dklfjalds  dfjalsdf sdfj asfd
        </Typography>
      </div>
      }
    </div>
  )
}

export default Component