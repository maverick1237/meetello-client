import axios from "axios";

const API_URL = process.env.NODE_ENV === 'production' ? 'https://token.meetello.live/api' : '/api';

class TokenService {
  async getToken(userId) {
    try {
      const response = await axios.get(`${API_URL}/token/${userId}`);
      return response.data;
    } catch (err) {
      console.error('Error fetching token:', err);
      throw new Error('Could not fetch token');
    }
  }
}

const tokenService = new TokenService();

export default tokenService;
