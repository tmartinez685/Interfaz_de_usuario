/* Portal UNAB · inyecta el encabezado y el pie de página compartidos.
   Cada página declara en <body>:  data-root="" | "../"  y  data-active="clave-de-menu"
   y contiene  <div id="site-header"></div>  y  <div id="site-footer"></div>. */
(function () {
  var body = document.body;
  var root = body.dataset.root || '';
  var pages = root + (root ? '' : 'pages/');
  var active = body.dataset.active || '';
  var logged = window.Auth && Auth.isLoggedIn();

  /* Favicon y color de la barra del navegador */
  if (!document.querySelector('link[rel="icon"]')) {
    var ic = document.createElement('link');
    ic.rel = 'icon'; ic.type = 'image/png'; ic.href = root + 'assets/img/logo-unab.png';
    document.head.appendChild(ic);
    var tc = document.createElement('meta');
    tc.name = 'theme-color'; tc.content = '#5f1a75';
    document.head.appendChild(tc);
  }

  function link(key, href, text) {
    return '<a href="' + href + '"' + (key === active ? ' class="is-active" aria-current="page"' : '') + '>' + text + '</a>';
  }

  var nav = '';
  if (logged) {
    nav += link('horas-libres', pages + 'horas-libres.html', 'Horas libres');
    nav += link('lugares', pages + 'lugares.html', 'Lugares y campus');
    nav += link('faq', pages + 'faq.html', 'Ayuda');
    nav += link('perfil', pages + 'perfil.html', 'Perfil');
    nav += '<button type="button" class="nav__link" data-logout>Cerrar sesión</button>';
    nav += '<span class="nav__space"></span>';
    nav += '<a class="btn-login" href="' + pages + 'inicio.html">Inicio</a>';
  } else {
    nav += link('inicio', root + 'index.html', 'Inicio');
    nav += link('horas-libres', pages + 'horas-libres.html', 'Horas libres');
    nav += link('lugares', pages + 'lugares.html', 'Lugares y campus');
    nav += link('faq', pages + 'faq.html', 'Ayuda');
    nav += '<span class="nav__space"></span>';
    nav += '<a class="btn-login" href="' + root + 'index.html#usuario">Iniciar sesión</a>';
  }

  var home = logged ? pages + 'inicio.html' : root + 'index.html';

  var header =
    '<a class="skip-link" href="#contenido">Saltar al contenido</a>' +
    '<header class="header">' +
      '<div class="header__stripe"></div>' +
      '<div class="header__bar wrap">' +
        '<a class="brand" href="' + home + '" aria-label="UNAB, portal universitario">' +
          '<img src="' + root + 'assets/img/logo-unab.png" alt="UNAB">' +
          '<span class="brand__sep"></span>' +
          '<span class="brand__sub">Portal universitario</span>' +
        '</a>' +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-principal" aria-label="Abrir menú">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
        '</button>' +
        '<nav class="nav" id="nav-principal" aria-label="Principal">' + nav + '</nav>' +
      '</div>' +
    '</header>';

  var footer =
    '<footer class="footer' + (body.dataset.footer ? ' footer--' + body.dataset.footer : '') + '">' +
      '<div class="wrap footer__inner">' +
        '<div class="footer__row">' +
          '<div class="footer__brand"><strong>UNAB</strong><span>Portal universitario · Información para estudiantes</span></div>' +
          '<nav class="footer__links" aria-label="Pie de página">' +
            '<a href="' + home + '">Inicio</a>' +
            '<a href="' + pages + 'lugares.html">Lugares y campus</a>' +
            '<a href="' + pages + 'faq.html">Preguntas frecuentes</a>' +
          '</nav>' +
        '</div>' +
        '<div class="footer__rule"></div>' +
      '</div>' +
    '</footer>';

  var h = document.getElementById('site-header');
  var f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  /* Menú móvil */
  var toggle = document.querySelector('.nav-toggle');
  var navEl = document.getElementById('nav-principal');
  if (toggle && navEl) {
    toggle.addEventListener('click', function () {
      var open = navEl.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* Cerrar sesión */
  var out = document.querySelector('[data-logout]');
  if (out) out.addEventListener('click', function () { Auth.logout(root); });
})();
