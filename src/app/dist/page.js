"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var page_module_css_1 = require("./page.module.css");
function Home() {
    return (React.createElement("main", { className: page_module_css_1["default"].main },
        React.createElement("section", null,
            React.createElement("div", null,
                React.createElement(image_1["default"], { src: "/backgroundimage.png", alt: "backgroung-image", width: "1550", height: "800", loading: "lazy", className: "opacity-90" })))));
}
exports["default"] = Home;
