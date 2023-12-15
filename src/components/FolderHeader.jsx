import React, { Fragment } from 'react';
import { styled } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';


const StyledFolderHeader = styled.header`
    grid-area: 1 / 1 / 2 / 3; 
    background-color: var(--category-color-01);
    padding: 1rem;
    color: white;
    text-shadow: 2px 2px 2px var(--main-color);
    display: flex;
    gap: 1rem;
      
`
const FolderHeader = ({folder}) => {

  return (
    <Fragment>
      <GlobalStyles/>
      <StyledFolderHeader>
      <h2>{folder && folder.name}</h2>
      </StyledFolderHeader>
    </Fragment>
    
  )
}

export default FolderHeader