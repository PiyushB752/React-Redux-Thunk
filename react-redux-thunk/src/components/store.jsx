import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('counter/fetchData', async () => {
      const data = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data.data
})

const counter = createSlice({
    name:'counter',
    initialState:{
        user:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.user = action.payload
        })
    }
})
const store = configureStore({
    reducer:counter.reducer
})

export default store