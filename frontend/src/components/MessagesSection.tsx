import React from 'react';
import Messages from './Messages';

const MessagesSection = () => {
  return (
    <div className="messages-section">
      <button className="messages-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x-circle">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
      <div className="projects-section-header">
        <p>Device Notifications</p>
      </div>
      
      <Messages />

    </div>
  );
};

export default MessagesSection;
