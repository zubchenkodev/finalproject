import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed, faEllipsisVertical, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFolderId } from '../reducers/folders/folders';
import { setActiveNoteId } from '../reducers/notes/notes';
import { toggleMainSidebar, toggleSecondarySidebar } from '../reducers/sidebar/sidebarSlice';


const StyledFolderListItem = styled.li`
    padding: 1rem 1rem;
    cursor: pointer;
    list-style-type: none;
    border-radius: 8px;
    &:hover {
      background-color: var(--main-color);
      color: #FFFFFF;
    }
    background-color: ${(props) => (props.activated ? 'var(--main-color)' : 'transparent')};
    color: ${(props) => (props.activated ? '#FFFFFF' : '#130f25')};
    
`

const StyledLink= styled.div`
    display: grid;
    grid-template-columns: auto 1fr 3rem;
    gap: 1rem;
    span {
      margin-left: auto;
    }
`

const FoldersListItem = ({folder}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeFolderId = useSelector(state => state.folders.activeFolderId);

  const handleClick = () => {
    dispatch(setActiveFolderId(folder.id));
    dispatch(toggleMainSidebar(false))
    dispatch(toggleSecondarySidebar(true));
    dispatch(setActiveNoteId(null));
    navigate(`/folders/${folder.id}`)
  }



  return (
    <Fragment>
    <GlobalStyles/>
    <StyledFolderListItem activated={activeFolderId == folder.id}>
    <StyledLink  
    onClick={handleClick}>
    <span><FontAwesomeIcon icon={activeFolderId == folder.id ? faFolderOpen : faFolderClosed} /></span> 
    {folder.name.length < 30 ? folder.name : folder.name.substring(0, 30) + '...' }  
    <span>{folder.notesIds.length}</span>
    </StyledLink>
    </StyledFolderListItem>
    </Fragment>
    )
}

export default FoldersListItem