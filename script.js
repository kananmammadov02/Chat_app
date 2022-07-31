let addMessageButton = document.getElementById("addButton");
let addMessageEnter= document.getElementById("myInput")
let messageContainer = document.getElementById("messageContainer");
let myInput = document.getElementById("myInput");
checkList();
function checkList() {
  if (messageContainer.children.length == 0) {
    messageContainer.className = "empty-message";
  }
}
function sendMessage(){
  messageContainer.className = "add-message";
  let paragraph = document.createElement("p");
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    checkList()
  } else {
    messageContainer.appendChild(paragraph);
    paragraph.innerHTML = myInput.value;
    myInput.value = "";
  } 
}
addMessageButton.addEventListener("click", function () {
  sendMessage()
});
addMessageEnter.addEventListener("keyup", function (event) {
  if(event.which === 13){
  sendMessage()
  }
});
