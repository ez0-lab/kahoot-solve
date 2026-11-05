// ==UserScript==
// @name         Quiz Helper
// @description  Loads the Quiz Helper overlay on the real player page.
// @version      1.0
// @match        https://kahoot.it/*
// @run-at       document-end
// @noframes
// ==/UserScript==

(function () {
  // Change this line if the repository has another name or owner. Everything else follows it.
  var base = 'https://ez0-lab.github.io/kahoot-solve/';
  var script = document.createElement('script');
  script.src = base + 'helper.js?v=' + Math.floor(Date.now() / 6e5); // A new URL every 10 minutes, so an update reaches the phone.
  document.documentElement.appendChild(script);
})();
