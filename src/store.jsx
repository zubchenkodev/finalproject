import { configureStore } from "@reduxjs/toolkit";
import foldersReducer from './features/folders/folders';
import notesReducer from './features/notes/notes';
import tagsReducer from './features/tags/tags';
import sidebarReducer from "./features/sidebar/sidebarSlice";


export const store = configureStore({
    reducer: {
        folders: foldersReducer,
        notes: notesReducer,
        tags: tagsReducer,
        sidebar: sidebarReducer
    }
})