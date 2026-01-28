let open = false;

function toggleChat() {
  open = !open;
  document.getElementById("chatWindow").style.display = open ? "block" : "none";
  if (open) explain();
}

function explain() {
  const chat = document.getElementById("chatWindow");
  const msgs = [
    "This project demonstrates a JWT authentication flow.",
    "The backend is built with Java and Spring Boot.",
    "Login generates a JWT token.",
    "Protected routes require the token.",
    "Frontend is hosted on GitHub Pages 🚀"
  ];

  msgs.forEach((m,i) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "msg bot";
      div.innerText = m;
      chat.appendChild(div);
    }, i * 800);
  });
}
