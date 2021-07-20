const Controls = (function () {
  "use strict";
  //#region Private methods
  const inputForm = $(".js-input");
  const linkToTarget = $(".js-scroll");
  //#endregion
  function scroll(target) {
    const top = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: top - 15,
      },
      800
    );
  }
  return {
    //#region Public methods
    labelFormActive: function () {
      inputForm.keyup(function () {
        const _this = $(this);
        if (_this.val()) {
          _this.addClass("active");
        } else {
          _this.removeClass("active");
        }
      });
    },
    scrollToTarget: function () {
      linkToTarget.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const href = _this.attr("href");
        const target = $(href);

        if (_this.data("target")) {
          const target = $(_this.data("target"));
          scroll(target);
        }
        if (target.length) {
          scroll(target);
        }
      });
    },
    init: function () {
      Controls.labelFormActive();
      Controls.scrollToTarget();
    },

    //#endregion
  };
})();

export default Controls;
