import { createSlice } from '@reduxjs/toolkit';

export const FollowListSlice = createSlice({
    name: 'FollowList',
    initialState: [],
    reducers: {
        plusFollowList(state, action) {
            return state = [...state, action.payload];
        },
        minusFollowList(state, action) {
            return state = state.filter(user => user !== action.payload);
        },
    }
});
export const { plusFollowList, minusFollowList } = FollowListSlice.actions;
