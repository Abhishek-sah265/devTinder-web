import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,   
    reducers: {
        // setFeed will set the feed(state) to the array of user objects that we get from the backend
        addFeed: (state, action) =>  {
            return action.payload; // payload will be the array of user objects that we get from the backend
        },
        removeFeed: (state, action) => {
            return null; // when user logs out, we will clear the feed
        },
        removeUserFromFeed: (state, action) => {
            const newFeed = state.filter((u) => u._id !== action.payload);
            return newFeed;
        }

    }
});

export const { addFeed, removeFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
