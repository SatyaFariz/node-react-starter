import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormActionButtons from './FormActionButtons'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const [input, setInput] = useState({
    foods_included: '',
    drinks_included: '',
    accomodations_included: '',
    tickets_included: '',
    transportation_included: '',
    equipment_included: '',
  })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  const save = () => {
    console.log('')
  }

  return (
    <div className={c.container}>
      <TextField
        label="Foods"
        defaultValue={input.foods_included}
        onChange={handleChange('foods_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Drinks"
        defaultValue={input.drinks_included}
        onChange={handleChange('drinks_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Accomodations"
        defaultValue={input.accomodations_included}
        onChange={handleChange('accomodations_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Tickets"
        defaultValue={input.tickets_included}
        onChange={handleChange('tickets_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Accomodations"
        defaultValue={input.transportation_included}
        onChange={handleChange('transportation_included')}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Equipment"
        defaultValue={input.equipment_included}
        onChange={handleChange('equipment_included')}
        margin="normal"
        fullWidth
      />

      <FormActionButtons
        onSaveButtonClick={save}
        onCancelButtonClick={props.closeEdit}
      />
    </div>
  )
}

export default Component