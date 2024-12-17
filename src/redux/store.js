import {configureStore} from '@reduxjs/toolkit'

import Productslice from './productSlice'

import cartSlice from './cartSlice'

import authSlice from './authSlice'


const store = configureStore({
    reducer : {
        productState: Productslice.reducer,
        cartReducer: cartSlice.reducer,
        auth: authSlice.reducer,
    }
})

export default store