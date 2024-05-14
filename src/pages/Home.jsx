import React, { useEffect, useState ,useMemo} from 'react'
import Todos from '../components/Todos'
import { faMessage, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { Divider } from '@mui/material'
import Container from '../components/Container'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import TodoContainer from '../components/TodoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { initRooms } from '../store/roomSlice'

function Home() {
  const [user , setUser] = useState('Adbhut') 
  const {userData, isLoggedIn} = useSelector(state => state.auth)
  const {roomsData} = useSelector(state => state.room)

  useMemo(() => {
    if (isLoggedIn) {
      setUser(userData.username);
    }
  }, [setUser, userData, isLoggedIn, roomsData]);
  return (

    <div className='mx-8 overflow-y-auto no-scrollbar'>
      <div className='mt-[10vh]'>
        <h1 className='text-2xl text-black font-semibold text-pretty leading-tight text-justify'>Welcome back  , {user} !
        </h1>
       
      </div>
      <Divider 
      width='30%'
      className='mt-2' color='black' />
      <div className='flex items-center '>
        <TodoContainer   className='mr-[6vw] text-green-800 border-green-800 bg-green-400' >
        <Todos  />
        </TodoContainer>
       
        <Divider orientation='vertical' flexItem />
       
        <div className='ml-10 grid grid-cols-2 grid-rows-2 gap-2'>
        <Container  type='video'  icon={faVideoCamera} className="min-w-[100%] 
         p-5 rounded-lg
          text-blue-600 bg-blue-300 border-blue-600"  roomsData={roomsData}/>
            <Container type='chat'  icon={faMessage} className="min-w-[100%] 
         p-5 rounded-lg 
         text-pink-600 bg-pink-300 border-pink-600
         "
         roomsData={roomsData}
         />
          <Container assetColor='red' type='voice'  icon={faVoicemail} className="min-w-[100%] 
         p-5 rounded-lg 
         text-red-600 bg-red-300 border-red-600"
         roomsData={roomsData}/>
        </div>
      </div>
      <div className='mt-20 mb-5'>
      <Divider width='100%' color="black"  />
      </div>
      <h1 className='mb-2 text-2xl text-slate-800'> Something you must know!</h1>
      <div className='grid grid-flow-col grid-cols-2 grid-rows-2  gap-2 mb-8'>
        <TodoContainer className='text-green-950 bg-green-300 border-green-950' >
        <h1>
        Our Video Room feature allows for real-time, face-to-face communication. Users can join public video rooms for group discussions or create private video rooms for more personal interactions. This feature supports high-quality video and audio, screen sharing, and a variety of other tools to enhance your communication experience. With an intuitive interface and powerful functionality, our Video Room feature brings a new level of interaction to online communication.
          </h1>
        </TodoContainer >
        <TodoContainer className='text-red-950 bg-red-300 border-red-950'>
        <h1>
        Our Voice Room feature offers a space for real-time, audio-based communication. Users can join public voice rooms to engage in discussions on various topics, or create private voice rooms for more personal or focused conversations. This feature supports high-quality audio, mute/unmute options, and the ability to invite others to join. With a simple and intuitive interface, our Voice Room feature brings a new dimension to online communication, making it more dynamic and immersive.
          </h1> 
        </TodoContainer>
        <TodoContainer className='text-pink-900 bg-pink-300 border-pink-900'>
        <h1>
        Our Chat Room feature provides a platform for real-time, interactive communication. Users can join public chat rooms based on their interests or create private chat rooms to connect with friends, family, or colleagues. The feature supports text messages, multimedia sharing, and even voice messages. With a user-friendly interface and robust functionality, our Chat Room feature makes online communication seamless and engaging.
          </h1>
        </TodoContainer>
        
      </div>
    </div>
  )
}

export default Home