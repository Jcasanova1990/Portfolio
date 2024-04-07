/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/AboutMe/AboutMe */ "./src/pages/AboutMe/AboutMe.js");
/* harmony import */ var _pages_Projects_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Projects/Projects */ "./src/pages/Projects/Projects.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home/Home */ "./src/pages/Home/Home.js");
/* harmony import */ var _pages_Contact_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Contact/Contact */ "./src/pages/Contact/Contact.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Nav/Nav */ "./src/components/Nav/Nav.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");









function App() {
  // Define breakpoints for switching between Nav and NavMobile
  const isTabletOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)({
    query: '(min-width: 768px)'
  });
  const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)({
    query: '(min-width: 1024px)'
  });
  const is4kDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)({
    query: '(min-width: 2560px)'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].App
  }, is4kDesktop && /*#__PURE__*/React.createElement(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], null), isDesktop && !is4kDesktop && /*#__PURE__*/React.createElement(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], null), isTabletOrLaptop && !isDesktop && /*#__PURE__*/React.createElement(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], null), !isTabletOrLaptop && /*#__PURE__*/React.createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_Home_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/AboutMe",
    element: /*#__PURE__*/React.createElement(_pages_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_0__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/Projects",
    element: /*#__PURE__*/React.createElement(_pages_Projects_Projects__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/Contact",
    element: /*#__PURE__*/React.createElement(_pages_Contact_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Nav/Nav.js":
/*!***********************************!*\
  !*** ./src/components/Nav/Nav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.module.scss */ "./src/components/Nav/Nav.module.scss");



const Nav = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].nav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/Projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/AboutMe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "AboutMe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/Contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Contact")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./src/components/NavMobile/NavMobile.js":
/*!***********************************************!*\
  !*** ./src/components/NavMobile/NavMobile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMobile.module.scss */ "./src/components/NavMobile/NavMobile.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function NavMobile() {
  const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [listShown, setListShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleClick = () => {
    setIsRotated(!isRotated);
    setListShown(!listShown);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavMobile
  }, /*#__PURE__*/React.createElement("button", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtn,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnTop, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rotateTop : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].revertTop)
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnMid, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fadeOut : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fadeIn)
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnBottom, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rotateBottom : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].revertBottom)
  }, "|")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavContainer, " ").concat(listShown ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].expandContainer : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].collapseContainer)
  }, /*#__PURE__*/React.createElement("ul", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/"
  }, "Home")), /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/AboutMe"
  }, "About Me")), /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/Projects"
  }, "Projects")), /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/Contact"
  }, "Contact")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMobile);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

/***/ }),

/***/ "./src/pages/AboutMe/AboutMe.js":
/*!**************************************!*\
  !*** ./src/pages/AboutMe/AboutMe.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutMe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutMe.module.scss */ "./src/pages/AboutMe/AboutMe.module.scss");

 // Import the SCSS file

function AboutMe(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['about-me']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "You Can Find Me Here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/docs/Jeremy_Casanova_cv.pdf",
    download: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/pdficon.png",
    alt: "Resume Icon",
    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon
  }), "Download Resume"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/in/jeremy-casanova-a63594297/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/Lin.png",
    alt: "Link 1 Icon",
    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon
  }), "Linkedin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://app.otta.com/profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/otta.png",
    alt: "Link 2 Icon",
    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon
  }), "Otta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.github.com/Jcasanova1990"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/git.png",
    alt: "Link 3 Icon",
    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon
  }), "Github"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.upwork.com/apps/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/upW.png",
    alt: "Link 3 Icon",
    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon
  }), "Upwork"));
}
;

/***/ }),

/***/ "./src/pages/Contact/Contact.js":
/*!**************************************!*\
  !*** ./src/pages/Contact/Contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.module.scss */ "./src/pages/Contact/Contact.module.scss");
// Contact.jsx


 // Adjust the path based on your project structure

function Contact(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['contact-container']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Contact Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Jeremy Casanova"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "1+609-676-7413"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "jeremykcasanova@gmail.com"));
}

/***/ }),

/***/ "./src/pages/Home/Home.js":
/*!********************************!*\
  !*** ./src/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.module.scss */ "./src/pages/Home/Home.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Home(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].container
  }, /*#__PURE__*/React.createElement("h1", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Jeremy Casanova"), /*#__PURE__*/React.createElement("p", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].description
  }, "I am a passionate and innovative software engineer with a relentless commitment to crafting elegant and efficient solutions. ", /*#__PURE__*/React.createElement("br", null), " I specialize in translating complex ideas into robust, user-friendly applications through a blend of creativity and technical expertise.", /*#__PURE__*/React.createElement("br", null), " With a keen eye for detail and a dedication to continuous learning, I thrive on staying at the forefront of technology trends to deliver cutting-edge solutions that not only meet but exceed client expectations.", /*#__PURE__*/React.createElement("br", null), " My goal is to leave a lasting impact by contributing to the evolution of software development and pushing the boundaries of what is possible in the digital realm."), /*#__PURE__*/React.createElement("img", {
    src: "/img/main_pic.png",
    alt: "Your Picture",
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image
  }));
}

/***/ }),

