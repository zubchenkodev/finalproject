import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { StyledSmallIconButton, StyledHeading3 } from '../styles/ReusableComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { removeFolder, setActiveFolderId } from '../reducers/folders/folders';
import { useNavigate } from 'react-router-dom';
import { removeNote } from '../reducers/notes/notes';
import MainHeader from './MainHeader';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


const StyledFolderDashboard = styled.div`
  background-color: #f4f7fa;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const StyledNoteBody = styled.div`
  overflow-y: scroll;
  padding: 1rem;
`
const StyledNoteFooter = styled.footer`
  padding: 1rem;
  background-color: #770ef7;
`

const StyledGreeting = styled.div`
  grid-area: 1 / 1 / 2 / 5;
  padding-top: 1rem;
  padding-buttom: 1rem;
  color: #b1b3c3;
  
`

const FolderDashboard = () => {

  const activeFolderId = useSelector(state => state.folders.activeFolderId);

  const folder = useSelector(state => state.folders.folders.find(folder => folder.id == activeFolderId));

  const folderNotesIds = folder.notesIds;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemoveFolder = () => {
      dispatch(removeFolder(activeFolderId));
      dispatch(setActiveFolderId('null'));
      folderNotesIds.map(noteId => dispatch(removeNote(noteId)))
      navigate('/');
  }

  return (
    <StyledFolderDashboard>
      <MainHeader>
      <StyledHeading3>{folder.name}</StyledHeading3>
      </MainHeader>
      <StyledNoteBody>
      <p>{folder.description}</p>
      {folderNotesIds.length === 0 &&
        <StyledGreeting>
          <p>Initiate your tasks by creating categories to efficiently organize your notes and track the statistics of your learning progress. After creating a category, you can include folders by selecting the 'Add Folder' button.</p>
        </StyledGreeting>
      }
      </StyledNoteBody>
      <StyledNoteFooter>
      <StyledSmallIconButton data-tooltip-id="remove-tooltip" data-tooltip-content="Press to remove a folder" onClick={onRemoveFolder}><FontAwesomeIcon icon={faTrashCan} /></StyledSmallIconButton>
        <Tooltip id="remove-tooltip" />
      </StyledNoteFooter>
    </StyledFolderDashboard>
  )
}

export default FolderDashboard