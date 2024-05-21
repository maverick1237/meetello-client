// Code for the rooms service

import axios from "axios";

const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.meetello.live/api' : '/api';


export class RoomService{
    async getAllRooms(){
        try {
            const response = axios.get(`${API_URL}/rooms`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createRoom(data){
        try {
            const response = axios.post(`${API_URL}/rooms`, data,{headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }});
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteRoom(roomId){
        try{
             const response = axios.get(`${API_URL}/rooms/delete/${roomId}`,{headers:{
                'Content-Type': 'application/json',
             }})
             return response;
        }
        catch(error){
            console.log(error);
        }
    }

    async joinRoom(roomId){
        try{
            const response = axios.get(`${API_URL}/rooms/join/${roomId}`,{headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }
        )
        return response
        }catch(error){
            console.log(error)
        }
    }

}

const roomService = new RoomService();

export default roomService;