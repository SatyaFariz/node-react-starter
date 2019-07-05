import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { graphql, createFragmentContainer } from 'react-relay'
import FormActionButtons from './FormActionButtons'
import Validator from '../../utils/validator'
import PackagePriceUpdate from '../../mutations/admin/TourPackagePriceUpdate'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  const { package_price, tourID } = props.tour

  const [input, setInput] = useState({
    price: (package_price && package_price.price.toString()) || '',
    number_of_people: (package_price && package_price.number_of_people.toString()) || ''
  })

  const [validation, setValidation] = useState({ isValid: false })

  const handleChange = name => event => {
    setInput({ ...input, [name]: event.target.value })
  }

  const validate = () => {
    const validator = new Validator([
      {
        field: 'price',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'number_of_people',
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

    if(validation.isValid) {
      const variables = {
        _id: tourID,
        package_price: {
          price: parseFloat(input.price, 10),
          number_of_people: parseInt(input.number_of_people, 10)
        }
      }

      PackagePriceUpdate(props.relay.environment, variables)
      props.closeEdit()
    }
  }

  return (
    <div className={c.container}>
      <TextField
        label="Price"
        defaultValue={input.price}
        onChange={handleChange('price')}
        margin="normal"
        fullWidth
        error={validation.price && validation.price.isInvalid}
        helperText={validation.price && validation.price.message}
      />

      <TextField
        label="Number of People"
        defaultValue={input.number_of_people}
        onChange={handleChange('number_of_people')}
        margin="normal"
        fullWidth
        error={validation.number_of_people && validation.number_of_people.isInvalid}
        helperText={validation.number_of_people && validation.number_of_people.message}
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
    fragment PackagePriceEdit_tour on Tour {
      tourID,
      package_price {
        price,
        number_of_people
      }
    }
  `
})