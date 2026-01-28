let open = false;

function toggleChat(){
  open = !open;
  chatWindow.style.display = open ? "block" : "none";

  if(open){
    explain();
  }
}

function explain(){
  chatWindow.innerHTML = "";

  const messages = [
    "I’m JWT Buddy ❓",
    "This project demonstrates JWT authentication.",
    "Backend: Java + Spring Boot.",
    "Login generates a token.",
    "Protected routes require Bearer token.",
    "Frontend runs on GitHub Pages 🚀"
  ];

  messages.forEach((msg,i)=>{
    setTimeout(()=>{
      const div = document.createElement("div");
      div.className = "msg bot";
      div.textContent = msg;
      chatWindow.appendChild(div);
    }, i * 700);
  });
}
