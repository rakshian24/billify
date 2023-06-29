import { styled } from "styled-components";
import { BUTTON_TYPE, colors } from "../constants";

const {ADD, REMOVE} = BUTTON_TYPE

const { lightBlueGrey,
  primaryBlue,
  white,
  primaryGreen,
  lightOrange,
  darkOrange } = colors;

export const Container = styled.div`
  padding: 1.5em 1em;

  @media screen and (min-width: 501px){
    padding: 1.5em 1.5em;
  }
`;

export const PageTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;

  @media screen and (min-width: 501px){
  font-size: 24px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomImage = styled.img`
  width: 150px;
  aspect-ratio: 2.5/2;
  object-fit: contain;

  @media screen and (min-width: 501px){
    width: 230px;
    aspect-ratio: 2.25/2;
  }
`;

export const NameDiv = styled.div`
  margin-top: 1em;
  text-align: center;
  font-size: 17px;
  font-weight: 600;

  @media screen and (min-width: 501px){
    font-size: 22px;
  }
`;

export const Button = styled.button`
  outline: non;
  border: 1px solid ${lightBlueGrey};
  background: ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return primaryBlue;
      case ADD:
        return white;
      case REMOVE:
        return lightOrange
      default:
        return primaryBlue;
    }
  }};
  color: ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return white;
      case ADD:
        return primaryGreen;
      case REMOVE:
        return white
      default:
        return white
    }
  }};
  font-weight: 700;
  border-radius: 7px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 0.5em 0.75em;
  font-size: 1em;

  &:hover{
    background: ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return primaryBlue;
      case ADD:
        return white;
      case REMOVE:
        return darkOrange;
      default:
        return primaryBlue;
    }
  }};
  }

  &:disabled{
    background-color: #eee;
    opacity: 0.6;
    color: ${primaryGreen}
  }
`;

export const ItemInput = styled.input`
  outline: none;
  border: 1px solid ${colors.primaryGreen};
  border: ${({ inputpriority }) => {
    const border = '1px solid';
    switch (inputpriority) {
      case 'add':
        return `${border} ${primaryGreen}`;
      case 'remove':
        return `${border} ${lightOrange}`;
      default:
        return `${border} ${primaryGreen}`;
    }
  }};
  font-size: 1em;
  width: 100%;
  margin-right: 1em;
  padding: 8px;
  border-radius: 4px;

  &:disabled{
    opacity: 0.6;
  }
`;