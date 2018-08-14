import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './index.less'

export default class Main extends PureComponent {
  static propTypes = {
    noScroll: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.any
  }

  startY = 0

  handleTouchStart = (e) => {
    if (this.props.noScroll) {
      return
    }

    if (e.currentTarget.scrollTop === 0) {
      this.startY = e.touches[0].pageY
    } else {
      this.startY = Infinity
    }
  }

  handleTouchMove = (e) => {
    if (this.props.noScroll) {
      return
    }

    const y = e.touches[0].pageY
    if (y > this.startY) {
      e.preventDefault()
    }
  }

  render () {
    const { noScroll = false, style = {}, children, ...props } = this.props

    if (noScroll) {
      style.overflowY = 'hidden'
    }

    return (
      <main styleName="main" style={style}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        { ...props }>
        {children}
      </main>
    )
  }
}
