/* eslint-disable no-unused-vars */
import React, { useState , useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard, faArrowLeft, faArrowRight, faGear, faHome, faList12, faMessage, faRecordVinyl, faVideo} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem, Paper, Popper } from '@mui/material';
import { logout } from '../store/authSlice';
import { clearRooms } from '../store/roomSlice';

function Sidebar() {
    const [user,setUser] = useState('${notdefined}')
    const {userData , isLoggedIn} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate =useNavigate();

    useMemo(() => {
        if(isLoggedIn){
            setUser(userData.username)
        }
    },[userData,isLoggedIn,user])
    const Menus = [
        {title:"Home",icon:faHome, pageName:"/home"},
        {title:"Video Rooms",icon:faVideo ,gap:true , pageName:"video-rooms"},
        {title:"Messaging Rooms" , icon:faMessage , pageName:"chat-rooms"},
        {title:"Voice Rooms" ,icon: faRecordVinyl, pageName: "voice-rooms" },
        {title:"Settings" ,icon:faGear,gap:true , pageName: "settings" },
        
    ]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
    };
    const handleClose = () => {
        
        setAnchorEl(null);
        dispatch(logout());
        dispatch(clearRooms());
        localStorage.clear();
        navigate('/auth');
        setOpen(false);

    };

    const [isSideBarOpen,setIsSideBarOpen] = useState(true)

    

return (
    <div className={`${isSideBarOpen ? 'w-44' : 'w-20'} duration-300 bg-blue-900 border-r-2 border-white text-2xl text-white  min-h-[calc(100vh-4rem)] pt-5 relative flex flex-col justify-between`}>
            
            <FontAwesomeIcon onClick={()=> setIsSideBarOpen(!isSideBarOpen)} icon={isSideBarOpen ? faArrowLeft : faArrowRight} className={` duration-300 absolute cursor-pointer -right-3 top-2 bg-white  text-black rounded-full border-2 p-1 text-lg`} />
            <ul className='pt-2'>
                    {Menus.map((menu,index)=>(
                         
                         <Link key={index} to={menu.pageName}> 
                         <li key={index} className={`flex gap-x-4 items-center cursor-pointer  mx-2  p-3 hover:bg-[rgba(255,255,255,0.17)] rounded-lg ${menu.gap ? 'mt-9':'mt-2'}`}> 
                                    <FontAwesomeIcon icon={menu.icon}/>
                                    <h1 className={`${!isSideBarOpen && 'scale-0'} duration-200 ${isSideBarOpen?'text-lg':'text-[0px]'} `}>{menu.title}</h1>
                         </li>
                         </Link>
                            
                    ))}
                    
                    
            </ul>
            <ul>
                <li className={`flex gap-x-4 items-center cursor-pointer mx-2 p-3 hover:bg-[rgba(255,255,255,0.17)] rounded-lg mt-auto`} onClick={handleClick}>
                    <div className="rounded-full overflow-hidden w-8 h-8">
                        <img src="/public/podcastbg.webp" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <h1 className={`${!isSideBarOpen && 'scale-0'} duration-200 ${isSideBarOpen ? 'text-lg' : 'text-[0px]'}`}>{user}</h1>
                </li>   
            </ul>
              <Popper open={open} anchorEl={anchorEl} placement='right-start' >
                 <Paper>
                 <MenuItem onClick={handleClose}>Logout</MenuItem>
                 </Paper>
                </Popper>          
            
                   
    </div>
)
}

export default Sidebar