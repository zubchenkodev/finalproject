import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import FolderHeader from '../features/folders/FolderHeader';
import FolderSidebar from '../features/folders/FolderSidebar';
import { styled } from 'styled-components';


const StyledFolder = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 1fr;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`


const Folder = () => {

  const id = useSelector(state => state.folders.activeFolderId);

  const folders = useSelector(state => state.folders.folders);

  const folder = folders.find(folder => folder.id == id);

  return (
    <StyledFolder>
      <FolderSidebar/>
      <main>
      <Outlet/>
      </main>
    </StyledFolder>
  )
}

export default Folder