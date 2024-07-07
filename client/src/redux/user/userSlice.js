import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUpStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        signUpSuccess: (state) => {
            state.isLoading = false;
            state.error = null;
          
        },
        signUpFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        signInStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        signInFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const { signUpStart, signUpSuccess, signUpFailure, signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;