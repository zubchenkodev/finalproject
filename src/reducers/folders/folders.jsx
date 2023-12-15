import { createSlice, nanoid } from "@reduxjs/toolkit";
import { format } from 'date-fns';

const loadFoldersFromLocalStorage = () => {
    try {
      const serializedFolders = localStorage.getItem('folders');
      return serializedFolders ? JSON.parse(serializedFolders) : [];
    } catch (error) {
      console.error('Error loading folders from localStorage:', error);
      return [];
    }
  };
  
const loadActiveFolderIdFromLocalStorage = () => {
    try {
      const activeFolderId = localStorage.getItem('activeFolderId');
      return activeFolderId || null;
    } catch (error) {
      console.error('Error loading activeFolderId from localStorage:', error);
      return null;
    }
};

const saveFoldersToLocalStorage = (folders) => {
    try {
      localStorage.setItem('folders', JSON.stringify(folders));
    } catch (error) {
      console.error('Error saving folders to localStorage:', error);
    }
  };
  
  const saveActiveFolderIdToLocalStorage = (activeFolderId) => {
    try {
      localStorage.setItem('activeFolderId', activeFolderId);
    } catch (error) {
      console.error('Error saving activeFolderId to localStorage:', error);
    }
};


const foldersSlice = createSlice({
    name: 'folders',
    initialState: {
        folders: loadFoldersFromLocalStorage(),
        activeFolderId: loadActiveFolderIdFromLocalStorage()
    },
    reducers: {
        addNewFolder: {
            reducer(state, action) {
                state.folders.push(action.payload)
                saveFoldersToLocalStorage(state.folders);
            },
            prepare(name, description, categoryId){
                return {
                    payload: {
                        id: nanoid(),
                        name, 
                        description,
                        date: format(new Date(), 'dd-MM-yyyy'),
                        notesIds: [],
                        categoryId
                    }
                }
            }
        },
        removeFolder: (state, action) => {
            const folderId = action.payload;
            state.folders = state.folders.filter(folder => folder.id!== folderId);
            if(folderId === state.activeFolderId) {
                state.activeFolderId = null;
                saveActiveFolderIdToLocalStorage(state.activeFolderId);
            }
            saveFoldersToLocalStorage(state.folders);
        },
        setActiveFolderId: (state, action) => {
            state.activeFolderId = action.payload;
            saveActiveFolderIdToLocalStorage(state.activeFolderId);
        },
        addNoteToFolder: (state, action) => {
            const { folderId, noteId } = action.payload;
            state.folders = state.folders.map(folder => {
                if(folder.id === folderId) {
                    folder.notesIds.push(noteId);
                }
                return folder;
            })
            saveFoldersToLocalStorage(state.folders);
        },
        removeNoteFromFolder: (state, action) => {
           const { folderId, noteId } = action.payload;
            state.folders = state.folders.map(folder => {
                if(folder.id === folderId) {
                    folder.notesIds = folder.notesIds.filter(id => id!== noteId);
                }
                return folder;
            })
            saveFoldersToLocalStorage(state.folders);
        }
    }
})



export default foldersSlice.reducer;

export const { addFolder, removeFolder, setActiveFolderId, addNewFolder, addNoteToFolder, removeNoteFromFolder } = foldersSlice.actions;