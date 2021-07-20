const Popup = (function () {
  "use strict";
  const popUpBlock = $(".js-popup");
  const overlay = $(".js-overlay");
  const linkShowPopUp = $(".js-show-popup");

  return {
    initPopup: function () {
      linkShowPopUp.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const target = $(_this.data("target"));
        target.toggleClass("active");
        overlay.addClass("active");
      });
    },
    closePopup: function () {
      $(".js-close").click(function (e) {
        e.preventDefault();
        popUpBlock.removeClass("active");
        $(".js-popup-init").removeClass("active");
        overlay.removeClass("active");
      });
    },
    init: function () {
      Popup.initPopup();
      Popup.closePopup();
    },
  };
})();

export default Popup;
