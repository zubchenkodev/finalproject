import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNewTags from './AddNewTags';
import { StyledHeading3, StyledPage, StyledTextButton, StyledTitle} from '../styles/ReusableComponents';
import Statistics from './Statistics';
import { styled } from 'styled-components';
import MainHeader from './MainHeader';
import MainWrapper from './MainWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons';
import { toggleMainSidebar } from '../reducers/sidebar/sidebarSlice';


const StyledDashboard = styled.div`
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    overflow-y: auto;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr 1fr;
    }
`

const StyledGreeting = styled.div`
  grid-area: 1 / 1 / 2 / 5;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #b1b3c3;
  @media screen and (max-width: 1000px) {
    grid-area: 1 / 1 / 2 / 2;
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
    <StyledGreeting>
        <p>Initiate your tasks by creating categories to efficiently organize your notes and track the statistics of your learning progress. After creating a category, you can include folders by selecting the 'Add Folder' button.</p>
    </StyledGreeting>
    <Statistics/>
    <AddNewTags/>
    </StyledDashboard>
    </MainWrapper>
  )
}

export default Dashboard