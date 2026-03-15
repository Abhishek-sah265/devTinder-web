
import { createSlice } from "@reduxjs/toolkit";

// dont export slice, export the reducer and actions separately
const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        // initially we will set the user to null, when user logs in we will set the user(state) to the user object
        addUser: (state, action) => {
            return action.payload;
        },
        // when user logs out we will set the user(state) to null
        removeUser: (state, action) => {
            return null;
        }

    }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;