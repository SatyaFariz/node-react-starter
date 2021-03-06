import React from 'react'
import PropTypes from 'prop-types'
import { QueryRenderer } from 'react-relay'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import queryString from 'query-string'

import theme from './theme'
import router from './router'
import AppRenderer from './AppRenderer'
import AppContext from './AppContext'

type Props = {
  history: any,
  createRelay: () => any
}

class App extends React.Component<Props> {
  static childContextTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    reset: PropTypes.func.isRequired,
    environment: PropTypes.instanceOf(Object).isRequired
  }

  state = {
    query: null,
    variables: null,
    render: () => <AppRenderer ref={this.rendererRef} />,
    relay: this.props.createRelay()
  }

  childContext = {
    history: this.props.history,
    reset: () => {
      this.setState({ relay: this.props.createRelay() })
      this.props.history.replace(this.props.history.location)
      return new Promise(resolve => {
        this.onRenderComplete = resolve
      })
    },
    environment: this.state.relay
  }

  rendererRef = React.createRef()

  getChildContext() {
    return this.childContext
  }

  componentDidMount() {
    const { history } = this.props
    this.unlisten = history.listen(this.renderLocation)
    this.renderLocation(history.location)
  }

  componentWillUnmount() {
    this.unlisten()
  }

  renderLocation = location => {
    const { history } = this.props
    router
      .resolve({
        query: queryString.parse(location.search),
        pathname: location.pathname,
        fetchQuery: this.fetchQuery
      })
      .then(route => {
        if (route.redirect) {
          history.push(route.redirect)
        } else {
          this.renderRoute(route)
        }
      })
  }

  fetchQuery = (query, variables) => {
    return new Promise((resolve, reject) => {
      this.setState({
        query,
        variables,
        render: ({ error, props, retry }) => {
          if (error) {
            const err = new Error(error.message)
            err.code = error.code
            reject(err)
          } else if (props !== null) {
            resolve(props)
          }
          return <AppRenderer ref={this.rendererRef}/>
        }
      })
    })
  }

  onRenderComplete = () => {
    // end progress bar here
  }

  renderRoute = route => {
    this.rendererRef.current.renderRoute(route, this.onRenderComplete)
  }

  render() {
    const { relay, query, variables, render } = this.state

    return (
      <AppContext.Provider value={this.childContext}>
        <React.Fragment>
          <CssBaseline/>
          <MuiThemeProvider theme={theme}>
            <QueryRenderer
              environment={relay}
              query={query}
              variables={variables || {}}
              render={render}
            />
          </MuiThemeProvider>
        </React.Fragment>
      </AppContext.Provider>
    )
  }
}

export default App