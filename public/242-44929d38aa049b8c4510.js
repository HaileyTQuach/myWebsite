'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [242],
  {
    6242: function (e, r, t) {
      t.r(r),
        t.d(r, {
          lazyHydrate: function () {
            return c;
          },
        });
      var o = t(3973),
        n = t(6540),
        a = t(961),
        i =
          (t(2818),
          t(52),
          [
            'image',
            'loading',
            'isLoading',
            'isLoaded',
            'toggleIsLoaded',
            'ref',
            'imgClassName',
            'imgStyle',
            'objectPosition',
            'backgroundColor',
            'objectFit',
          ]);
      function c(e, r, t, c) {
        var u = e.image,
          d = e.loading,
          l = e.isLoading,
          g = e.isLoaded,
          s = e.toggleIsLoaded,
          h = e.ref,
          b = e.imgClassName,
          m = e.imgStyle,
          f = void 0 === m ? {} : m,
          k = e.objectPosition,
          v = e.backgroundColor,
          y = e.objectFit,
          C = void 0 === y ? 'cover' : y,
          L = (0, o._)(e, i),
          j = u.width,
          w = u.height,
          p = u.layout,
          N = u.images,
          P = u.placeholder,
          E = u.backgroundColor,
          F = JSON.stringify(N);
        f = (0, o.a)({ objectFit: C, objectPosition: k, backgroundColor: v }, f);
        var R = n.createElement(
          o.L,
          { layout: p, width: j, height: w },
          n.createElement(o.P, (0, o.a)({}, (0, o.g)(P, g, p, j, w, E, C, k))),
          n.createElement(
            o.M,
            (0, o.a)(
              {},
              L,
              { width: j, height: w, className: b },
              (0, o.b)(l, g, N, d, s, F, h, f),
            ),
          ),
        );
        return (
          r.current &&
            (a.createRoot
              ? (t.current || (t.current = a.createRoot(r.current)), t.current.render(R))
              : ((t.current || c.current ? a.render : a.hydrate)(R, r.current), (t.current = !0))),
          function () {
            r.current && (a.createRoot ? t.current.render(null) : a.render(null, r.current));
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=242-44929d38aa049b8c4510.js.map
