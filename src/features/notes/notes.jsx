import { createSlice, nanoid } from "@reduxjs/toolkit";
import { format } from 'date-fns';

const loadNotesFromLocalStorage = () => {
    try {
        const serializedNotes = localStorage.getItem('notes');
        return serializedNotes ? JSON.parse(serializedNotes) : [];
    } catch (error) {
        console.error('Error loading notes from localStorage:', error);
        return [];
    }
}

const saveNotesToLocalStorage = (notes) => {
    try {
        localStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
        console.error('Error saving notes to localStorage:', error);
    }
}

const loadActiveNoteIdFromLocalStorage = () => {
    try {
        const activeNoteId = localStorage.getItem('activeNoteId');
        return activeNoteId || null;
    } catch (error) {
        console.error('Error loading activeNoteId from localStorage:', error);
        return null;
    }
}

const saveActiveNoteIdToLocalStorage = (activeNoteId) => {
    try {
        localStorage.setItem('activeNoteId', activeNoteId);
    } catch (error) {
        console.error('Error saving activeNoteId to localStorage:', error);
    }
}

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: loadNotesFromLocalStorage(),
        activeNoteId: loadActiveNoteIdFromLocalStorage()
    },
    reducers: {
        setActiveNoteId: (state, action) => {
            state.activeNoteId = action.payload;
            saveActiveNoteIdToLocalStorage(action.payload);
        },
        addNewNote: {
            reducer(state, action) {
                state.notes.push(action.payload);
                saveNotesToLocalStorage(state.notes);
            },
            prepare(name, activeFolderId, noteContents) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        noteContents,
                        date: format(new Date(), 'dd-MM-yyyy'),
                        folderId: activeFolderId,
                        isFav: false,
                        isStudied: false
                    }
                };
            }
        },
        removeNote: (state, action) => {
            const noteId = action.payload;
            state.notes = state.notes.filter(note => note.id!== noteId);
            saveNotesToLocalStorage(state.notes);
        },
        markNoteAsFav: (state, action) => {
            const noteId = action.payload;
            state.notes = state.notes.map(note => {
                if(note.id === noteId) {
                    note.isFav =!note.isFav;
                }
                return note;
            })
            saveNotesToLocalStorage(state.notes);
        },
        markNoteAsStudied: (state, action) => {
            const noteId = action.payload;
            state.notes = state.notes.map(note => {
                if(note.id === noteId) {
                    note.isStudied =!note.isStudied;
                }
                return note;
            })
            saveNotesToLocalStorage(state.notes);
        }
    }
})

export default notesSlice.reducer;

export const {setActiveNoteId, addNewNote, removeNote, markNoteAsFav, markNoteAsStudied} = notesSlice.actions;