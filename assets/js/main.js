// Machine Learning · NaUKMA — shared behavior (vanilla JS, no deps)
(function () {
  'use strict';

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {

    /* ---- footer year ---- */
    var yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    /* ---- mobile nav toggle ---- */
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');
    function closeNav() {
      if (!nav) return;
      nav.classList.remove('is-open');
      if (toggle) {
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.classList.toggle('is-active', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      // close on outside click
      document.addEventListener('click', function (e) {
        if (nav.classList.contains('is-open') &&
            !nav.contains(e.target) && !toggle.contains(e.target)) {
          closeNav();
        }
      });
      // close on Esc
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeNav();
      });
    }

    /* ---- highlight current page in nav ---- */
    var current = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '');
    var links = document.querySelectorAll('.site-nav a');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      if (!href) continue;
      var base = href.split('#')[0].replace(/\.html$/, '');
      if (base === current) {
        links[i].setAttribute('aria-current', 'page');
        break;
      }
    }

    /* ---- notebook links: append Colab + GitHub actions ---- */
    if (window.COURSE && COURSE.colabBase && COURSE.repo) {
      var nodes = document.querySelectorAll('.nb-link[data-nb]');
      for (var j = 0; j < nodes.length; j++) {
        (function (el) {
          var nb = el.getAttribute('data-nb');
          if (!nb) return;
          var actions = document.createElement('div');
          actions.className = 'nb-actions';

          var colab = document.createElement('a');
          colab.href = COURSE.colabBase + nb;
          colab.className = 'btn btn-ghost btn-sm';
          colab.textContent = 'Open in Google Colab';
          colab.target = '_blank';
          colab.rel = 'noopener';

          var gh = document.createElement('a');
          gh.href = COURSE.repo + '/blob/' + (COURSE.branch || 'main') + '/' + nb;
          gh.className = 'btn btn-ghost btn-sm';
          gh.textContent = 'View on GitHub';
          gh.target = '_blank';
          gh.rel = 'noopener';

          actions.appendChild(colab);
          actions.appendChild(gh);
          el.appendChild(actions);
        })(nodes[j]);
      }
    }

    /* ---- due dates from COURSE.dueDates ---- */
    if (window.COURSE && COURSE.dueDates) {
      var ids = ['ha01', 'ha02', 'ha03', 'ha04', 'ha05', 'ha06'];
      for (var k = 0; k < ids.length; k++) {
        (function (id) {
          var el = document.getElementById('due-' + id);
          if (!el) return;
          var d = COURSE.dueDates[id];
          el.textContent = d ? d : 'not yet announced';
        })(ids[k]);
      }
    }
  });
})();
