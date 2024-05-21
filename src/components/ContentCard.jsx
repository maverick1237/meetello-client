/* eslint-disable react/prop-types */

import { Avatar, Button, Card,  CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Modal, Paper, Popper, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../store/roomSlice';
import roomService from '../service/rooms';


function ContentCard({roomData , userData}) {

    const initials = userData.username.substring(0,2).toUpperCase();
  
    //const {roomsData} = useSelector(state => state.room);
    const [anchorEl, setAnchorEl] = React.useState(null); 
    const[open,setOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const dispatch = useDispatch();



  


    const handleIconButtonOpen = (event) => {

          setAnchorEl(event.currentTarget);
          setOpen((prev) => !prev); 
    }


    const handleIconButtonDelete = () =>{
            console.log('Delete Room is clicked');
            console.log(roomData.roomId);
            setIsModalOpen(true);
            console.log('Create Room modal open');
            setOpen(false);
    }
    const handleClose = () => {
        
        setIsModalOpen(false);

    }

    const handleDeleteRoom = ()=>{
        console.log('Delete Room is clicked');
        console.log(roomData.roomId);
        roomService.deleteRoom(roomData.roomId);
        dispatch(deleteRoom(
            roomData.roomId
        ))
        setIsModalOpen(false);
        handleClose();
    }

     const handleJoinClick = ()=>{
        console.log('Join Room is clicked');
        console.log(roomData.roomId);
        const response = roomService.joinRoom(roomData.roomId);
        console.log(response);
     }  


  return (
    <>
      <Card sx={{ maxWidth: 345  , maxHeight: 500}}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="name-avatar">{initials}</Avatar>
        }
        action={
            <IconButton aria-label="settings" onClick={handleIconButtonOpen}>
                <MoreVertIcon />
            </IconButton>
        }
        title={roomData.roomName}

        />
        <CardMedia 
        component="img"
        height={194}
        image='/podcastbg.webp'
        alt='RoomBackgroundImage'
        />
        <CardContent 
        height={100}
        >
        <Typography variant="body2" color="text.secondary" style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
}}>
          {roomData.roomDescription}
        </Typography>
      </CardContent>
        
      <CardActions>
        <Button size="small" color="primary" onClick={handleJoinClick}>
          Join Room
        </Button>
      </CardActions>      
        
    <Popper open={open} anchorEl={anchorEl} placement='right-start' >
      <Paper className={`${userData.userId===roomData.roomAdmin.userId? '' : 'hidden'}`}>
        <MenuItem onClick={handleIconButtonDelete}  > <h1 className='text-pink-500'>Delete</h1></MenuItem>
      </Paper>
    </Popper> 
    <Modal 
    open={isModalOpen}
    onClose={handleClose}
    aria-labelledby='modal-modal-title'
    aria-describedby='modal-modal-description'
    className="flex items-center justify-center">
    <div className='flex flex-col w-[30%] p-5 bg-white rounded-xl'>
       <h1>
        Do you want to delete this room?
        </h1>
        <div className='flex justify-between'>
        <Button onClick={handleDeleteRoom} variant='contained' color='error'>Delete</Button>
        <Button onClick={handleClose} variant='contained' color='primary'>Cancel</Button> 
        </div>
    </div>
</Modal>
    </Card>
    
    </>
  )  
}

export default ContentCard