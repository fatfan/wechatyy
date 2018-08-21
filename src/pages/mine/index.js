import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import PersonIcon from '@material-ui/icons/Person'
import StarsIcon from '@material-ui/icons/StarBorder'
import InvestIcon from '@material-ui/icons/Payment'
import CollectionIcon from '@material-ui/icons/AccountBalanceWallet'
import FundIcon from '@material-ui/icons/MonetizationOnOutlined'
import CouponIcon from '@material-ui/icons/CardGiftcard'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import SnackbarSingleton from '../../components/snackbar-singleton'
import UserInfo from './userinfo'
import Vip from '../vip'

import request from '../../util/request'
import { Page, Main, Tabnav } from '../../components/page'
import { Avatar } from '@material-ui/core'

const styles = theme => ({
  root: {
    // width: 500
  },
  flex: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  userInfo: {
    marginTop: '2rem'
  },
  avatar: {
    margin: 10
  },
  listContainer: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    backgroundColor: theme.palette.background.paper
  },
  list: {
    width: 250
  }
})

const mailFolderListItems = (
  <React.Fragment>
    <ListItem button divider component="a" href="#/mine/userinfo">
      <ListItemIcon>
        <FundIcon />
      </ListItemIcon>
      <ListItemText primary="资金明细" />
    </ListItem>
    <ListItem button divider component="a" href="#/mine/vip">
      <ListItemIcon>
        <StarsIcon />
      </ListItemIcon>
      <ListItemText primary="会员中心" />
    </ListItem>
    <ListItem button divider component="a" href="#/mine/userinfo">
      <ListItemIcon>
        <CouponIcon />
      </ListItemIcon>
      <ListItemText primary="我的优惠" />
    </ListItem>
    <ListItem button divider component="a" href="#/mine/userinfo">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="个人资料" />
    </ListItem>
  </React.Fragment>
)

const otherMailFolderListItems = (
  <React.Fragment>
    <ListItem button divider component="a" href="/wechatyy/dist/data/logout.cgi">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="退出" />
    </ListItem>
  </React.Fragment>
)

class Mine extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object,
    history: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      userName: '',
      phone: '',
      vipStatus: 0,
      vipLevel: 0,
      value: 3,
      left: false
    }
  }

  componentDidMount () {
    this.initialize()
  }

  /**
   * get initialize data
   */
  initialize = async () => {
    const result = await request('mine/index')
    if (result.code !== 0) {
      SnackbarSingleton.show(result.message)
      return
    }
    //   let { userName, userId, phoneStatus, realStatus, cardStatus, openAccountStatus, phone, hasAnswered, vipStatus, vipLevel } = result.user
    let { userId, userName, phone, vipStatus, vipLevel } = result.user
    this.setState({
      userId,
      userName,
      phone,
      vipStatus,
      vipLevel
    })
  }

  toggleDrawer = (side, open) => () => {
    // console.log(side, open)
    this.setState({
      [side]: open
    })
  }

  handleClickUserInfo = () => {
    // console.log('aaaa')
    this.toggleDrawer('left', true)
  }

  render () {
    if (this.state.redirect) {
      const backUrl = this.props.match.url
      return <Redirect push to={'/login/' + encodeURIComponent(backUrl)} />
    }
    const { classes, history } = this.props
    const { userId, userName, phone, vipLevel } = this.state

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    )

    const downloadApp = 'http://download.cnaidai.com/phapp-download.html'

    return (
      <Page>
        <Main>
          <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                我的
              </Typography>
              {
                this.state.userName
                  ? (
                    this.state.userName
                  )
                  : (
                    <Button color="inherit" href="#/login">登录</Button>
                  )
              }

            </Toolbar>
          </AppBar>
          {
            this.state.userName
              ? (
                <div className={classes.userInfo}>
                  <List>
                    <ListItem>
                      <Avatar
                        alt=""
                        src={`https://adtp.cnaidai.com/data/avatar/${userId}_avatar_middle.jpg`}
                        className={classes.avatar}
                      />
                      <ListItemText primary={`你好，${userName}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText inset primary={`手机号：${phone}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText inset primary={`会员等级：${vipLevel}`} />
                    </ListItem>
                  </List>

                  {/* <h1>你好,{userName}</h1>
                  <p>手机号：{phone}</p>
                  <p>会员等级：{vipLevel}</p> */}
                </div>
              )
              : (
                <div className={classes.userInfo}>
                  <AppBar position="static">
                    <Toolbar>
                      <Typography variant="title" color="inherit" className={classes.flex}>
                      你好，您还未登录，请先登录
                      </Typography>
                      <Button color="inherit" href="#/login">登录</Button>
                    </Toolbar>
                  </AppBar>
                </div>
              )
          }

          <div className={classes.listContainer}>
            <List component="nav">
              <ListItem button divider component="a" href={downloadApp}>
                <ListItemIcon>
                  <InvestIcon />
                </ListItemIcon>
                <ListItemText primary="出借记录" />
              </ListItem>
              <ListItem button divider component="a" href={downloadApp}>
                <ListItemIcon>
                  <CollectionIcon />
                </ListItemIcon>
                <ListItemText primary="我的回款" />
              </ListItem>
              <ListItem button divider component="a" href={downloadApp}>
                <ListItemIcon>
                  <FundIcon />
                </ListItemIcon>
                <ListItemText primary="资金明细" />
              </ListItem>
              <ListItem button divider component="a" href="#/mine/vip">
                <ListItemIcon>
                  <StarsIcon />
                </ListItemIcon>
                <ListItemText primary="会员中心" />
              </ListItem>
              <ListItem button divider component="a" href={downloadApp}>
                <ListItemIcon>
                  <CouponIcon />
                </ListItemIcon>
                <ListItemText primary="我的优惠" />
              </ListItem>
              <ListItem button divider onClick={this.toggleDrawer('left', true)}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="个人资料" />
              </ListItem>
            </List>
          </div>
        </Main>

        <Tabnav history={history} />
        <SwipeableDrawer
          anchor="left"
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </Page>
    )
  }
}

const MineRouter = ({ match }) => {
  return (
    <React.Fragment>
      <Route exact path={`${match.url}`} component={withStyles(styles)(Mine)} />
      <Route path={`${match.url}/userinfo`} component={UserInfo} />
      <Route path={`${match.url}/vip`} component={Vip} />
    </React.Fragment>
  )
}

MineRouter.propTypes = {
  match: PropTypes.object.isRequired
}

export default MineRouter
