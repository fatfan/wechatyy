// console.log("aaa");
import React, { Fragment } from 'react'
import reactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, lightBlue } from '@material-ui/core/colors'

// import Button from './components/button'
import Home from './pages/home'
import Invest from './pages/invest'
import Explore from './pages/explore'
import Mine from './pages/mine'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/notfound'

// import './util/flexible.js'
// import 'typeface-roboto'
// import 'normalize.css'
import './assets/css/app.less'
import CssBaseline from '@material-ui/core/CssBaseline'
import SnackbarSingleton from './components/snackbar-singleton'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const theme = createMuiTheme({
  palette: {
    primary: { main: red['A200'] },
    secondary: { main: lightBlue[500] }
  }
})

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/invest" component={Invest} />
            <Route path="/explore" component={Explore} />
            <Route path="/mine" component={Mine} />
            <Route exact path="/login" component={Login} />
            <Route path="/login/:router" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        {SnackbarSingleton.element}
      </MuiThemeProvider>
    </Fragment>
  )
}

reactDOM.render(
  <App />,
  document.getElementById('app')
)
