import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartQuantity: 0, 
        cartProducts: [], 
        loading: false, 
        error: null, 
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true;
            state.error = null; // Clear any previous error
        },

        // Set error message
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload; // Capture error details
        },

        // Clear loading and error after success
        clearLoading: (state) => {
            state.loading = false;
            state.error = null;
        },

        // Add a product to the cart
        addToCart: (state, action) => {
            const productToBeAdded = action.payload;
            const requiredProduct = state.cartProducts
            .find((cProduct) => {return cProduct.id === productToBeAdded.id});
            if (requiredProduct===undefined){
                productToBeAdded.indQuantity = 1;
                state.cartQuantity++;
                state.cartProducts.push(productToBeAdded);
            }
        },

        // Increase the quantity of a product in the cart
        increaseQuantity: (state, action) => {
            const productId = action.payload.id;
            const product = state.cartProducts.find((cProduct) => cProduct.id === productId);
            if (product) {
                // If product exists in the cart, increase its quantity
                product.indQuantity += 1;
            } else {
                // If product doesn't exist, add it with a quantity of 1
                state.cartProducts.push({ ...action.payload, indQuantity: 1 });
                state.cartQuantity += 1;
            }
        },

        // Decrease the quantity of a product in the cart
        decreaseQuantity: (state, action) => {
            const productId = action.payload.id;
            const productIdx = state.cartProducts.findIndex((cProduct) => cProduct.id === productId);
            if (productIdx !== -1) {
                const product = state.cartProducts[productIdx];
                if (product.indQuantity > 1) {
                    product.indQuantity -= 1;
                } else {
                    state.cartProducts.splice(productIdx, 1);
                    state.cartQuantity -= 1;
                }
            }
        
        },
    },
});

export const action = cartSlice.actions;
export default cartSlice;