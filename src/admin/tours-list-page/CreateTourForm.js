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

  const [input, setInput] = useState({
    province: '',
    city: ''
  })

 // const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  return (
    <Paper className={c.container}>
      <TextField
        label="Province"
        defaultValue={input.province}
        onChange={handleChange('province')}
        margin="normal"
        fullWidth
   //     error={validation.username && validation.username.isInvalid}
    //    helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Email/Username"
        defaultValue={input.name}
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