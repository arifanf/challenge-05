import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: null
    },
    reducers: {
        addItem: (state, action) => {
            state.item = action.payload.id
        }
    }
})

export default cartSlice