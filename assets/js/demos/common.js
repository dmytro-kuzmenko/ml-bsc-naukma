/* =====================================================================
 * common.js — shared tiny helpers for the ML course interactive demos.
 * Vanilla JS only; works fully offline (no CDNs, no external requests).
 * Seeded PRNG (mulberry32) keeps every demo deterministic across loads.
 * ===================================================================== */
(function (global) {
  'use strict';

  /* ------------------------------------------------------------------
   * 1. Seeded PRNG — mulberry32
   * ------------------------------------------------------------------ */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0;
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* Deterministic random stream: uniform / range / int / normal / shuffle. */
  function RNG(seed) {
    var r = mulberry32(seed);
    var spare = null;
    this.next = r;
    this.uniform = r;
    this.range = function (a, b) { return a + (b - a) * r(); };
    this.int = function (a, b) { return Math.floor(a + (b - a + 1) * r()); };
    this.normal = function (mean, sd) {
      mean = mean === undefined ? 0 : mean;
      sd = sd === undefined ? 1 : sd;
      if (spare !== null) {
        var v = spare;
        spare = null;
        return mean + sd * v;
      }
      var u = 0, w = 0, s = 0;
      do {
        u = 2 * r() - 1;
        w = 2 * r() - 1;
        s = u * u + w * w;
      } while (s >= 1 || s === 0);
      var m = Math.sqrt(-2 * Math.log(s) / s);
      spare = w * m;
      return mean + sd * u * m;
    };
    this.shuffle = function (arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(r() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
      return arr;
    };
  }

  /* ------------------------------------------------------------------
   * 2. Normal distribution helpers (erf via Abramowitz–Stegun 7.1.26)
   * ------------------------------------------------------------------ */
  function erf(x) {
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    var t = 1 / (1 + 0.3275911 * x);
    var y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return sign * y;
  }

  function normCdf(x) { return 0.5 * (1 + erf(x / Math.SQRT2)); }
  function normPdf(x) { return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI); }

  /* ------------------------------------------------------------------
   * 3. Linear algebra: Gaussian elimination with partial pivoting.
   *    Solves A x = b where A is n×n (array of arrays), b is array.
   * ------------------------------------------------------------------ */
  function solveLinear(A, b) {
    var n = b.length;
    var M = [];
    for (var i = 0; i < n; i++) {
      M.push(A[i].slice());
    }
    var rhs = b.slice();
    for (var col = 0; col < n; col++) {
      var piv = col;
      for (var r2 = col + 1; r2 < n; r2++) {
        if (Math.abs(M[r2][col]) > Math.abs(M[piv][col])) piv = r2;
      }
      if (piv !== col) {
        var tmp = M[col]; M[col] = M[piv]; M[piv] = tmp;
        var tv = rhs[col]; rhs[col] = rhs[piv]; rhs[piv] = tv;
      }
      var pivot = M[col][col];
      if (pivot === 0 || !isFinite(pivot)) return null; // singular
      for (var r = col + 1; r < n; r++) {
        var f = M[r][col] / pivot;
        if (f === 0) continue;
        for (var c = col; c < n; c++) M[r][c] -= f * M[col][c];
        rhs[r] -= f * rhs[col];
      }
    }
    var x = new Array(n);
    for (var k = n - 1; k >= 0; k--) {
      var acc = rhs[k];
      for (var c2 = k + 1; c2 < n; c2++) acc -= M[k][c2] * x[c2];
      x[k] = acc / M[k][k];
    }
    return x;
  }

  /* ------------------------------------------------------------------
   * 4. polyfit(xs, ys, degree) — least-squares polynomial fit.
   *    Design matrix uses Legendre polynomials on x scaled to [-1, 1]
   *    (well-conditioned), solved via normal equations + Gaussian
   *    elimination. Returns { coeffs, eval(x) }.
   * ------------------------------------------------------------------ */
  function legendreEval(c, s) {
    if (c.length === 0) return 0;
    var p0 = 1, p1 = s;
    var out = c[0];
    if (c.length > 1) out += c[1] * p1;
    for (var j = 1; j < c.length - 1; j++) {
      var p2 = ((2 * j + 1) * s * p1 - j * p0) / (j + 1);
      out += c[j + 1] * p2;
      p0 = p1;
      p1 = p2;
    }
    return out;
  }

  function polyfit(xs, ys, degree) {
    var n = xs.length;
    var m = degree + 1;
    var xmin = Infinity, xmax = -Infinity;
    for (var i = 0; i < n; i++) {
      if (xs[i] < xmin) xmin = xs[i];
      if (xs[i] > xmax) xmax = xs[i];
    }
    var span = (xmax - xmin) || 1;
    var scale = function (x) { return (2 * (x - xmin) / span) - 1; };

    var A = [];
    for (var r0 = 0; r0 < n; r0++) {
      var s = scale(xs[r0]);
      var row = new Array(m);
      row[0] = 1;
      if (m > 1) row[1] = s;
      for (var j = 1; j < m - 1; j++) {
        row[j + 1] = ((2 * j + 1) * s * row[j] - j * row[j - 1]) / (j + 1);
      }
      A.push(row);
    }
    var AtA = [], Atb = new Array(m).fill(0);
    for (var r1 = 0; r1 < m; r1++) AtA.push(new Array(m).fill(0));
    for (var i2 = 0; i2 < n; i2++) {
      for (var r = 0; r < m; r++) {
        Atb[r] += A[i2][r] * ys[i2];
        for (var c = 0; c < m; c++) AtA[r][c] += A[i2][r] * A[i2][c];
      }
    }
    var coeffs = solveLinear(AtA, Atb);
    if (coeffs === null) {
      return { coeffs: new Array(m).fill(0), eval: function () { return 0; } };
    }
    return {
      coeffs: coeffs,
      eval: function (x) { return legendreEval(coeffs, scale(x)); }
    };
  }

  /* ------------------------------------------------------------------
   * 5. pca2(points) — PCA of a 2-D point cloud via the closed-form
   *    2×2 eigendecomposition of the covariance matrix.
   *    Returns { center, v1, v2, ev1, ev2, explained1, explained2 }.
   * ------------------------------------------------------------------ */
  function pca2(points) {
    var n = points.length;
    var mx = 0, my = 0;
    for (var i = 0; i < n; i++) { mx += points[i][0]; my += points[i][1]; }
    mx /= n; my /= n;
    var a = 0, b = 0, c = 0;
    for (var j = 0; j < n; j++) {
      var dx = points[j][0] - mx, dy = points[j][1] - my;
      a += dx * dx; b += dx * dy; c += dy * dy;
    }
    a /= n; b /= n; c /= n;
    var trace = a + c;
    var det = a * c - b * b;
    var disc = Math.sqrt(Math.max(0, trace * trace - 4 * det));
    var ev1 = (trace + disc) / 2;
    var ev2 = (trace - disc) / 2;
    var v1;
    if (Math.abs(b) > 1e-12) {
      v1 = [b, ev1 - a];
      var norm = Math.hypot(v1[0], v1[1]) || 1;
      v1 = [v1[0] / norm, v1[1] / norm];
    } else {
      v1 = a >= c ? [1, 0] : [0, 1];
    }
    var v2 = [-v1[1], v1[0]];
    return {
      center: [mx, my],
      v1: v1, v2: v2,
      ev1: ev1, ev2: ev2,
      explained1: ev1 / (ev1 + ev2),
      explained2: ev2 / (ev1 + ev2)
    };
  }

  /* ------------------------------------------------------------------
   * 6. k-means helpers (one Lloyd iteration / inertia)
   * ------------------------------------------------------------------ */
  function kmeansStep(points, centroids, assign) {
    var changed = false;
    for (var i = 0; i < points.length; i++) {
      var best = 0, bestD = Infinity;
      for (var j = 0; j < centroids.length; j++) {
        var dx = points[i][0] - centroids[j][0];
        var dy = points[i][1] - centroids[j][1];
        var d = dx * dx + dy * dy;
        if (d < bestD) { bestD = d; best = j; }
      }
      if (assign[i] !== best) { assign[i] = best; changed = true; }
    }
    var sums = [], counts = [];
    for (var k = 0; k < centroids.length; k++) { sums.push([0, 0]); counts.push(0); }
    for (var i2 = 0; i2 < points.length; i2++) {
      sums[assign[i2]][0] += points[i2][0];
      sums[assign[i2]][1] += points[i2][1];
      counts[assign[i2]]++;
    }
    for (var j2 = 0; j2 < centroids.length; j2++) {
      if (counts[j2] > 0) {
        centroids[j2][0] = sums[j2][0] / counts[j2];
        centroids[j2][1] = sums[j2][1] / counts[j2];
      }
    }
    return changed;
  }

  function kmeansInertia(points, centroids, assign) {
    var s = 0;
    for (var i = 0; i < points.length; i++) {
      var dx = points[i][0] - centroids[assign[i]][0];
      var dy = points[i][1] - centroids[assign[i]][1];
      s += dx * dx + dy * dy;
    }
    return s;
  }

  /* ------------------------------------------------------------------
   * 7. Canvas helpers (HiDPI-aware) + small utilities
   * ------------------------------------------------------------------ */
  function setupCanvas(canvas, cssW, cssH) {
    // Sizing is controlled by CSS (width:100% / height), so the inline style
    // must NOT be touched here: writing style.width/style.height from
    // clientWidth creates a feedback loop (border + box-sizing:border-box)
    // that shrinks the canvas on every redraw. The bitmap is scaled for the
    // device pixel ratio; layout stays with CSS.
    var dpr = global.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(cssW * dpr));
    canvas.height = Math.max(1, Math.round(cssH * dpr));
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  function scaleLinear(d0, d1, r0, r1) {
    return function (v) { return r0 + ((v - d0) / (d1 - d0)) * (r1 - r0); };
  }

  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function mixColor(c1, c2, t) {
    var r = Math.round(lerp(c1[0], c2[0], t));
    var g = Math.round(lerp(c1[1], c2[1], t));
    var bl = Math.round(lerp(c1[2], c2[2], t));
    return 'rgb(' + r + ',' + g + ',' + bl + ')';
  }

  /* Number formatting: fixed decimals, exponential for very large/small. */
  function fmt(v, digits) {
    if (!isFinite(v)) return String(v);
    var d = digits === undefined ? 3 : digits;
    if (Math.abs(v) >= 1e6 || (Math.abs(v) < 1e-4 && v !== 0)) {
      return v.toExponential(2);
    }
    return String(Number(v.toFixed(d)));
  }

  function fmtPct(v, digits) {
    return (v * 100).toFixed(digits === undefined ? 1 : digits) + '%';
  }

  /* ------------------------------------------------------------------
   * 8. Minimal DOM helpers
   * ------------------------------------------------------------------ */
  function el(id) { return document.getElementById(id); }

  function bindSlider(id, onChange) {
    var input = el(id);
    input.addEventListener('input', onChange);
    input.addEventListener('change', onChange);
    return input;
  }

  global.ML = {
    RNG: RNG,
    erf: erf,
    normCdf: normCdf,
    normPdf: normPdf,
    solveLinear: solveLinear,
    polyfit: polyfit,
    pca2: pca2,
    kmeansStep: kmeansStep,
    kmeansInertia: kmeansInertia,
    setupCanvas: setupCanvas,
    scaleLinear: scaleLinear,
    clamp: clamp,
    lerp: lerp,
    mixColor: mixColor,
    fmt: fmt,
    fmtPct: fmtPct,
    el: el,
    bindSlider: bindSlider
  };
})(typeof window !== 'undefined' ? window : globalThis);
