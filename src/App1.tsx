import React, { useState } from 'react'
import { Box, Theme, styled } from '@mui/material'
import App from './App'

const Appc = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev)
  }

  return (
    <React.Fragment>
      <ChatButton onClick={toggleChat} isOpen={isChatOpen}>
        {isChatOpen ? 'Close Chat' : 'Open Chat'}
      </ChatButton>
      {isChatOpen && (
        <ChatWidget>
          <App />
        </ChatWidget>
      )}
    </React.Fragment>
  )
}

export default Appc

const ChatButton = styled('button')<{ isOpen: boolean }>(
  ({ theme, isOpen }) => `
      position: fixed;
      bottom:  16px;
      right: 30px;
      border: none;
      width:5px;
      height:5px;
      border-radius: 50%;
      background-color: ${theme.palette.secondary.light};
      color: ${theme.palette.getContrastText(theme.palette.secondary.light)};
      padding: 25px;
      cursor: pointer;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      z-index: ${isOpen ? '9999' : '999'};
      display: flex;
      align-items: center;
      justify-content: center;
    `
)

const ChatWidget = styled('div')<{
  theme?: Theme
}>(
  ({ theme }) => `
    position: fixed;
    bottom: 80px;
    right: 16px;
    border-radius: 8px;
    width: 500px;
    height: 700px;
    background-color:white;
    color: black;
    padding: 30px;
    z-index: 9999; /* Ensure the chat widget is above other elements */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  `
)
