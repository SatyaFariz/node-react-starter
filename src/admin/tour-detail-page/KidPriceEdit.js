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
    price_per_person: '',
    age_description: ''
  })

  const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  const validate = () => {
    const validator = new Validator([
      {
        field: 'price_per_person',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'age_description',
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
        label="Price/Person"
        defaultValue={input.price_per_person}
        onChange={handleChange('price_per_person')}
        margin="normal"
        fullWidth
        error={validation.price_per_person && validation.price_per_person.isInvalid}
        helperText={validation.price_per_person && validation.price_per_person.message}
      />

      <TextField
        label="Age Description"
        defaultValue={input.name}
        onChange={handleChange('age_description')}
        margin="normal"
        fullWidth
        error={validation.age_description && validation.age_description.isInvalid}
        helperText={validation.age_description && validation.age_description.message}
      />

      <FormActionButtons
        onSaveButtonClick={save}
        onCancelButtonClick={props.closeEdit}
      />
    </div>
  )
}

export default Component