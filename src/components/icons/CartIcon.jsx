import React from 'react'

const CartIcon = ({ width = '35px', stroke = "#323232", strokeWidth = '4' }) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={width} height={width}>
      <g className="ldl-scale">
        <path d="M80.24 61.203H30.392l-6.623-38.61h65.882z" strokeMiterlimit="10"
          strokeLinejoin="round" strokeLinecap="round" strokeWidth={strokeWidth} stroke={stroke}
          fill="none"  ></path>
        <path d="M30.392 61.203L18.889 73.752" strokeMiterlimit="10" strokeLinejoin="round"
          strokeLinecap="round" strokeWidth={strokeWidth} stroke={stroke} fill="none"
        ></path>
        <path d="M18.889 73.752H90" strokeMiterlimit="10" strokeLinejoin="round"
          strokeLinecap="round" strokeWidth={strokeWidth} stroke={stroke} fill="none"
        ></path>
        <path d="M23.769 22.593l-5.839-9.027" strokeMiterlimit="10" strokeLinejoin="round"
          strokeLinecap="round" strokeWidth={strokeWidth} stroke={stroke} fill="none"
        ></path>
        <path d="M17.93 13.566H10" strokeMiterlimit="10" strokeLinejoin="round"
          strokeLinecap="round" strokeWidth={strokeWidth} stroke={stroke} fill="none"
        ></path>
        <circle strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round"
          strokeWidth={strokeWidth} stroke={stroke} fill="none" r="6.341" cy="80.093" cx="30.981"
        ></circle>
        <circle strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round"
          strokeWidth={strokeWidth} stroke={stroke} fill="none" r="6.341" cy="80.093" cx="76.995"
        ></circle>
      </g>
    </svg>
  )
}

export default CartIcon