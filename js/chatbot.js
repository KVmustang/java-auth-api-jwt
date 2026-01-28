let open = false;
const chatWindow = document.getElementById("chatWindow");

const answers = {
  flow:"Client logs in → API validates credentials → JWT is issued → Token is sent on protected requests.",
  decode:"Decoding helps understand what data is stored in the token. Never trust it client-side.",
  401:"401 means Unauthorized. The token is missing, invalid or expired."
};

function toggleChat(){
  open = !open;
  chatWindow.style.display = open ? "block" : "none";
}

function ask(key){
  addBot(answers[key]);
}

function addBot(text){
  const div = document.createElement("div");
  div.className = "msg bot";
  div.textContent = text;
  chatWindow.appendChild(div);
}
