import React from 'react';
import { styled } from 'styled-components';
import NotesList from './NotesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import AddNoteButton from './AddNoteButton';
import { useSelector } from 'react-redux';

const StyledFolderSidebar = styled.aside`
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    border-right: solid 2px #b1b3c3;
    height: calc(100vh - 5rem);
    @media screen and (max-width: 1000px) {
      display: ${props => (props.secondarySidebarIsOpen ? 'grid' : 'none')};
      width: 100%;
      position: absolute;
      top: 5rem;
      z-index: 2;
      background-color: #FFFFFF;
    }
`
const StyledFolderFooter = styled.footer`
  padding: 1rem;
  border-top: solid 2px #b1b3c3;
  display: flex;
  justify-content: flex-end;
`

const FolderSidebar = () => {

  const secondarySidebarIsOpen = useSelector(state => state.sidebar.secondarySidebarIsOpen);

  return (
    <StyledFolderSidebar secondarySidebarIsOpen={secondarySidebarIsOpen}>
      <NotesList/>
      <StyledFolderFooter>
        <AddNoteButton/>
      </StyledFolderFooter>
    </StyledFolderSidebar>
  )
}

export default FolderSidebar