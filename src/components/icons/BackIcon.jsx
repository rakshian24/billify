import React from 'react'
import { colors } from '../../constants'

const { primaryBlue } = colors;

const BackIcon = ({ width = '30px', fill = primaryBlue }) => {
  return (
    <svg space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg"
      id="Layer_1" version="1.1" width={width} height={width}
      xlink="http://www.w3.org/1999/xlink">
      <g className="ldl-scale">
        <path
          d="M47.657 9.879L7.5 50.035l40.157 40.157 8.031-8.031-26.446-26.447H100.5V44.356H29.242L55.688 17.91z"
          fill={fill} id="XMLID_1285_"></path>
      </g>
    </svg>
  )
}

export default BackIcon