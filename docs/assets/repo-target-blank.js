(function () {
  function patch() {
    // Header repo button
    document.querySelectorAll('a[data-md-component="source"], a.md-source')
      .forEach(a => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
      });
  }
  // Works with/without Material's instant navigation
  if (window.document$) {
    window.document$.subscribe(patch);
  } else {
    document.addEventListener('DOMContentLoaded', patch);
  }
})();
