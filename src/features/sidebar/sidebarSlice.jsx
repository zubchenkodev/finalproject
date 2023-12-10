import { createSlice } from "@reduxjs/toolkit"


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        mainSidebarIsOpen: false,
        secondarySidebarIsOpen: true
    },
    reducers: {
        toggleMainSidebar: (state, action) => {
            state.mainSidebarIsOpen = action.payload
        },
        toggleSecondarySidebar: (state, action) => {
            state.secondarySidebarIsOpen = action.payload
        }
    }
})

export default sidebarSlice.reducer;

export const { toggleMainSidebar, toggleSecondarySidebar } = sidebarSlice.actions;