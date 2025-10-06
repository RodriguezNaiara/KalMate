document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  
  if(localStorage.getItem(username)) {
    alert("Ese usuario ya existe, elige otro.");
  } else {
  
    localStorage.setItem(username, password);
    alert("Registro exitoso 🎉 Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
  }
});