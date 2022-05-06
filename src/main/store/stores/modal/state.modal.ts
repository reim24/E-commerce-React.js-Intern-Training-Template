import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import search from "../search/store.search";

const modal = createSlice({
    name: 'modal',
    initialState: '' as String,
    reducers: {
        setModal(_state, action: PayloadAction<string>) {
            return action.payload
        }
    }
})

export default modal
export const { setModal } = modal.actions