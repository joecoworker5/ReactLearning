import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
        // fetchUsers.pending === 'users/fetch/pending'
        // action = { type: 'users/fetch/pending' }
        state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        // fetcgUsers.fulfilled === 'users/fetch/fulfilled'
        // action = { type: 'users/fetch/fulfilled', payload: API 回傳的內容}
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
        // fetcgUsers.rejected === 'users/fetch/rejected'
        // action = { type: 'users/fetch/rejected', error: thunk自動產生的錯誤訊息 }
        state.isLoading = false;
        state.error = action.error;
    });
    builder.addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });
    builder.addCase(removeUser.pending, (state, action)=>{
        state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.data = state.data.filter((user)=> {
            return user.id !== action.payload.id;
        })
    });
    builder.addCase(removeUser.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error;
    });    
  },
});

export const usersReducer = userSlice.reducer;
