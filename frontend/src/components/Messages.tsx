import React from 'react';

const messagesData = [
  {
    name: 'Office Door 1',
    message: 'Placeholder for a message about the doors state.',
    date: 'September, 12',
    imageUrl: 'https://prod-trudoor-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/04/21112241/commercial-office-wood-door-wth-glass-e1593365212506.jpg'
  },
];

const Messages = () => {
  return (
    <div className="messages">
      {messagesData.map((message, index) => (
        <div className="message-box" key={index}>
          <img src={message.imageUrl} alt="profile image" />
          <div className="message-content">
            <div className="message-header">
              <div className="name">{message.name}</div>
              <div className="star-checkbox">
                <input type="checkbox" id={`star-${index}`} />
                <label htmlFor={`star-${index}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </label>
              </div>
            </div>
            <p className="message-line">{message.message}</p>
            <p className="message-line time">{message.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
