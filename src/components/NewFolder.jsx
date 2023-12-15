import React from 'react'
import Subheader from './Subheader'
import AddFolderForm from './AddFolderForm';
import { StyledPage, StyledTitle, StyledHeading3, StyledTextButton } from '../styles/ReusableComponents';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleMainSidebar } from '../reducers/sidebar/sidebarSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,  faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const StyledSidebar = styled.div`
  height: calc(100vh - 5rem);
  display: grid;
  grid-template-rows: auto 1fr auto;
`
const StyledSidebarHeader = styled.header`
  padding: 1rem;
  border-bottom: solid 2px #b1b3c3;
` 
const StyledSidebarFooter = styled.footer`
  padding: 1rem;
  border-top: solid 2px #b1b3c3;
  display: flex;
  justify-content: flex-end;
`

const NewFolder = () => {

  const dispatch = useDispatch();

  const backToAllFolders = () => {
    dispatch(toggleMainSidebar(true))
  }

  return (
      <StyledSidebar>
        <StyledSidebarHeader>
          <StyledHeading3>Add New Folder</StyledHeading3>
          <StyledTextButton onClick={backToAllFolders}><FontAwesomeIcon icon={faAngleLeft} />Back to all folders</StyledTextButton>
        </StyledSidebarHeader>
        <AddFolderForm />
      </StyledSidebar>
  )
}

export default NewFolder