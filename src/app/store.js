import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "../reducers/postsSlice";
import usersReducer from "../reducers/usersSlice";
export const store = configureStore({
    reducer: {
        posts:postsReducers,
        users:usersReducer,
    },
})