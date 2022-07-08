// Client handler
const socket = io("http://localhost:3000");
//Get id of element
function getElement(id) {
  return document.getElementById(id);
}
const editor = getElement("editor");

//Register a keyup event
editor.addEventListener("keyup", (evt) => {
  const text = editor.value;
  socket.send(text);
});

//Handle the socket event on receiving new message
socket.on("message", (data) => {
  editor.value = data;
});
