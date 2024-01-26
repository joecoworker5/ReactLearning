import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const fetchUsers = createAsyncThunk('users/fetch', async ()=> {
    const response = await axios.get('http://localhost:3005/users');
    // this return data would be the payload property of fulfilled actionType
    
    // DEB ONLY!!!
    await pause(1000);

    
    return response.data;
});
// 用 Async Thunk 發 API 時, 會根據 response 的結果發出 pending/fulfilled/rejected 的 Action Type
// 其中 fulfilled 的 action.payload 會是 API return 的內容
// 而 rejected action.error 則會自動記錄錯誤訊息
// 這些發出的 action 則會由 reducer 來接收使用更新 state
// fetcgUsers.pending === 'users/fetch/pending'
// fetcgUsers.fulfilled === 'users/fetch/fulfilled'
// fetcgUsers.rejected === 'users/fetch/rejected'
// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export { fetchUsers };



