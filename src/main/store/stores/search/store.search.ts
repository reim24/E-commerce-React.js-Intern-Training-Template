
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const search = createSlice({
    name: 'search',
    initialState: '' as string,
    reducers: {
        setSearch(_state, action: PayloadAction<string>) {
            return action.payload;

        }
    },
});

export default search;

export const { setSearch } = search.actions;
