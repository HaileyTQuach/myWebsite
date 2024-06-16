(this.workbox = this.workbox || {}),
  (this.workbox.rangeRequests = (function (e, n) {
    'use strict';
    try {
      self['workbox:range-requests:4.3.1'] && _();
    } catch (e) {}
    async function t(e, t) {
      try {
        if (206 === t.status) return t;
        const s = e.headers.get('range');
        if (!s) throw new n.WorkboxError('no-range-header');
        const a = (function (e) {
            const t = e.trim().toLowerCase();
            if (!t.startsWith('bytes='))
              throw new n.WorkboxError('unit-must-be-bytes', { normalizedRangeHeader: t });
            if (t.includes(','))
              throw new n.WorkboxError('single-range-only', { normalizedRangeHeader: t });
            const s = /(\d*)-(\d*)/.exec(t);
            if (null === s || (!s[1] && !s[2]))
              throw new n.WorkboxError('invalid-range-values', { normalizedRangeHeader: t });
            return {
              start: '' === s[1] ? null : Number(s[1]),
              end: '' === s[2] ? null : Number(s[2]),
            };
          })(s),
          r = await t.blob(),
          i = (function (e, t, s) {
            const a = e.size;
            if (s > a || t < 0)
              throw new n.WorkboxError('range-not-satisfiable', { size: a, end: s, start: t });
            let r, i;
            return (
              null === t
                ? ((r = a - s), (i = a))
                : null === s
                ? ((r = t), (i = a))
                : ((r = t), (i = s + 1)),
              { start: r, end: i }
            );
          })(r, a.start, a.end),
          o = r.slice(i.start, i.end),
          u = o.size,
          l = new Response(o, { status: 206, statusText: 'Partial Content', headers: t.headers });
        return (
          l.headers.set('Content-Length', u),
          l.headers.set('Content-Range', `bytes ${i.start}-${i.end - 1}/` + r.size),
          l
        );
      } catch (e) {
        return new Response('', { status: 416, statusText: 'Range Not Satisfiable' });
      }
    }
    return (
      (e.createPartialResponse = t),
      (e.Plugin = class {
        async cachedResponseWillBeUsed({ request: e, cachedResponse: n }) {
          return n && e.headers.has('range') ? await t(e, n) : n;
        }
      }),
      e
    );
  })({}, workbox.core._private));
//# sourceMappingURL=workbox-range-requests.prod.js.map
