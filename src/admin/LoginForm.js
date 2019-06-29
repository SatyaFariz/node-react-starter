import React, { useState } from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import Validator from '../utils/validator'

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
  btn: {
    marginTop: 20
  },
  spinner: {
    position: 'absolute'
  }
}))

const Component = props => {
  const c = useStyles()

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const [validation, setValidation] = useState({ isValid: false })

  const [isLoading, setLoading] = useState(false)

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const validate = () => {
    const validator = new Validator([
      {
        field: 'username',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Masukan email atau username anda.'
      },
      {
        field: 'password',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Masukan password anda.'
      }
    ])

    const validation = validator.validate(values)
    setValidation(validation)
    return validation
  }

  const login = () => {
    const validation = validate()
    if(validation.isValid) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)

      setLoading(true)
      
    }
  }

  return (
    <div className={c.container}>
      <Paper className={c.paper}>
        <TextField
          label="Email/Username"
          defaultValue={values.name}
          onChange={handleChange('username')}
          margin="normal"
          fullWidth
          error={validation.username && validation.username.isInvalid}
          helperText={validation.username && validation.username.message}
        />

        <TextField
          label="Password"
          type="password"
          defaultValue={values.password}
          onChange={handleChange('password')}
          margin="normal"
          fullWidth
          error={validation.password && validation.password.isInvalid}
          helperText={validation.password && validation.password.message}
        />

        <Button 
          disabled={isLoading}
          variant="contained" 
          color="primary" 
          className={c.btn}
          onClick={login}
        >
          Log in
          {isLoading &&
          <CircularProgress size={props.theme.buttonSpinnerSize} className={c.spinner}/>
          }
        </Button>
      </Paper>
    </div>
  )
}

export default withTheme(Component)

