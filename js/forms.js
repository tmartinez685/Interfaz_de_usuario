/* Portal UNAB · formularios públicos (simulados, sin backend). */
(function () {
  function msg(el, texto, tipo) { el.textContent = texto; el.className = 'form-msg is-' + tipo; }

  /* Recuperar contraseña: nunca revela si la cuenta existe ni muestra la clave */
  var rec = document.getElementById('form-recuperar');
  if (rec) {
    rec.addEventListener('submit', function (e) {
      e.preventDefault();
      var out = document.getElementById('rec-msg');
      var dato = document.getElementById('rec-dato').value.trim();
      if (!dato) { msg(out, 'Escribe tu usuario o tu correo institucional.', 'error'); return; }
      msg(out, 'Si la cuenta existe, enviaremos las instrucciones a tu correo institucional.', 'ok');
      rec.reset();
    });
  }

  /* Solicitar usuario */
  var sol = document.getElementById('form-solicitar');
  if (sol) {
    sol.addEventListener('submit', function (e) {
      e.preventDefault();
      var out = document.getElementById('sol-msg');
      var nombre = document.getElementById('sol-nombre').value.trim();
      var doc = document.getElementById('sol-doc').value.trim();
      var correo = document.getElementById('sol-correo').value.trim().toLowerCase();
      var prog = document.getElementById('sol-programa').value;
      if (!nombre || !doc || !correo || !prog) { msg(out, 'Completa todos los campos.', 'error'); return; }
      if (!/^\d{6,12}$/.test(doc)) { msg(out, 'El documento debe tener entre 6 y 12 números.', 'error'); return; }
      if (!/^[a-z0-9._-]+@unab\.edu\.co$/.test(correo)) { msg(out, 'Usa tu correo institucional (@unab.edu.co).', 'error'); return; }
      msg(out, 'Solicitud registrada. Te contactaremos a ' + correo + '.', 'ok');
      sol.reset();
    });
  }
})();
