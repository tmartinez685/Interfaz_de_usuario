/* Portal UNAB · Horario semanal: cuadrícula de 6 días × 8 franjas (con pausa de almuerzo). */
(function () {
  var P = PORTAL;
  var mapa = {};
  P.clases.forEach(function (c) { mapa[c.dia + ',' + c.franja] = c.texto; });

  var html = '';
  P.dias.forEach(function (d) { html += '<div class="sched__day" role="columnheader">' + d + '</div>'; });

  P.franjas.forEach(function (franja, f) {
    if (f === 4) html += '<div class="sched__break" aria-hidden="true">Almuerzo</div>';
    P.dias.forEach(function (dia, d) {
      var texto = mapa[d + ',' + f] || '';
      var corto = texto.length > 0 && texto.length <= 6;
      html += '<div class="sched__cell' + (corto ? ' sched__cell--short' : '') + '" role="cell" title="' +
        dia + ' · ' + franja + (texto ? ' · ' + texto : ' · libre') + '">' + texto + '</div>';
    });
  });

  document.getElementById('horario').innerHTML = html;
})();
