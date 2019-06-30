import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

import Validator from '../../utils/validator'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 15,
    width: 500
  },
  button: {
    marginTop: 20
  }
}))

const Component = props => {
  const c = useStyles()

  const [input, setInput] = useState({
    province: '',
    city: '',
    display_location: '',
    name: '',
    category: '',
    price_per_person: '',
    duration_in_days: '',
    description: '',
    free_cancellation: false,
    foods_included: '',
    drinks_included: '',
    accomodations_included: '',
    tickets_included: '',
    transportation_included: '',
    equipment_included: '',
    good_for: ''
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
    const validation = validate()
    if(validation.isInvalid) {
      console.log('')
    }
  }

  return (
    <Paper className={c.container}>
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
        defaultValue={input.name}
        onChange={handleChange('city')}
        margin="normal"
        fullWidth
        error={validation.city && validation.city.isInvalid}
        helperText={validation.city && validation.city.message}
      />

      <TextField
        label="*Display Location"
        defaultValue={input.name}
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
        defaultValue={input.name}
        onChange={handleChange('category')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="*Duration (days)"
        defaultValue={input.name}
        onChange={handleChange('duration_in_days')}
        margin="normal"
        fullWidth
        type="number"
        error={validation.duration_in_days && validation.duration_in_days.isInvalid}
        helperText={validation.duration_in_days && validation.duration_in_days.message}
      />

      <TextField
        label="*Price/Person"
        defaultValue={input.name}
        onChange={handleChange('price_per_person')}
        margin="normal"
        type="number"
        fullWidth
        error={validation.price_per_person && validation.price_per_person.isInvalid}
        helperText={validation.price_per_person && validation.price_per_person.message}
      />

      <TextField
        label="*Description"
        defaultValue={input.name}
        onChange={handleChange('description')}
        margin="normal"
        fullWidth
        error={validation.description && validation.description.isInvalid}
        helperText={validation.description && validation.description.message}
      />

      <TextField
        select
        label="Free Cancellation"
        value={input.free_cancellation}
        onChange={handleChange('free_cancellation')}
        margin="normal"
        fullWidth
      >
        <MenuItem value={false}>No</MenuItem>
        <MenuItem value={true}>Yes</MenuItem>
      </TextField>

      <TextField
        label="Foods Included"
        defaultValue={input.name}
        onChange={handleChange('foods_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Drinks Included"
        defaultValue={input.name}
        onChange={handleChange('drinks_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Accomodations Included"
        defaultValue={input.name}
        onChange={handleChange('accomodations_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Tickets Included"
        defaultValue={input.name}
        onChange={handleChange('tickets_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Transportation Included"
        defaultValue={input.name}
        onChange={handleChange('transportation_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Equipment Included"
        defaultValue={input.name}
        onChange={handleChange('equipment_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Good For"
        defaultValue={input.name}
        onChange={handleChange('good_for')}
        margin="normal"
        fullWidth
      />

      <Button
        color="primary"
        variant="contained"
        onClick={save}
        className={c.button}
        fullWidth
      >
        Save
      </Button>
    </Paper>
  )
}

export default Component