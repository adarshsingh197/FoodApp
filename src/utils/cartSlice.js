import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,actions)=>{
            state.items.push(actions.payload)
        },
        removeItem:(state,actions)=>{
            state.items.pop()
        },
        clearItem:(state)=>{
            console.log("clearItemCalled")
            state.items.length=0;
        }
    }
})
export const {addItem,removeItem,clearItem}= cartSlice.actions;

export default cartSlice.reducer