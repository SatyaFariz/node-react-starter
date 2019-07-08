import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {

  },

  list: {
    display: 'grid',
    gridGap: '10px',
    margin: 0,
    listStyle: 'none'
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <Typography variant="h4" gutterBottom className={c.title}>
        Itinerary
      </Typography>
      <div>
        <ul className={c.list}>
          <li>
            <Typography>
              Sed volutpat nisl tortor, eu tincidunt arcu interdum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras blandit, elit a fermentum eleifend, massa tellus lobortis tortor, ut aliquam libero sem non purus. Morbi condimentum sit amet lacus sed euismod. Curabitur gravida semper lorem in auctor. Fusce aliquet cursus tristique. Cras in mi neque. Integer in odio tempus, iaculis turpis eget, maximus velit. Aliquam finibus turpis sit amet dui elementum, eu ornare diam sollicitudin. Aenean quis purus velit. Ut eu erat euismod, tristique justo eget, sodales nisl. Quisque ac auctor leo. Fusce tristique, ex eu vehicula commodo, felis dolor varius nunc, finibus varius magna eros sed velit.
            </Typography>
          </li>
          <li>
            <Typography>
              Duis volutpat mattis orci sed blandit. Vivamus feugiat ornare pulvinar. Nullam ut tempus dolor. Sed lobortis scelerisque ex, eu bibendum est egestas eu. Nulla ac sagittis sapien. Maecenas feugiat sapien vel neque porttitor laoreet. Quisque quis tincidunt mi. Aenean aliquet, lectus nec tristique tincidunt, neque lectus bibendum enim, suscipit luctus nulla erat ac erat. In vel blandit justo. Vivamus id neque a lectus hendrerit dapibus. Aliquam enim tellus, malesuada quis posuere venenatis, dictum eu nibh. Maecenas congue ex ac felis bibendum, nec suscipit libero volutpat. Sed nec tellus libero. Nunc tincidunt sapien nisi, vitae auctor odio accumsan quis.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Component