import React from 'react'
import { colors } from '../../constants'

const HamburgerIcon = ({ width = '35px', fill = colors.primaryBlueLight }) => {
  return (
    <svg space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" width={width} height={width}><g className="ldl-scale"><path fill={fill} d="M85.7 31.9H14.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3h71.5c2.4 0 4.3 1.9 4.3 4.3-.1 2.4-2 4.3-4.4 4.3z"></path></g>
      <g><path fill={fill} d="M85.7 46.8H14.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3h71.5c2.4 0 4.3 1.9 4.3 4.3-.1 2.4-2 4.3-4.4 4.3z"></path></g>
      <g><path fill={fill} d="M85.7 61.7H14.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3h71.5c2.4 0 4.3 1.9 4.3 4.3-.1 2.4-2 4.3-4.4 4.3z"></path></g>
      <g><path fill={fill} d="M85.7 76.7H14.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3h71.5c2.4 0 4.3 1.9 4.3 4.3-.1 2.4-2 4.3-4.4 4.3z"></path></g>
    </svg>
  )
}

export default HamburgerIcon