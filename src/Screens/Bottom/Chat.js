import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import { Configuration } from 'openai-api';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const YOUR_OPENAI_API_KEY = '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'; // Replace with your actual API key

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hi Nova Here,\nHow Can I Help You?",
        createdAt: new Date(),
        user: {
          _id: 2, // System or bot user ID
          name: 'ChatGPT',
          avatar: require('../../Images/chat.png')
        },
      },
    ]);
  }, []);

  const sendMessage = async (messages = []) => {
    setLoading(true);
    const { text } = messages[0];

    const configuration = new Configuration({
      apiKey: YOUR_OPENAI_API_KEY,
    });

    const completionApi = new OpenAIApi(configuration).completions;

    try {
      const response = await completionApi.createCompletion({
        model: 'text-davinci-003', // Replace with the desired ChatGPT model (optional)
        prompt: text,
        max_tokens: 1024, // Adjust maximum response length if needed
        temperature: 0.7, // Adjust temperature parameter for response creativity
      });

      const newMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: response.data.choices[0].text.trim(),
        createdAt: new Date(),
        user: {
          _id: 2,
          avatar: require('../../Images/chat.png') // System or bot user ID
        },
      };

      setMessages(GiftedChat.append(messages, newMessage));
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={sendMessage}
      user={{
        _id: 1,
        avatar: require('../../Images/chat.png') // User ID
      }}
      isLoading={loading} // Optional: Display a loading indicator while fetching response
    />
  );
};

export default Chat;