import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[]
}

export const wishlistSlice=createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addWishlist:(state,action)=>{
          const {id}=action.payload
          const existWish=state.value.find(x=>x.id===id)
          if (!existWish) {
            state.value.push(action.payload)
          }
        },
        deleteWish:(state,action)=>{
            const {id}=action.payload
            state.value=state.value.filter(x=>x.id!==id)
            console.log(state.value);
        }

    }
})

export const {addWishlist,deleteWish}=wishlistSlice.actions
export default wishlistSlice.reducer