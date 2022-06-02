import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:"post",
    initialState : {
        currentPosts : []
    },
    reducers:{

        setPosts(state,action){
            return{
                ...state,
                currentPosts : action.payload
            }
        }
    }
    
});

export const postSliceActions = postSlice.actions;