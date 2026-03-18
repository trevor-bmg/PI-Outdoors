/* PI Outdoors — Scroll Reveal Observer
   Adds .is-visible to .pi-reveal elements when they enter the viewport. */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.pi-reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  function observe() {
    document.querySelectorAll('.pi-reveal:not(.is-visible)').forEach(function (el) {
      observer.observe(el);
    });
  }

  observe();

  /* Re-observe after Shopify section render events */
  document.addEventListener('shopify:section:load', observe);
})();
