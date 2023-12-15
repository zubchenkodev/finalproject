import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { styled } from 'styled-components';

const StyledAppLayout = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 5rem 1fr;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
`

const StyledMain = styled.main`
    height: calc(100vh - 5rem);
`

const AppLayout = () => {

  return (
    <StyledAppLayout>
    <Header/>
    <Sidebar/>
    <StyledMain>
        <Outlet/>
    </StyledMain>
    </StyledAppLayout>
  )
}

export default AppLayout