import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useDropzone } from 'react-dropzone'
import { graphql, createFragmentContainer } from 'react-relay'

const dropzoneWidth = 500

const dropzoneStyle = {
  position: 'relative',
  height: dropzoneWidth * 0.66667,
  width: dropzoneWidth,
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 30
}

const useStyles = makeStyles(theme => ({
  container: {

  },

  dropzone: {
    ...dropzoneStyle,
    border: `2px dashed ${theme.palette.grey[400]}`,
    '&:hover': {
      cursor: 'pointer'
    }
  },

  dropzoneDisabled: {
    ...dropzoneStyle
  }
}))

const Component = props => {
  const c = useStyles()

  const [isLoading, setLoading] = useState(false)

  const onDropAccepted = useCallback(acceptedFiles => {
    
    setTimeout(() => setLoading(false), 3000)
    setLoading(true)
  }, [])

  const onDropRejected = useCallback(acceptedFiles => {
    // Do something with the files
    alert('Invalid file')
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    onDropRejected, 
    disabled: isLoading,
    accept: "image/jpeg, image/jpg"
  })

  return (
    <div {...getRootProps()} className={isLoading ? c.dropzoneDisabled : c.dropzone}>
      <input {...getInputProps()} />
      {isLoading ?
        <CircularProgress size={40}/>
      :
        <React.Fragment>
        {
          isDragActive ?
            <Typography>Drop the files here...</Typography> :
            <Typography>Upload here...</Typography>
        }
        </React.Fragment>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment DisplayImage_tour on Tour {
      id,
      display_image {
        id,
        secure_url
      }
    }
  `
})