// Main JS module

import objectFitImages from "object-fit-images";
import Controls from "./modules/Controls";
import Menu from "./modules/Menu";
import Popup from "./modules/Popup";
import Submit from "./modules/Submit";

function youtubeShowVideo() {
  var i, c, y, v, n;
  v = document.getElementsByClassName("youtube");
  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute(
      "src",
      "https://i.ytimg.com/vi/" + y.dataset.id + "/hqdefault.jpg"
    );
    i.setAttribute("alt", "video-preview");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function () {
      var a = document.createElement("iframe");
      a.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.id +
          "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"
      );
      a.setAttribute("allow", "autoplay");
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this);
    };
  }
}

$(function () {
  objectFitImages();
  youtubeShowVideo();
  Controls.init();
  Menu.init();
  Popup.init();
  Submit.init();
});
