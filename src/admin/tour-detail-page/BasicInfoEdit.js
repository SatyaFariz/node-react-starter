import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { graphql, createFragmentContainer } from 'react-relay'
import FormActionButtons from './FormActionButtons'
import Validator from '../../utils/validator'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { tour } = props

  const [input, setInput] = useState({
    province: tour.province,
    city: tour.city,
    display_location: tour.display_location,
    name: tour.name,
    category: tour.category || '',
    price_per_person: tour.price_per_person.toString(),
    duration_in_days: tour.duration_in_days.toString(),
    good_for: tour.good_for || ''
  })

  const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  const isZeroOrNegative = (string) => {
    const number = parseInt(string, 10)
    return number <= 0
  }

  const validate = () => {
    const validator = new Validator([
      {
        field: 'province',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'city',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'display_location',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'duration_in_days',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'duration_in_days',
        method: isZeroOrNegative,
        validWhen: false,
        message: 'This field must be greater than 0.'
      },
      {
        field: 'price_per_person',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'price_per_person',
        method: isZeroOrNegative,
        validWhen: false,
        message: 'This field must be greater than 0.'
      },
      {
        field: 'description',
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
        label="*Province"
        defaultValue={input.province}
        onChange={handleChange('province')}
        margin="normal"
        fullWidth
        error={validation.province && validation.province.isInvalid}
        helperText={validation.province && validation.province.message}
      />

      <TextField
        label="*City"
        defaultValue={input.city}
        onChange={handleChange('city')}
        margin="normal"
        fullWidth
        error={validation.city && validation.city.isInvalid}
        helperText={validation.city && validation.city.message}
      />

      <TextField
        label="*Display Location"
        defaultValue={input.display_location}
        onChange={handleChange('display_location')}
        margin="normal"
        fullWidth
        error={validation.display_location && validation.display_location.isInvalid}
        helperText={validation.display_location && validation.display_location.message}
      />

      <TextField
        label="*Name"
        defaultValue={input.name}
        onChange={handleChange('name')}
        margin="normal"
        fullWidth
        error={validation.name && validation.name.isInvalid}
        helperText={validation.name && validation.name.message}
      />

      <TextField
        label="Category"
        defaultValue={input.category}
        onChange={handleChange('category')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="*Duration (days)"
        defaultValue={input.duration_in_days}
        onChange={handleChange('duration_in_days')}
        margin="normal"
        fullWidth
        type="number"
        error={validation.duration_in_days && validation.duration_in_days.isInvalid}
        helperText={validation.duration_in_days && validation.duration_in_days.message}
      />

      <TextField
        label="*Price/Person"
        defaultValue={input.price_per_person}
        onChange={handleChange('price_per_person')}
        margin="normal"
        type="number"
        fullWidth
        error={validation.price_per_person && validation.price_per_person.isInvalid}
        helperText={validation.price_per_person && validation.price_per_person.message}
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
    fragment BasicInfoEdit_tour on Tour {
      tourID,
      province,
      city,
      display_location,
      name,
      category,
      duration_in_days,
      price_per_person,
      good_for
    }
  `
})