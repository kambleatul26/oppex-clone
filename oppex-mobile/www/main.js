(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'oppex';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _card1_card1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./card1/card1.component */ "./src/app/card1/card1.component.ts");
/* harmony import */ var _card2_card2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./card2/card2.component */ "./src/app/card2/card2.component.ts");
/* harmony import */ var _card3_card3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./card3/card3.component */ "./src/app/card3/card3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__["PricingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _card1_card1_component__WEBPACK_IMPORTED_MODULE_17__["Card1Component"],
                _card2_card2_component__WEBPACK_IMPORTED_MODULE_18__["Card2Component"],
                _card3_card3_component__WEBPACK_IMPORTED_MODULE_19__["Card3Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot([
                    { path: 'home', component: _body_body_component__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"] },
                    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"] },
                    { path: 'pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__["PricingComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
                    { path: '**', component: _body_body_component__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbo {\n  text-align: center;\n  color:rgba(1,1,1,0.9);\n  background-color: rgba(0,0,0,0.0);\n}\n\n.innerJumb {\n  color: rgba(1,1,1,0.4);\n}\n\n.outJumb {\n  color: rgba(1,1,1,0.7);\n}\n\n.jumb {\n  padding-top: 25%;\n  text-align: center;\n  color: white;\n  height: 100vh;\n  background-color: rgba(0,0,0,0.0);\n}\n\n.back {\n  background-image: url(\"/src/assets/images/header.jpeg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.whiteText {\n  color: white;\n}\n\n.get-Touch-div {\n  width: 250px;\n  text-align: center;\n  padding: 10% 0% 3% 0%;\n}\n"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <div class=\"container\">\n        <div class=\"jumbotron jumb\">\n            <h1 class=\"display-4\">Find new sales in the public sector</h1>\n            <p class=\"lead\">Millions of public tenders and bidding contests all over Europe</p>\n            <p class=\"lead\">\n                <a class=\"btn btn-success btn-lg\" href=\"#\" role=\"button\">TRY IT OUT</a>\n            </p>\n            <a href=\"#\">Read more</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"jumbotron jumbo\">\n      <h1 class=\"display\">Get Relevant Tenders, The Way You Prefer.</h1>\n      <br>\n        <p class=\"lead outJumb\">Do not waste time browsing tender portals. Get relevant leads automatically and spend your time bidding for a win.</p>\n      </div>\n\n      <div style=\"display : flex;\">\n          <div class=\"jumbotron jumbo outJumb\">\n            <img src=\"/src/assets/images/shares.png\" style=\"padding-bottom: 2%; width: 70px;\" alt=\"\">\n            <h1 class=\"display\">Receive & Share Alerts</h1>\n            <br>\n            <p class=\"lead innerJumb\">Automatically receive tenders & share them with your team</p>\n            <p class=\"lead\">\n              <a class=\"btn btn-success btn-sm\" href=\"#\" role=\"button\">Learn More</a>\n            </p>\n          </div>\n          <div class=\"jumbotron jumbo\" style=\"color: rgba(1,1,1,0.7);\">\n            <img src=\"/src/assets/images/relevent.png\" style=\"width: 70px;\" alt=\"\">\n            <h1 class=\"display\">Find Relevant Tenders</h1>\n            <br>\n            <p class=\"lead innerJumb\">Easily customize your search to find relevant tenders</p>\n            <p class=\"lead\">\n                <a class=\"btn btn-success btn-sm\" href=\"#\" role=\"button\">Learn More</a>\n            </p>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\" style=\"background-color: rgb(245,245,245);\">\n    <div class=\"container\">\n        <div class=\"jumbotron jumbo\">\n            <h1 class=\"display\">What Our Customers Say</h1>\n            <br>\n            <p class=\"lead outJumb\">Our satisfied clients include global corporations, leading local companies, public sector buyers, as well as a vast array of professional service providers.</p>\n\n            <div style=\"display : flex; justify-content: space-between;\">\n                <div class=\"jumbotron jumbo outJumb\">\n                    <h1 class=\"display\"><img src=\"/src/assets/images/ONCALL-Logo_rgb.jpg\" width=\"180px\" height=\"50px\" alt=\"\"></h1>\n                    <br>\n                    <p class=\"lead innerJumb\">\n                        \"We have now been able to prepare more tenders globally, as we have received notifications for opportunities which we were not previously receiving.“</p>\n                    <img src=\"/src/assets/images/Alex-Fairie.jpg\" class=\"rounded-circle\" width=\"60px\" alt=\"\">\n                    <p>Darren Fiander\n                        <br><span class=\"innerJumb\">Director, OnCall</span></p>\n                </div>\n                <div class=\"jumbotron jumbo\" style=\"color: rgba(1,1,1,0.7);\">\n                    <h1 class=\"display\"><img src=\"/src/assets/images/cropped-cropped-FarrellsLogo-2.png\" width=\"180px\" height=\"30px\" alt=\"\"></h1>\n                    <br>\n                    <p class=\"lead innerJumb\">“We have, through Oppex, been able to bid on a number of projects outside of our usual geographical sphere.”</p>\n                    <img src=\"/src/assets/images/austen_smith.jpg\" class=\"rounded-circle\" width=\"60px\" alt=\"\">\n                    <p>Darren Fiander\n                        <br><span class=\"innerJumb\">Senior Architect, Farrells</span></p>\n                </div>\n                <div class=\"jumbotron jumbo\" style=\"color: rgba(1,1,1,0.7);\">\n                    <h1 class=\"display\"><img src=\"/src/assets/images/social.jpg\" width=\"180px\" height=\"50px\" alt=\"\"></h1>\n                    <br>\n                    <p class=\"lead innerJumb\">\n                        \"We are able to find previously awarded contracts and ensure that we touch base with prospects before the contracts are up for renewal.“</p>\n                    <img src=\"/src/assets/images/darren.jpeg\" class=\"rounded-circle\" width=\"60px\" alt=\"\">\n                    <p>Darren Fiander\n                        <br><span class=\"innerJumb\">Director, SocialSignIn</span></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div style=\"display: flex; justify-content: space-between\">\n        <div class=\"get-Touch-div\">\n            <img src=\"/src/assets/images/database.png\" width=\"65px\" style=\"padding-bottom: 4%;\" alt=\"\">\n            <p style=\"font-size: 20px\">Over 9 Million Tenders</p>\n            <p class=\"innerJumb\">Access Europe’s largest tender database</p>\n        </div>\n        <div class=\"get-Touch-div\">\n            <img src=\"/src/assets/images/opportunity.png\" width=\"65px\" style=\"padding-bottom: 4%;\" alt=\"\">\n            <p style=\"font-size: 20px\">+150.000 Live Opportunities</p>\n            <p class=\"innerJumb\">Find over 150.000 live tenders</p>\n        </div>\n        <div class=\"get-Touch-div\">\n            <img src=\"/src/assets/images/coverage.png\" width=\"65px\" style=\"padding-bottom: 4%;\" alt=\"\">\n            <p style=\"font-size: 20px\">95% Coverage</p>\n            <p class=\"innerJumb\">Best coverage on European public market sector</p>\n        </div>\n        <div class=\"get-Touch-div\">\n            <img src=\"/src/assets/images/industries.png\" width=\"65px\" style=\"padding-bottom: 4%;\" alt=\"\">\n            <p style=\"font-size: 20px\">+200 Industries</p>\n            <p class=\"innerJumb\">Covering over 200 industries</p>\n        </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-outline-success\" style=\"width: 250px; height: 60px; margin-left: 430px;\">Get In Touch</button>\n</div>\n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/card1/card1.component.css":
/*!*******************************************!*\
  !*** ./src/app/card1/card1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_size {\r\n    max-width: 700px;\r\n    \r\n  }\r\n  \r\n \r\n mat-card{\r\n     border:2px solid white;\r\n     margin-left:35px;\r\n }\r\n  \r\n \r\n .hv :hover {\r\n      border-color:#1ECDEE;\r\n }\r\n  \r\n \r\n mat-card-title{\r\n        margin-left:120px;\r\n      \r\n        \r\n }\r\n  \r\n \r\n .ft_l{\r\n    font-weight: 100;\r\n }\r\n  \r\n \r\n a {\r\n      margin-top:30px;\r\n }\r\n  \r\n \r\n .i{\r\n      margin-left:auto;\r\n      margin-right:auto;\r\n      \r\n      width:150px;\r\n  }\r\n  \r\n \r\n .b{\r\n    font-size:25px;\r\n  }\r\n  \r\n \r\n .e{\r\n    font-size:20px;\r\n  }\r\n  \r\n \r\n li {\r\n    text-align: left;\r\n    font-weight: 700;\r\n  }\r\n  \r\n \r\n li .v{\r\n        font-weight: normal;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/card1/card1.component.html":
/*!********************************************!*\
  !*** ./src/app/card1/card1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hv\">\n<mat-card class=\"card_size\">\n    <mat-card-header>\n      \n      <mat-card-title class=\"text-muted\"><h4 style=\"margin-top: 35px;\">Advanced</h4></mat-card-title>\n    </mat-card-header>\n    <div class=\"i\">  \n      <img mat-card-image src=\"/src/assets/images/car.png\" alt=\"Car\" height=\"120px\" width=\"50px\">\n    </div>\n  \n      <mat-card-content>\n          <p class=\"font-weight-bold b\">99 &euro;<span class=\"font-weight-light e\">/ month</span></p>\n          <a href=\"#\" class=\"btn btn-success btn-lg\">START FREE TRIAL</a>\n          <p class=\"text-muted card-text\">Starts with pro plan</p>\n          <ul style=\"padding: 20px\">\n              <li>Unlimited Searches</li>\n              <li>Licenses: 1</li>\n              <li>Search profiles: 3</li>\n              <li class=\"ft_l text-muted\">Historical Data</li>\n              <li class=\"ft_l text-muted\">Winner Data</li>\n              <li class=\"ft_l text-muted\">Data Export</li>\n              <li class=\"ft_l text-muted\">Oppex Setup</li>\n              <li class=\"ft_l text-muted\">Onsite Training</li>\n          </ul>\n    </mat-card-content>\n   \n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/card1/card1.component.ts":
/*!******************************************!*\
  !*** ./src/app/card1/card1.component.ts ***!
  \******************************************/
/*! exports provided: Card1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card1Component", function() { return Card1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Card1Component = /** @class */ (function () {
    function Card1Component() {
    }
    Card1Component.prototype.ngOnInit = function () {
    };
    Card1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card1',
            template: __webpack_require__(/*! ./card1.component.html */ "./src/app/card1/card1.component.html"),
            styles: [__webpack_require__(/*! ./card1.component.css */ "./src/app/card1/card1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Card1Component);
    return Card1Component;
}());



/***/ }),

/***/ "./src/app/card2/card2.component.css":
/*!*******************************************!*\
  !*** ./src/app/card2/card2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_size {\r\n    max-width: 700px;\r\n   \r\n  }\r\n  .ft_l{\r\n    font-weight: 100;\r\n }\r\n  a{\r\n     margin-top:30px;\r\n }\r\n  mat-card{\r\n    border:2px solid green;\r\n\r\n     margin-left:30px;\r\n }\r\n  .hv :hover{\r\n      border-color:#1ECDEE;\r\n    \r\n     \r\n\r\n }\r\n  mat-card-title{\r\n        margin-left:120px;\r\n      \r\n        \r\n }\r\n  .i{\r\n      margin-left:auto;\r\n      margin-right:auto;\r\n      \r\n      width:150px;\r\n  }\r\n  .b{\r\n    font-size:25px;\r\n  }\r\n  .e{\r\n    font-size:20px;\r\n  }\r\n  li {\r\n    text-align: left;\r\n    font-weight: bold;\r\n  }\r\n  li .v{\r\n        font-weight: normal;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/card2/card2.component.html":
/*!********************************************!*\
  !*** ./src/app/card2/card2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hv\">\n<mat-card  class=\"card_size\">\n  <mat-card-header>\n    \n    <mat-card-title ><p class=\"text-success\">Free trial starts here</p><h4 class=\"text-muted\">Professional</h4></mat-card-title>\n  </mat-card-header>\n  <div class=\"i\">  \n    <img mat-card-image src=\"/src/assets/images/boat.png\" alt=\"Car\" height=\"120px\" width=\"50px\">\n  </div>\n\n    <mat-card-content>\n        <p class=\"font-weight-bold b\">199 &euro;<span class=\"font-weight-light e\">/ month</span></p>\n        <a href=\"#\" class=\"btn btn-success btn-lg\">START FREE TRIAL</a>\n        <p class=\"text-muted card-text\">Starts with pro plan</p>\n        <ul style=\"padding: 20px\">\n            <li>Unlimited Searches</li>\n            <li>Licenses: 5</li>\n            <li>Search profiles: 5 per user</li>\n            <li >Historical Data</li>\n            <li >Winner Data</li>\n            <li >Data Export</li>\n            <li class=\"ft_l text-muted\">Oppex Setup</li>\n            <li class=\"ft_l text-muted\">Onsite Training</li>\n        </ul>\n  </mat-card-content>\n \n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/card2/card2.component.ts":
/*!******************************************!*\
  !*** ./src/app/card2/card2.component.ts ***!
  \******************************************/
/*! exports provided: Card2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card2Component", function() { return Card2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Card2Component = /** @class */ (function () {
    function Card2Component() {
    }
    Card2Component.prototype.ngOnInit = function () {
    };
    Card2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card2',
            template: __webpack_require__(/*! ./card2.component.html */ "./src/app/card2/card2.component.html"),
            styles: [__webpack_require__(/*! ./card2.component.css */ "./src/app/card2/card2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Card2Component);
    return Card2Component;
}());



/***/ }),

/***/ "./src/app/card3/card3.component.css":
/*!*******************************************!*\
  !*** ./src/app/card3/card3.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_size {\r\n    max-width: 700px;\r\n  }\r\n  \r\n \r\n mat-card{\r\n     border:2px solid white;\r\n     margin-left:30px;\r\n }\r\n  \r\n \r\n .hv :hover {\r\n      border-color:#1ECDEE;\r\n }\r\n  \r\n \r\n mat-card-title{\r\n        margin-left:150px;\r\n      \r\n        \r\n }\r\n  \r\n \r\n .i{\r\n      margin-left:auto;\r\n      margin-right:auto;\r\n      \r\n      width:150px;\r\n  }\r\n  \r\n \r\n .b{\r\n    font-size:25px;\r\n  }\r\n  \r\n \r\n .e{\r\n    font-size:20px;\r\n  }\r\n  \r\n \r\n li {\r\n    text-align: left;\r\n    font-weight: bold;\r\n  }\r\n  \r\n \r\n li .v{\r\n        font-weight: normal;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/card3/card3.component.html":
/*!********************************************!*\
  !*** ./src/app/card3/card3.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hv\">\n<mat-card class=\"card_size\">\n  <mat-card-header>\n    \n    <mat-card-title class=\"text-muted\" style=\"margin-top: 35px;\"><h4>Custom</h4></mat-card-title>\n  </mat-card-header>\n  <div class=\"i\">  \n    <img mat-card-image src=\"/src/assets/images/plane.png\" alt=\"Car\" height=\"120px\" width=\"50px\">\n  </div>\n\n    <mat-card-content>\n        <p class=\"font-weight-bold b\">399 &euro;<span class=\"font-weight-light e\">/ month</span></p>\n        <p class=\"text-success\">STARTING FROM</p>\n        <a href=\"#\" class=\"btn btn-success btn-lg\">CONTACT US</a>\n        \n        <ul style=\"margin-top: 50px;padding:10px;\">\n            <li>Unlimited Searches</li>\n            <li>Licenses: 10 or custom</li>\n            <li>Search profiles: Unlimited</li>\n            <li >Historical Data</li>\n            <li >Winner Data</li>\n            <li >Data Export</li>\n            <li >Oppex Setup (quoted separately)</li>\n            <li >Onsite Training (quoted separately)</li>\n        </ul>\n  </mat-card-content>\n \n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/card3/card3.component.ts":
/*!******************************************!*\
  !*** ./src/app/card3/card3.component.ts ***!
  \******************************************/
/*! exports provided: Card3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card3Component", function() { return Card3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Card3Component = /** @class */ (function () {
    function Card3Component() {
    }
    Card3Component.prototype.ngOnInit = function () {
    };
    Card3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card3',
            template: __webpack_require__(/*! ./card3.component.html */ "./src/app/card3/card3.component.html"),
            styles: [__webpack_require__(/*! ./card3.component.css */ "./src/app/card3/card3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Card3Component);
    return Card3Component;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\n  padding-left: 3em;\n  padding-right: 3em;\n}\n\n.light {\n  color: rgba(1,1,1,0.4);\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"container\"style=\"display: flex;\">\n    <div>\n        <table>\n            <tr class=\"light\">\n              <td><a href = \"#\">Home</a></td>\n              <th>Solutions</th>\n              <th>Company</th>\n              <th>Others</th>\n              <th>Resources</th>\n            </tr>\n            <tr>\n              <td rowspan=5></td>\n            </tr>\n            <tr>\n              <td><a href = \"#\">Salesforce App</a></td>\n              <td><a href = \"#\">About us</a></td>\n              <td><a href = \"#\">Customer</a></td>\n              <td><a href = \"#\">FAQ</a></td>\n            </tr>\n            <tr>\n              <td><a href = \"#\">Share & Export</a></td>\n              <td><a href = \"#\">Contact</a></td>\n              <td><a href = \"#\">Technology</a></td>\n              <td><a href = \"#\">Blog</a></td>\n            </tr>\n            <tr>\n              <td><a href = \"#\">Alerts</a></td>\n              <td colspan=2><a href = \"#\"></a></td>\n              <td><a href = \"#\">Terms & Conditions</a></td>\n            </tr>\n            <tr>\n                <td><a href = \"#\">Search</a></td>\n                <td><a href = \"#\"></a></td>\n            </tr>\n          </table>\n    </div>\n    <div style=\"text-align: left;\">\n      <img src=\"/src/assets/images/copyright-logo.jpg\" width=\"135px\" alt=\"\">\n      <p class=\"light\">&copy; 2019 Oppex Atul & Hari</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumb {\n  padding-top: 25%;\n  text-align: center;\n  color: white;\n  height: 100vh;\n  background-color: rgba(0,0,0,0.0);\n}\n\n.back {\n  background-image: url(\"/src/assets/images/header.jpeg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.bg-light {\n  background-color: #123 !important;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nbutton {\n  margin-right: 5%;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-light navbar-expand-lg\">\n    <a href=\"#\"><img src=\"/src/assets/images/oppex_logo.png\" height=\"40px\" width=\"160px\" class=\"navbar-brand\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" routerLink=\"search\"><span class=\"whiteText\">SEARCH</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" routerLink=\"pricing\"><span class=\"whiteText\">PRICING</span></a>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\" style=\"clear: both;\">\n            <li><a href=\"#\" class=\"btn btn-success\" routerLink=\"signup\">Start Trial</a></li>&nbsp;&nbsp;\n            <li><a href=\"#\" class=\"btn btn-light\" data-toggle=\"modal\" data-target=\"#exampleModal\">Login</a></li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" style=\"background-color: black\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"color: white\">LOGIN</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\"color: white\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n              <form action=\"\" (submit)=\"onLogin(postForm)\" #postForm=\"ngForm\">\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"User Name\" name=\"username\" ngModel required #username=\"ngModel\" username>\n                    <mat-error *ngIf=\"username.invalid\">Please Enter Username</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"password\" name=\"password\" ngModel required #password=\"ngModel\" password>\n                    <mat-error *ngIf=\"password.invalid\">Please Enter Password</mat-error>\n                </mat-form-field>\n                <button mat-raised-button color=\"primary\" type=\"submit\">LOGIN</button>\n                <button mat-raised-button color=\"warn\">FORGOT PASSWORD</button>\n\n            </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    HeaderComponent.prototype.onLogin = function (Form) {
        if (Form.invalid) {
            return;
        }
        var authData = { password: Form.value.password, username: Form.value.username };
        this.http.post('http://localhost:3000/login', authData)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n}\n\n.back {\n  height: 100%;\n  background-image: url(\"/src/assets/images/header.jpeg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\nbutton {\n  margin-right: 5%;\n}\n\n.pagination > li {\n  min-width: 160px;\n}\n\n.jumb {\n  text-align: center;\n  color: white;\n  background-color: rgba(0,0,0,0.0);\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <div class=\"container\">\n        <div class=\"jumbotron jumb\">\n            <h1 class=\"display-4\"><img src=\"/src/assets/images/oppex_logo.png\" height=\"50px\" alt=\"\"></h1>\n            <p>Win more business with Oppex.</p>\n        </div>\n    </div>\n\n    <mat-card class=\"container\" style=\"width: 25%\">\n        <mat-toolbar>\n            <nav aria-label=\"...\">\n                <ul class=\"pagination pagination-lg\">\n                    <li class=\"page-item\"><a class=\"page-link\" (click)=\"func()\">SIGN UP</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" (click)=\"func1()\">LOGIN</a></li>\n                </ul>\n            </nav>\n        </mat-toolbar>\n        <form action=\"\" (submit)=\"onLogin(postForm)\" #postForm=\"ngForm\">\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"User Name\" name=\"username\" ngModel required #username=\"ngModel\" username>\n                <mat-error *ngIf=\"username.invalid\">Please Enter Username</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"password\" placeholder=\"password\" name=\"password\" ngModel required #password=\"ngModel\" password>\n                <mat-error *ngIf=\"password.invalid\">Please Enter Password</mat-error>\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" type=\"submit\">LOGIN</button>\n            <button mat-raised-button color=\"warn\">FORGOT PASSWORD</button>\n\n        </form>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    LoginComponent.prototype.onLogin = function (Form) {
        if (Form.invalid) {
            return;
        }
        var authData = { password: Form.value.password, username: Form.value.username };
        this.http.post('http://localhost:3000/login', authData)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    LoginComponent.prototype.func = function () {
        this.router.navigate([parent]);
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.func1 = function () {
        this.router.navigate([parent]);
        this.router.navigate(['/login']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  text-align: left;\n  font-weight: bold;\n}\nli .v{\n      font-weight: normal;\n}\ndiv{\n\n  text-align:center;\n}\n.a{\n  font-family:Whitney SSm A,Whitney SSm B,Helvetica Neue,Helvetica,Arial,sans-serif;\n  font-size:50px;\n\n}\n.b{\n  font-size:25px;\n}\n.c{\n  line-height: 100%;\n}\n.e{\n  font-size:20px;\n}\nh1{\n  font-weight: normal;\n}\n.g{\n  font-size: 25px;\n}\n.round-img{\n      border-radius:50%;\n      float:right;\n}\n.cnt{\n      margin:auto;\n      width:900px;\n      padding:10px;\n}\n.txt_blw_img{\n             margin-left:680px;\n             font-weight:bold;\n\n}\n.jmb_ht{\n         height:500px;\n         background:#F8F8F8;\n         width:100%;\n\n}\n.faq_h1{\n   padding:50px;\n}\n.test_h1{\n   padding:40px;\n}\n.jmb_ht1{\n  height:620px;\n  background:#F5F5F5;\n  width:100%;\n}\n.round_img_cnt{\n     align-content: center;\n     margin:auto;\n     margin-top:10px;\n     height:180px;\n     width:200px;\n}\n.faq_blw_text{\n        margin-top: 20px;\n}\n.txt_al{\n\n    text-align:left;\n\n}\n"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div style=\"padding-top: 2%\">\n      <h1 class=\"a\">Choose a plan that is right for you!</h1></div>\n  <br>\n  <div class=\"c\">\n      <p class=\"font-weight-bold text-info b\">14-day free trial,no credit card required.</p>\n      <p class=\"font-weight-bold text-muted b\">Call<span class=\"text-info\">+448009755164</span> for questions.</p>\n  </div>\n  <br>\n  <br>\n <div class=\"row\">\n      <div class=\"col-lg-4\"><app-card1></app-card1></div>\n      <div class=\"col-lg-4\"><app-card2></app-card2></div>\n      <div class=\"col-lg-4\"><app-card3></app-card3></div>\n  </div>\n  <div class=\"f text-muted\" style=\"padding: 70px\" >\n      We are currently offering a pay per lead payment scheme to\n      <br>selected clients in a closed Beta.\n      <a href=\"#\">Click here</a> if you want to learn\n      <br> more about this program.\n      <br>\n      <br>\n      <br> Need more countries or licenses? Prefer to receive an invoice?\n      <br> Our payments team is here to help you out.\n      <a href=\"#\"> Contact us</a> for\n      <br> personal support.\n  </div>\n  <div style=\"padding-bottom:60px;margin-top: 0px\">\n      <img src=\"/src/assets/images/a.jpg\"> <img src=\"/src/assets/images/visa.jpg\"><img src=\"/src/assets/images/mastercard.jpg\"><img src=\"/src/assets/images/braintree.jpg\">\n  </div>\n  <div class=\"jmb_ht\">\n      <div class=\"test_h1\"><h1>Featured Testimonial</h1></div>\n      <div class=\"cnt\">\n      <img class=\"round-img\" src=\"/src/assets/images/friedrich_rojahn.jpg\" >\n       <p style=\"padding: 40px\"class=\"g text-muted\">“Oppex has allowed us to find more<br> business opportunities than ever <br>before. Within a few months from <br>using the service, we even won a tender<br> we found on the platform!”</p>\n       <p class=\"txt_blw_img\">Friedrich Rojahn</p>\n    </div>\n\n  </div>\n  <div class=\"jmb_ht1\">\n    <div class=\"faq_h1\"><h1 >FAQ</h1></div>\n\n    <div><img class=\"round_img_cnt\" src=\"/src/assets/images/faqicon\" ></div>\n    <div class=\"faq_blw_text text-muted\"><p>Do not hesitate to <a href=\"#\">contact our support</a></p></div>\n    <div class=\"faq_blw_text\">\n         <div class=\" row\">\n         <div class=\"col-lg-1\"></div>\n         <div class=\"txt_al txt_l col-lg-4\">\n         <h5>WHAT DO I GET WITH MY FREE TRIAL?</h5>\n         <p class=\"text-muted\">You get access to all the features in the professional tier. You can use the features for 14 days.</p>\n         </div>\n\n         <div class=\"txt_al col-lg-6\"><h5>DO I NEED TO SETUP A CREDIT CARD FOR THE TRIAL?</h5>\n         <p class=\"text-muted\">No. Not for the trial. If you want to ensure that you don't miss any tenders after the trial period, you can also setup the credit card during trial. We will only start charging after the trial period.</p>\n        </div>\n        <div class=\"col-lg-1\"></div>\n\n         </div>\n         <div class=\"row\">\n                <div class=\"col-lg-1\"></div>\n                <div class=\"txt_al col-lg-4\">\n                <h5>WHAT HAPPENS AT THE END OF MY TRIAL?</h5>\n                <p class=\"text-muted\">We'll inform you when your trial is about to end, so if you want to keep some features, you won't miss any relevant leads.</p>\n                </div>\n\n                <div class=\"txt_al col-lg-6\"><h5>WHAT IF I WANT TO CHANGE MY PLAN?</h5>\n                <p class=\"text-muted\">You can change your plan anytime. We will bill you only until the end of the current billing period.</p>\n                <div class=\"col-lg-1\"></div>\n            </div>\n\n                </div>\n    </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.a{\n  text-align:center;\n  color: rgb(211, 208, 208);\n  font-weight: 600;\n  font-size:45px;\n  padding:10px;\n}\n.b{\n  text-align:center;\n  color: rgb(46, 183, 247);\n  font-weight: 400;\n  font-size:25px;\n\n}\n.c{\n  text-align: center;\n  padding:5px;\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field, button {\n  width: 100%;\n}\n\n.back {\n  background-image: url(\"/src/assets/images/header.jpeg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  padding-bottom: 10%;\n}\n\n.pagination > li {\n  min-width: 160px;\n}\n\n.jumb {\n  text-align: center;\n  color: white;\n  background-color: rgba(0,0,0,0.0);\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <div class=\"container\">\n        <div class=\"jumbotron jumb\">\n            <h1 class=\"display-4\"><img src=\"/src/assets/images/oppex_logo.png\" height=\"50px\" alt=\"\"></h1>\n            <p>Win more business with Oppex.</p>\n            <p>You are signing up for a 14-day free trial of Oppex Professional.</p>\n            <a href=\"#\">See different plans and pricing options.</a>\n        </div>\n    </div>\n\n    <mat-card class=\"container\" style=\"width: 25%\">\n        <mat-toolbar>\n            <nav aria-label=\"...\">\n                <ul class=\"pagination pagination-lg\">\n                    <li class=\"page-item\"><a class=\"page-link\" (click)=\"func()\">SIGN UP</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" (click)=\"func1()\">LOGIN</a></li>\n                </ul>\n            </nav>\n        </mat-toolbar>\n        <form action=\"\" (submit)=\"onSignup(postForm)\" #postForm=\"ngForm\">\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"User Name\" name=\"username\" ngModel required #username=\"ngModel\">\n                <mat-error *ngIf=\"username.invalid\">Please Enter First Name</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"email\" placeholder=\"Email ID\" name=\"email\" ngModel required #mail=\"ngModel\" email>\n                <mat-error *ngIf=\"mail.invalid\">Please Enter Email</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" ngModel minlength=\"8\" required #password=\"ngModel\" password>\n                <mat-error *ngIf=\"password.invalid\">Please Enter Password</mat-error>\n            </mat-form-field>\n            <!-- <mat-form-field>\n                <input matInput type=\"password\" placeholder=\"Confirm Password\" name=\"pass2\" ngModel required #pass2=\"ngModel\" pass2>\n                <mat-error *ngIf=\"pass1 !== pass2\">PASSWORDS DO NOT MATCH</mat-error>\n            </mat-form-field> -->\n            <button mat-raised-button color=\"primary\" type=\"submit\">GET STARTED</button>\n\n        </form>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    SignupComponent.prototype.onSignup = function (Form) {
        if (Form.invalid) {
            return;
        }
        console.log(Form.value.username);
        console.log(Form.value.password);
        var authData = { email: Form.value.email, password: Form.value.password, username: Form.value.username };
        this.http.post('http://localhost:3000/signup', authData)
            .subscribe(function (res) {
            console.log(res);
        });
        // this.postsService.addPosts(Form.value.title, Form.value.content);
        // Form.resetForm();
    };
    SignupComponent.prototype.func = function () {
        this.router.navigate([parent]);
        this.router.navigate(['/signup']);
    };
    SignupComponent.prototype.func1 = function () {
        this.router.navigate([parent]);
        this.router.navigate(['/login']);
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDufwnhtgL4x92CeTflAn37u2pQMMlUuwU',
        authDomain: 'oppeex.firebaseapp.com',
        databaseURL: 'https://oppeex.firebaseio.com',
        projectId: 'oppeex',
        storageBucket: 'oppeex.appspot.com',
        messagingSenderId: '83260443240'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/atulkamble/AK/PROJ/oppex/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map