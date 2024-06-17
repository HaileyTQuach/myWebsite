(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [846],
  {
    7653: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(6540),
        u = n(1015),
        o = n(249),
        a = n.n(o),
        f = n(3673),
        c = n(7859),
        i = n(7182);
      const l = c.default.main.withConfig({
        displayName: 'tags__StyledTagsContainer',
        componentId: 'sc-3n25qs-0',
      })([
        'max-width:1000px;h1{margin-bottom:50px;}ul{color:var(--light-slate);li{font-size:var(--fz-xxl);a{color:var(--light-slate);.count{color:var(--slate);font-family:var(--font-mono);font-size:var(--fz-md);}}}}',
      ]);
      e.default = t => {
        let {
          data: {
            allMarkdownRemark: { group: e },
          },
          location: n,
        } = t;
        return r.createElement(
          i.PE,
          { location: n },
          r.createElement(f.m, { title: 'Tags' }),
          r.createElement(
            l,
            null,
            r.createElement(
              'span',
              { className: 'breadcrumb' },
              r.createElement('span', { className: 'arrow' }, '←'),
              r.createElement(u.Link, { to: '/pensieve' }, 'All memories'),
            ),
            r.createElement('h1', null, 'Tags'),
            r.createElement(
              'ul',
              { className: 'fancy-list' },
              e.map(t =>
                r.createElement(
                  'li',
                  { key: t.fieldValue },
                  r.createElement(
                    u.Link,
                    { to: `/pensieve/tags/${a()(t.fieldValue)}/`, className: 'inline-link' },
                    t.fieldValue,
                    ' ',
                    r.createElement('span', { className: 'count' }, '(', t.totalCount, ')'),
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    1873: function (t, e, n) {
      var r = n(9325).Symbol;
      t.exports = r;
    },
    4932: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, u = Array(r); ++n < r; )
          u[n] = e(t[n], n, t);
        return u;
      };
    },
    882: function (t) {
      t.exports = function (t, e, n, r) {
        var u = -1,
          o = null == t ? 0 : t.length;
        for (r && o && (n = t[++u]); ++u < o; ) n = e(n, t[u], u, t);
        return n;
      };
    },
    1733: function (t) {
      var e = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      t.exports = function (t) {
        return t.match(e) || [];
      };
    },
    2552: function (t, e, n) {
      var r = n(1873),
        u = n(659),
        o = n(9350),
        a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? '[object Undefined]'
            : '[object Null]'
          : a && a in Object(t)
          ? u(t)
          : o(t);
      };
    },
    4552: function (t) {
      t.exports = function (t) {
        return function (e) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    7556: function (t, e, n) {
      var r = n(1873),
        u = n(4932),
        o = n(6449),
        a = n(4394),
        f = r ? r.prototype : void 0,
        c = f ? f.toString : void 0;
      t.exports = function t(e) {
        if ('string' == typeof e) return e;
        if (o(e)) return u(e, t) + '';
        if (a(e)) return c ? c.call(e) : '';
        var n = e + '';
        return '0' == n && 1 / e == -1 / 0 ? '-0' : n;
      };
    },
    5539: function (t, e, n) {
      var r = n(882),
        u = n(828),
        o = n(6645),
        a = RegExp("['’]", 'g');
      t.exports = function (t) {
        return function (e) {
          return r(o(u(e).replace(a, '')), t, '');
        };
      };
    },
    4647: function (t, e, n) {
      var r = n(4552)({
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      });
      t.exports = r;
    },
    4840: function (t, e, n) {
      var r = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = r;
    },
    659: function (t, e, n) {
      var r = n(1873),
        u = Object.prototype,
        o = u.hasOwnProperty,
        a = u.toString,
        f = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = o.call(t, f),
          n = t[f];
        try {
          t[f] = void 0;
          var r = !0;
        } catch (c) {}
        var u = a.call(t);
        return r && (e ? (t[f] = n) : delete t[f]), u;
      };
    },
    5434: function (t) {
      var e = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      t.exports = function (t) {
        return e.test(t);
      };
    },
    9350: function (t) {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    9325: function (t, e, n) {
      var r = n(4840),
        u = 'object' == typeof self && self && self.Object === Object && self,
        o = r || u || Function('return this')();
      t.exports = o;
    },
    2225: function (t) {
      var e = '\\ud800-\\udfff',
        n = '\\u2700-\\u27bf',
        r = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        u = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        o =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        a = '[' + o + ']',
        f = '\\d+',
        c = '[' + n + ']',
        i = '[' + r + ']',
        l = '[^' + e + o + f + n + r + u + ']',
        s = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        x = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        d = '[' + u + ']',
        p = '(?:' + i + '|' + l + ')',
        v = '(?:' + d + '|' + l + ')',
        m = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        g = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        b = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
        E = '[\\ufe0e\\ufe0f]?',
        y = E + b + ('(?:\\u200d(?:' + ['[^' + e + ']', s, x].join('|') + ')' + E + b + ')*'),
        h = '(?:' + [c, s, x].join('|') + ')' + y,
        A = RegExp(
          [
            d + '?' + i + '+' + m + '(?=' + [a, d, '$'].join('|') + ')',
            v + '+' + g + '(?=' + [a, d + p, '$'].join('|') + ')',
            d + '?' + p + '+' + m,
            d + '+' + g,
            '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            f,
            h,
          ].join('|'),
          'g',
        );
      t.exports = function (t) {
        return t.match(A) || [];
      };
    },
    828: function (t, e, n) {
      var r = n(4647),
        u = n(3222),
        o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      t.exports = function (t) {
        return (t = u(t)) && t.replace(o, r).replace(a, '');
      };
    },
    6449: function (t) {
      var e = Array.isArray;
      t.exports = e;
    },
    346: function (t) {
      t.exports = function (t) {
        return null != t && 'object' == typeof t;
      };
    },
    4394: function (t, e, n) {
      var r = n(2552),
        u = n(346);
      t.exports = function (t) {
        return 'symbol' == typeof t || (u(t) && '[object Symbol]' == r(t));
      };
    },
    249: function (t, e, n) {
      var r = n(5539)(function (t, e, n) {
        return t + (n ? '-' : '') + e.toLowerCase();
      });
      t.exports = r;
    },
    3222: function (t, e, n) {
      var r = n(7556);
      t.exports = function (t) {
        return null == t ? '' : r(t);
      };
    },
    6645: function (t, e, n) {
      var r = n(1733),
        u = n(5434),
        o = n(3222),
        a = n(2225);
      t.exports = function (t, e, n) {
        return (
          (t = o(t)), void 0 === (e = n ? void 0 : e) ? (u(t) ? a(t) : r(t)) : t.match(e) || []
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-tags-js-3ad1bdf5bfd23c8e02f6.js.map
