!(function () {
    "use strict";
    
    var settingsMatching = {
        "Chia thể": "ChiaThe_check",
        "Tự/Tha ĐT": "TuThaDT_check",
        "Từ vựng Mina": "TuVungMina_check",
        "Tham khảo": "ThamKhao_check",
        "Ngữ pháp": "NguPhap_check",
        "Reibun": "Reibun_check",
        "Giao tiếp": "GiaoTiep_check",
    }
    function updateResultsView() {
        const resultDivs = document.getElementById('results-container');
        for (const result of resultDivs.children) {
        const span_result_01 = result.getElementsByClassName('span_result_01');
        if (span_result_01) {
            const idCheckboxStr = settingsMatching[span_result_01[0].textContent];
            if (idCheckboxStr) {
            if (document.getElementById(idCheckboxStr).checked) {
                result.style.display = 'block';
            } else {
                result.style.display = 'none';
            }
            }
        }
        }
    }

    var f = {
        load: function w(t, e) {
            var n = (function r() {
                return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            })();
            n.open("GET", t, !0),
                (n.onreadystatechange = (function i(e, n) {
                    return function () {
                        if (4 === e.readyState && 200 === e.status)
                            try {
                                n(null, JSON.parse(e.responseText));
                            } catch (t) {
                                n(t, null);
                            }
                    };
                })(n, e)),
                n.send();
        },
    };
    (function y(t) {
        if (
            !(function e(t) {
                return !!t && "undefined" != typeof t.required && t.required instanceof Array;
            })(t)
        )
            throw new Error("-- OptionsValidator: required options missing");
        if (!(this instanceof y)) return new y(t);
        var r = t.required;
        (this.getRequiredOptions = function () {
            return r;
        }),
            (this.validate = function (e) {
                var n = [];
                return (
                    r.forEach(function (t) {
                        "undefined" == typeof e[t] && n.push(t);
                    }),
                    n
                );
            });
    });
    var n = function g(t, e) {
            var n = e.length,
                r = t.length;
            if (n < r) return !1;
            if (r === n) return t === e;
            t: for (var i = 0, o = 0; i < r; i++) {
                for (var u = t.charCodeAt(i); o < n; ) if (e.charCodeAt(o++) === u) continue t;
                return !1;
            }
            return !0;
        },
        e = new (function t() {
            this.matches = function (t, e) {
                return n(e.toLowerCase(), t.toLowerCase());
            };
        })();
    var r = new (function O() {
        this.matches = function (e, t) {
            return (
                !!e &&
                ((e = e.trim().toLowerCase()),
                (t = t.trim().toLowerCase()).split(" ").filter(function (t) {
                    return 0 <= e.indexOf(t);
                }).length === t.split(" ").length)
            );
        };
    })();
    var l = {
        put: function z(t) {
            if (c(t)) return s(t);
            if (
                (function e(t) {
                    return Boolean(t) && "[object Array]" === Object.prototype.toString.call(t);
                })(t)
            )
                return (function i(t) {
                    var e = [];
                    a();
                    for (var n = 0, r = t.length; n < r; n++) c(t[n]) && e.push(s(t[n]));
                    return e;
                })(t);
            return undefined;
        },
        clear: a,
        search: function S(t) {
            return t
                ? (function a(t, e, n, r) {
                      for (var i = [], o = 0; o < t.length && i.length < r.limit; o++) {
                          var u = d(t[o], e, n, r);
                          u && i.push(u);
                      }
                      return i;
                  })(o, t, u.searchStrategy, u).sort(u.sort)
                : [];
        },
        setOptions: function q(t) {
            ((u = t || {}).fuzzy = t.fuzzy || !1), (u.limit = t.limit || 10), (u.searchStrategy = t.fuzzy ? e : r), (u.sort = t.sort || i);
        },
    };
    function i() {
        return 0;
    }
    var o = [],
        u = {};
    function a() {
        return (o.length = 0), o;
    }
    function c(t) {
        return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t);
    }
    function s(t) {
        return o.push(t), o;
    }
    function d(t, e, n, r) {
        for (var i in t) if (!p(t[i], r.exclude) && n.matches(t[i], e)) return t;
    }
    function p(t, e) {
        for (var n = !1, r = 0, i = (e = e || []).length; r < i; r++) {
            var o = e[r];
            !n && new RegExp(t).test(o) && (n = !0);
        }
        return n;
    }
    (u.fuzzy = !1), (u.limit = 10), (u.searchStrategy = u.fuzzy ? e : r), (u.sort = i);
    var h = {
            compile: function j(r) {
                return m.template.replace(m.pattern, function (t, e) {
                    var n = m.middleware(e, r[e], m.template);
                    // return void 0 !== n ? n : r[e] || t;
                    return void 0 !== n ? n : r[e] || ''; // DongHD fix Null still show
                });
            },
            setOptions: function C(t) {
                (m.pattern = t.pattern || m.pattern), (m.template = t.template || m.template), "function" == typeof t.middleware && (m.middleware = t.middleware);
            },
        },
        m = {};
    (m.pattern = /\{(.*?)\}/g), (m.template = ""), (m.middleware = function () {});
    var v = {
        merge: function L(t, e) {
            var n = {};
            for (var r in t) (n[r] = t[r]), "undefined" != typeof e[r] && (n[r] = e[r]);
            return n;
        },
        isJSON: function M(t) {
            try {
                return !!(t instanceof Object && JSON.parse(JSON.stringify(t)));
            } catch (e) {
                return !1;
            }
        },
    };
    !(function (t) {
        var o = {
                searchInput: null,
                resultsContainer: null,
                json: [],
                success: Function.prototype,
                searchResultTemplate: '<div class="w3-container w3-display-container w3-hover-light-gray span_container_01"><button class="w3-button w3-circle w3-ripple w3-teal w3-display-topright" onclick="addToTop(this,this.parentElement)">+</button><p><span class="span_container_01 w3-badge {badge_color}"><span class="span_result_01">{badge_txt}</span></span><span class="span_container_11">&nbsp;[Bài<span class="span_result_11">{lesson_id}</span>]&nbsp;</span><span class="span_container_12 w3-text-purple">[<span class="span_result_12">{name}</span>]</span><span class="span_container_02 w3-text-purple">[<span class="span_result_02">{mean}</span>]<span class="span_container_10">[<span class="span_result_10">{type}</span>]</span></span><span class="span_container_09 w3-text-purple">[<span class="span_result_09">{vietnamese}</span>]</span><span class="span_container_03">&nbsp;<span class="span_result_03 w3-text-red">{tei}</span>&nbsp;</span><span class="span_container_11">&nbsp;<span class="span_result_11 w3-text-red">{japanese}</span>&nbsp;</span><span class="span_container_04">&nbsp;<span class="span_result_04 w3-text-red">{hiragana}</span>&nbsp;</span><span class="span_container_05">(<span class="span_result_05 w3-text-red">{roumaji}</span>)</span><span class="span_container_06">&nbsp;[<span class="span_result_06">{jishokei}</span>]&nbsp;</span><span class="span_container_07">&nbsp;[<span class="span_result_07">{kanji}</span>]&nbsp;</span><span class="span_container_08">&nbsp;[<i><span class="span_result_08">{cn_mean}</span></i>]&nbsp;</span></p><p class="container_01">Ý Định:<span class="result_01">{igoukei}</span></p><p class="container_02">Mệnh Lệnh:<span class="result_02">{meireikei}</span></p><p class="container_03">Sai Khiến:<span class="result_03">{shiekikei}</span></p><p class="container_04">Cấm Chỉ:<span class="result_04">{kinshikei}</span></p><p class="container_05">Note:<span class="result_05">{note}</span></p><p class="container_06"><span class="result_06">{content}</span></p><p class="container_07"><span class="result_07">{reibun}</span></p><p class="container_08"><span class="result_08">{vi_mean}</span></p><p class="container_09"><span class="result_09">{pinyin}</span></p><div class="w3-row"><div class="w3-col m2 w3-center w3-pale-red row_m2_01"><p>Thể 「て」</p><p class="row_m2_result_01">{tekei}</p></div><div class="w3-col m2 w3-center w3-pale-yellow row_m2_02"><p>Thể 「た」</p><p class="row_m2_result_02">{takei}</p></div><div class="w3-col m2 w3-center w3-pale-blue row_m2_03"><p>Thể 「ない」</p><p class="row_m2_result_03">{naikei}</p></div><div class="w3-col m2 w3-center w3-pale-yellow row_m2_04"><p>Thể 「Khả Năng」</p><p class="row_m2_result_04">{kanokei}</p></div><div class="w3-col m2 w3-center w3-pale-green row_m2_05"><p>Thể 「Điều Kiện」</p><p class="row_m2_result_05">{jokenkei}</p></div><div class="w3-col m2 w3-center w3-pale-red row_m2_06"><p>Thể 「Bị Động」</p><p class="row_m2_result_06">{ukeimikei}</p></div><div class="w3-col s6 w3-center w3-pale-red row_s6_01"><p>「Tự:自動詞」[S (N)] + が + 自動詞</p><p class="row_s6_result_01">{jidoushi}</p><p class="row_s6_02"><span class="row_s6_result_02">{roumaji}</span></p><p class="row_s6_03"><span class="row_s6_result_03">{ji_mean}</span></p></div><div class="w3-col s6 w3-center w3-pale-green row_s6_06"><p>「Tha:他動詞」[S (N)] + は + [O (N)] + を + 他動詞</p><p class="row_s6_result_06">{tadoushi}</p><p class="row_s6_07"><span class="row_s6_result_07">{troumaji}</span></p><p class="row_s6_08"><span class="row_s6_result_08">{ta_mean}</span></p></div></div></div>',
                templateMiddleware: Function.prototype,
                sortMiddleware: function () {
                    return 0;
                },
                noResultsText: "<span class='w3-container'>&nbsp;&nbsp;&nbsp;No results found</span>",
                limit: 5,
                fuzzy: !1,
                exclude: [],
            },
            n = ["searchInput", "resultsContainer", "json"],
            r = (function y(e) {
                if (
                    !(function n(t) {
                        return !!t && "undefined" != typeof t.required && t.required instanceof Array;
                    })(e)
                )
                    throw new Error("-- OptionsValidator: required options missing");
                if (!(this instanceof y)) return new y(e);
                var r = e.required;
                (this.getRequiredOptions = function () {
                    return r;
                }),
                    (this.validate = function (e) {
                        var n = [];
                        return (
                            r.forEach(function (t) {
                                "undefined" == typeof e[t] && n.push(t);
                            }),
                            n
                        );
                    });
            })({ required: n });
        function i(t) {
            o.success(t),
                l.put(t),
                (function e() {
                    o.searchInput.addEventListener("keyup", function (t) {
                        (function e(t) {
                            return -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(t);
                        })(t.which) && (u(), c(t.target.value));
                    });
                })();
        }
        function u() {
            o.resultsContainer.innerHTML = "";
        }
        function a(t) {
            o.resultsContainer.innerHTML += t;
        }
        function c(t) {
            (function e(t) {
                return t && 0 < t.length;
            })(t) &&
                (u(),
                (function i(t, e) {
                    var n = t.length;
                    if (0 === n) return a(o.noResultsText);
                    for (var r = 0; r < n; r++) (t[r].query = e), a(h.compile(t[r]));
                    console.log("DongHD: finished searching...");
                    updateResultsView();
                })(l.search(t), t));
        }
        function s(t) {
            throw new Error("JSearch --- " + t);
        }
        t.JSearch = function (t) {
            return (
                0 < r.validate(t).length && s("You must specify the following required options: " + n),
                (o = v.merge(o, t)),
                h.setOptions({ template: o.searchResultTemplate, middleware: o.templateMiddleware }),
                l.setOptions({ fuzzy: o.fuzzy, limit: o.limit, sort: o.sortMiddleware }),
                v.isJSON(o.json)
                    ? i(o.json)
                    : (function e(n) {
                          f.load(n, function (t, e) {
                              t && s("failed to get JSON (" + n + ")"), i(e);
                          });
                      })(o.json),
                { search: c }
            );
        };
    })(window);
})();