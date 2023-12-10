import { createSlice, nanoid } from "@reduxjs/toolkit";
import { format } from 'date-fns';

const initialState = {
    folders:[
        {
          id:1,
          name:'Fall 2023: JavaScript & React upskill course',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          date: format(new Date('December 17, 2022 03:24:00'), 'dd-MM-yyyy'),
          notesIds: [ 1, 2]
        },
        {
          id:2,
          name:'Art History',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          date: format(new Date('December 17, 2022 03:24:00'), 'dd-MM-yyyy'),
          notesIds: []
        },
        {
            id:3,
            name:'The Ultimate React Course 2024: React, Redux & More',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            date: format(new Date('December 17, 2022 03:24:00'), 'dd-MM-yyyy'),
            notesIds: []
        }
      ],
    activeFolderId: null
}

const foldersSlice = createSlice({
    name: 'folders',
    initialState,
    reducers: {
        addNewFolder: {
            reducer(state, action) {
                state.folders.push(action.payload)
            },
            prepare(name, description){
                return {
                    payload: {
                        id: nanoid(),
                        name, 
                        description,
                        date: format(new Date(), 'dd-MM-yyyy'),
                        notesIds: []
                    }
                }
            }
        },
        removeFolder: (state, action) => {
            const folderId = action.payload;
            state.folders = state.folders.filter(folder => folder.id!== folderId);
        },
        setActiveFolderId: (state, action) => {
            state.activeFolderId = action.payload;
        },
        addNoteToFolder: (state, action) => {
            const { folderId, noteId } = action.payload;
            state.folders = state.folders.map(folder => {
                if(folder.id === folderId) {
                    folder.notesIds.push(noteId);
                }
                return folder;
            })
        }
    }
})

export default foldersSlice.reducer;

export const { addFolder, removeFolder, setActiveFolderId, addNewFolder, addNoteToFolder } = foldersSlice.actions;