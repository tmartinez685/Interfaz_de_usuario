/* Portal UNAB · Horas libres: resumen, gráfica de línea, detalle y actividades. */
(function () {
  var H = PORTAL.horas;
  var total = PORTAL.horasTotales();

  /* Resumen */
  var estado = document.getElementById('horas-estado');
  estado.innerHTML = 'Llevas <strong>' + total + '</strong> horas de <strong>' + H.meta + '</strong> horas';
  document.getElementById('horas-barra').style.width = Math.min(100, Math.round(total / H.meta * 100)) + '%';

  /* Gráfica SVG */
  var UP = '#42214b', DOWN = '#c2410c', BASE = '#9a8aa1', INK = '#272b2d', MUTED = '#63696c', LINE = '#d5d8d7';
  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.getElementById('chart');
  function el(n, a, t) {
    var e = document.createElementNS(NS, n);
    for (var k in a) e.setAttribute(k, a[k]);
    if (t !== undefined) e.textContent = t;
    svg.appendChild(e);
    return e;
  }

  var n = H.valores.length;
  var yMax = Math.max(16, Math.ceil(Math.max.apply(null, H.valores) / 4) * 4);
  var X0 = 103.6, STEP = (1160 - 103.6 - 40) / Math.max(1, n - 1), Y0 = 316, K = 272 / yMax;
  function X(i) { return X0 + STEP * i; }
  function Y(v) { return Y0 - K * v; }

  for (var v = 0; v <= yMax; v += 4) {
    el('line', { x1: 48, x2: 1160, y1: Y(v), y2: Y(v), stroke: LINE, 'stroke-width': 1, 'stroke-dasharray': v ? '4 4' : '0' });
    el('text', { x: 36, y: Y(v), 'text-anchor': 'end', 'dominant-baseline': 'central', 'font-size': 12, fill: MUTED }, v);
  }
  el('text', { x: 36, y: 19, 'text-anchor': 'end', 'dominant-baseline': 'central', 'font-size': 12, 'font-weight': 600, fill: MUTED }, 'Horas');

  for (var i = 1; i < n; i++) {
    el('line', {
      x1: X(i - 1), y1: Y(H.valores[i - 1]), x2: X(i), y2: Y(H.valores[i]),
      stroke: H.valores[i] >= H.valores[i - 1] ? UP : DOWN, 'stroke-width': 4, 'stroke-linecap': 'round'
    });
  }
  H.valores.forEach(function (h, i) {
    var d = i ? h - H.valores[i - 1] : null;
    var col = d === null ? BASE : (d >= 0 ? UP : DOWN);
    el('circle', { cx: X(i), cy: Y(h), r: 8, fill: '#fff', stroke: col, 'stroke-width': 4 });
    el('text', { x: X(i), y: Y(h) - 29, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': 14, 'font-weight': 700, fill: INK }, h);
    el('text', { x: X(i), y: 340.5, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': 13, 'font-weight': 500, fill: INK }, H.meses[i]);
    if (d === null) {
      el('text', { x: X(i), y: 363.5, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': 12, 'font-weight': 700, fill: MUTED }, '—');
    } else {
      var cx = X(i) - 13;
      el('polygon', {
        points: d >= 0 ? (cx + 4) + ',360 ' + (cx + 8) + ',367 ' + cx + ',367' : cx + ',360 ' + (cx + 8) + ',360 ' + (cx + 4) + ',367',
        fill: col
      });
      el('text', { x: cx + 12, y: 363.5, 'dominant-baseline': 'central', 'font-size': 12, 'font-weight': 700, fill: col },
        (d >= 0 ? '+' : '−') + Math.abs(d));
    }
  });

  /* Detalle mensual (botón "Ver detalle") */
  var detalle = document.getElementById('horas-detalle');
  var rows = H.valores.map(function (h, i) {
    var d = i ? h - H.valores[i - 1] : null;
    var cls = d === null ? '' : (d >= 0 ? 'up' : 'down');
    var txt = d === null ? '—' : (d >= 0 ? '+' : '−') + Math.abs(d);
    return '<tr><td>' + H.meses[i] + '</td><td>' + h + '</td><td class="' + cls + '">' + txt + '</td></tr>';
  }).join('');
  detalle.innerHTML =
    '<table><thead><tr><th>Mes</th><th>Horas</th><th>Cambio</th></tr></thead><tbody>' + rows +
    '</tbody><tfoot><tr><td><strong>Total</strong></td><td><strong>' + total + '</strong></td><td>Faltan ' + Math.max(0, H.meta - total) + '</td></tr></tfoot></table>';

  var btn = document.getElementById('btn-detalle');
  btn.addEventListener('click', function () {
    var open = detalle.hidden;
    detalle.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.firstElementChild.textContent = open ? 'Ocultar' : 'Ver detalle';
  });

  /* Actividades */
  document.getElementById('eventos').innerHTML = PORTAL.eventos.map(function (e) {
    return '<article class="event">' +
      '<div class="event__date">el día ' + e.fecha + ' se realizará esta actividad</div>' +
      '<p class="event__title">' + e.titulo + '</p>' +
      '<img src="../' + e.img + '" alt="' + e.titulo + '" loading="lazy">' +
    '</article>';
  }).join('');
})();
