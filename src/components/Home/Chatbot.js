import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
const ChatbotComponent = () => {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#00bfff',
    headerFontColor: '#fff',
    headerFontSize: '18px',
    botBubbleColor: '#00bfff',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const steps = [
    {
      id: 'greeting',
      message: 'Hi! How can I assist you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'faq1', label: 'Return Policy', trigger: 'faq1' },
        { value: 'faq2', label: 'Order Tracking', trigger: 'faq2' },
        { value: 'faq3', label: 'Payment Methods', trigger: 'faq3' },
        { value: 'faq4', label: 'Order Cancellation', trigger: 'faq4' },
        { value: 'faq5', label: 'International Shipping', trigger: 'faq5' },
      ],
    },
    {
      id: 'faq1',
      message: 'What is your return policy?',
      trigger: 'options',
    },
    {
      id: 'faq2',
      message: 'How can I track my order?',
      trigger: 'options',
    },
    {
      id: 'faq3',
      message: 'What payment methods do you accept?',
      trigger: 'options',
    },
    {
      id: 'faq4',
      message: 'Can I cancel my order?',
      trigger: 'options',
    },
    {
      id: 'faq5',
      message: 'Do you offer international shipping?',
      trigger: 'options',
    },
  ];

  useEffect(() => {
    const openChatbot = () => {
      setTimeout(() => {
        const chatbotIcon = document.querySelector('.rsc-float-button');
        const chatbot = document.querySelector('.rsc-container');
        if (chatbotIcon && chatbot) {
          chatbot.style.zIndex = '9999';
          chatbotIcon.click();
        }
      }, 1000); // Adjust the delay as needed
    };

    openChatbot();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating
        style={{
          height: '80%',
          zIndex: '9999',
        }}
      />
    </ThemeProvider>
  );
};

export default ChatbotComponent;
