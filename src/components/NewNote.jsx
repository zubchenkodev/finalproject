import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNote, setActiveNoteId } from '../reducers/notes/notes';
import { addNoteToFolder } from '../reducers/folders/folders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,  faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { StyledLabel, StyledSmallIconTextButton, StyledTextarea, StyledInput, StyledCodeTextarea } from '../styles/AddNewNoteStyles';
import { StyledHeading3, StyledTextButton, StyledSubmitButton } from '../styles/ReusableComponents';
import AddNewTags from './AddNewTags';
import { useNavigate } from 'react-router-dom';
import { toggleSecondarySidebar } from '../reducers/sidebar/sidebarSlice';

const StyledGreeting = styled.div`
  grid-area: 1 / 1 / 2 / 5;
  padding-top: 1rem;
  padding-buttom: 1rem;
  margin-bottom: 1rem;
  color: #770ef7;
  
`

const StyledAddNoteHeader = styled.div`
    padding: 1rem;
    border-bottom: solid 2px #b1b3c3;
`
const StyledAddNoteFooter = styled.div`
    padding: 1rem;
    border-top: solid 2px #b1b3c3;
    display: flex;
    justify-content: flex-end;
`

const StyledAddNotePage = styled.div`
    background-color: #f4f7fa;
    height: calc(100vh - 5rem);
    display: grid;
    grid-template-rows: auto 1fr auto;
    form {
        display: block;
        padding: 1rem;
        overflow-y: auto;
    }
    
`

const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
`

const StyledFlexbox = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
`

const NewNote = () => {

    const [name, setName] = useState('');
    const [noteContents, setNoteContents] = useState([]); 
    const [selectedFolderId, setSelectedFolderId] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notes = useSelector(state => state.notes.notes);
    const activeFolderId = useSelector(state => state.folders.activeFolderId);
    const folders = useSelector(state => state.folders.folders);


    const handleAddContent = () => {
        const newContent = { id: noteContents.length + 1, text: '', type: 'text' };
        setNoteContents([...noteContents, newContent]);
    };

    const handleAddCode = () => {
        const newContent = { id: noteContents.length + 1, code: '', type: 'code' };
        setNoteContents([...noteContents, newContent]);
    };

    const handleAddSubtitle = () => {
        const newContent = { id: noteContents.length + 1, subtitle: '', type: 'subtitle' };
        setNoteContents([...noteContents, newContent]);
    };

    const handleContentChange = (id, field, value) => {
        setNoteContents((prevContents) =>
            prevContents.map((content) =>
                content.id === id ? { ...content, [field]: value } : content
            )
        );
    };

    const handleClick = (e) => {
        e.preventDefault();
        if(!name) return;
        const newNoteAction = addNewNote(name, activeFolderId, noteContents);
        dispatch(newNoteAction);
        const newNoteId = newNoteAction.payload.id;
        dispatch(addNoteToFolder({ noteId: newNoteId, folderId: activeFolderId }));
        dispatch(setActiveNoteId(newNoteId));
        setName('');
        setNoteContents([]);
    }

    const backToAllNotes = () => {
        dispatch(toggleSecondarySidebar(true));
    }

    return (
        <StyledAddNotePage>
            <StyledAddNoteHeader>
            <StyledHeading3>Add New Note</StyledHeading3>
            <StyledTextButton onClick={backToAllNotes}><FontAwesomeIcon icon={faAngleLeft} />Back to all notes</StyledTextButton>
            </StyledAddNoteHeader>
            <form>
                <StyledGreeting>
                Add content to your note by clicking the button corresponding to the desired content type (text, code, or subtitle). You can include as much content as you need. Just remember to submit your note.
                </StyledGreeting>
                <StyledInputWrapper>
                    <StyledLabel htmlFor="noteName">Note title:</StyledLabel>
                    <StyledInput type="text" id="noteName" name="noteName"
                    value={name} onChange={(e) => setName(e.target.value)} required />
                </StyledInputWrapper>
                {!activeFolderId && 
                    <div>
                    <label htmlFor="folderSelect">Select Folder:</label>
                    <select
                    id="folderSelect"
                    name="folderSelect"
                    value={selectedFolderId}
                    onChange={(e) => setSelectedFolderId(e.target.value)}
                    required
                    >
                    <option value="" disabled>Select a folder</option>
                    {folders.map(folder => (
                        <option key={folder.id} value={folder.id}>{folder.name}</option>
                        ))}
                        </select>
                    </div>
                }
                {noteContents.map((content) => (
                    <StyledInputWrapper key={content.id}>
                        {content.type === 'text' ? (
                            <Fragment>
                                <StyledLabel htmlFor={`content${content.id}`}>Note content:</StyledLabel>
                                <StyledTextarea
                                    id={`content${content.id}`}
                                    name={`content${content.id}`}
                                    value={content.text}
                                    onChange={(e) => handleContentChange(content.id, 'text', e.target.value)}
                                    required
                                />
                            </Fragment>
                        ) : content.type === 'code' ? (
                            <Fragment>
                                <StyledLabel htmlFor={`content${content.id}`}>Code element:</StyledLabel>
                                <StyledCodeTextarea
                                    id={`content${content.id}`}
                                    name={`content${content.id}`}
                                    value={content.code}
                                    onChange={(e) => handleContentChange(content.id, 'code', e.target.value)}
                                />
                            </Fragment>
                        ) : content.type === 'subtitle' ? (
                            <Fragment>
                                <StyledLabel htmlFor={`content${content.id}`}>Subtitle:</StyledLabel>
                                <StyledInput
                                    id={`content${content.id}`}
                                    name={`content${content.id}`}
                                    value={content.subtitle}
                                    onChange={(e) => handleContentChange(content.id, 'subtitle', e.target.value)}
                                />
                            </Fragment>
                        ) : null}
                    </StyledInputWrapper>
                ))}
                <StyledFlexbox>
                    <StyledSmallIconTextButton onClick={handleAddContent} type="button">
                        <span>+ Add text</span>
                    </StyledSmallIconTextButton>
                    <StyledSmallIconTextButton onClick={handleAddCode} type="button">
                        <span>+ Add code</span>
                    </StyledSmallIconTextButton>
                    <StyledSmallIconTextButton onClick={handleAddSubtitle} type="button">
                        <span>+ Add subtitle</span>
                    </StyledSmallIconTextButton>
                </StyledFlexbox>
            </form>
            <StyledAddNoteFooter><StyledSubmitButton onClick={handleClick} type="submit"><span><FontAwesomeIcon icon={faCircleCheck}/></span>Submit</StyledSubmitButton></StyledAddNoteFooter>
        </StyledAddNotePage>
  )
}

export default NewNote