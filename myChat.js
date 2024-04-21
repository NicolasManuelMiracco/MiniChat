// Create a WebSocket instance, connecting to the specified server URL
const socket = new WebSocket('wss://ws.postman-echo.com/raw'); // Replace with your WebSocket server URL




// DOM elements for interaction
const messagesList = document.getElementById('messages');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');




// Event handler when the WebSocket connection is established
socket.onopen = () => {
    console.log('WebSocket connection established.');
};




// Event handler for incoming WebSocket messages
socket.onmessage = (event) => {
    // Extract the message from the event data
    const message = event.data;




    // Create a new list item for the message and append it to the messages list
    const newMessage = document.createElement('li');
    newMessage.textContent = message;
    messagesList.appendChild(newMessage);
};




// Event listener for the form submission
messageForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();




    // Get the message from the input field
    const message = messageInput.value;




    // Send the message through the WebSocket connection
    socket.send(message);




    // Clear the input field after sending the message
    messageInput.value = '';
});
