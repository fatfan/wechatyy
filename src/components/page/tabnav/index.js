import React, { Component } from 'react'
import { matchPath } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import ReorderIcon from '@material-ui/icons/Reorder'
import ExploreIcon from '@material-ui/icons/Explore'
import AccountIcon from '@material-ui/icons/AccountCircle'

const MENU = ['/', '/invest', '/explore', '/mine']

class Tabnav extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({
      value: value
    })
    if (value >= 0 && value < MENU.length) {
      setTimeout(() => {
        this.props.history.push(MENU[value])
      }, 0)
    }
  }
  render () {
    const cur = MENU.findIndex((value, index, array) => {
      return matchPath(window.location.hash.substr(1), {path: value, exact: true})
    })

    return (
      <BottomNavigation
        value={cur}
        onChange={this.handleChange}
        showLabels
        // className={classes.root}
      >
        <BottomNavigationAction label="首页" icon={<HomeIcon />} />
        <BottomNavigationAction label="出借" icon={<ReorderIcon />} />
        <BottomNavigationAction label="发现" icon={<ExploreIcon />} />
        <BottomNavigationAction label="我的" icon={<AccountIcon />} />
      </BottomNavigation>
    )
  }
}

export default Tabnav
