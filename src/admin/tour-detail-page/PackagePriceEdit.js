import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormActionButtons from './FormActionButtons'
import Validator from '../../utils/validator'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const [input, setInput] = useState({
    price: '',
    number_of_people: ''
  })

  const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  const validate = () => {
    const validator = new Validator([
      {
        field: 'price',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'number_of_people',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      }
    ])

    const validation = validator.validate(input)
    setValidation(validation)
    return validation
  }

  const save = () => {
    validate()
  }

  return (
    <div className={c.container}>
      <TextField
        label="Price"
        defaultValue={input.price}
        onChange={handleChange('price')}
        margin="normal"
        fullWidth
        error={validation.price && validation.price.isInvalid}
        helperText={validation.price && validation.price.message}
      />

      <TextField
        label="Number of People"
        defaultValue={input.number_of_people}
        onChange={handleChange('number_of_people')}
        margin="normal"
        fullWidth
        error={validation.number_of_people && validation.number_of_people.isInvalid}
        helperText={validation.number_of_people && validation.number_of_people.message}
      />

      <FormActionButtons
        onSaveButtonClick={save}
        onCancelButtonClick={props.closeEdit}
      />
    </div>
  )
}

export default Component