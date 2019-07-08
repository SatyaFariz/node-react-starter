import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import TextField from '@material-ui/core/TextField'
import FormActionButtons from './FormActionButtons'
import Validator from '../../utils/validator'
import ItineraryCreate from '../../mutations/admin/TourItineraryCreate'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const formRef = useRef(null)

  useEffect(() => {
    // code to run on component mount
    formRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])

  const [input, setInput] = useState({
    time_description: '',
    activity_title: '',
    activity_description: '',
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
      const { tour } = props
      const variables = {
        input,
        tour_id: tour.id
      }

      ItineraryCreate(props.relay.environment, variables)
      props.closeEdit()
    }
  }

  return (
    <div className={c.container} ref={formRef}>
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
        label="Activity Title"
        defaultValue={input.activity_title}
        onChange={handleChange('activity_title')}
        margin="normal"
        fullWidth
        error={validation.activity_title && validation.activity_title.isInvalid}
        helperText={validation.activity_title && validation.activity_title.message}
      />

      <TextField
        label="Activity Description"
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
  tour: graphql`
    fragment ItineraryCreateForm_tour on Tour {
      id
    }
  `
})