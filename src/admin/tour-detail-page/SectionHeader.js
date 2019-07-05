import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EditButton from '@material-ui/icons/Edit'
import DeleteButton from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  deleteButton: {
    marginLeft: theme.spacing(1)
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>
    
      <div>
        {props.showEditButton &&
        <IconButton onClick={props.onEditButtonClick}>
          <EditButton size="small"/>
        </IconButton>
        }

        {props.showDeleteButton &&
        <IconButton onClick={props.onDeleteButtonClick} className={c.deleteButton}>
          <DeleteButton size="small"/>
        </IconButton>
        }
      </div>
    </div>
  )
}

export default Component