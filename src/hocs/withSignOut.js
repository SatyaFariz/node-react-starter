import React, { useContext } from 'react'
import AppContext from '../AppContext'
import SignOut from '../mutations/SignOut'

export default function(Component, variables) {
  return (props) => {
    const { environment, reset } = useContext(AppContext)

    const signOut = (cb) => {
      SignOut(environment, variables, (payload, err) => {
        if(err) {
          cb(null, err)
        } else {
          if(payload.success)
            reset()
            
          cb(payload, null)
        }
      })
    }

    return (
      <Component {...props} signOut={signOut}/>
    )
  }
}