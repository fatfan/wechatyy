import React from 'react'
import PropTypes from 'prop-types'

import './index.less'
// import styles from './index.css'

const Button = (props) => {
  return (
    <div styleName={props.classes ? `u-btn ${props.classes}` : 'u-btn'} {...props}>
      { props.children }
    </div>
  )
}

Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.any
}

export default Button
