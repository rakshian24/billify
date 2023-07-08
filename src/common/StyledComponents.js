import { styled } from "styled-components";
import { BUTTON_TYPE, colors } from "../constants";

const { ADD, REMOVE } = BUTTON_TYPE

const { lightBlueGrey,
  primaryBlue,
  white,
  primaryGreen,
  lightOrange,
  darkOrange,
  lightPrimaryBlue } = colors;

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

  @media screen and (min-width: 501px) and (max-width: 1024px){
    font-size: 20px;
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
  word-wrap: break-word;

  @media screen and (min-width: 501px){
    font-size: 22px;
  }
`;

export const Button = styled.button`
  outline: none;
  border: 1px solid ${lightBlueGrey};
  background: ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return lightPrimaryBlue;
      case ADD:
        return white;
      case REMOVE:
        return lightOrange;
      default:
        return lightPrimaryBlue;
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
  padding: 3px 11px;
  font-size: 20px;

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

  @media screen and (min-width: 501px) and (max-width: 1024px){
    font-size: 20px;
  }

  @media screen and (min-width: 1025px){
    padding: 5px 10px;
  }
`;

export const Input = styled.input`
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
  font-size: 15px;
  width: 100%;
  margin-right: 1em;
  padding: 8px;
  border-radius: 4px;

  &:disabled{
    opacity: 0.6;
  }

  @media screen and (min-width: 501px){
    width: ${({ fullwidth }) => fullwidth ? '100%' : '70px'};
    margin-right: 2em;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
  margin-right: 18px;
  display: grid;
  place-items: center;


  &:hover{
    background-color: ${lightBlueGrey};
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

export const CustomDiv = styled.div`
  margin-top: ${({ margintop }) => (margintop && `${margintop}rem`) || '0'};
  margin-bottom: ${({ marginbottom }) => (marginbottom && `${marginbottom}rem`) || '0'};
  margin-left: ${({ marginleft }) => (marginleft && `${marginleft}rem`) || '0'};
  margin-right: ${({ marginright }) => (marginright && `${marginright}rem`) || '0'};
  display: ${({ display }) => (display && display) || 'block'};
  align-items: ${({ alignitems }) => (alignitems && alignitems) || 'flex-start'};
  justify-content: ${({ justifycontent }) => (justifycontent && justifycontent) || 'flex-start'};
  flex-direction: ${({ flexdirection }) => (flexdirection && flexdirection) || 'row'};
`;