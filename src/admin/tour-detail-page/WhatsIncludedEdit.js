import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { graphql, createFragmentContainer } from 'react-relay'
import FormActionButtons from './FormActionButtons'
import WhatsIncludedUpdate from '../../mutations/admin/TourWhatsIncludedUpdate'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { tour, closeEdit, relay: { environment }} = props

  const [input, setInput] = useState({
    foods_included: tour.foods_included || '',
    drinks_included: tour.drinks_included || '',
    accomodations_included: tour.accomodations_included || '',
    tickets_included: tour.tickets_included || '',
    transportation_included: tour.transportation_included || '',
    equipment_included: tour.equipment_included || '',
  })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  const save = () => {
    const variables = {
      _id: tour.tourID,
      whats_included: input
    }

    WhatsIncludedUpdate(environment, variables)
    closeEdit()
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
        onCancelButtonClick={closeEdit}
      />
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment WhatsIncludedEdit_tour on Tour {
      tourID,
      foods_included,
      drinks_included,
      accomodations_included,
      tickets_included,
      transportation_included,
      equipment_included,
    }
  `
})