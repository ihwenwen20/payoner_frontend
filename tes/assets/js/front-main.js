"use strict";
// let isDarkStyle = window.Helpers.isRtl(),
 let isDarkStyle = window.Helpers.isDarkStyle();
!(function () {
  const e = document.getElementById("navbarSupportedContent"),
    a = document.querySelector(".layout-navbar"),
    t = document.querySelectorAll(".navbar-nav .nav-link");
  function o() {
    e.classList.remove("show");
  }
  setTimeout(function () {
    window.Helpers.initCustomOptionCheck();
  }, 1e3),
    "undefined" != typeof Waves &&
      (Waves.init(),
      Waves.attach(
        ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",
        ["waves-light"]
      ),
      Waves.attach("[class*='btn-outline-']"),
      Waves.attach("[class*='btn-label-']"),
      Waves.attach(".pagination .page-item .page-link")),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(function (t) {
        return new bootstrap.Tooltip(t);
      }),
    isDarkStyle &&
      Helpers._addClass(
        "dropdown-menu-end",
        document.querySelectorAll("#layout-navbar .dropdown-menu")
      ),
    window.addEventListener("scroll", (t) => {
      10 < window.scrollY
        ? a.classList.add("navbar-active")
        : a.classList.remove("navbar-active");
    }),
    window.addEventListener("load", (t) => {
      10 < window.scrollY
        ? a.classList.add("navbar-active")
        : a.classList.remove("navbar-active");
    }),
    document.addEventListener("click", function (t) {
      e.contains(t.target) || o();
    }),
    t.forEach((e) => {
      e.addEventListener("click", (t) => {
        e.classList.contains("dropdown-toggle") ? t.preventDefault() : o();
      });
    }),
    isDarkStyle &&
      Helpers._addClass(
        "dropdown-menu-end",
        document.querySelectorAll(".dropdown-menu")
      );
  var l,
    n,
    s = document.querySelectorAll(".nav-link.mega-dropdown"),
    s =
      (s &&
        s.forEach((t) => {
          new MegaDropdown(t);
        }),
      document.querySelector(".dropdown-style-switcher"));
  window.templateCustomizer &&
    s &&
    ((l =
      localStorage.getItem("templateCustomizer-" + templateName + "--Style") ||
      window.templateCustomizer.settings.defaultStyle),
    [].slice
      .call(s.children[1].querySelectorAll(".dropdown-item"))
      .forEach(function (t) {
        t.addEventListener("click", function () {
          var t = this.getAttribute("data-theme");
          "light" === t
            ? window.templateCustomizer.setStyle("light")
            : "dark" === t
            ? window.templateCustomizer.setStyle("dark")
            : window.templateCustomizer.setStyle("system");
        });
      }),
    (s = s.querySelector("i")),
    "light" === l
      ? (s.classList.add("ti-sun"),
        new bootstrap.Tooltip(s, {
          title: "Light Mode",
          fallbackPlacements: ["bottom"],
        }))
      : "dark" === l
      ? (s.classList.add("ti-moon"),
        new bootstrap.Tooltip(s, {
          title: "Dark Mode",
          fallbackPlacements: ["bottom"],
        }))
      : (s.classList.add("ti-device-desktop"),
        new bootstrap.Tooltip(s, {
          title: "System Mode",
          fallbackPlacements: ["bottom"],
        })),
    "system" === (n = l) &&
      (n = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
    [].slice
      .call(document.querySelectorAll("[data-app-" + n + "-img]"))
      .map(function (t) {
        var e = t.getAttribute("data-app-" + n + "-img");
        t.src = assetsPath + "img/" + e;
      }));
})();
