var Menu = (function () {
  return {
    dropdownMenu: function dropdownMenu() {
      function preventDefault(e) {
        e.preventDefault();
      }

      if (document.documentElement.clientWidth < 1023) {
        $(".navigation-container > .menu-item-has-children > a").bind(
          "click",
          preventDefault
        );
      } else {
        $(".navigation-container > .menu-item-has-children > a").unbind(
          "click",
          preventDefault
        );
      }

      window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth < 1023) {
          $(".navigation-container > .menu-item-has-children > a").bind(
            "click",
            preventDefault
          );
        } else {
          $(".navigation-container > .menu-item-has-children > a").unbind(
            "click",
            preventDefault
          );
        }
      });
      $(
        ".navigation > .menu-item-has-children > .sub-menu .menu-item-has-children"
      ).on("mouseover", function () {
        var secondDropdown = $(
          ".navigation > .menu-item-has-children > .sub-menu .menu-item-has-children .sub-menu"
        );

        for (var i = 0; i < secondDropdown.length; i++) {
          var dropdownMaxHeight = Math.max(
            secondDropdown[i].offsetHeight,
            secondDropdown[i].parentNode.parentNode.offsetHeight
          );
          secondDropdown[i].style.height = dropdownMaxHeight + "px";
          secondDropdown[i].parentNode.parentNode.style.height =
            dropdownMaxHeight + "px";
        }
      });
      $(
        ".navigation > .menu-item-has-children > .sub-menu .menu-item-has-children"
      ).on("mouseleave", function () {
        var secondDropdown = $(
          ".navigation > .menu-item-has-children > .sub-menu .menu-item-has-children .sub-menu"
        );

        for (var i = 0; i < secondDropdown.length; i++) {
          secondDropdown[i].style.height = "auto";
          secondDropdown[i].parentNode.parentNode.style.height = "auto";
        }
      });
    },
    showMobileMenu: function showMobileMenu() {
      jQuery(document).ready(function () {
        jQuery(".mobile-button").on("click", function () {
          jQuery("body").addClass("overflow");
          jQuery(".navigation-mobile").fadeIn();
        });
        jQuery(".navigation-close").on("click", function () {
          jQuery("body").removeClass("overflow");
          jQuery(".navigation-mobile").fadeOut();
        });
      });
    },
    init: function init() {
      Menu.dropdownMenu();
      Menu.showMobileMenu();
    },
  };
})();

export default Menu;
