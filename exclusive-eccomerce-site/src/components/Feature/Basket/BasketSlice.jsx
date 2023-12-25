import { createSlice } from '@reduxjs/toolkit'

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

export const BasketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
addBasket:(state,action)=>{
    const {id}=action.payload 
    const existBasket=state.value.find(x=>x.id===id)
    if (existBasket) {
    existBasket.count++
    existBasket.total = existBasket.count * existBasket.price
    return
    }
    else{
        let total = action.payload.price
        state.value.push({ ...action.payload, count: 1, total: total })
    }
    saveBasketToLocalStorage(state.value);
},
deleteBasket:(state,action)=>{
    state.value=state.value.filter(x=>x.id!==action.payload.id)
    saveBasketToLocalStorage(state.value);
},
increamentBasket:(state,action)=>{
    const existBasket=state.value.find(x=>x.id===action.payload.id)
    if (existBasket) {
        existBasket.count++
        existBasket.total = existBasket.price * existBasket.count
    }
    saveBasketToLocalStorage(state.value);
},
decrementBasket:(state,action)=>{
    const existBasket=state.value.find(x=>x.id===action.payload.id)
    if (existBasket.count===1) {
        state.value = state.value.filter(x => x.id != action.payload.id)
    }
    existBasket.count--
    existBasket.total = existBasket.price * existBasket.count
    saveBasketToLocalStorage(state.value);
}

    }

})

export const {addBasket,deleteBasket,increamentBasket,decrementBasket}=BasketSlice.actions
export default BasketSlice.reducer