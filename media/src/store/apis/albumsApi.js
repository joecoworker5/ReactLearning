import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from '@faker-js/faker';


// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
      setTimeout(resolve, duration);
  });
}

const albumsApi = createApi({
  // #3
  reducerPath: "albums",
  // #4
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args)=>{ // 複寫 fetchFn, RTK Query 底層是用 fetch 寫的
      // DEV ONLY!!
      await pause(1000);
      return fetch(...args)
    }
  }),
  // #5
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
          invalidatesTags: (result, error, album)=> {
            return [{type: 'Album', id: album.id}]
          },
          query: (album) => {
            return {
              url:`/albums/${album.id}`,
              method: 'DELETE'
            }
          }
      }),
      // http://localhost:3005/albums?userId={user.id}
      // auto generate useFetchAlbumsQuery
      fetchAlbums: builder.query({ 
        providesTags: (result, error, user)=>{
          const tags = result.map((album)=> {
            return {type:'Album', id: album.id}
          })
          tags.push({type: 'UsersAlbums', id: user.id});
          return tags;
        },  
        query: (user) => {
          return {
              url: '/albums',
              params: {
                  userId:user.id
              },
              method: 'GET'
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user)=>{
          return [{type: 'UsersAlbums', id: user.id}]
        },  
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName()
            }
          }
        }
      })
    };
  },
});

// console.log('albumsApi', albumsApi);
// #6
export const {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} = albumsApi;
export {albumsApi};
