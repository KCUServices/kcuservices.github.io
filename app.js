/* KCU Services: revelar ao descer e linha da navegação. Sem dependências, sem rastreio. */
(function () {
  var nav = document.querySelector('.nav');
  var onScroll = function () { nav && nav.classList.toggle('com-sombra', window.scrollY > 8); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var calmo = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (calmo || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.remove('espera'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  var alto = window.innerHeight;
  document.querySelectorAll('.rv').forEach(function (el, i) {
    if (el.getBoundingClientRect().top < alto) return; // já visível: fica como está
    el.classList.add('espera');
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
    io.observe(el);
  });

  // Rede de segurança: nunca deixar a página vazia se o IntersectionObserver falhar.
  var revelar = function (tudo) {
    document.querySelectorAll('.rv.espera').forEach(function (el) {
      if (tudo || el.getBoundingClientRect().top < window.innerHeight) { el.classList.remove('espera'); io.unobserve(el); }
    });
  };
  window.addEventListener('scroll', function () { revelar(false); }, { passive: true });
  window.addEventListener('resize', function () { revelar(false); });
  setTimeout(function () { revelar(true); }, 3000);
})();
