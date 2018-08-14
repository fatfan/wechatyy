import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'

import './index.less'

export const Page = ({ className, children, ...props }) => {
  return (
    <Flex column className={className} styleName="page" {...props}>
      {children}
    </Flex>
  )
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}
export { default as Header } from './header'
export { default as Main } from './main'
export { default as Tabnav } from './tabnav'
