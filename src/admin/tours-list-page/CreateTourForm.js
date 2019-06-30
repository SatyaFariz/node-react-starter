import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 15,
    width: 500
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

 // const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  return (
    <Paper className={c.container}>
      <TextField
        label="Province"
        defaultValue={input.province}
        onChange={handleChange('province')}
        margin="normal"
        fullWidth
   //     error={validation.username && validation.username.isInvalid}
    //    helperText={validation.username && validation.username.message}
      />

      <TextField
        label="City"
        defaultValue={input.name}
        onChange={handleChange('city')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Display Location"
        defaultValue={input.name}
        onChange={handleChange('display_location')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Name"
        defaultValue={input.name}
        onChange={handleChange('name')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Category"
        defaultValue={input.name}
        onChange={handleChange('category')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Duration (days)"
        defaultValue={input.name}
        onChange={handleChange('duration_in_days')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Price/Person"
        defaultValue={input.name}
        onChange={handleChange('price_per_person')}
        margin="normal"
        type="number"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Description"
        defaultValue={input.name}
        onChange={handleChange('description')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        select
        label="Free Cancellation"
        value={input.free_cancellation}
        onChange={handleChange('free_cancellation')}
    //    helperText="Please select your currency"
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
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Drinks Included"
        defaultValue={input.name}
        onChange={handleChange('drinks_included')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Accomodations Included"
        defaultValue={input.name}
        onChange={handleChange('accomodations_included')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Tickets Included"
        defaultValue={input.name}
        onChange={handleChange('tickets_included')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Transportation Included"
        defaultValue={input.name}
        onChange={handleChange('transportation_included')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Equipment Included"
        defaultValue={input.name}
        onChange={handleChange('equipment_included')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />

      <TextField
        label="Good For"
        defaultValue={input.name}
        onChange={handleChange('good_for')}
        margin="normal"
        fullWidth
      //  error={validation.username && validation.username.isInvalid}
      //  helperText={validation.username && validation.username.message}
      />
    </Paper>
  )
}

export default Component