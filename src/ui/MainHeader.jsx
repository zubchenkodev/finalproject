import React from 'react';
import { styled } from 'styled-components';

const StyledMainHeader = styled.header`
    padding: 1rem;
    border-bottom: solid 2px #b1b3c3;
`

const MainHeader = ({children}) => {
  return (
    <StyledMainHeader>{children}</StyledMainHeader>
  )
}

export default MainHeader;