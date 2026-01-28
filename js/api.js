const API = "http://localhost:8080";

function login() {
  fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  .then(r => r.json())
  .then(d => {
    localStorage.setItem("token", d.token);
    loginResult.innerText = "✅ Logged in!";
  })
  .catch(() => loginResult.innerText = "❌ Invalid credentials");
}

function loadProfile() {
  fetch(`${API}/api/user/profile`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(r => r.text())
  .then(t => profileResult.innerText = t)
  .catch(() => profileResult.innerText = "Unauthorized");
}
