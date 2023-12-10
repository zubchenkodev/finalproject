import React from 'react';
import { styled } from 'styled-components';

const StyledMainWrapper = styled.div`
    background-color: #f4f7fa;
    height: calc(100vh - 5rem);
    display: grid;
    grid-template-rows: auto 1fr;
`

const MainWrapper = ({children}) => {
  return (
    <StyledMainWrapper>{children}</StyledMainWrapper>
  )
}

export default MainWrapper