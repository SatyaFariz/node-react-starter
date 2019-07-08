import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import TextField from '@material-ui/core/TextField'
import FormActionButtons from './FormActionButtons'
import Validator from '../../utils/validator'
import ItineraryUpdate from '../../mutations/admin/TourItineraryUpdate'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { itinerary } = props

  const [input, setInput] = useState({
    time_description: itinerary.time_description || '',
    activity_title: itinerary.activity_title || '',
    activity_description: itinerary.activity_description || '',
  })

  const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  const validate = () => {
    const validator = new Validator([
      {
        field: 'time_description',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'activity_title',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'activity_description',
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
    const validation = validate()
    if(validation) {
      const variables = {
        _id: itinerary.id,
        input
      }

      ItineraryUpdate(props.relay.environment, variables)
      props.closeEdit()
    }
  }

  return (
    <div className={c.container}>
      <TextField
        label="Time Description"
        defaultValue={input.time_description}
        onChange={handleChange('time_description')}
        margin="normal"
        fullWidth
        error={validation.time_description && validation.time_description.isInvalid}
        helperText={validation.time_description && validation.time_description.message}
      />

      <TextField
        label="Time Description"
        defaultValue={input.activity_title}
        onChange={handleChange('activity_title')}
        margin="normal"
        fullWidth
        error={validation.activity_title && validation.activity_title.isInvalid}
        helperText={validation.activity_title && validation.activity_title.message}
      />

      <TextField
        label="Time Description"
        defaultValue={input.activity_description}
        onChange={handleChange('activity_description')}
        margin="normal"
        fullWidth
        error={validation.activity_description && validation.activity_description.isInvalid}
        helperText={validation.activity_description && validation.activity_description.message}
      />
      
      <FormActionButtons
        onSaveButtonClick={save}
        onCancelButtonClick={props.closeEdit}
      />
    </div>
  )
}

export default createFragmentContainer(Component, {
  itinerary: graphql`
    fragment ItineraryItemEdit_itinerary on Itinerary {
      id,
      time_description,
      activity_title,
      activity_description
    }
  `
})