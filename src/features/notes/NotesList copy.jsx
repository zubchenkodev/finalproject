import React from 'react';
import { useSelector } from 'react-redux';
import NotesListItem from './NotesListItem';
import { styled } from 'styled-components';

const StyledNotesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const NotesList = () => {

    const notes = useSelector(state => state.notes.notes);

    const activeFolderId = useSelector(state => state.folders.activeFolderId);

    const folderNotes = activeFolderId != null ? notes.filter(note => note.folderId == activeFolderId) : [];

    return (
        <StyledNotesList>
            {folderNotes.length > 0 ? folderNotes.map(note => <NotesListItem key={note.id} note={note}/> ) : <p>No notes in this folder yet</p>}
        </StyledNotesList>
    )
}

export default NotesList