import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { StyledSmallIconButton, StyledHeading3 } from '../../styles/ReusableComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { removeFolder, setActiveFolderId } from './folders';
import { useNavigate } from 'react-router-dom';
import { removeNote } from '../notes/notes';
import MainHeader from '../../ui/MainHeader';


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
      </StyledNoteBody>
      <StyledNoteFooter>
      <StyledSmallIconButton onClick={onRemoveFolder}><FontAwesomeIcon icon={faTrashCan} /></StyledSmallIconButton>
      </StyledNoteFooter>
    </StyledFolderDashboard>
  )
}

export default FolderDashboard