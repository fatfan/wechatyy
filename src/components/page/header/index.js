import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Flex from 'src/components/flex'

import './index.less'

function handleTouchMove (e) {
  e.preventDefault()
}

/**
 * @typedef {object} HeaderProps
 * @property {string} title
 * @property {boolean} [noBack]
 * @property {string} [backUrl]
 * @property {()=>void} [onBack]
 * @property {any} match
 * @property {any} location
 * @property {any} history
 * @property {any} staticContext
 */

/**
 * @extends {PureComponent<HeaderProps>}
 */
class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    noBack: PropTypes.bool,
    backUrl: PropTypes.string,
    onBack: PropTypes.func,
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    staticContext: PropTypes.any,
    children: PropTypes.element
  }
  back = () => {
    const { backUrl, history, onBack } = this.props

    if (typeof onBack === 'function') {
      onBack()
    } else if (backUrl !== undefined) {
      history.replace(backUrl)
    } else if (history.length > 1) {
      history.goBack()
    } else {
      history.replace('/')
    }
  }

  render () {
    const { noBack, title, children } = this.props

    return (
      <header styleName="header" onTouchMove={handleTouchMove}>
        {!noBack && <div styleName="back" onClick={this.back} />}
        <h1 styleName="title">{title}</h1>
        <Flex styleName="item-container">
          {children}
        </Flex>
      </header>
    )
  }
}

export default withRouter(Header)
