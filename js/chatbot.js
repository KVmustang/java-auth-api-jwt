let open = false;

const chatWindow = document.getElementById("chatWindow");

const answers = {
  jwt: "JWT stands for JSON Web Token. It allows secure, stateless authentication between client and server.",
  login: "You send username and password. The backend validates them and returns a signed JWT token.",
  security: "Yes. Passwords are encrypted and endpoints are protected using Spring Security.",
  stack: "Backend: Java, Spring Boot, JWT. Frontend: HTML, CSS, JavaScript."
};

function toggleChat(){
  open = !open;
  chatWindow.style.display = open ? "block" : "none";
}

function ask(key){
  addUserMessage(key);
  setTimeout(() => addBotMessage(answers[key]), 500);
}

function addUserMessage(text){
  const div = document.createElement("div");
  div.className = "msg user pop";
  div.style.color = "#22c55e";
  div.textContent = label(text);
  chatWindow.appendChild(div);
  scroll();
}

function addBotMessage(text){
  const div = document.createElement("div");
  div.className = "msg bot typing";
  chatWindow.appendChild(div);
  scroll();

  let i = 0;
  const interval = setInterval(() => {
    div.textContent += text[i];
    i++;
    if(i >= text.length){
      clearInterval(interval);
      div.classList.remove("typing");
      div.classList.add("pop");
    }
  }, 25);
}

function label(key){
  return {
    jwt:"What is JWT?",
    login:"How does login work?",
    security:"Is this secure?",
    stack:"Which technologies?"
  }[key];
}

function scroll(){
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
