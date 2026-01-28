const API = "http://localhost:8080";

const tokenBadge = document.getElementById("tokenBadge");
const apiBadge = document.getElementById("apiBadge");

function setToken(cls, text){
  tokenBadge.className = "badge " + cls;
  tokenBadge.textContent = "Token: " + text;
}

function setApi(cls, text){
  apiBadge.className = "badge " + cls;
  apiBadge.textContent = "API: " + text;
}

function withLoading(btn, action){
  btn.classList.add("loading");
  btn.innerHTML += `<span class="spinner"></span>`;

  return action().finally(()=>{
    btn.classList.remove("loading");
    btn.innerHTML = btn.innerHTML.replace(/<span.*<\/span>/,'');
  });
}

function login(){
  const btn = event.target;
  setApi("warn","authenticating");

  return withLoading(btn, () =>
    fetch(`${API}/api/auth/login`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        username:username.value,
        password:password.value
      })
    })
    .then(r=>{
      if(!r.ok) throw Error();
      return r.json();
    })
    .then(d=>{
      localStorage.setItem("token", d.token);
      loginResult.textContent = "✅ Logged in";
      setToken("ok","set");
      setApi("ok","ready");
    })
    .catch(()=>{
      loginResult.textContent = "❌ Invalid credentials";
      setToken("err","invalid");
      setApi("err","error");
    })
  );
}

function loadProfile(){
  const btn = event.target;
  setApi("warn","requesting");

  return withLoading(btn, () =>
    fetch(`${API}/api/user/profile`, {
      headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
      }
    })
    .then(r=>{
      if(!r.ok) throw Error();
      return r.text();
    })
    .then(t=>{
      profileResult.textContent = t;
      setApi("ok","authorized");
    })
    .catch(()=>{
      profileResult.textContent = "Unauthorized";
      setApi("err","unauthorized");
    })
  );
}

// INIT
if(localStorage.getItem("token")){
  setToken("ok","set");
}else{
  setToken("muted","not set");
}
setApi("muted","idle");
