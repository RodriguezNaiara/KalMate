document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let savedPassword = localStorage.getItem(username);

  if(savedPassword === null) {
    alert("El usuario no existe.");
  } else if(savedPassword !== password) {
    alert("Contraseña incorrecta.");
  } else {
    alert("Bienvenido " + username + " 🎉");
    
    window.location.href = "index.html";
  }
});