/***/ "./src/pages/Projects/Projects.js":
/*!****************************************!*\
  !*** ./src/pages/Projects/Projects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.module.scss */ "./src/pages/Projects/Projects.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Projects(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].container
  }, /*#__PURE__*/React.createElement("h1", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header
  }, "Team Project"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header2
  }, "Social Media App"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].buttonsContainer
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://goose.danwheeler.me/auth",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Live Link"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/dwheeler7/goose",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Git Repo")), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header
  }, "PartLyfe"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header2
  }, "Ecommerce App"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].buttonsContainer
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://partlyfe.jeremycasanova.me/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Live Link"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Jcasanova1990/PartLyfe",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Git Repo")), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header
  }, "Bookmarkz"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header2
  }, "URL Storage App"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].buttonsContainer
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://bookmarkz.jeremycasanova.me/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Live Link"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Jcasanova1990/Bookmarkz",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Git Repo")), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header
  }, "Loving Paws Adoption Agency"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header2
  }, "Shelter Website"), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].buttonsContainer
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://lovingpawsadoptionagency.jeremycasanova.me/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Live Link"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Jcasanova1990/Loving-Paws-Adoption-Agency",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Git Repo")));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.zx4_0sA3FTTXuCtKPqfN {
  display: none;
}

.geCMEofQW5PF27HjD3zS {
  display: none;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .zx4_0sA3FTTXuCtKPqfN {
    display: block;
    color: white;
    text-align: right;
    padding: 2rem;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C {
    z-index: 2000;
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 100%;
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C span {
    display: inline-block;
    font-size: 3rem;
    position: absolute;
    transform-origin: center;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .C3I5_XFV0ilHp9ePvZiX {
    top: 0.3rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .tCnWFCy8T3sgP1cIjVvD {
    animation: tCnWFCy8T3sgP1cIjVvD 5s forwards;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .e2gbCzQI6IeL9Xu9TXQ7 {
    animation: e2gbCzQI6IeL9Xu9TXQ7 5s backwards;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .nLUWs3Vqbl6tQcqi26Og {
    top: 0.9rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .wKQw5I7wotZFNH69CbjI {
    animation: wKQw5I7wotZFNH69CbjI 1.5s forwards;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .hK05lyifPzhjRRK2Vg_L {
    animation: hK05lyifPzhjRRK2Vg_L 5s backwards;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .PBp4MoP_2HaZcTyeSnEs {
    top: 1.3rem;
    left: 1.8rem;
    transform: rotate(-90deg);
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .pQ7tnr0_gWGe4cblI1dZ {
    animation: pQ7tnr0_gWGe4cblI1dZ 5s forwards;
  }
  .zx4_0sA3FTTXuCtKPqfN .ynRCQFpJBQlt0IQ6KR9C .I2xFmEOxJJqJcNLbyXIX {
    animation: I2xFmEOxJJqJcNLbyXIX 5s backwards;
  }
  .geCMEofQW5PF27HjD3zS {
    position: fixed;
    display: block;
    top: 2rem;
    right: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    border: none;
    z-index: 1000;
    background-color: rgba(100, 237, 207, 0.9);
    overflow: hidden;
    transition: width 0.3s, height 0.3s;
  }
  .mDs6LH_G60VaRKugxY1D {
    display: none;
  }
  .t_HUZDy2sV6WaaMKao0G {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .t_HUZDy2sV6WaaMKao0G .mDs6LH_G60VaRKugxY1D {
    display: block;
    text-decoration: none;
  }
  .t_HUZDy2sV6WaaMKao0G .mDs6LH_G60VaRKugxY1D .Ldvtn5zZ9ZVyK2CTsvYy {
    text-decoration: none;
    color: black;
  }
  .t_HUZDy2sV6WaaMKao0G .mDs6LH_G60VaRKugxY1D .NgFk_AR78OSSva9Duv8u {
    text-decoration: none;
    list-style-type: none;
    font-size: 4rem;
    transition: 0.3s ease;
  }
  .t_HUZDy2sV6WaaMKao0G .mDs6LH_G60VaRKugxY1D .NgFk_AR78OSSva9Duv8u:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s ease;
    color: white;
  }
  .ewdwyC5iEiHZUKVAFc9Z {
    width: 5rem;
    height: 5rem;
  }
}
@keyframes tCnWFCy8T3sgP1cIjVvD {
  from {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
}
@keyframes e2gbCzQI6IeL9Xu9TXQ7 {
  from {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
}
@keyframes wKQw5I7wotZFNH69CbjI {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes hK05lyifPzhjRRK2Vg_L {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes pQ7tnr0_gWGe4cblI1dZ {
  from {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(45deg);
    top: -0.1rem;
    left: 2.2rem;
    font-size: 4rem;
  }
}
@keyframes I2xFmEOxJJqJcNLbyXIX {
  from {
    transform: rotate(45deg);
    top: -0.2rem;
    left: 2.2rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA,oEAAA;AACA;EACI;IACI,cAAA;IACA,YAAA;IACA,iBAAA;IACA,aAAA;EACN;EAAM;IACI,aAAA;IACA,WAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;IACA,eAAA;IACA,SAAA;IACA,WAAA;EAEV;EAAU;IACI,qBAAA;IACA,eAAA;IACA,kBAAA;IACA,wBAAA;EAEd;EACU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EACd;EAEU;IACI,2CAAA;EAAd;EAGU;IACI,4CAAA;EADd;EAIU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EAFd;EAKU;IACI,6CAAA;EAHd;EAMU;IACI,4CAAA;EAJd;EAOU;IACI,WAAA;IACA,YAAA;IACA,yBAAA;EALd;EAQU;IACI,2CAAA;EANd;EASU;IACI,4CAAA;EAPd;EAYE;IACI,eAAA;IACA,cAAA;IACA,SAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,0CAAA;IACA,gBAAA;IACA,mCAAA;EAVN;EAaE;IACI,aAAA;EAXN;EAcE;IACI,WAAA;IACA,YAAA;IACA,MAAA;IACA,QAAA;IACA,iBAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAZN;EAaM;IACI,cAAA;IACA,qBAAA;EAXV;EAYU;IACI,qBAAA;IACA,YAAA;EAVd;EAYU;IACI,qBAAA;IACA,qBAAA;IACA,eAAA;IACA,qBAAA;EAVd;EAWc;IACI,eAAA;IACA,oCAAA;IACA,qBAAA;IACA,YAAA;EATlB;EAeE;IACI,WAAA;IACA,YAAA;EAbN;AACF;AAgBA;EACI;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAdN;EAiBE;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAfN;AACF;AAkBA;EACI;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAhBN;EAmBE;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAjBN;AACF;AAoBA;EACI;IACI,UAAA;EAlBN;EAqBE;IACI,UAAA;EAnBN;AACF;AAsBA;EACI;IACI,UAAA;EApBN;EAuBE;IACI,UAAA;EArBN;AACF;AAwBA;EACI;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAtBN;EAyBE;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAvBN;AACF;AA0BA;EACI;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAxBN;EA2BE;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAzBN;AACF","sourcesContent":[".NavMobile {\n    display: none;\n}\n\n.NavContainer {\n    display: none;\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .NavMobile {\n        display: block;\n        color: white;\n        text-align: right;\n        padding: 2rem;\n        .NavBtn {\n            z-index: 2000;\n            width: 5rem;\n            height: 5rem;\n            border: none;\n            border-radius: 100%;\n            position: fixed;\n            top: 2rem;\n            right: 2rem;\n\n            span {\n                display: inline-block;\n                font-size: 3rem;\n                position: absolute;\n                transform-origin: center;\n            }\n\n            .NavBtnTop {\n                top: .3rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .rotateTop {\n                animation: rotateTop 5s forwards;\n            }\n\n            .revertTop {\n                animation: revertTop 5s backwards;\n            }\n\n            .NavBtnMid {\n                top: .9rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .fadeOut {\n                animation: fadeOut 1.5s forwards;\n            }\n\n            .fadeIn {\n                animation: fadeIn 5s backwards;\n            }\n            \n            .NavBtnBottom {\n                top: 1.3rem;\n                left: 1.8rem;\n                transform: rotate(-90deg);\n            }\n\n            .rotateBottom {\n                animation: rotateBottom 5s forwards;\n            }\n\n            .revertBottom {\n                animation: revertBottom 5s backwards;\n            }\n        }\n    }\n\n    .NavContainer {\n        position: fixed;\n        display: block;\n        top: 2rem;\n        right: 2rem;\n        width: 5rem;\n        height: 5rem;\n        border-radius: 100%;\n        border: none;\n        z-index: 1000;\n        background-color: rgba(100, 237, 207, .9);;\n        overflow: hidden;\n        transition: width 0.3s, height 0.3s; \n    }\n\n    .ul {\n        display: none;\n    }\n\n    .expandContainer {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        right: 0;\n        border-radius: 0%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        .ul {\n            display: block;\n            text-decoration: none;\n            .Link {\n                text-decoration: none;\n                color: black;\n            }\n            .li {\n                text-decoration: none;\n                list-style-type: none;\n                font-size: 4rem;\n                transition: .3s ease;\n                &:hover {\n                    cursor: pointer;\n                    background-color: rgba(0, 0, 0, .3);\n                    transition: .3s ease;\n                    color: white;\n                }\n            }\n        }\n    }\n\n    .collapseContainer {\n        width: 5rem;\n        height: 5rem;\n    }\n}\n\n@keyframes rotateTop {\n    from {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertTop {\n    from {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes rotateBottom {\n    from {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(45deg);\n        top: -.1rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertBottom {\n    from {\n        transform: rotate(45deg);\n        top: -.2rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavMobile": `zx4_0sA3FTTXuCtKPqfN`,
	"NavContainer": `geCMEofQW5PF27HjD3zS`,
	"NavBtn": `ynRCQFpJBQlt0IQ6KR9C`,
	"NavBtnTop": `C3I5_XFV0ilHp9ePvZiX`,
	"rotateTop": `tCnWFCy8T3sgP1cIjVvD`,
	"revertTop": `e2gbCzQI6IeL9Xu9TXQ7`,
	"NavBtnMid": `nLUWs3Vqbl6tQcqi26Og`,
	"fadeOut": `wKQw5I7wotZFNH69CbjI`,
	"fadeIn": `hK05lyifPzhjRRK2Vg_L`,
	"NavBtnBottom": `PBp4MoP_2HaZcTyeSnEs`,
	"rotateBottom": `pQ7tnr0_gWGe4cblI1dZ`,
	"revertBottom": `I2xFmEOxJJqJcNLbyXIX`,
	"ul": `mDs6LH_G60VaRKugxY1D`,
	"expandContainer": `t_HUZDy2sV6WaaMKao0G`,
	"Link": `Ldvtn5zZ9ZVyK2CTsvYy`,
	"li": `NgFk_AR78OSSva9Duv8u`,
	"collapseContainer": `ewdwyC5iEiHZUKVAFc9Z`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Nav/Nav.module.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Nav/Nav.module.scss ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.jNadFe4u19lDdoI3ovzt {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 102.7%;
  font-size: 2vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  background-color: rgba(0, 0, 0, 0.5568627451);
  transition: background-color 0.3s ease;
  margin-top: -1.5%;
  margin-left: -1.4%;
  border-radius: 20px 20px 20px 20px;
}

.jNadFe4u19lDdoI3ovzt:hover {
  background-color: rgba(44, 77, 41, 0.6117647059);
}

.jNadFe4u19lDdoI3ovzt a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.jNadFe4u19lDdoI3ovzt a:hover {
  animation: SM7C8qEJwy7QmdhrZnI8 0.5s forwards;
}

@keyframes SM7C8qEJwy7QmdhrZnI8 {
  from {
    color: #ffffff;
  }
  to {
    color: #000000;
  }
}
@media screen and (max-width: 768px) {
  .jNadFe4u19lDdoI3ovzt {
    font-size: 4vw;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Nav/Nav.module.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,WAAA;EACA,6CAAA;EACA,sCAAA;EACA,iBAAA;EACA,kBAAA;EACA,kCAAA;AACF;;AAEA;EACE,gDAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,iBAAA;EACA,2BAAA;AACF;;AAEA;EACE,6CAAA;AACF;;AAEA;EACE;IACE,cAAA;EACF;EACA;IACE,cAAA;EACF;AACF;AAGA;EACE;IACE,cAAA;EADF;AACF","sourcesContent":[".nav {\n  font-family: \"Russo One\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  width: 102.7%;\n  font-size: 2vw; \n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 5vh;\n  background-color: #0000008e;\n  transition: background-color 0.3s ease;\n  margin-top: -1.5%;\n  margin-left: -1.4%;\n  border-radius: 20px 20px 20px 20px;\n}\n\n.nav:hover {\n  background-color: #2c4d299c;\n}\n\n.nav a {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: bold;\n  transition: color 0.3s ease;\n}\n\n.nav a:hover {\n  animation: linkHover 0.5s forwards;\n}\n\n@keyframes linkHover {\n  from {\n    color: #ffffff;\n  }\n  to {\n    color: #000000;\n  }\n}\n\n\n@media screen and (max-width: 768px) {\n  .nav {\n    font-size: 4vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"nav": `jNadFe4u19lDdoI3ovzt`,
	"linkHover": `SM7C8qEJwy7QmdhrZnI8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `NavMobile {
  display: none;
}

.m7VesjHTKRTSgCNfxrfL {
  display: none;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .lksBUiCZFQPLTfIjYUCV {
    display: block;
    color: white;
    text-align: center;
    padding: 2rem;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe {
    z-index: 2000;
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 100%;
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe span {
    display: inline-block;
    font-size: 3rem;
    position: absolute;
    transform-origin: center;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .QuSOlzfevnGJDhi4YX_s {
    top: 0.3rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .vB3kggoOlX1C1rRpsLQ6 {
    animation: vB3kggoOlX1C1rRpsLQ6 5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .y4DcVFf0ebzeeDOPzmPS {
    animation: y4DcVFf0ebzeeDOPzmPS 5s backwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .o7qGaQg2UJbI3R_ILi8I {
    top: 0.9rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .YCnz0eud1qEAAv9Y49wW {
    animation: YCnz0eud1qEAAv9Y49wW 1.5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .dEYlGC3ncOzj03rbIaYz {
    animation: dEYlGC3ncOzj03rbIaYz 5s backwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .xPSKr2cPfMg2cmJaBcqF {
    top: 1.3rem;
    left: 1.8rem;
    transform: rotate(-90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .c1Fldc9kfZjKz92ggudg {
    animation: c1Fldc9kfZjKz92ggudg 5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .siNp7y8LcjSI_4BB0YO2 {
    animation: siNp7y8LcjSI_4BB0YO2 5s backwards;
  }
  .m7VesjHTKRTSgCNfxrfL {
    position: fixed;
    display: block;
    top: 2rem;
    right: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    border: none;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
    transition: width 0.3s, height 0.3s;
  }
  .LAxFiZWZmQlaaqJAMk4J {
    display: none;
  }
  .DvGKNPsuqDyxZDn7CWSQ {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J {
    display: block;
    text-decoration: none;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .vWBFW9dgoy2HsuBJ62zC {
    text-decoration: none;
    color: rgb(60, 231, 8);
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4 {
    text-decoration: none;
    list-style-type: none;
    font-size: 4rem;
    transition: 0.3s ease;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.3s ease;
    color: white;
  }
  .okLjs1ihh9Oby_1MzKDZ {
    width: 5rem;
    height: 5rem;
  }
}
@keyframes vB3kggoOlX1C1rRpsLQ6 {
  from {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
}
@keyframes y4DcVFf0ebzeeDOPzmPS {
  from {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
}
@keyframes YCnz0eud1qEAAv9Y49wW {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes dEYlGC3ncOzj03rbIaYz {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes c1Fldc9kfZjKz92ggudg {
  from {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(45deg);
    top: -0.1rem;
    left: 2.2rem;
    font-size: 4rem;
  }
}
@keyframes siNp7y8LcjSI_4BB0YO2 {
  from {
    transform: rotate(45deg);
    top: -0.2rem;
    left: 2.2rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavMobile/NavMobile.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA,oEAAA;AACA;EACI;IACI,cAAA;IACA,YAAA;IACA,kBAAA;IACA,aAAA;EACN;EAAM;IACI,aAAA;IACA,WAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;IACA,eAAA;IACA,SAAA;IACA,WAAA;EAEV;EAAU;IACI,qBAAA;IACA,eAAA;IACA,kBAAA;IACA,wBAAA;EAEd;EACU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EACd;EAEU;IACI,2CAAA;EAAd;EAGU;IACI,4CAAA;EADd;EAIU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EAFd;EAKU;IACI,6CAAA;EAHd;EAMU;IACI,4CAAA;EAJd;EAOU;IACI,WAAA;IACA,YAAA;IACA,yBAAA;EALd;EAQU;IACI,2CAAA;EANd;EASU;IACI,4CAAA;EAPd;EAYE;IACI,eAAA;IACA,cAAA;IACA,SAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,oCAAA;IACA,gBAAA;IACA,mCAAA;EAVN;EAaE;IACI,aAAA;EAXN;EAcE;IACI,WAAA;IACA,YAAA;IACA,MAAA;IACA,QAAA;IACA,iBAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAZN;EAaM;IACI,cAAA;IACA,qBAAA;EAXV;EAYU;IACI,qBAAA;IACA,sBAAA;EAVd;EAYU;IACI,qBAAA;IACA,qBAAA;IACA,eAAA;IACA,qBAAA;EAVd;EAWc;IACI,eAAA;IACA,0CAAA;IACA,qBAAA;IACA,YAAA;EATlB;EAeE;IACI,WAAA;IACA,YAAA;EAbN;AACF;AAgBA;EACI;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAdN;EAiBE;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAfN;AACF;AAkBA;EACI;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAhBN;EAmBE;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAjBN;AACF;AAoBA;EACI;IACI,UAAA;EAlBN;EAqBE;IACI,UAAA;EAnBN;AACF;AAsBA;EACI;IACI,UAAA;EApBN;EAuBE;IACI,UAAA;EArBN;AACF;AAwBA;EACI;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAtBN;EAyBE;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAvBN;AACF;AA0BA;EACI;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAxBN;EA2BE;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAzBN;AACF","sourcesContent":["NavMobile {\n    display: none;\n}\n\n.NavContainer {\n    display: none;\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .NavMobile {\n        display: block;\n        color: white;\n        text-align: center;\n        padding: 2rem;\n        .NavBtn {\n            z-index: 2000;\n            width: 5rem;\n            height: 5rem;\n            border: none;\n            border-radius: 100%;\n            position: fixed;\n            top: 2rem;\n            right: 2rem;\n\n            span {\n                display: inline-block;\n                font-size: 3rem;\n                position: absolute;\n                transform-origin: center;\n            }\n\n            .NavBtnTop {\n                top: .3rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .rotateTop {\n                animation: rotateTop 5s forwards;\n            }\n\n            .revertTop {\n                animation: revertTop 5s backwards;\n            }\n\n            .NavBtnMid {\n                top: .9rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .fadeOut {\n                animation: fadeOut 1.5s forwards;\n            }\n\n            .fadeIn {\n                animation: fadeIn 5s backwards;\n            }\n            \n            .NavBtnBottom {\n                top: 1.3rem;\n                left: 1.8rem;\n                transform: rotate(-90deg);\n            }\n\n            .rotateBottom {\n                animation: rotateBottom 5s forwards;\n            }\n\n            .revertBottom {\n                animation: revertBottom 5s backwards;\n            }\n        }\n    }\n\n    .NavContainer {\n        position: fixed;\n        display: block;\n        top: 2rem;\n        right: 2rem;\n        width: 5rem;\n        height: 5rem;\n        border-radius: 100%;\n        border: none;\n        z-index: 1000;\n        background-color: rgba(0, 0, 0, 0.9);;\n        overflow: hidden;\n        transition: width 0.3s, height 0.3s; \n    }\n\n    .ul {\n        display: none;\n    }\n\n    .expandContainer {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        right: 0;\n        border-radius: 0%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        .ul {\n            display: block;\n            text-decoration: none;\n            .Link {\n                text-decoration: none;\n                color: rgb(60, 231, 8);\n            }\n            .li {\n                text-decoration: none;\n                list-style-type: none;\n                font-size: 4rem;\n                transition: .3s ease;\n                &:hover {\n                    cursor: pointer;\n                    background-color: rgba(255, 255, 255, 0.3);\n                    transition: .3s ease;\n                    color: white;\n                }\n            }\n        }\n    }\n\n    .collapseContainer {\n        width: 5rem;\n        height: 5rem;\n    }\n}\n\n@keyframes rotateTop {\n    from {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertTop {\n    from {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes rotateBottom {\n    from {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(45deg);\n        top: -.1rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertBottom {\n    from {\n        transform: rotate(45deg);\n        top: -.2rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavContainer": `m7VesjHTKRTSgCNfxrfL`,
	"NavMobile": `lksBUiCZFQPLTfIjYUCV`,
	"NavBtn": `mQtM4whzNm6xQg_5eBGe`,
	"NavBtnTop": `QuSOlzfevnGJDhi4YX_s`,
	"rotateTop": `vB3kggoOlX1C1rRpsLQ6`,
	"revertTop": `y4DcVFf0ebzeeDOPzmPS`,
	"NavBtnMid": `o7qGaQg2UJbI3R_ILi8I`,
	"fadeOut": `YCnz0eud1qEAAv9Y49wW`,
	"fadeIn": `dEYlGC3ncOzj03rbIaYz`,
	"NavBtnBottom": `xPSKr2cPfMg2cmJaBcqF`,
	"rotateBottom": `c1Fldc9kfZjKz92ggudg`,
	"revertBottom": `siNp7y8LcjSI_4BB0YO2`,
	"ul": `LAxFiZWZmQlaaqJAMk4J`,
	"expandContainer": `DvGKNPsuqDyxZDn7CWSQ`,
	"Link": `vWBFW9dgoy2HsuBJ62zC`,
	"li": `c6nVZZUwtb5ZjSC5zOF4`,
	"collapseContainer": `okLjs1ihh9Oby_1MzKDZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutMe/AboutMe.module.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutMe/AboutMe.module.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  text-align: center;
  padding: 20px;
}
body .Wkh9bbKF4HKDLi1kbMGd {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(50, 189, 40, 0.87);
  border-radius: 0 0 20px 20px;
}
body h1 {
  color: #ffffff;
  font-size: 48px;
  margin-bottom: 20px;
}
body a {
  color: #000000;
  font-size: 22px;
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s ease;
}
body a:hover {
  color: #ffffff;
}
body a img {
  margin-right: 10px;
  width: 24px;
  height: 24px;
}`, "",{"version":3,"sources":["webpack://./src/pages/AboutMe/AboutMe.module.scss"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,aAAA;AAAJ;AAEI;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yCAAA;EACA,4BAAA;AAAJ;AAEI;EAAI,cAAA;EACF,eAAA;EACA,mBAAA;AACN;AAEI;EACE,cAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,qBAAA;EACA,2BAAA;AAAN;AAEM;EACE,cAAA;AAAR;AAGM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AADR","sourcesContent":["\nbody{\n    text-align: center;\n    padding: 20px;\n    \n    .about-me {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    text-align: center;\n    background-color:rgba(50, 189, 40, 0.87);\n    border-radius: 0 0 20px 20px;}\n\n    h1 {color: #ffffff;\n      font-size: 48px;\n      margin-bottom: 20px;\n    }\n  \n    a {\n      color: #000000;\n      font-size: 22px;\n      display: block;\n      margin-bottom: 10px;\n      text-decoration: none;\n      transition: color 0.3s ease;\n  \n      &:hover {\n        color: #ffffff;\n      }\n\n      img {\n        margin-right: 10px; \n        width: 24px; \n        height: 24px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"about-me": `Wkh9bbKF4HKDLi1kbMGd`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Contact/Contact.module.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Contact/Contact.module.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.xIstjM9AH7umQaLfq6Op {
  height: 25vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  align-items: center;
  text-align: center;
  background-color: rgba(50, 189, 40, 0.87);
  border-radius: 0 0 20px 20px;
}

.pxMS4CAqN5az1lNRpgRr {
  font-size: 24px;
  margin-bottom: 20px;
}

.DpLA8rZpXO1Vd6wJBCGk {
  margin-bottom: 10px;
}

h2, h3, h4 {
  margin-top: 0;
  margin-bottom: 5px;
}`, "",{"version":3,"sources":["webpack://./src/pages/Contact/Contact.module.scss"],"names":[],"mappings":"AAEA;EACI,YAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA,EAAA,iCAAA;EACA,mBAAA;EACA,kBAAA;EACA,yCAAA;EACA,4BAAA;AADJ;;AAIA;EACI,eAAA;EACA,mBAAA;AADJ;;AAIA;EACI,mBAAA;AADJ;;AAIA;EACI,aAAA;EACA,kBAAA;AADJ","sourcesContent":["// Contact.scss\n\n.contact-container {\n    height: 25vh;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n    display: flex;\n    flex-direction: column; /* Arrange children in a column */\n    align-items: center;\n    text-align: center;\n    background-color: rgba(50, 189, 40, 0.87);\n    border-radius: 0 0 20px 20px;\n}\n\n.contact-title {\n    font-size: 24px;\n    margin-bottom: 20px;\n}\n\n.contact-info {\n    margin-bottom: 10px;\n}\n\nh2, h3, h4 {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contact-container": `xIstjM9AH7umQaLfq6Op`,
	"contact-title": `pxMS4CAqN5az1lNRpgRr`,
	"contact-info": `DpLA8rZpXO1Vd6wJBCGk`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Home/Home.module.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Home/Home.module.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Common styles */
body {
  background-image: url(https://www.abcomllc.com/wp-content/uploads/shutterstock_low-res.jpg);
  background-size: cover;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.VoR2UQJ5mE6rX9UsFTqM {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(50, 189, 40, 0.87);
  border-radius: 0 0 20px 20px;
  margin-top: -0.1vh; /* Adjusted margin for better centering */
}

.celPFavHWG7w6UM13Ep3 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
}

.f0HsiVzo4UqTspXSWc7w {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.m8hL_Be5s_JbHdXKJcxo {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.zobGozcju9MZr39aA9yc {
  margin-top: -6%;
  margin-left: 1%;
  width: 300px;
  height: auto;
  margin-right: 20px;
  border-radius: 12%;
}

p {
  color: rgb(255, 255, 255);
  margin-top: 30%;
  margin-left: 1%;
  width: 320px;
  height: auto;
  margin-right: 20px;
}

/* Media queries for different devices */
@media only screen and (max-width: 768px) {
  /* For tablets and mobile */
  .VoR2UQJ5mE6rX9UsFTqM {
    max-width: 100%;
    height: 145vh;
  }
  .zobGozcju9MZr39aA9yc {
    width: 200px; /* Adjusted width for smaller screens */
    margin-top: 2%;
    margin-left: 0;
    margin-right: 10px;
  }
  p {
    width: 250px; /* Adjusted width for smaller screens */
    margin-left: 0;
    margin-top: 20%;
    margin-right: 10px;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1440px) {
  /* For laptops and medium-sized desktop screens */
  .VoR2UQJ5mE6rX9UsFTqM {
    height: 105vh;
  }
  .VoR2UQJ5mE6rX9UsFTqM .zobGozcju9MZr39aA9yc {
    width: 300px; /* Adjusted width for smaller screens */
    margin-top: -30%;
    margin-left: -77%;
  }
  .VoR2UQJ5mE6rX9UsFTqM p {
    width: 450px; /* Adjusted width for smaller screens */
    margin-left: 20%;
    margin-top: 20%;
    margin-right: 10px;
  }
}
@media only screen and (min-width: 1367px) and (max-width: 2550px) {
  /* For larger desktop screens */
  .VoR2UQJ5mE6rX9UsFTqM {
    height: 95vh;
    max-width: 1200px;
  }
  .VoR2UQJ5mE6rX9UsFTqM .zobGozcju9MZr39aA9yc {
    width: 600px; /* Adjusted width for smaller screens */
    margin-top: -76.5%;
    margin-left: -57%;
  }
  .VoR2UQJ5mE6rX9UsFTqM p {
    width: 550px; /* Adjusted width for smaller screens */
    margin-left: 50%;
    margin-bottom: 40%;
  }
}
@media only screen and (min-width: 2560px) {
  /* For 4K desktop screens */
  .VoR2UQJ5mE6rX9UsFTqM {
    height: 195vh;
    max-width: 3800px;
  }
  .VoR2UQJ5mE6rX9UsFTqM .zobGozcju9MZr39aA9yc {
    width: 900px; /* Adjusted width for smaller screens */
    margin-top: -117.5%;
    margin-left: -57%;
  }
  .VoR2UQJ5mE6rX9UsFTqM p {
    font-size: 4vh;
    width: 750px; /* Adjusted width for smaller screens */
    margin-left: 50%;
    margin-bottom: 80%;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/Home/Home.module.scss"],"names":[],"mappings":"AAAA,kBAAA;AAEA;EACE,2FAAA;EACA,sBAAA;EACA,oCAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,gBAAA;EACA,cAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yCAAA;EACA,4BAAA;EACA,kBAAA,EAAA,yCAAA;AAAF;;AAGA;EACE,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AAAF;;AAGA;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,eAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,yBAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;AAAF;;AAGA,wCAAA;AAEA;EACE,2BAAA;EACA;IACI,eAAA;IACA,aAAA;EADJ;EAIA;IACI,YAAA,EAAA,uCAAA;IACA,cAAA;IACA,cAAA;IACA,kBAAA;EAFJ;EAKA;IACI,YAAA,EAAA,uCAAA;IACA,cAAA;IACA,eAAA;IACA,kBAAA;EAHJ;AACF;AAMA;EACE,iDAAA;EACA;IACI,aAAA;EAJJ;EAMI;IACE,YAAA,EAAA,uCAAA;IACA,gBAAA;IACA,iBAAA;EAJN;EAOE;IACI,YAAA,EAAA,uCAAA;IACA,gBAAA;IACA,eAAA;IACA,kBAAA;EALN;AACF;AASA;EACE,+BAAA;EACA;IACI,YAAA;IACA,iBAAA;EAPJ;EAQI;IACE,YAAA,EAAA,uCAAA;IACA,kBAAA;IACA,iBAAA;EANN;EAUE;IACI,YAAA,EAAA,uCAAA;IACA,gBAAA;IACA,kBAAA;EARN;AACF;AAYA;EACE,2BAAA;EACA;IACE,aAAA;IACA,iBAAA;EAVF;EAWE;IACE,YAAA,EAAA,uCAAA;IACA,mBAAA;IACA,iBAAA;EATJ;EAaA;IACE,cAAA;IACE,YAAA,EAAA,uCAAA;IACA,gBAAA;IACA,kBAAA;EAXJ;AACF","sourcesContent":["/* Common styles */\n\nbody {\n  background-image: url(https://www.abcomllc.com/wp-content/uploads/shutterstock_low-res.jpg);\n  background-size: cover;\n  font-family: \"Russo One\", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background-color: rgba(50, 189, 40, 0.87);\n  border-radius: 0 0 20px 20px;\n  margin-top: -.1vh; /* Adjusted margin for better centering */\n}\n\n.title {\n  font-size: 48px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: rgb(255, 255, 255);\n}\n\n.content {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.description {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n\n.image {\n  margin-top: -6%;\n  margin-left: 1%;\n  width: 300px;\n  height: auto;\n  margin-right: 20px;\n  border-radius: 12%;\n}\n\np {\n  color: rgb(255, 255, 255);\n  margin-top: 30%;\n  margin-left: 1%;\n  width: 320px;\n  height: auto;\n  margin-right: 20px;\n}\n\n/* Media queries for different devices */\n\n@media only screen and (max-width: 768px) {\n  /* For tablets and mobile */\n  .container {\n      max-width: 100%; \n      height: 145vh;\n  }\n\n  .image {\n      width: 200px; /* Adjusted width for smaller screens */\n      margin-top: 2%;\n      margin-left: 0;\n      margin-right: 10px;\n  }\n\n  p {\n      width: 250px; /* Adjusted width for smaller screens */\n      margin-left: 0;\n      margin-top: 20%;\n      margin-right: 10px;\n  }\n}\n\n@media only screen and (min-width: 769px) and (max-width: 1440px) {\n  /* For laptops and medium-sized desktop screens */\n  .container {\n      height: 105vh;\n\n      .image {\n        width: 300px; /* Adjusted width for smaller screens */\n        margin-top: -30%;\n        margin-left: -77%;\n    }\n  \n    p {\n        width: 450px; /* Adjusted width for smaller screens */\n        margin-left: 20%;\n        margin-top: 20%;\n        margin-right: 10px;\n    }\n  }\n}\n\n@media only screen and (min-width: 1367px) and (max-width: 2550px) {\n  /* For larger desktop screens */\n  .container {\n      height: 95vh;\n      max-width: 1200px; \n      .image {\n        width: 600px; /* Adjusted width for smaller screens */\n        margin-top: -76.5%;\n        margin-left: -57%;\n\n    }\n  \n    p {\n        width: 550px; /* Adjusted width for smaller screens */\n        margin-left: 50%;\n        margin-bottom: 40%;\n    }\n  }\n}\n\n@media only screen and (min-width: 2560px) {\n  /* For 4K desktop screens */\n  .container {\n    height: 195vh;\n    max-width: 3800px; \n    .image {\n      width: 900px; /* Adjusted width for smaller screens */\n      margin-top: -117.5%;\n      margin-left: -57%;\n\n  }\n\n  p {\n    font-size: 4vh;\n      width: 750px; /* Adjusted width for smaller screens */\n      margin-left: 50%;\n      margin-bottom: 80%;\n  }\n}\n}\n\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `VoR2UQJ5mE6rX9UsFTqM`,
	"title": `celPFavHWG7w6UM13Ep3`,
	"content": `f0HsiVzo4UqTspXSWc7w`,
	"description": `m8hL_Be5s_JbHdXKJcxo`,
	"image": `zobGozcju9MZr39aA9yc`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Projects/Projects.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Projects/Projects.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-size: fill;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.d4rLsVj02JlRG7XZzCCF {
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(50, 189, 40, 0.87);
  border-radius: 0 0 20px 20px;
}

/* Title styles */
.LY_sacVl_jMSW_z_mIEo {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
}

/* Header styles */
.OXEe4QKgm0WoyQzjPg14 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
}

/* Buttons container styles */
.JghjQChoR_BAwpuUEDAl {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Button styles */
.Go0ol1PTWX58vNArvQ5H {
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.Go0ol1PTWX58vNArvQ5H:hover {
  background-color: rgba(0, 0, 0, 0.6705882353);
}`, "",{"version":3,"sources":["webpack://./src/pages/Projects/Projects.module.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,oCAAA;EACF,gBAAA;EACA,kBAAA;AACF;;AAEA;EACI,cAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yCAAA;EACA,4BAAA;AACJ;;AAEE,iBAAA;AACA;EACE,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AACJ;;AAEE,kBAAA;AACA;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AACJ;;AAEE,6BAAA;AACA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;AACJ;;AAEE,kBAAA;AACA;EACE,yBAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,sCAAA;AACJ;AACI;EACE,6CAAA;AACN","sourcesContent":["body{\n    background-size: fill;\n    font-family: \"Russo One\", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  }\n\n.container {\n    color: #ffffff;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    background-color:rgba(50, 189, 40, 0.87);\n    border-radius: 0 0 20px 20px;\n  }\n  \n  /* Title styles */\n  .title {\n    font-size: 48px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: rgb(255, 255, 255);\n  }\n  \n  /* Header styles */\n  .header {\n    font-size: 24px;\n    font-weight: bold;\n    margin-top: 30px;\n    margin-bottom: 10px;\n    text-align: center; \n  }\n  \n  /* Buttons container styles */\n  .buttonsContainer {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; \n  }\n  \n  /* Button styles */\n  .button {\n    background-color: #000000;\n    color: #ffffff;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 20px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  \n    &:hover {\n      background-color: #000000ab;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `d4rLsVj02JlRG7XZzCCF`,
	"title": `LY_sacVl_jMSW_z_mIEo`,
	"header": `OXEe4QKgm0WoyQzjPg14`,
	"buttonsContainer": `JghjQChoR_BAwpuUEDAl`,
	"button": `Go0ol1PTWX58vNArvQ5H`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Nav/Nav.module.scss":
/*!********************************************!*\
  !*** ./src/components/Nav/Nav.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Nav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Nav.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Nav/Nav.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Nav_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Nav_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Nav_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Nav_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavMobile/NavMobile.module.scss":
/*!********************************************************!*\
  !*** ./src/components/NavMobile/NavMobile.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavMobile.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AboutMe/AboutMe.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/AboutMe/AboutMe.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AboutMe.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutMe/AboutMe.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Contact/Contact.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/Contact/Contact.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Contact_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Contact.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Contact/Contact.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Contact_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Contact_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Contact_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Contact_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Home/Home.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/Home/Home.module.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Home.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Home/Home.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Projects/Projects.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/Projects/Projects.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Projects.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Projects/Projects.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-a44d7e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.bfe3cf07c8717f5717f28686ca617345.js.map