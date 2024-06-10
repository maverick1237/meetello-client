import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.meetello.live/api' : '/api';

class AuthService {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    async signup(data) {
        try {
            const response = await axios.post(`${API_URL}/users/auth`, data);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async login(data) {
        try {
            const response = await axios.post(`${API_URL}/users/auth/login`, data);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    async activateAccount(token) {
        try {
            const response = await axios.get(`${API_URL}/users/auth/activate?token=${token}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    dispatchLogin(userData) {
        this.dispatch(login(userData));
    }
}

const useAuthService = () => {
    const dispatch = useDispatch();
    return new AuthService(dispatch);
}

export default useAuthService;
