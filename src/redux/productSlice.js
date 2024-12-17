
import { createSlice } from '@reduxjs/toolkit'

const Productslice = createSlice({
    name: 'productslice',
    initialState : {
        products: [],
        loading: true, 
        error: false,
        details: {},
        searchValue: '',
        category: '',
        priceRange: '',
    },
    reducers: {
        productLoading: (state) => {
            state.loading = true;
            state.error = false;
            state.products=[];
        },
        productError: (state) => {
            state.loading = false;
            state.error = true;
        },
        productData: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        productDetails: (state, action) => {
            state.loading = false;
            state.details = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },

    }
})

export const { setSearchValue, setCategory, setPriceRange } = Productslice.actions;

export default Productslice