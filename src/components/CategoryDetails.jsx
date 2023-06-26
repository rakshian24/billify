import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, PageTitle } from '../common/StyledComponents';
import { categories } from '../fakeJsonData';
import PageNotFound from './PageNotFound';

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const [{items: groceryItems = [], name: categoryName} = {}] = categories.filter(category => category.id === parseInt(categoryId));
  
  if(!categoryName){
    return <PageNotFound />
  }

  return (
    <Container>
      <PageTitle>{categoryName}</PageTitle>
      <div>
        {groceryItems && groceryItems.length > 0 && groceryItems.map(({id, name}) => {
          return (
            <div key={id}>{name}</div>
          )
        })}
      </div>
    </Container>
  )
}

export default CategoryDetails