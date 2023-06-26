import { styled } from "styled-components";

export const Container = styled.div`
  padding: 1.5em 1em;

  @media screen and (min-width: 501px){
    padding: 1.5em 1.5em;
  }
`;

export const PageTitle = styled.div`
  font-size: 1.35em;
  font-weight: 500;
  margin-bottom: 1em;

  @media screen and (min-width: 501px){
  font-size: 1.75em;
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
  font-size: 1.1em;
  font-weight: 500;

  @media screen and (min-width: 501px){
    font-size: 1.55em;
  }
`;