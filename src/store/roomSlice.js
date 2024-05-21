
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roomsData:[],
    isLoggedIn: false,
}

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        initRooms: (state ,action) => {
            state.roomsData = action.payload;
            state.isLoggedIn = true;
        },
        clearRooms:(state)=>{
            state.roomsData = [];
        },
        createRoom: (state, action) => {
            const newRoom = action.payload;
            state.roomsData.push(newRoom);
        },
        deleteRoom: (state, action) => {
            const roomId = action.payload;
            state.roomsData =  state.roomsData.filter(room => room.roomId !== roomId);
        },
        editRoom: (state, action) => {
            const { roomId, updatedRoom } = action.payload;
            const roomIndex = state.roomsData.findIndex(room => room.id === roomId);
            if (roomIndex !== -1) {
                state.roomsData[roomIndex] = updatedRoom;
            }
        },
    },
});

export const { createRoom, deleteRoom, editRoom ,initRooms , clearRooms} = roomSlice.actions;

export default roomSlice.reducer;