import { configureStore } from '@reduxjs/toolkit'
import WishlistReducer from "./WishlistRedux/WishlistSlice"
import BasketReduces from './Basket/BasketSlice'

export const store = configureStore({
  reducer: {
    wishlist:WishlistReducer,
    basket:BasketReduces
  },
})  