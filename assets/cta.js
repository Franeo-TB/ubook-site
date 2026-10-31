/**
 * UBook call-to-action links and the analytics token.
 * This is the only place these values are set.
 * BOOK_DIAGNOSIS — 预约免费收款体检
 * FREE_TEMPLATE — 免费领取稳定币收款模板
 * CF_BEACON_TOKEN — Cloudflare Web Analytics. Leave empty and nothing loads.
 */
(function () {
  "use strict";

  var UBOOK_CTA = {
    BOOK_DIAGNOSIS: "https://calendly.com/leofrank1017/ubook-15",
    FREE_TEMPLATE: "https://tally.so/r/1WWQzO"
  };

  var CF_BEACON_TOKEN = "";

  window.UBOOK_CTA = UBOOK_CTA;

  function applyCtaLinks() {
    var links = document.querySelectorAll("[data-cta]");
    for (var i = 0; i < links.length; i++) {
      var key = links[i].getAttribute("data-cta");
      if (!Object.prototype.hasOwnProperty.call(UBOOK_CTA, key)) continue;
      links[i].setAttribute("href", UBOOK_CTA[key]);
      links[i].setAttribute("target", "_blank");
      links[i].setAttribute("rel", "noopener");
    }
  }

  function loadBeacon() {
    if (!CF_BEACON_TOKEN) return;
    var script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.head.appendChild(script);
  }

  function trackClicks() {
    document.addEventListener("click", function (event) {
      var node = event.target;
      while (node && node !== document) {
        if (node.getAttribute && node.getAttribute("data-track")) {
          if (window.performance && performance.mark) {
            performance.mark("ubook-" + node.getAttribute("data-track"));
          }
          return;
        }
        node = node.parentNode;
      }
    });
  }

  function start() {
    applyCtaLinks();
    loadBeacon();
    trackClicks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
