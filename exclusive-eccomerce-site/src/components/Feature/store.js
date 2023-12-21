import { configureStore } from '@reduxjs/toolkit'
import WishlistReducer from "./WishlistRedux/WishlistSlice"

export const store = configureStore({
  reducer: {
    wishlist:WishlistReducer
  },
})  