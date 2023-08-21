// Coleta inputs do login-form
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const user = [];

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const oldUser = {
      email: email,
      password: password,
    };

    user.push(oldUser);

    alert(`Seja bem vindo ${email}!`)
    console.log(user);

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
});

// Coleta inputs do register-form

document.addEventListener("DOMContentLoaded", function () {
  const cadastroForm = document.getElementById("register-form");
  const usuario = [];

  cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const newUsuario = {
      name: nome,
      email: email,
      password: password,
    };

    usuario.push(newUsuario);

    alert(`Usuário ${nome} cadastrado com sucesso!`)

    console.log(usuario);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
});
