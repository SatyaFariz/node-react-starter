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
        title="Cancellation Policy"
        showEditButton={editButtonVisible}
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