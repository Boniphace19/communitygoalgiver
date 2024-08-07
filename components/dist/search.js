"use client";
"use strict";
exports.__esModule = true;
var SearchBar_1 = require("./SearchBar");
var react_1 = require("react");
function Search() {
    var _a = react_1.useState([]), result = _a[0], setResult = _a[1];
    var handleSearch = function (query) {
        // Implement your search logic here
        console.log("Searching for:", query);
    };
    return (React.createElement("div", null,
        React.createElement(SearchBar_1["default"], { onSearch: handleSearch })));
}
exports["default"] = Search;
