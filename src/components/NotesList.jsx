import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotesListItem from './NotesListItem';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledSelectMini, StyledCheckWrapper, StyledHeading3, StyledTextButton } from '../styles/ReusableComponents';
import { StyledSmallIconTextButton } from '../styles/AddNewNoteStyles';
import { toggleMainSidebar, toggleSecondarySidebar } from '../reducers/sidebar/sidebarSlice';

const StyledNotesListWrapper = styled.div`
    overflow-y: auto;
`

const StyledMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
`

const StyledNotesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    overflow-y: auto;

`
const Flex = styled.div`
    display: flex;
    gap: 1rem;
`

const StyledNotesListHeader = styled.div`
    padding: 1rem;
    border-bottom: solid 2px #b1b3c3;
`
const StyledNotesListSelectorWrapper = styled.div`
    padding: 1rem;
    border-bottom: solid 2px #b1b3c3;
`


const NotesList = () => {

    const [sortBy, setSortBy] = useState('default');
    const [showOnlyFavs, setShowOnlyFavs] = useState(false);
    const [showOnlyStudied, setShowOnlyStudied] = useState(false);

    const notes = useSelector(state => state.notes.notes);

    const activeFolderId = useSelector(state => state.folders.activeFolderId);

    const folderNotes = activeFolderId != null ? notes.filter(note => note.folderId == activeFolderId) : [];

    let sortedNotes = [...folderNotes];
    if (sortBy === 'abc') {
        sortedNotes.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'zyx') {
        sortedNotes.sort((a, b) => a.name.localeCompare(b.name));
    } 

    if (showOnlyFavs) {
        sortedNotes = sortedNotes.filter(note => note.isFav);
    }

    if (showOnlyStudied) {
        sortedNotes = sortedNotes.filter(note => note.isStudied);
    }

    const dispatch = useDispatch();

    const backToAllFolders = () => {
        dispatch(toggleMainSidebar(true))
        dispatch(toggleSecondarySidebar(false))
    }

    return (
        <Fragment>
            <StyledNotesListHeader>
            <StyledHeading3>All Notes in Folder</StyledHeading3>
            <StyledTextButton onClick={backToAllFolders}><FontAwesomeIcon icon={faAngleLeft} />Back to all folders</StyledTextButton>
            </StyledNotesListHeader>
            <StyledNotesListSelectorWrapper>
            <div>
            <label>
            <StyledSelectMini value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Newest first</option>
            <option value="abc">ABC</option>
            <option value="zyx">ZYX</option>
            </StyledSelectMini>
            </label>
            </div>
            <Flex>
            <StyledCheckWrapper>
            <input type="checkbox" checked={showOnlyFavs} onChange={() => setShowOnlyFavs(!showOnlyFavs)} />
            <FontAwesomeIcon icon={faHeart} />
            </StyledCheckWrapper>
            <StyledCheckWrapper>
            <input type="checkbox" checked={showOnlyStudied} onChange={() => setShowOnlyStudied(!showOnlyStudied)} />
            <FontAwesomeIcon icon={faStar} />
            </StyledCheckWrapper>
            </Flex>
            </StyledNotesListSelectorWrapper>
        <StyledNotesList>
            {sortedNotes.length > 0 ? sortedNotes.reverse().map(note => <NotesListItem key={note.id} note={note}/> ) : <StyledMessage>
            <b>🥸 No notes found 🥸</b>
        </StyledMessage>}
        </StyledNotesList>
        </Fragment>
    )
}

export default NotesList