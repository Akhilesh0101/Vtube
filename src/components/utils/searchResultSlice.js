import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name:"searchResult",
    initialState:{
        items:[]
    },
    reducers:{
        addResult:(state,action)=>{
        state.items.push(action.payload)
        }
    }
})

export const{addResult} = searchResultSlice.actions;
export default searchResultSlice.reducer;