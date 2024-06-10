import { HomeMaxRounded, Man2Rounded, Message,  VideocamOffRounded, VoiceChat } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Hidden } from '@mui/material'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

function LowerBar() {
  const [value , setValue] = useState();
  const navigate = useNavigate();



  const handleChange = (event,newValue)=>{
        setValue(newValue);
         navigate(`/${newValue}`)     

    }

  return (
           <Hidden mdUp>
                 <BottomNavigation 
         sx={{ position: 'fixed', bottom: -8, left: 0, right: 0 , background:"#FFFFE0"}} value={value} onChange={handleChange} 
        >
            <BottomNavigationAction label="Home" value="home" icon={<HomeMaxRounded />} 

            />
            <BottomNavigationAction label="Video" value="video-rooms" icon={<VideocamOffRounded />} />
            <BottomNavigationAction label="Chat" value="chat-rooms" icon={<Message />} />
            <BottomNavigationAction label="Voice" value="voice-rooms" icon={<VoiceChat />} />
            <BottomNavigationAction label="Profile" value="home" icon={<Man2Rounded />} />
        </BottomNavigation>
           </Hidden>  
                 
        
      

  )
}

export default LowerBar