import React from 'react';
import { styled } from 'styled-components';
import { colors } from "../../constants"

const Badge = styled.div`
  background-color: ${colors.primaryBlue};
  color: #ffffff;
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  transform: translate( 23px,-45px);

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px){
    font-size: 14px;
    padding: 12px;
    transform: translate( 25px,-50px);
  }

  @media screen and (min-width: 1024px){
    font-size: 16px;
    padding: 15px;
    transform: translate( 27px,-55px);
  }
`;

const CartIcon = ({ width = '35px', stroke = "#323232", strokeWidth = '4', quantity }) => {
  return (
    <>
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
      {quantity > 0 && <Badge>
        {quantity > 9 ? '9+' : quantity}
      </Badge>}
    </>
  )
}

export default CartIcon