import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './index.less'

const Tab = ({to, children, match}) => {
  return (
    <Link styleName={match.url === to ? 'tab cur' : 'tab'} to={to} replace>{children}</Link>
  )
}
Tab.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
  match: PropTypes.object
}

const Tabs = ({children, match}) => {
  if (children) {
    return (
      <div styleName="tabs">
        { children }
      </div>
    )
  } else {
    return (
      <div styleName="tabs">
        <Tab to="/" match={match}>Home</Tab>
        <Tab to="/invest" match={match}>Invest</Tab>
        <Tab to="/mine" match={match}>Mine</Tab>
      </div>
    )
  }
}

export { Tabs, Tab }
