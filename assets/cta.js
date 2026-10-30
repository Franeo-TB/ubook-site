/**
 * UBook call-to-action links. This is the only place these URLs are set.
 * BOOK_SCREEN_SHARE — 预约屏幕共享
 * TELEGRAM_WECHAT — Telegram / 微信咨询
 */
(function () {
  "use strict";

  var UBOOK_CTA = {
    BOOK_SCREEN_SHARE: "https://example.com/ubook/book-screen-share",
    TELEGRAM_WECHAT: "https://example.com/ubook/telegram-wechat"
  };

  window.UBOOK_CTA = UBOOK_CTA;

  function applyCtaLinks() {
    var links = document.querySelectorAll("[data-cta]");
    for (var i = 0; i < links.length; i++) {
      var key = links[i].getAttribute("data-cta");
      if (Object.prototype.hasOwnProperty.call(UBOOK_CTA, key)) {
        links[i].setAttribute("href", UBOOK_CTA[key]);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyCtaLinks);
  } else {
    applyCtaLinks();
  }
})();
