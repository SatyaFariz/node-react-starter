import { createMuiTheme } from '@material-ui/core/styles'
//import { indigo } from '@material-ui/core/colors';

// https://material-ui-next.com/customization/themes/
// https://material-ui-next.com/style/color/
export default createMuiTheme({
/*  palette: {
    primary: indigo,
  },*/
  typography: {
    useNextVariants: true,
  },
  
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  },

  zIndex: {
    drawer: 99
  },

  boxShadow: {
    appBar: '0px 4px 8px -3px rgba(17, 17, 17, .06)'
  },

  width: {
    sidebar: 240
  },

  padding: {
    appContent: 24
  },

  color: {
    link: '#365899'
  }
})