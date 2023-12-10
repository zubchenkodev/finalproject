import React, { Fragment } from 'react';
import { styled } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { Link, useNavigate } from 'react-router-dom';
import { toggleMainSidebar } from '../features/sidebar/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StyledHeading1 } from '../styles/ReusableComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';


const StyledHeader = styled.header`
  grid-area: 1 / 1 / 2 / 3; 
  background-color: var(--main-color);
  color: #FFFFFF;
  gap: 1rem;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  a {
    color: #ffffff;
    cursor: pointer;
  }
`

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HomeBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`


const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const mainSidebarIsOpen = useSelector(state => state.sidebar.mainSidebarIsOpen);

  const showDashboard = () => {
    dispatch(toggleMainSidebar(false));
    navigate('/');
  }

  return (
    <Fragment>
      <GlobalStyles/>
      <StyledHeader>
      <HomeBtn onClick={showDashboard}>
      <FontAwesomeIcon icon={faIgloo} />
      <StyledHeading1>Curious Chronicle</StyledHeading1>
      </HomeBtn>
      </StyledHeader>
    </Fragment>
  )
}

export default Header