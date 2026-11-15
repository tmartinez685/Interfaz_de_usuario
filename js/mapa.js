/* Portal UNAB · Mapa: ampliar cada sede en una ventana modal. */
(function () {
  var box = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  var cerrar = document.getElementById('lightbox-cerrar');
  var ultimo = null;

  function abrir(btn) {
    ultimo = btn;
    img.src = btn.dataset.img;
    img.alt = btn.dataset.alt;
    box.classList.add('is-open');
    cerrar.focus();
  }
  function cerrarCaja() {
    box.classList.remove('is-open');
    if (ultimo) ultimo.focus();
  }

  document.querySelectorAll('.map').forEach(function (b) {
    b.addEventListener('click', function () { abrir(b); });
  });
  cerrar.addEventListener('click', cerrarCaja);
  box.addEventListener('click', function (e) { if (e.target === box) cerrarCaja(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && box.classList.contains('is-open')) cerrarCaja(); });
})();
