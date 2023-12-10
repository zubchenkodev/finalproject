import React from 'react';
import { styled } from 'styled-components';
import FoldersList from '../features/folders/FoldersList';
import AddFolder from '../features/folders/AddFolder';
import { useSelector, useDispatch } from 'react-redux';
import { StyledHeading3, StyledTextButton } from '../styles/ReusableComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { toggleMainSidebar } from '../features/sidebar/sidebarSlice';


const StyledSidebar = styled.aside`
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
  grid-template-rows: auto 1fr auto;
  border-right: solid 2px #b1b3c3;
  height: calc(100vh - 5rem);
  @media screen and (max-width: 1000px) {
    display: ${props => (props.mainSidebarIsOpen ? 'grid' : 'none')};
    position: absolute;
    top: 5rem;
    z-index: 2;
    background-color: #FFFFFF;
    width: 100%;
  }
`

const StyledFolderFooter = styled.footer`
  padding: 1rem;
  border-top: solid 2px #b1b3c3;
  display: flex;
  justify-content: flex-end;
`

const StyledSidebarHeader = styled.header`
  padding: 1rem;
  border-bottom: solid 2px #b1b3c3;
` 

const Sidebar = () => {

  const mainSidebarIsOpen = useSelector(state => state.sidebar.mainSidebarIsOpen);

  const dispatch = useDispatch();

  const hideFolders = () => {
    dispatch(toggleMainSidebar(false));
  }

  return (
    <StyledSidebar mainSidebarIsOpen={mainSidebarIsOpen}>
      <StyledSidebarHeader>
        <StyledHeading3>All Folders</StyledHeading3>
      </StyledSidebarHeader>
      <FoldersList/>
      <StyledFolderFooter>
      <AddFolder/>
      </StyledFolderFooter>
    </StyledSidebar>
  )
}

export default Sidebar