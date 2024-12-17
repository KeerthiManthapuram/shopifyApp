import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import Cookies from 'js-cookie'

export const login = createAsyncThunk('auth/login', async(userData, thunkAPI) => {
    try{
        const apiUrl = 'https://fakestoreapi.com/users';
        const response = await fetch(apiUrl);
        const users = await response.json();
        const user = users.find((user) => user.username === userData.name 
        && user.email === userData.email);
        if (!user){
            throw new Error('Invalid Credentials');
        }
        const token = "fake_jwt_token";
        Cookies.set('jwt_token', token, {expires: 1});
        return { user, token };

    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user : {
            name: '',
            email: '',
            
        },
        error: null,
        loading: false,
    },
    reducers: {
        updateField: (state, action) => {
            const { field, value } = action.payload; 
            state.user[field] = value;
        },
        
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = { name: '', email: ''};
            Cookies.remove('jwt_token');
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            const userFromApi = action.payload.user;
            state.name = userFromApi.username;
            state.loading = false;
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.payload || 'Something went wrong!';
            state.loading = false;
        })
    }
});

export const { updateField, logout } = authSlice.actions;

export default authSlice
