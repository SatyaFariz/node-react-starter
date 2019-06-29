import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    width: 500,
    flexDirection: 'column',
    padding: 20
  },
  button: {
    marginTop: 20
  }
}))

const Component = props => {
  const c = useStyles()

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <div className={c.container}>
      <Paper className={c.paper}>
        <TextField
          label="Email/Username"
          className={c.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          className={c.textField}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
          fullWidth
        />

        <Button 
          variant="contained" 
          color="primary" 
          className={c.button}
        >
          Log in
        </Button>
      </Paper>
    </div>
  )
}

export default Component

