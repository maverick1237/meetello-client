import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'

import Landing from './pages/Landing.jsx'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Auth from './pages/Auth.jsx'
import Layout from './Layout.jsx'
import VideoRooms from './pages/VideoRooms.jsx'
import ChatRooms from './pages/ChatRooms.jsx'
import VoiceRooms from './pages/VoiceRooms.jsx'
import Settings from './pages/Settings.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import ProtectedRoutes from './routes/ProtectedRoutes.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Landing />} />
      <Route path='/auth' element={<Auth/>} />
      <Route element={<ProtectedRoutes/>}>

      <Route element={<Layout />} >
          <Route path='/home' element={<Home />}/>
          <Route path='/video-rooms' element={<VideoRooms/>}/> 
          <Route path='/chat-rooms' element={<ChatRooms/>}/>
          <Route path='/voice-rooms' element={<VoiceRooms/>}/>
          <Route path='/settings' element={<Settings />}/>
          </Route>
      </Route>
     
    </Route>  
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <PersistGate persistor={persistor} loading={null}>

        <RouterProvider router={router} />
    </PersistGate>

  </Provider>
  
)
