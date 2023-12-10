import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { StyledSubtitle, StyledTitle, StyledTextBlock, StyledCodeBlock, StyledInfo, StyledSmallIconButton, StyledTextButton, StyledHeading3 } from '../../styles/ReusableComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faHeart, faStar, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { removeNote, setActiveNoteId, markNoteAsStudied, markNoteAsFav } from './notes';
import { useNavigate } from 'react-router-dom';
import { removeNoteFromFolder } from '../folders/folders';
import { toggleSecondarySidebar } from '../sidebar/sidebarSlice';

const StyledNote = styled.article`
  background-color: #f4f7fa;
  height: calc(100vh - 5rem);
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const StyledNoteHeader = styled.header`
  padding: 1rem;
  border-bottom: solid 2px #b1b3c3;
`

const StyledNoteBody = styled.div`
  overflow-y: scroll;
  padding: 1rem;
`
const StyledNoteFooter = styled.footer`
  padding: 1rem;
  background-color: #770ef7;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
`

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`


const Note = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector(state => state.notes.activeNoteId);

  const folderId = useSelector(state => state.notes.notes.find(note => note.id == id).folderId);

  const notes = useSelector(state => state.notes.notes);

  const note = useSelector(state => state.notes.notes.find(note => note.id == id));

  const folder = useSelector(state => state.folders.folders.find(folder => folder.id == note.folderId))

  const renderCodeWithLineBreaks = code => {
    return code ? code.replace(/\\n/g, '\n') : '';
  };

  const onRemoveNote = () => {  
      dispatch(removeNote(note.id));
      dispatch(removeNoteFromFolder({folderId: folderId, noteId: note.id }));
      dispatch(setActiveNoteId(null));
      navigate(`/`);
  }

  const onMarkNoteAsStudied = () => {
    dispatch(markNoteAsStudied(note.id));
  }

  const onMarkNoteAsFav = () => {
    dispatch(markNoteAsFav(note.id));
  }

  const backToAllNotes = () => {
    dispatch(toggleSecondarySidebar(true));
  }

  

  return (
    <StyledNote>
      <StyledNoteHeader>
        <StyledHeading3>{note.name}</StyledHeading3>
        <StyledTextButton onClick={backToAllNotes}><FontAwesomeIcon icon={faAngleLeft} />Back to all notes</StyledTextButton>
      </StyledNoteHeader>
      <StyledNoteBody>
        <StyledFlexbox>
        <StyledInfo>{note.date}</StyledInfo>
        </StyledFlexbox>
        <div>
        {note.noteContents && note.noteContents.map(content => (
          <div key={content.id}>
            {content.type === 'text' && content.text ? (
              <StyledTextBlock>{content.text}</StyledTextBlock>
            ) : content.type === 'code' && content.code ? (
              <StyledCodeBlock>
                <pre>{renderCodeWithLineBreaks(content.code)}</pre>
              </StyledCodeBlock>
            ) : content.type === 'subtitle' && content.subtitle ? (
              <StyledSubtitle>{content.subtitle}</StyledSubtitle>
            ) : null}
          </div>
        ))}
        </div>
      </StyledNoteBody>
      <StyledNoteFooter>
        <div>
        <StyledSmallIconButton onClick={onRemoveNote}><FontAwesomeIcon icon={faTrashCan} /></StyledSmallIconButton>
        </div>
        <StyledSmallIconButton onClick={onMarkNoteAsFav}><FontAwesomeIcon icon={note.isFav ? faHeart : faHeartRegular} /></StyledSmallIconButton>
        <StyledSmallIconButton onClick={onMarkNoteAsStudied}><FontAwesomeIcon icon={note.isStudied ? faStar: faStarRegular} /></StyledSmallIconButton>
      </StyledNoteFooter>
    </StyledNote>
  )
}

export default Note