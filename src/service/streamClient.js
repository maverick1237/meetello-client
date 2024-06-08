import { StreamChat } from 'stream-chat';
import { StreamVideoClient } from '@stream-io/video-react-sdk';

const apiKey = '6vvefh2yyyys';
const chatClient = StreamChat.getInstance(apiKey);
const videoClient = new StreamVideoClient({ 
  apiKey: apiKey,
});

export { chatClient, videoClient };
