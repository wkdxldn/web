// get friend list and message list
const friendList = document.getElementById('friend-list');
const messageList = document.getElementById('message-list');

// add friend
const addFriendForm = document.getElementById('add-friend-form');
addFriendForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const friendNameInput = document.getElementById('friend-name');
  const friendName = friendNameInput.value;
  if (friendName) {
    const newFriend = document.createElement('li');
    const newFriendLink = document.createElement('a');
    newFriendLink.textContent = friendName;
    newFriendLink.href = '#';
    newFriend.appendChild(newFriendLink);
    friendList.appendChild(newFriend);
    friendNameInput.value = '';
  }
});

// send message
const sendMessageForm = document.getElementById('send-message-form');
sendMessageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const messageInput = document.getElementById('message');
  const message = messageInput.value;
  if (message) {
    const newMessage = document.createElement('li');
    const newMessageLink = document.createElement('a');
    newMessageLink.textContent = `From Jane Doe: ${message}`;
    newMessageLink.href = '#';
    newMessage.appendChild(newMessageLink);
    messageList.appendChild(newMessage);
    messageInput.value = '';
  }
});
  