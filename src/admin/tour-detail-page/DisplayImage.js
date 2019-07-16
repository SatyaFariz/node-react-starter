import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useDropzone } from 'react-dropzone'
import { graphql, createFragmentContainer } from 'react-relay'
import ImageUpload from '../../mutations/admin/TourDisplayImageUpload'

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
  },

  image: {
    width: '100%',
    height: '100%'
  }
}))

const Component = props => {
  const c = useStyles()

  const { tour, relay: { environment }} = props

  const [isLoading, setLoading] = useState(false)

  const onDropAccepted = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    const variables = { _id: tour.id }

    ImageUpload(environment, variables, file, () => {
      setLoading(false)
    })
    
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
          {tour.display_image ?
            <img 
              className={c.image}
              src={tour.display_image.secure_url} 
              alt={tour.display_image.id}
            />
            :
            <React.Fragment>
            {
              isDragActive ?
                <Typography>Drop the files here...</Typography> :
                <Typography>Upload here...</Typography>
            }
            </React.Fragment>
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