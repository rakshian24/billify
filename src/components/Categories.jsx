import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, Container, CustomDiv, CustomImage, ImageContainer, NameDiv, PageTitle } from '../common/StyledComponents';
import { FormattedMessage } from 'react-intl';
import AddCategoryModal from './AddCategoryModal';
import { useSelector } from 'react-redux';
import { getCategories } from '../reducers';

const CategoryBody = styled.div`
  padding: 0em 0.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2.5em;
  grid-column-gap: 1em;
  place-items: center;  
`;

const CategoryCard = styled.div`
  cursor: pointer;
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
  const [isAddCategoryBtnClicked, setIsAddCategoryBtnClicked] = useState(false);
  const navigate = useNavigate();
  const categoryData = useSelector(getCategories);
  console.log('categoryData = ', categoryData)

  const safeRequireItemImage = (categoryId) => {
    try {
      return require(`../assets/images/cat-${categoryId}.png`);
    } catch (err) {
      return require(`../assets/images/placeholder-image.png`);
    }
  }

  return (
    <>
      <AddCategoryModal open={isAddCategoryBtnClicked} handleClose={() => setIsAddCategoryBtnClicked(false)} />
      <Container>
        <PageTitle>
          <CustomDiv display='flex' alignitems='center' justifycontent='space-between' marginbottom='2'>
            <FormattedMessage id='all_categories' />
            <Button onClick={() => setIsAddCategoryBtnClicked(true)}>
              <FormattedMessage id='add_category' />
            </Button>
          </CustomDiv>
        </PageTitle>
        <CategoryBody>
          {categoryData && categoryData.length > 0 && categoryData.map(({ id, name }) => {
            return (<CategoryCard key={id} onClick={() => navigate(`/categories/${id}`)}>
              <ImageContainer>
                <CustomImage src={safeRequireItemImage(id)} />
              </ImageContainer>
              <NameDiv>
                <FormattedMessage id={name} />
              </NameDiv>
            </CategoryCard>)
          })}
        </CategoryBody>
      </Container>
    </>
  )
}

export default Categories