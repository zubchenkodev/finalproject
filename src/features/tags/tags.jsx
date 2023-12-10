import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTagsFromLocalStorage = () => {
    try {
        const serializedTags = localStorage.getItem('tags');
        return serializedTags ? JSON.parse(serializedTags) : [];
    } catch (error) {
        console.error('Error loading tags from localStorage:', error);
        return [];
    }
}

const saveTagsToLocalStorage = (tags) => {
    try {
        localStorage.setItem('tags', JSON.stringify(tags));
    } catch (error) {
        console.error('Error saving tags to localStorage:', error);
    }
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        tags: loadTagsFromLocalStorage()
    },
    reducers: {
        addNewTag: {
            reducer(state, action) {
                state.tags.push(action.payload);
                saveTagsToLocalStorage(state.tags);
            },
            prepare(name) {
                return {
                    payload: {
                        id: nanoid(),
                        name
                    }
                };
            }
        },
        removeTag: (state, action) => {
            state.tags = state.tags.filter(tag => tag.id!== action.payload);
            saveTagsToLocalStorage(state.tags);
        }
    }
})

export const { addNewTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;