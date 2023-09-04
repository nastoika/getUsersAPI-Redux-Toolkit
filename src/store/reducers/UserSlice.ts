import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
    count: number,
}

const initialState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    //аналогично switch case
    reducers : {
        increment(state, action : PayloadAction<number>) {
            state.count += action.payload;
        }
    }
})

export default userSlice.reducer;