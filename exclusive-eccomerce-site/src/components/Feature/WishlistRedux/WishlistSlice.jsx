import { createSlice } from "@reduxjs/toolkit";

const initialState={
  value:getBasketFromLocalStorage()
}

function getBasketFromLocalStorage() {
  const storedBasket = localStorage.getItem('basket');
  return storedBasket ? JSON.parse(storedBasket) : [];
}

function saveBasketToLocalStorage(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
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
          saveBasketToLocalStorage(state.value);
        },
        deleteWish:(state,action)=>{
            const {id}=action.payload
            state.value=state.value.filter(x=>x.id!==id)
            console.log(state.value);
            saveBasketToLocalStorage(state.value);
        }

    }
})

export const {addWishlist,deleteWish}=wishlistSlice.actions
export default wishlistSlice.reducer