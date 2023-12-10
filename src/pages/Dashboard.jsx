import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNewTags from '../features/tags/AddNewTags';
import { StyledHeading3, StyledPage, StyledTextButton, StyledTitle} from '../styles/ReusableComponents';
import Statistics from '../ui/Statistics';
import { styled } from 'styled-components';
import MainHeader from '../ui/MainHeader';
import MainWrapper from '../ui/MainWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons';
import { toggleMainSidebar } from '../features/sidebar/sidebarSlice';


const StyledDashboard = styled.div`
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    overflow-y: auto;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
`

const Dashboard = () => {

  const dispatch = useDispatch();

  const backToAllFolders = () => {
    dispatch(toggleMainSidebar(true))
  }

  return (
    <MainWrapper>
    <MainHeader>
      <StyledHeading3>Welcome to Curious Chronicle!</StyledHeading3>
      <StyledTextButton onClick={backToAllFolders}><FontAwesomeIcon icon={faFolderTree} />Show folders</StyledTextButton>
    </MainHeader>
    <StyledDashboard>
    <Statistics/>
    <AddNewTags/>
    </StyledDashboard>
    </MainWrapper>
  )
}

export default Dashboard