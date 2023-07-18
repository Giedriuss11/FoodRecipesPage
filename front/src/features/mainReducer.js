import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: []
    },
    reducers: {
        usersArray: (state, {payload}) => {
            state.data = payload
        }
    }
})

export const {usersArray} = userSlice.actions

export default userSlice.reducer;