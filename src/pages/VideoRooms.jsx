/* eslint-disable no-unused-vars */
import React ,{useEffect} from 'react'
import HeadTile from '../components/HeadTile'
import EmptyRooms from '../components/EmptyRooms'
import { Modal } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createRoom } from '../store/roomSlice'
import ContentCard from '../components/ContentCard'

import roomService from '../service/rooms'


function VideoRooms() {
  const[ isModalOpen, setIsModalOpen] = React.useState(false)
  
  const { register, handleSubmit , reset , formState :{errors}} = useForm()

  const {roomsData} = useSelector(state => state.room);
  const {userData,isLoggedIn} = useSelector(state => state.auth); 
  const [createdRoom , setCreatedRoom] = React.useState({})




  const dispatch = useDispatch();
  const handleOpen = () => {
    console.log('Create Room modal open');
    setIsModalOpen(true)
  }
  const handleClose = () => {
    console.log('Create Room modal closed');
    reset()
    setIsModalOpen(false)
  }
  const handleFormSubmit = async (data) => {
    data['roomType'] = 'video';
    console.log(data);

    const response = await roomService.createRoom(data);
    response.data['roomType'] = 'video';
    console.log(response.data);
    setCreatedRoom(response.data);
    dispatch(createRoom(response.data));
    handleClose();
  }

  useEffect(() => {
     console.log('Fetching rooms data');
  },[createdRoom, roomsData])

  return (
    <div className='flex flex-col w-full h-full overflow-y-auto no-scrollbar'>
      <div>

      <HeadTile title={"Video Rooms"} onClick={handleOpen} />
      <Modal
  open={isModalOpen}
  onClose={handleClose}
  aria-labelledby='modal-modal-title'
  aria-describedby='modal-modal-description'
  className="flex items-center justify-center" 
>
  <div className='bg-white  rounded-2xl shadow-xl w-[30%]'>
  <form onSubmit={handleSubmit(handleFormSubmit)} className="p-5">
  
  <div className='flex flex-col w-[100%] h-[100%] justify-between'>
    <div >

      <label htmlFor="roomName" className="text-black">Name</label>
      <input type="text" 
      {...register('roomName' ,{
        required: true,
        minLength: 5,
        pattern: /^[A-Za-z0-9\s]+$/i
      })} 
      placeholder="Room Name" className="mb-2 w-[100%] rounded-lg p-2" />
      {errors.roomName && <p className="text-red-500">Room name must contain at least 5 alphabetic characters.</p>}
    </div>
    <div >
      <label htmlFor="roomDescription" className="text-black">Description</label>
      <input type="text" {...register('roomDescription')} placeholder="Room Description" className="mb-2 w-[100%] rounded-lg p-2 border-gray-400 border-2" />
    </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-[100%] mt-5">Create</button>
  </div>
 </form>
  </div>
 
</Modal>
      </div>
      <div className='flex flex-col w-[100%] h-[100%]  ml-5'>
   
   <div className={`grid grid-cols-3 gap-4 room-contianer-div`}>
   {roomsData.filter(room=> room.roomType==='video').length > 0 ? 
       roomsData.map((room,index) => {
         if(room.roomType === 'video'){
           return (
             <div key={index} >
               <ContentCard roomData={room} userData={userData} />
             </div>
           )
         }
       }) :
       <div className='h-[100%] w-[100%]  mx-[40%]'>
         <EmptyRooms />
       </div>}
   </div> 
  </div>

    </div>
  )
}

export default VideoRooms 
