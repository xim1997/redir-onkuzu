import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    metadata: {}
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        update: (state, action) => {
            state.metadata = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { update} = counterSlice.actions

export default counterSlice.reducer