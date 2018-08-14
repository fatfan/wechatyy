import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SnackbarSingleton from '../../components/snackbar-singleton'

import request from '../../util/request'

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
 * @typedef {object} LoginProps
 * @property {object} [classes]
 * @property {object} [history]
 */

/**
 * @type {Component<LoginProps>}
 */
class Login extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    classes: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      backUrl: '',
      username: '',
      password: '',
      open: false
    }
  }

  componentDidMount () {
    console.log(this.props.history)
  }

    /**
     * input field change handdler
     */
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      })
    }

    /**
     * login button click handdler
     */
    handleClickLogin = async (e) => {
      let backUrl = this.props.match.params.router ? decodeURIComponent(this.props.match.params.router) : '/mine'
      const data = {
        username: this.state.username,
        password: this.state.password
      }
      const result = await request('login', data)

      if (result.code !== 0) {
        SnackbarSingleton.show(result.message || '网络异常，请刷新重试')
      }
      this.props.history.replace(backUrl)
    }

    render () {
      const { classes } = this.props

      if (this.state.redirect && this.state.backUrl) {
        return <Redirect push to={this.state.backUrl} />
      }
      return (
        <React.Fragment>
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="title" color="inherit">
                                登录
                  </Typography>
                </Toolbar>
              </AppBar>
              <div className={classes.container}>
                <TextField
                  id="username"
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
                <Button variant="contained" color='primary' className={classes.button} onClick={ this.handleClickLogin }>登录</Button>
                <Button variant="outlined" href="#/register" className={classes.button}>注册</Button>
              </div>
            </Grid>
          </Grid>
        </React.Fragment>
      )
    }
}

export default withStyles(styles)(Login)
