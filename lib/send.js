'use strict';
const post = require('./requests').post;

function sendMessage(token, recipient, message, notificationType) {
  return post('/me/messages', token, {}, {
    recipient,
    message,
    notification_type: notificationType || 'REGULAR',
  });
}

function sendImage(token, recipient, url, notificationType) {
  return sendMessage(token, {
    recipient,
    message: {
      type: 'image',
      payload: { url },
    },
    notification_type: notificationType || 'REGULAR',
  });
}

module.exports = {
  message: sendMessage,
  image: sendImage,
};
