import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../fakeJsonData';
import { useNavigate } from 'react-router-dom';
import { Container, CustomImage, ImageContainer, NameDiv, PageTitle } from '../common/StyledComponents';

const CategoryBody = styled.div`
  padding: 0em 0.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2.5em;
  grid-column-gap: 1em;
  place-items: center;  
`;

const CategoryCard = styled.div`
  padding: 1.5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20%;
  width: 10em;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 26%, rgba(233,241,212,1) 100%);

  @media screen and (min-width: 501px){
    width: 18.5em;
    padding: 2em 1.5em;
  }
`;

const Categories = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <PageTitle>All categories</PageTitle>
      <CategoryBody>
        {categories && categories.length > 0 && categories.map(({ id, name }) => {
          return (<CategoryCard key={id} onClick={() => navigate(`/categories/${id}`)}>
            <ImageContainer>
              <CustomImage src={require(`../assets/images/cat-${id}.png`)} />
            </ImageContainer>
            <NameDiv>
              {name}
            </NameDiv>
          </CategoryCard>)
        })}
      </CategoryBody>
    </Container>
  )
}

export default Categories