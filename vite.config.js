import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line no-unused-vars
export default defineConfig(({ mode}) => {
  // eslint-disable-next-line no-undef
  const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.meetello.live' : 'http://localhost:8000';
  const TOKEN_URL = process.env.NODE_ENV === 'production' ? 'https://token.meetello.live' : 'http://localhost:3000';
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true,
          secure: false
        },
        '/api/token':{
          target: TOKEN_URL,
          changeOrigin: true,
          secure: false
        }

      }
    }
  };
});
