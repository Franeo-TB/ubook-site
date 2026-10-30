/**
 * UBook call-to-action links. This is the only place these URLs are set.
 * BOOK_DIAGNOSIS — 预约 15 分钟免费诊断
 * FREE_TEMPLATE — 免费领取收 U 模板
 */
(function () {
  "use strict";

  var UBOOK_CTA = {
    BOOK_DIAGNOSIS: "https://calendly.com/leofrank1017/ubook-15",
    FREE_TEMPLATE: "https://tally.so/r/1WWQzO"
  };

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyCtaLinks);
  } else {
    applyCtaLinks();
  }
})();
