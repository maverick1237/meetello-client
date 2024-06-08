import React, { useEffect, useState } from 'react';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Window } from 'stream-chat-react';
import { chatClient } from '../service/streamClient'; // Adjust the path as needed
import 'stream-chat-react/dist/css/index.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import tokenService from '../service/token';
import roomService from '../service/rooms';

const ChatRoom = () => {
  const [channel, setChannel] = useState(null);
  const { userId, roomId } = useParams();
  const { userData } = useSelector((state) => state.auth);
  
  useEffect(() => {   
    const initChat = async () => {
      const response = await tokenService.getToken(userId);
      const userToken = response.chatToken;
      const roomsResponse = await roomService.getRoom(roomId);
      console.log(roomsResponse.data);
      const roomData = roomsResponse.data;
      await chatClient.connectUser(
        {
          id: userId,
          name: userData.username,
          role: 'user',
        },
        userToken
      );

      const channel = chatClient.channel('messaging', roomId, {
        name: roomData.roomName,
      });

      await channel.watch();
      setChannel(channel);
    };

    initChat();

    return () => {
      chatClient.disconnectUser();
    };
  }, [userId, roomId, userData.username]);

  if (!channel) return <div>Loading...</div>;

  return (
    <Chat client={chatClient} theme="messaging light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
};

export default ChatRoom;
