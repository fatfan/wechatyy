import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import Grid from '@material-ui/core/Grid';
import { red, lightBlue } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// import './index.less'

const theme = createMuiTheme({
  palette: {
    primary: { main: red['A200'] }, // Purple and green play nicely together.
    secondary: { main: lightBlue[500] } // This is just green.A700 as hex.
  }
})

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2
  }
})

/**
 * @typedef RegisterProps
 * @property {object} [classes]
 */

/**
 * @type Component<RegisterProps>
 */
class Register extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount () {

  }

    /**
     * register button click handdler
     */
    handleClickRegister = (e) => {
      console.log(this.state)
    }

    /**
     * input field change handdler
     */
    handleChange = name => event => {
      console.log(name, event.target.value)
      this.setState({
        [name]: event.target.value
      })
    }

    render () {
      const { classes } = this.props

      return (
        <React.Fragment>
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                            注册
                </Typography>
              </Toolbar>
            </AppBar>
            <MuiThemeProvider theme={theme}>
              <div className={classes.container}>
                <TextField
                  id="username11"
                  label="用户名"
                  className={classes.textField}
                  value={this.state.username}
                  onChange={this.handleChange('username')}
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  onChange={this.handleChange('password')}
                  margin="normal"
                />
                <Button variant="contained" color='primary' className={classes.button} onClick={this.handleClickRegister}>注册</Button>
                <Button variant="outlined" href='#/login' className={classes.button}>登录</Button>
              </div>
            </MuiThemeProvider>
          </div>
        </React.Fragment>
      )
    }
}

// Register.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default withStyles(styles)(Register)
