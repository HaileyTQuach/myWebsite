'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [70],
  {
    7070: function (n, e, t) {
      t.r(e),
        t.d(e, {
          createIntersectionObserver: function () {
            return i;
          },
        });
      var r,
        c = new WeakMap(),
        o = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      function i(n) {
        return 'IntersectionObserver' in window
          ? (r ||
              (r = new IntersectionObserver(
                function (n) {
                  n.forEach(function (n) {
                    var e;
                    n.isIntersecting && (null == (e = c.get(n.target)) || e(), c.delete(n.target));
                  });
                },
                {
                  rootMargin:
                    '4g' !== (null == o ? void 0 : o.effectiveType) || (null != o && o.saveData)
                      ? '2500px'
                      : '1250px',
                },
              )),
            function (e) {
              return (
                e.current && (c.set(e.current, n), r.observe(e.current)),
                function () {
                  r && e.current && (c.delete(e.current), r.unobserve(e.current));
                }
              );
            })
          : function () {
              return n(), function () {};
            };
      }
    },
  },
]);
//# sourceMappingURL=70-2456d89ac7ba701a6d58.js.map
