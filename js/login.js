/* Portal UNAB · lógica de la portada (login). */
(function () {
  var form = document.getElementById('login-form');
  var msg = document.getElementById('login-msg');
  var user = document.getElementById('usuario');
  var pass = document.getElementById('clave');
  var params = new URLSearchParams(location.search);
  var destino = Auth.nextSeguro(params.get('next')) || 'pages/inicio.html';

  function mostrar(texto, tipo) {
    msg.textContent = texto;
    msg.className = 'form-msg' + (tipo ? ' is-' + tipo : '');
  }

  /* Si ya hay sesión, el portal abre directamente */
  if (Auth.isLoggedIn() && !params.has('salio')) {
    location.replace(destino);
    return;
  }

  if (params.has('salio')) mostrar('Cerraste sesión correctamente.', 'ok');
  else if (params.has('next')) mostrar('Inicia sesión para continuar.', 'error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    user.removeAttribute('aria-invalid');
    pass.removeAttribute('aria-invalid');

    if (!user.value.trim() || !pass.value) {
      if (!user.value.trim()) user.setAttribute('aria-invalid', 'true');
      if (!pass.value) pass.setAttribute('aria-invalid', 'true');
      mostrar('Escribe tu usuario y tu contraseña.', 'error');
      (user.value.trim() ? pass : user).focus();
      return;
    }

    if (Auth.login(user.value, pass.value)) {
      location.href = destino;
    } else {
      user.setAttribute('aria-invalid', 'true');
      pass.setAttribute('aria-invalid', 'true');
      pass.value = '';
      mostrar('Usuario o contraseña incorrectos.', 'error');
      pass.focus();
    }
  });
})();
