import React, { useEffect } from 'react';
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamTheme,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useNavigate } from 'react-router-dom';


const MyUILayout = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const navigate = useNavigate();
  console.log(callingState);

  useEffect(() => {
    if(callingState ===CallingState.LEFT){
      navigate('/home');
    }
  }, [callingState,navigate]);

  if (callingState !== CallingState.JOINED) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  

  return (
    <StreamTheme>
      <div className="absolute bottom-0 top-0 w-full flex justify-center text-white bg-gray-900  py-2">
        <SpeakerLayout participantsBarPosition='bottom' />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <CallControls />
      </div>
    </StreamTheme>
  );
};

export default MyUILayout;
