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

  const [description, setDescription] = useState('')

  const [validation, setValidation] = useState({ isValid: false })

  const validate = () => {
    const validator = new Validator([
      {
        field: 'description',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      }
    ])

    const validation = validator.validate({ description })
    setValidation(validation)
    return validation
  }

  const handleChange = ({ target: { value }}) => setDescription(value)

  const save = () => {
    validate()
  }

  return (
    <div className={c.container}>
      <TextField
        label="*Description"
        defaultValue={description}
        onChange={handleChange}
        margin="normal"
        multiline
        fullWidth
        error={validation.description && validation.description.isInvalid}
        helperText={validation.description && validation.description.message}
      />

      <FormActionButtons
        onSaveButtonClick={save}
        onCancelButtonClick={props.closeEdit}
      />
    </div>
  )
}

export default Component