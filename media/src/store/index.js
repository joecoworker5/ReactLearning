import { usersReducer } from "./slices/usersSlice";
import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // #7 [albumsApi.reducerPath] == 'albums' 和 albumsApi.reducerPath 相對應
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath] : photosApi.reducer
  },
  //#7
  middleware: (buildGetDefaultMiddleware) => {
    return buildGetDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware);
  },
});

// #7
setupListeners(store.dispatch);

// export 所有 fetchUsers 的 export
// 統一由 store/index.js 和 redux 溝通
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

// #8
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} from './apis/albumsApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation} from './apis/photosApi';

