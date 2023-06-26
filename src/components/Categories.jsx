import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../fakeJsonData';

const Container = styled.div`
  padding: 1.5em 1em;
`;

const CategoryTitle = styled.div`
  font-size: 1.35em;
  font-weight: 500;
`;

const CategoryBody = styled.div`
  padding: 1.5em 0.5em;
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
`;

const CategoryImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryImage = styled.img`
  width: 150px;
  aspect-ratio: 2.5/2;
  object-fit: contain;
`;

const CategoryName = styled.div`
  margin-top: 1em;
  text-align: center;
  font-size: 1.1em;
  font-weight: 500;
`;

const Categories = () => {
  return (
    <Container>
      <CategoryTitle>All categories</CategoryTitle>
      <CategoryBody>
        {categories && categories.length > 0 && categories.map(({ id, name }) => {
          return (<CategoryCard key={id}>
            <CategoryImageContainer>
              <CategoryImage src={require(`../assets/images/cat-${id}.png`)} />
            </CategoryImageContainer>
            <CategoryName>
              {name}
            </CategoryName>
          </CategoryCard>)
        })}
      </CategoryBody>
    </Container>
  )
}

export default Categories