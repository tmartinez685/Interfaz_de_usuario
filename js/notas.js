/* Portal UNAB · Mis notas y Perfil (datos del estudiante). */
(function () {
  var P = PORTAL, per = P.perfil, calc = P.calcular();
  function $(id) { return document.getElementById(id); }
  function fmt(n, d) { return n.toFixed(d); }

  /* ---- Tabla de notas ---- */
  if ($('notas-cuerpo')) {
    $('notas-cuerpo').innerHTML = calc.filas.map(function (f) {
      return '<tr><td class="subject">' + f.materia + '</td><td>' + fmt(f.c1, 1) + '</td><td>' + fmt(f.c2, 1) +
        '</td><td class="final">' + fmt(f.definitiva, 1) + '</td></tr>';
    }).join('');
  }

  /* ---- Tarjeta del estudiante ---- */
  if ($('est-nombre')) {
    $('est-nombre').textContent = per.nombre;
    $('est-curso').textContent = 'Curso: ' + per.programa;
    $('est-id').textContent = 'ID: ' + per.id;
    $('est-semestre').textContent = 'Semestre: ' + per.semestre;
    $('est-promedio').textContent = 'Promedio: ' + fmt(calc.promedio, 2);
  }

  /* ---- Perfil ---- */
  if ($('perfil-lista')) {
    var items = [
      ['ID estudiantil', per.id],
      ['Nombre', per.nombre],
      ['Programa', per.programa],
      ['Semestre', per.semestre],
      ['Correo institucional', per.correo],
      ['Sede', per.sede],
      ['Promedio del semestre', fmt(calc.promedio, 2)],
      ['Horas libres', P.horasTotales() + ' de ' + P.horas.meta]
    ];
    $('perfil-lista').innerHTML = items.map(function (it) {
      return '<div class="profile-item"><dt>' + it[0] + '</dt><dd>' + it[1] + '</dd></div>';
    }).join('');
  }
})();
