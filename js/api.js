const API = "http://localhost:8080";

const tokenBadge = document.getElementById("tokenBadge");
const authBadge = document.getElementById("authBadge");
const apiBadge = document.getElementById("apiBadge");

function setBadge(el, cls, text){
  el.className = "badge " + cls;
  el.textContent = text;
}

function login(){
  fetch(`${API}/api/auth/login`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      username:username.value,
      password:password.value
    })
  })
  .then(r=>r.json())
  .then(d=>{
    localStorage.setItem("token", d.token);
    loginResult.textContent = "Logged in ✔";
    setBadge(tokenBadge,"ok","Token: set");
    decodeToken(d.token);
  });
}

function loadProfile(){
  fetch(`${API}/api/user/profile`,{
    headers:{ Authorization:"Bearer "+localStorage.getItem("token") }
  })
  .then(r=>{
    if(!r.ok) throw Error();
    setBadge(authBadge,"ok","Auth: authorized");
    return r.text();
  })
  .then(t=> profileResult.textContent = t)
  .catch(()=>{
    setBadge(authBadge,"err","Auth: unauthorized");
    profileResult.textContent = "401 Unauthorized";
  });
}

/* ==== JWT DECODE (CLIENT SIDE) ==== */
function decodeToken(token){
  const parts = token.split(".");
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));

  jwtHeader.textContent = JSON.stringify(header,null,2);
  jwtPayload.textContent = JSON.stringify(payload,null,2);
}

if(localStorage.getItem("token")){
  setBadge(tokenBadge,"ok","Token: set");
}
