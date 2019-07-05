import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { graphql, createFragmentContainer } from 'react-relay'
import FormActionButtons from './FormActionButtons'
import Validator from '../../utils/validator'
import DescriptionUpdate from '../../mutations/admin/TourDescriptionUpdate'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { tour } = props

  const [description, setDescription] = useState(tour.description)

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
    const validation = validate()
    const variables = {
      _id: tour.tourID,
      description
    }

    if(validation.isValid) {
      DescriptionUpdate(props.relay.environment, variables)
      props.closeEdit()
    }
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

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment DescriptionEdit_tour on Tour {
      tourID,
      description
    }
  `
})