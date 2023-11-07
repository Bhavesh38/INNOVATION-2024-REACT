import { createSlice } from "@reduxjs/toolkit";

export const activenessSlice = createSlice({
    name: 'activenessSlice',
    initialState: {
        navbarActive: 'Home',
    },
    reducers: {
        setNavbarActive: (state, action) => {
            state.navbarActive = action.payload
        }
    }
});

export const { setNavbarActive } = activenessSlice.actions;
export default activenessSlice.reducer;