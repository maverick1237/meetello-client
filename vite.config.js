import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig((mode)=>{

  // eslint-disable-next-line no-undef
  //const env = loadEnv(mode, process.cwd());
  const API_URL = process.env.NODE_ENV === 'production' ?'http://165.22.214.252:8000' : 'http://localhost:8000';
  return{
    plugins: [react()],
    server:{
      proxy:{
        '/api':API_URL
      }
    },
    base: "/meetello-client/"
}
  
  
})
