import { configureStore } from "@reduxjs/toolkit";
import foldersReducer from './reducers/folders/folders';
import notesReducer from './reducers/notes/notes';
import tagsReducer from './reducers/tags/tags';
import sidebarReducer from "./reducers/sidebar/sidebarSlice";


export const store = configureStore({
    reducer: {
        folders: foldersReducer,
        notes: notesReducer,
        tags: tagsReducer,
        sidebar: sidebarReducer
    }
})