/* Portal UNAB · autenticación simulada (solo cliente) con sessionStorage.
   Uso en páginas protegidas:  <script src="../js/auth.js" data-guard data-root="../"></script>
   Debe cargarse DESPUÉS de data.js. */
(function () {
  var KEY = 'unab.sesion';
  var NEXT_OK = /^pages\/[a-z0-9-]+\.html$/;

  function leer() {
    try { return JSON.parse(sessionStorage.getItem(KEY)); } catch (e) { return null; }
  }

  var Auth = {
    isLoggedIn: function () { var s = leer(); return !!(s && s.usuario); },

    login: function (usuario, clave) {
      var c = window.PORTAL.credenciales;
      if (String(usuario).trim().toLowerCase() === c.usuario && clave === c.clave) {
        try { sessionStorage.setItem(KEY, JSON.stringify({ usuario: c.usuario, desde: Date.now() })); } catch (e) { return false; }
        return true;
      }
      return false;
    },

    logout: function (root) {
      try { sessionStorage.removeItem(KEY); } catch (e) { /* sin almacenamiento */ }
      location.href = (root || '') + 'index.html?salio=1';
    },

    perfil: function () { return Auth.isLoggedIn() ? window.PORTAL.perfil : null; },

    /* Ruta interna segura (pages/xxx.html) para volver tras iniciar sesión */
    nextSeguro: function (valor) { return valor && NEXT_OK.test(valor) ? valor : null; }
  };
  window.Auth = Auth;

  /* Guardia: redirige a la portada si no hay sesión */
  var self = document.currentScript;
  if (self && self.hasAttribute('data-guard') && !Auth.isLoggedIn()) {
    var root = self.getAttribute('data-root') || '';
    var actual = 'pages/' + location.pathname.split('/').pop();
    location.replace(root + 'index.html?next=' + encodeURIComponent(actual));
  }
})();
