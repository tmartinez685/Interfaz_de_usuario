/* Portal UNAB · pintado de contenido a partir de data.js.
   Cada bloque se activa solo si su contenedor existe en la página. */
(function () {
  var P = PORTAL;
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---- Acceso rápido ---- */
  function accesos(lista) {
    return lista.map(function (a) {
      var ext = a.interno ? '' : ' target="_blank" rel="noopener noreferrer"';
      return '<a class="qbtn' + (a.largo ? ' qbtn--long' : '') + '" href="' + esc(a.url) + '"' + ext + '>' + esc(a.texto) + '</a>';
    }).join('');
  }
  if ($('accesos-izq')) $('accesos-izq').innerHTML = accesos(P.accesos);
  if ($('accesos-der')) $('accesos-der').innerHTML = accesos(P.accesosDerecha);

  /* ---- Lugares destacados ---- */
  if ($('lugares')) {
    $('lugares').innerHTML = P.lugares.map(function (l) {
      return '<article>' +
        '<a class="place__tile" href="mapa.html" aria-label="Ver ' + esc(l.nombre) + ' en el mapa">' +
          '<img src="../' + l.img + '" alt="" loading="lazy">' +
          '<span class="place__label">' + esc(l.nombre) + '</span>' +
        '</a>' +
        '<ul class="place__list">' + l.espacios.map(function (e) { return '<li>-' + esc(e) + '</li>'; }).join('') + '</ul>' +
      '</article>';
    }).join('');
  }

  /* ---- Preguntas frecuentes (acordeón) ---- */
  if ($('faq-lista')) {
    $('faq-lista').innerHTML = P.faq.map(function (f, i) {
      return '<li class="q">' +
        '<button class="q__btn" type="button" aria-expanded="false" aria-controls="faq-r' + i + '" id="faq-b' + i + '">' +
          '<span>' + esc(f.p) + '</span>' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
        '</button>' +
        '<div class="q__a" id="faq-r' + i + '" role="region" aria-labelledby="faq-b' + i + '" hidden>' + esc(f.r) + '</div>' +
      '</li>';
    }).join('');
    $('faq-lista').addEventListener('click', function (e) {
      var b = e.target.closest('.q__btn');
      if (!b) return;
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      var abrir = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', String(abrir));
      panel.hidden = !abrir;
    });
  }

  /* ---- Páginas informativas ---- */
  function tarjetas(items, conId) {
    return items.map(function (t) {
      return '<article class="info-card"' + (conId && t.id ? ' id="' + t.id + '"' : '') + '>' +
        (t.fecha ? '<time>' + esc(t.fecha) + '</time>' : '') +
        '<h3>' + esc(t.titulo) + '</h3><p>' + esc(t.texto || t.resumen) + '</p></article>';
    }).join('');
  }
  if ($('info-tramites')) $('info-tramites').innerHTML = tarjetas(P.tramites);
  if ($('info-investigacion')) $('info-investigacion').innerHTML = tarjetas(P.investigacion);
  if ($('info-apoyo')) $('info-apoyo').innerHTML = tarjetas(P.apoyo, true);
  if ($('info-noticias')) $('info-noticias').innerHTML = tarjetas(P.noticias.map(function (n) {
    return { titulo: n.titulo, fecha: n.fecha, texto: n.resumen };
  }));
  if ($('elecciones')) {
    var E = P.elecciones;
    $('elecciones').innerHTML = '<h3>' + esc(E.titulo) + '</h3><p>' + esc(E.texto) + '</p>' +
      '<ul class="dates">' + E.fechas.map(function (f) { return '<li><span>' + esc(f[0]) + '</span><strong>' + esc(f[1]) + '</strong></li>'; }).join('') + '</ul>';
  }
})();
