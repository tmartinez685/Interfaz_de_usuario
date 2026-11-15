/* Portal UNAB · datos de ejemplo.
   Todo el contenido "inyectado" vive aquí: edítalo en un solo sitio. */
window.PORTAL = {

  /* Credenciales del usuario por defecto (simulado, solo del lado del cliente) */
  credenciales: { usuario: 'estudiante', clave: 'Unab2026' },

  /* Perfil: ID = "U00" + 6 dígitos distintos entre sí (fijo, no cambia al recargar) */
  perfil: {
    id: 'U00372915',
    nombre: 'Estudiante UNAB',
    programa: 'Ingeniería de Sistemas',
    semestre: 5,
    correo: 'estudiante@unab.edu.co',
    sede: 'El Jardín',
    foto: 'assets/img/avatar.png'
  },

  /* Horas libres: acumulado por mes y meta del programa */
  horas: {
    meta: 100,
    meses: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
    valores: [4, 6, 9, 7, 11, 8, 3, 7, 10, 12]
  },

  eventos: [
    { titulo: 'Taller Power Skills', fecha: '20 de noviembre', img: 'assets/img/evento-power-skills.png' },
    { titulo: 'Concurso Destilería de Cerveza', fecha: '25 de noviembre', img: 'assets/img/evento-cerveza.png' },
    { titulo: 'Taller Práctico Mantenimiento PCs', fecha: '28 de noviembre', img: 'assets/img/evento-pcs.png' }
  ],

  /* Notas del semestre actual (cortes 1 y 2). La definitiva y el promedio se calculan. */
  notas: [
    { materia: 'Cálculo', c1: 4.1, c2: 3.1 },
    { materia: 'Mecánica', c1: 3.4, c2: 3.4 },
    { materia: 'Programación', c1: 4.3, c2: 4.4 },
    { materia: 'Diseño de interfaces', c1: 4.6, c2: 3.2 },
    { materia: 'Inglés', c1: 3.6, c2: 3.1 }
  ],

  /* Horario semanal. dia: 0 = Lunes … 5 = Sábado · franja: 0..7 (ver franjas) */
  dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  franjas: ['7:00 – 8:00', '8:00 – 9:00', '9:00 – 10:00', '10:00 – 11:00',
            '2:00 – 3:00', '3:00 – 4:00', '4:00 – 5:00', '5:00 – 6:00'],
  clases: [
    { dia: 0, franja: 2, texto: 'Tenis' }, { dia: 0, franja: 3, texto: 'Tenis' }, { dia: 0, franja: 4, texto: 'Tenis' },
    { dia: 1, franja: 1, texto: 'Programación' }, { dia: 1, franja: 2, texto: 'Mecánica' }, { dia: 1, franja: 3, texto: 'Mecánica' },
    { dia: 2, franja: 2, texto: 'Laboratorio' }, { dia: 2, franja: 3, texto: 'Laboratorio' },
    { dia: 2, franja: 5, texto: 'Diseño' }, { dia: 2, franja: 6, texto: 'Diseño' },
    { dia: 3, franja: 0, texto: 'Cálculo' }, { dia: 3, franja: 1, texto: 'Cálculo' },
    { dia: 3, franja: 2, texto: 'Mecánica' }, { dia: 3, franja: 3, texto: 'Mecánica' },
    { dia: 3, franja: 4, texto: 'Programación' }, { dia: 3, franja: 5, texto: 'Programación' },
    { dia: 4, franja: 2, texto: 'Cátedra' }, { dia: 4, franja: 3, texto: 'Cátedra' },
    { dia: 4, franja: 4, texto: 'Cálculo' }, { dia: 4, franja: 5, texto: 'Cálculo' }
  ],

  lugares: [
    { nombre: 'CSU', img: 'assets/img/lugar-csu.png', espacios: ['Gimnasio', 'Cancha futsal', 'Coliseo'] },
    { nombre: 'JARDIN', img: 'assets/img/lugar-jardin.png', espacios: ['Auditorio Mayor', 'Plaza Banu', 'Auditorio Ingenierías'] },
    { nombre: 'ELBOSQUE', img: 'assets/img/lugar-bosque.png', espacios: ['Cafetería', 'Cancha', 'Biblioteca'] }
  ],

  faq: [
    { p: '¿Qué cambios tiene el nuevo Portal U?', r: 'El portal reúne en un solo lugar tus notas, horario, horas libres, mapas de sedes y accesos rápidos, con un diseño más claro y fácil de usar desde cualquier dispositivo.' },
    { p: '¿Dónde puedo revisar las materias que tengo inscritas?', r: 'En "Horario" ves tus clases de la semana y en "Tabla de Notas" las materias del semestre actual con sus cortes y definitiva.' },
    { p: '¿Cómo puedo encontrar rápidamente los servicios que necesito?', r: 'Usa el "Menú de secciones" o la página de "Acceso rápido": allí están Cosmos, Biblioteca, Punto U, Unab Digital, Office 365, PQRSF y más.' },
    { p: '¿Dónde puedo reportar un error o problema técnico?', r: 'Desde la portada de inicio entra a "Servicio técnico" (Apoyo académico) y describe el problema; el equipo te responderá a tu correo institucional.' }
  ],

  accesos: [
    { texto: 'Cosmos', url: 'https://www.unab.edu.co' },
    { texto: 'Biblioteca', url: 'https://www.unab.edu.co' },
    { texto: 'Punto U', url: 'https://www.unab.edu.co' },
    { texto: 'Unab Digital', url: 'https://www.unab.edu.co' },
    { texto: 'Office 365', url: 'https://www.office.com' },
    { texto: '+ Horas libres', url: 'horas-libres.html', interno: true }
  ],
  accesosDerecha: [
    { texto: 'Tarifa y resoluciones', url: 'https://www.unab.edu.co', largo: true },
    { texto: 'PQRSF', url: 'https://www.unab.edu.co' },
    { texto: 'Comité de Género', url: 'https://www.unab.edu.co' }
  ],

  noticias: [
    { titulo: 'College UNAB: acceso a la universidad donde eliges el camino de tu aprendizaje', fecha: '20 de octubre de 2026', resumen: '¿Te apasiona la ingeniería, pero también te llama la atención el derecho o la administración? ¡En la UNAB no tienes que elegir solo una puerta!' },
    { titulo: 'Congreso Internacional de Economía y Negocios pondrá la sostenibilidad en el centro del debate', fecha: '20 de octubre de 2026', resumen: 'Sostenibilidad, transformación digital, finanzas y competitividad serán algunos de los temas centrales del Congreso.' },
    { titulo: 'Ingeniería de Sistemas UNAB refuerza su plan de estudios en modalidades presencial y virtual', fecha: '16 de octubre de 2026', resumen: 'Desarrollo de software, programación, ciberseguridad, ciencia de datos e inteligencia artificial son los principales ejes del programa.' }
  ],

  elecciones: {
    titulo: 'Elecciones UNAB',
    texto: 'Participa en la elección de representantes estudiantiles. Consulta el calendario, los candidatos y tu puesto de votación.',
    fechas: [['Inscripción de candidaturas', '2 al 6 de noviembre'], ['Campaña', '9 al 20 de noviembre'], ['Jornada de votación', '25 de noviembre']]
  },

  tramites: [
    { titulo: 'Certificados de estudio', texto: 'Solicita constancias de matrícula, notas y de buena conducta en línea.' },
    { titulo: 'Carné estudiantil', texto: 'Expedición y reposición de tu carné institucional.' },
    { titulo: 'Paz y salvo', texto: 'Verifica que no tengas pendientes con biblioteca, laboratorios o cartera.' },
    { titulo: 'Homologaciones', texto: 'Reconocimiento de materias cursadas en otras instituciones.' },
    { titulo: 'Retiro y adición de materias', texto: 'Modifica tu inscripción dentro de las fechas del calendario académico.' },
    { titulo: 'Grados', texto: 'Requisitos, fechas y documentos para tu ceremonia de grado.' }
  ],

  investigacion: [
    { titulo: 'Semillero de Inteligencia Artificial', texto: 'Aprendizaje automático y visión por computador aplicados a problemas locales.' },
    { titulo: 'Semillero de Desarrollo de Software', texto: 'Buenas prácticas, arquitectura y proyectos abiertos con equipos multidisciplinarios.' },
    { titulo: 'Semillero de Ciberseguridad', texto: 'Seguridad ofensiva y defensiva, retos CTF y cultura de seguridad.' },
    { titulo: 'Semillero de Energías Renovables', texto: 'Diseño y medición de sistemas solares y eficiencia energética.' }
  ],

  apoyo: [
    { id: 'tutorias', titulo: 'Tutorías académicas', texto: 'Acompañamiento de monitores y docentes en Cálculo, Mecánica y Programación.' },
    { id: 'consejeria', titulo: 'Consejería estudiantil', texto: 'Orientación personal y académica para tomar mejores decisiones durante tu carrera.' },
    { id: 'bienestar', titulo: 'Bienestar universitario', texto: 'Salud, deporte, cultura y acompañamiento psicológico.' },
    { id: 'servicio-tecnico', titulo: 'Servicio técnico', texto: 'Reporta fallas de Wi-Fi, cuentas institucionales, equipos o plataformas.' }
  ]
};

/* ---------- Cálculos ---------- */
/* Definitiva = promedio de los dos cortes, truncado a 1 decimal (en centésimas para evitar errores de coma flotante). */
window.PORTAL.calcular = function () {
  var P = window.PORTAL, suma = 0;
  var filas = P.notas.map(function (n) {
    var cent = Math.round(n.c1 * 100 + n.c2 * 100) / 2;      // definitiva sin truncar, en centésimas
    suma += cent;
    var truncada = Math.floor(cent / 10) / 10;                // 1 decimal
    return { materia: n.materia, c1: n.c1, c2: n.c2, definitiva: truncada };
  });
  return { filas: filas, promedio: (Math.round(suma / P.notas.length) / 100) };
};

window.PORTAL.horasTotales = function () {
  return window.PORTAL.horas.valores.reduce(function (a, b) { return a + b; }, 0);
};
