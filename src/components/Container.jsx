import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Container = ({  children, className="", type , icon ,roomsData=[]}) => {
    const roomTypeCount = roomsData.filter(room => room.roomType === type).length;
    return (
        <div className={`${className}  flex items-center bg-opacity-20  border-2 ` } >
            <div >
            < FontAwesomeIcon icon={icon} className={`text-4xl  rounded-full   ${type==='video'? 'border-blue-600' : type==='chat' ? 'border-pink-600' : 'border-red-600' } border-2 p-2 mr-2 `}/>
            </div>
            <div className={``}>
            <h2 >{type} Rooms</h2>
            <p>Stats: Created rooms {roomTypeCount}, etc.
            
            </p>
            </div>
            {children}
        </div>
    );
};


export default Container;