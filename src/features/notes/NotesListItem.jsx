import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed, faEllipsisVertical, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNoteId } from './notes';
import { toggleSecondarySidebar } from '../sidebar/sidebarSlice';

const StyledNoteListItem = styled.li`
    padding: 1rem 1rem;
    cursor: pointer;
    list-style-type: none;
    border-radius: 8px;
    background-color: ${(props) => (props.isOpened ? 'var(--main-color)' : 'transparent')};
    color: ${(props) => (props.isOpened ? '#FFFFFF' : '#130f25')};
    &:hover {
      background-color: var(--main-color);
      color: #FFFFFF;
    }
    
`

const NotesListItem = ({note}) => {

  const activeNoteId = useSelector(state => state.notes.activeNoteId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setActiveNoteId(note.id));
    dispatch(toggleSecondarySidebar(false));
    navigate(`notes/${note.id}`)
  }

  return (
    <Fragment>
    <GlobalStyles/>
    <StyledNoteListItem
    isOpened={activeNoteId == note.id}
    onClick={handleClick}>
    {note.name.length < 20 ? note.name : note.name.substring(0, 20) + '...' } 
    </StyledNoteListItem>
    </Fragment>
  )
}

export default NotesListItem