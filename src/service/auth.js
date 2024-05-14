import axios from "axios";


const API_URL = process.env.NODE_ENV === 'production' ? 'http://165.22.214.252:8000/api' : '/api';

export class AuthService {


    //signup function
    async signup(data){
        try{
            const response = await axios.post(`${API_URL}/users/auth`, data);
            return response;
        }catch(error){
            console.error(error);
        }
    }

    async login(data){
        try{
            const response = await axios.post(`${API_URL}/users/auth/login`, data);
            return response;
        }catch(error){
            console.error(error);
        }
    }


}

const authService = new AuthService();

export default authService;

