import React from 'react'
import PropTypes from 'prop-types'

import './index.less'

function parseFlex (input) {
  if (input === true) {
    return 1
  }

  if (typeof input === 'string') {
    input = parseFloat(input)

    if (isNaN(input)) {
      return 0
    }

    return input
  }

  if (typeof input !== 'number') {
    return 0
  }

  return input
}

/**
 * @typedef {object} FlexProps
 * @property {string} [className]
 * @property {string} [styleName]
 * @property {boolean} [inline]
 * @property {boolean} [column]
 * @property {boolean} [reverse]
 * @property {boolean | 'reverse'} [wrap]
 * @property {'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'} [alignItems]
 * @property {'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'baseline' | 'space-between' | 'space-around'} [justifyContent]
 * @property {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'} [alignContent]
 * @property {boolean | number} [grow]
 * @property {boolean | number} [shrink]
 * @property {number} [basis]
 * @property {React.CSSProperties} [style]
 * @property {() => void} [onClick]
 */

/**
 * @type {React.StatelessComponent<FlexProps>}
 */
const Flex = ({ className, inline, column, reverse, wrap, alignItems, justifyContent, alignContent, grow, shrink, basis, style, children, ...props }) => {
  let flexWrap
  if (wrap === true) {
    flexWrap = 'wrap'
  } else if (wrap === 'reverse') {
    flexWrap = 'wrap-reverse'
  } else if (typeof wrap !== 'string') {
    flexWrap = ''
  }

  grow = parseFlex(grow)
  shrink = parseFlex(shrink)

  // @ts-ignore
  style = {
    ...style,
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: (column ? 'column' : 'row') + (reverse ? '-reverse' : ''),
    flexWrap,
    alignItems,
    justifyContent,
    alignContent,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis
  }

  return (
    <div className={className} styleName="flex" style={style} {...props}>
      {children}
    </div>
  )
}

Flex.propTypes = {
  className: PropTypes.string,
  styleName: PropTypes.string,
  inline: PropTypes.bool,
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  wrap: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  grow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  shrink: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  basis: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.any
}

export default Flex
