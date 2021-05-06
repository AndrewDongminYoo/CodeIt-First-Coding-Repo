const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }
  input.value = '';
}
function sendMyTextByEnter (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    sendMyText();
    event.preventDefault();
    
  }
}

send.addEventListener('click', sendMyText);
input.addEventListener('keypress', sendMyTextByEnter);