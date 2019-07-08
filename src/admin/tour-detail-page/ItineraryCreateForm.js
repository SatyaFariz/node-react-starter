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

  const scrollIntoView = () => formRef.current.scrollIntoView({ behavior: "smooth" })

  useEffect(() => {
    // code to run on component mount
    scrollIntoView()
  }, [])

  const defaultValues = {
    time_description: '',
    activity_title: '',
    activity_description: ''
  }

  const [input, setInput] = useState(defaultValues)

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

  const create = (again) => {
    const validation = validate()

    if(validation) {
      const { tour } = props
      const variables = {
        input,
        tour_id: tour.id
      }

      ItineraryCreate(props.relay.environment, variables)
      if(again) {
        setInput(defaultValues)
        scrollIntoView()
      } else {
        props.closeEdit()
      }      
    }
  }

  const save = () => create(false)

  const saveAndCreateAgain = () => create(true)

  return (
    <div className={c.container} ref={formRef}>
      <TextField
        label="Time Description"
        value={input.time_description}
        onChange={handleChange('time_description')}
        margin="normal"
        fullWidth
        error={validation.time_description && validation.time_description.isInvalid}
        helperText={validation.time_description && validation.time_description.message}
      />

      <TextField
        label="Activity Title"
        value={input.activity_title}
        onChange={handleChange('activity_title')}
        margin="normal"
        fullWidth
        error={validation.activity_title && validation.activity_title.isInvalid}
        helperText={validation.activity_title && validation.activity_title.message}
      />

      <TextField
        label="Activity Description"
        value={input.activity_description}
        onChange={handleChange('activity_description')}
        margin="normal"
        fullWidth
        error={validation.activity_description && validation.activity_description.isInvalid}
        helperText={validation.activity_description && validation.activity_description.message}
      />
      
      <FormActionButtons
        onSaveButtonClick={save}
        onCancelButtonClick={props.closeEdit}
        onSaveAndCreateAgainButtonClick={saveAndCreateAgain}
        showSaveAndCreateAgainButton
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