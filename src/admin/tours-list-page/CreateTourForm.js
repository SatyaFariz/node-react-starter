import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 15,
    width: 500
  }
}))

const Component = props => {
  const c = useStyles()

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

 // const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <Paper className={c.container}>
      <TextField
        label="Email/Username"
        defaultValue={values.name}
        onChange={handleChange('username')}
        margin="normal"
        fullWidth
   //     error={validation.username && validation.username.isInvalid}
    //    helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Email/Username"
        defaultValue={values.name}
        onChange={handleChange('username')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />
    </Paper>
  )
}

export default Component