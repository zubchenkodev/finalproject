import React, { Fragment } from 'react';
import { styled } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const StyledSubheader = styled.header`
  grid-area: 1 / 1 / 2 / 3; 
  padding: 1rem;
  background-color: var(--category-color-01);
  color: #FFFFFF;
  display: flex;
  gap: 1rem;
  text-shadow: 2px 2px 2px var(--main-color);
  height: 4rem;
`

const Subheader = ({children}) => {
  return (
    <Fragment>
      <GlobalStyles/>
      <StyledSubheader>
      {children}
      </StyledSubheader>
    </Fragment>
  )
}

export default Subheader