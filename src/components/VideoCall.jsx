import React, { useEffect, useState } from 'react';
import {
  StreamVideo,
  StreamVideoClient,
  StreamCall,
} from '@stream-io/video-react-sdk';
import { useParams } from 'react-router-dom';
import MyUILayout from './MyUILayout';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { useSelector } from 'react-redux';
import tokenService from '../service/token';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {
  const { userId, roomId } = useParams();
  const apiKey = '6vvefh2yyyys';
  const [client, setClient] = useState(null);
  const [call, setCall] = useState(null);
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.auth);
  const username = userData.username;

  useEffect(() => {
    const fetchTokenAndSetupCall = async () => {
      try {
        const response = await tokenService.getToken(userId);
        const token = response.videoToken;

        const user = {
          id: userId,
          name: username,
          image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
        };

        const client = new StreamVideoClient({ apiKey, user, token });
        const call = client.call('default', roomId);
        await call.join({ create: true });

        setClient(client);
        setCall(call);
      } catch (error) {
        console.error('Failed to fetch token or setup call:', error);
      }
    };

    fetchTokenAndSetupCall();

    return () => {
      if (call) {
        call.leave().then(() => {
          navigate('/home');
        }).catch(error => {
          console.error('Error leaving call:', error);
        });
      }
    };
  }, [roomId, userId, username, apiKey, navigate]);

  
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <StreamVideo client={client} className="w-[100%] h-[90%] absolute">
          <StreamCall call={call}>
            <MyUILayout />
          </StreamCall>
        </StreamVideo>
      </div>
      <div className="participants-container">
       
      </div>
    </div>
  );
};

export default VideoCall;
