//async action creator
import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

// export const fetchUsers = () => async (dispatch : AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response  = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(getErrorMessage(e)));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async(_, thunkAPI) => {
        try {
            const response  = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Can not load data")
        }
    }
)