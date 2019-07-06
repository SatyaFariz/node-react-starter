import React, { useState } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'
import CancellationPolicyEdit from './CancellationPolicyEdit'
import NoDataComponent from './NoDataComponent'

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

  const cancellation_policy = tour.cancellation_policy || []

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
      <CancellationPolicyEdit closeEdit={closeEdit} tour={tour}/>
      :
      <div>
        {cancellation_policy.length > 0 ?
          <div>
            {cancellation_policy.map((item, i) => {
              return (
                <Typography key={i}>
                  - {item}
                </Typography>
              )
            })}
          </div>
          :
          <NoDataComponent onAddButtonClick={openEdit}/>
        }
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment CancellationPolicy_tour on Tour {
      id,
      cancellation_policy,
      ...CancellationPolicyEdit_tour
    }
  `
})