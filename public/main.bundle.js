webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navbar, #navbar a.button-collapse, #navbar a.button-collapse i, .icon-collapse {\r\n  height: 65px !important;\r\n  line-height: 65px !important;\r\n}\r\n.icon-collapse {\r\n\tcursor: pointer;\r\n}\r\n.side-nav {\r\n  padding-top: 15px;\r\n}\r\n.side-nav li {\r\n    line-height: 40px;\r\n}\r\n.side-nav li > a {\r\n  height: 40px;\r\n}\r\n.footer-links {\r\n  padding: 30px;\r\n}\r\n.footer-links h5 {\r\n  font-size: 24px;\r\n  line-height: 1em;\r\n  font-family: \"Poppins\";\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n.footer-links p {\r\n  margin: 0 0 3px;\r\n}\r\n.footer-links a:hover {\r\n  text-decoration: underline;\r\n}\r\ncollapsible-list {\r\n\tmargin: 0 !important;\r\n\tborder: 0;\r\n\tbox-shadow: none;\r\n}\r\ncollapsible-header {\r\n\tmin-height: 0;\r\n\tline-height: 0;\r\n\tborder: 0;\r\n}\r\ncollapsible-body {\r\n\tpadding: 7.5px 0;\r\n}\r\ncollapsible-body p {\r\n\tpadding: 10px 15px;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n}\r\ncollapsible-body p a {\r\n\tcolor: #777;\r\n\tdisplay: block;\r\n}\r\n@media (max-width: 600px) {\r\n  nav .brand-logo {\r\n    left: 5%;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"white\" role=\"navigation\" id=\"navbar\">\r\n  <div class=\"nav-wrapper container\">\r\n    <a routerLink=\"\" class=\"brand-logo black-text\"><img src=\"assets/img/logotipo-fitness-o2-header.jpg\" alt=\"Logotipo Fitness O2\" style=\"margin-top: 3px;\"></a>\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <li><a routerLink=\"\" class=\"black-text\">Home</a></li>\r\n      <li><a routerLink=\"sobre-nos\" class=\"black-text\">Sobre nós</a></li>\r\n\t\t\t<li><a routerLink=\"entre-em-contato\" class=\"black-text\">Entre em contato</a></li>\r\n\t\t\t<li><a href=\"/blog\" class=\"black-text\">Blog</a></li>\r\n\t\t\t<li><a href=\"/gallery\" class=\"black-text\">Galeria</a></li>\r\n    </ul>\r\n\t\t\r\n    <i class=\"material-icons black-text right icon-collapse hide-on-large-only\" (click)=\"onClickSideNav()\">menu</i>\r\n\t\t\r\n  </div>\r\n</nav>\r\n\r\n<collapsible-list [type]=\"'accordion'\">\r\n\r\n\t<collapsible-list-item>\r\n\t\t<collapsible-header class=\"waves-effect\">\r\n\t\t\t<div #menuCollapse></div>\r\n\t\t</collapsible-header>\r\n\t\t<collapsible-body [expanded]=\"false\">\r\n\t\t\t<p><a (click)=\"onClickSideNav()\" routerLink=\"\">Home</a></p>\r\n\t\t\t<p><a (click)=\"onClickSideNav()\" routerLink=\"sobre-nos\">Sobre nós</a></p>\r\n\t\t\t<p><a (click)=\"onClickSideNav()\" routerLink=\"entre-em-contato\">Entre em contato</a></p>\r\n\t\t\t<p><a (click)=\"onClickSideNav()\" href=\"/blog\">Blog</a></p>\r\n\t\t\t<p><a (click)=\"onClickSideNav()\" href=\"/gallery\">Galeria</a></p>\r\n\t\t</collapsible-body>\r\n\t</collapsible-list-item>\r\n\r\n</collapsible-list>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"page-footer grey darken-3\">\r\n\t\r\n\t<app-contato></app-contato>\r\n\r\n  <div class=\"amber footer-links\">\r\n    <div class=\"container grey-text text-darken-3\" style=\"padding: 0 15px;\">\r\n      <div class=\"row\">\r\n        <div class=\"col s3 push-s1 m2 push-m3 l1 push-l5\">\r\n          <a href=\"https://api.whatsapp.com/send?l=pt&phone=5512988001234\" target=\"_blank\"><img src=\"assets/img/whatsapp.png\" style=\"width: 100%\"></a>\r\n        </div>\r\n        <div class=\"col s3 push-s1 m2 push-m3 l1 push-l5\">\r\n          <a href=\"https://www.facebook.com/studiofitnesso2/\" target=\"_blank\"><img src=\"assets/img/facebook.png\" style=\"width: 100%\"></a>\r\n        </div>\r\n        <div class=\"col s3 push-s1 m2 push-m3 l1 push-l5\">\r\n          <a href=\"https://www.instagram.com/studiofitnesso2/\" target=\"_blank\"><img src=\"assets/img/instagram.png\" style=\"width: 100%\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m6 l4\">\r\n          <h5>Services</h5>\r\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 1</a></p>\r\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 2</a></p>\r\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 3</a></p>\r\n        </div>\r\n        <div class=\"col s12 m6 l4\">\r\n          <h5>Info</h5>\r\n          <p><a href=\"https://www.portalenaf.com.br\" target=\"_blank\" class=\"grey-text text-darken-4\">PortalEnaf</a></p>\r\n          <p><a href=\"http://www.educacaofisica.com.br\" target=\"_blank\" class=\"grey-text text-darken-4\">EducacaoFisica</a></p>\r\n          <p><a href=\"https://www.crefsp.gov.br\" target=\"_blank\" class=\"grey-text text-darken-4\">CREFSP</a></p>\r\n        </div>\r\n        <div class=\"col s12 m6 l4\">\r\n          <h5>Studio Fitness</h5>\r\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 1</a></p>\r\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 2</a></p>\r\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 3</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(renderer) {
        this.renderer = renderer;
        this.title = 'app';
    }
    AppComponent.prototype.onClickSideNav = function () {
        var el = this.menuCollapse.nativeElement;
        el.click();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('menuCollapse'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "menuCollapse", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_collapsible__ = __webpack_require__("../../../../angular2-collapsible/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contato_contact_service__ = __webpack_require__("../../../../../src/app/contato/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contato_contato_component__ = __webpack_require__("../../../../../src/app/contato/contato.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entre_em_contato_entre_em_contato_component__ = __webpack_require__("../../../../../src/app/entre-em-contato/entre-em-contato.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__localizacao_localizacao_component__ = __webpack_require__("../../../../../src/app/localizacao/localizacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sobre_nos_sobre_nos_component__ = __webpack_require__("../../../../../src/app/sobre-nos/sobre-nos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contato_contato_component__["a" /* ContatoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__entre_em_contato_entre_em_contato_component__["a" /* EntreEmContatoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__localizacao_localizacao_component__["a" /* LocalizacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sobre_nos_sobre_nos_component__["a" /* SobreNosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyADQBsr0Qqs3lhCXOd63NYMFvB2eHdaa_A'
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_collapsible__["a" /* CollapsibleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__contato_contact_service__["a" /* ContactService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contato_contato_component__ = __webpack_require__("../../../../../src/app/contato/contato.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entre_em_contato_entre_em_contato_component__ = __webpack_require__("../../../../../src/app/entre-em-contato/entre-em-contato.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localizacao_localizacao_component__ = __webpack_require__("../../../../../src/app/localizacao/localizacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sobre_nos_sobre_nos_component__ = __webpack_require__("../../../../../src/app/sobre-nos/sobre-nos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'sobre-nos', component: __WEBPACK_IMPORTED_MODULE_5__sobre_nos_sobre_nos_component__["a" /* SobreNosComponent */] },
    { path: 'localizacao', component: __WEBPACK_IMPORTED_MODULE_4__localizacao_localizacao_component__["a" /* LocalizacaoComponent */] },
    { path: 'contato', component: __WEBPACK_IMPORTED_MODULE_1__contato_contato_component__["a" /* ContatoComponent */] },
    { path: 'entre-em-contato', component: __WEBPACK_IMPORTED_MODULE_2__entre_em_contato_entre_em_contato_component__["a" /* EntreEmContatoComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/contato/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.saveContact = function (name, email, phone, message, heard, reply) {
        if (heard === void 0) { heard = null; }
        if (reply === void 0) { reply = null; }
        var body = JSON.stringify({ name: name, email: email, phone: phone, message: message, heard: heard, reply: reply });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post("/contato", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ "../../../../../src/app/contato/contato.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-field label,\r\n.input-field input[type=text]:focus + label,\r\n.input-field input[type=text]:focus,\r\n.input-field input[type=email]:focus + label,\r\n.input-field input[type=email]:focus\r\n.input-field textarea:focus + label,\r\n.input-field textarea:focus {\r\n color: #ffc107;\r\n}\r\ninput[type=text]:not(.browser-default):focus:not([readonly]),\r\ninput[type=email]:not(.browser-default):focus:not([readonly]),\r\ntextarea.materialize-textarea:focus:not([readonly]) {\r\n\tborder-bottom: 1px solid #ffc107;\r\n\tbox-shadow: 0 1px 0 0 #ffc107;\r\n}\r\ntextarea.materialize-textarea:focus:not([readonly]) + label {\r\n\tcolor: #ffc107;\r\n}\r\n.contact-us h4 {\r\n  font-size: 48px;\r\n  line-height: 1em;\r\n  font-family: \"Poppins\";\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contato/contato.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"center contact-us grey-text text-lighten-2\">\r\n\t\t<h4>Entre em <span class=\"amber-text\">contato</span></h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<form class=\"col s12\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<input id=\"first_name\" type=\"text\" class=\"validate\" formControlName=\"name\">\r\n\t\t\t\t\t<label for=\"first_name\" class=\"active\">Nome</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"validate\" formControlName=\"email\">\r\n\t\t\t\t\t<label for=\"email\" class=\"active\">Email</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<input id=\"phone\" type=\"text\" class=\"validate\" formControlName=\"phone\">\r\n\t\t\t\t\t<label for=\"phone\" class=\"active\">Telefone</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t<textarea id=\"message\" class=\"materialize-textarea\" formControlName=\"message\"></textarea>\r\n\t\t\t\t\t\t<label for=\"message\" class=\"active\">Mensagem</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<button class=\"btn amber waves-effect waves-light\" type=\"submit\" name=\"action\">Enviar\r\n            <i class=\"material-icons right\">send</i>\r\n          </button>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contato/contato.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_service__ = __webpack_require__("../../../../../src/app/contato/contact.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContatoComponent = (function () {
    function ContatoComponent(contactService) {
        this.contactService = contactService;
    }
    ContatoComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    ContatoComponent.prototype.onSubmit = function () {
        var _this = this;
        if ((this.myForm.value.email == null || this.myForm.value.email.trim() == "") && (this.myForm.value.phone == null || this.myForm.value.phone.trim() == "")) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('Por gentileza preencha o campo e-mail ou telefone', 5000);
        }
        else {
            this.myForm.disable;
            this.contactService.saveContact(this.myForm.value.name, this.myForm.value.email, this.myForm.value.phone, this.myForm.value.message)
                .subscribe(function (data) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('Sua mensagem foi enviada com sucesso! Obrigado por nos contactar, retornaremos em breve.', 5000);
                _this.myForm.reset();
            }, function (error) {
                console.log(error);
            });
        }
    };
    return ContatoComponent;
}());
ContatoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contato',
        template: __webpack_require__("../../../../../src/app/contato/contato.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contato/contato.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__contact_service__["a" /* ContactService */]) === "function" && _a || Object])
], ContatoComponent);

var _a;
//# sourceMappingURL=contato.component.js.map

/***/ }),

/***/ "../../../../../src/app/entre-em-contato/entre-em-contato.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n\theight: 400px;\r\n\twidth: 100%;\r\n}\r\n.contact-title {\r\n  text-transform: uppercase; \r\n  font-family: 'Eras ITC', 'Eras Light ITC', sans-serif ; \r\n  font-weight: bold;\r\n  color: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entre-em-contato/entre-em-contato.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"contact-u\">\r\n\t\t<h4 class=\"contact-title\">Entre em contato</h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<form class=\"col s12\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<input id=\"first_name\" type=\"text\" class=\"validate\" formControlName=\"name\">\r\n\t\t\t\t\t<label for=\"first_name\" class=\"active\">Nome</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"validate\" formControlName=\"email\">\r\n\t\t\t\t\t<label for=\"email\" class=\"active\">Email</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<input id=\"phone\" type=\"text\" class=\"validate\" formControlName=\"phone\">\r\n\t\t\t\t\t<label for=\"phone\" class=\"active\">Telefone</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<select formControlName=\"heard\" materialize=\"material_select\" [(ngModel)]=\"selectedHeard\" [materializeSelectOptions]=\"heard\">\r\n\t\t\t\t\t\t<option value=\"\" disabled selected>Selecione uma opção...</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let option of heardOptions\" [value]=\"option.value\">{{option.value}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Como você nos conheceu?</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t<select formControlName=\"reply\" materialize=\"material_select\" [(ngModel)]=\"selectedReply\" [materializeSelectOptions]=\"reply\">\r\n\t\t\t\t\t\t<option value=\"\" disabled selected>Selecione uma opção...</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let option of replyOptions\" [value]=\"option.value\">{{option.value}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Como você prefere que entremos em contato?</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t<textarea id=\"message\" class=\"materialize-textarea\" formControlName=\"message\"></textarea>\r\n\t\t\t\t\t\t<label for=\"message\" class=\"active\">Mensagem</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<button class=\"btn amber waves-effect waves-light\" type=\"submit\" name=\"action\">Enviar\r\n            <i class=\"material-icons right\">send</i>\r\n          </button>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n\r\n\t<div class=\"card grey darken-3 white-text\">\r\n\t\t<div class=\"card-content\">\r\n\t\t\t<span class=\"card-title\">\r\n\t\t\t\t<i class=\"material-icons amber-text\">access_time</i> Horário de funcionamento\r\n\t\t\t</span>\r\n\t\t\t<p><strong>Segunda a Sexta:</strong> 6 às 22h</p>\r\n\t\t\t<p style=\"margin-bottom: 20px;\"><strong>Sábado:</strong> 8 às 12h</p>\r\n\r\n\t\t\t<span class=\"card-title\">\r\n\t\t\t\t<i class=\"material-icons amber-text\">local_phone</i> Telefone\r\n\t\t\t</span>\r\n\t\t\t<p>(12) 98800-1234</p>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"card\">\r\n\t\t<div class=\"card-content\">\r\n\t\t\t<span class=\"card-title\">\r\n\t\t\t\t<i class=\"material-icons amber-text\">location_on</i> Endereço\r\n\t\t\t</span>\r\n\t\t\t<p style=\"margin-bottom: 20px;\">Avenida Andrômeda, 753 - Sala 1</p>\r\n\r\n\t\t\t<!-- this creates a google map on the page with the given lat/lng from -->\r\n\t\t\t<!-- the component as the initial center of the map: -->\r\n\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n\t\t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n\t\t\t\t\t<agm-info-window>Studio Fitness O2</agm-info-window>\r\n\t\t\t\t</agm-marker>\r\n\t\t\t</agm-map>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/entre-em-contato/entre-em-contato.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contato_contact_service__ = __webpack_require__("../../../../../src/app/contato/contact.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntreEmContatoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntreEmContatoComponent = (function () {
    function EntreEmContatoComponent(contactService) {
        this.contactService = contactService;
        this.heardOptions = [
            { value: 'Facebook' },
            { value: 'Instagram' },
            { value: 'Indicação' },
            { value: 'Internet' }
        ];
        this.replyOptions = [
            { value: 'Telefone' },
            { value: 'Email' },
            { value: 'WhatsApp' }
        ];
        this.lat = -23.222508;
        this.lng = -45.888061;
        this.zoom = 18;
    }
    EntreEmContatoComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            heard: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            reply: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    EntreEmContatoComponent.prototype.onSubmit = function () {
        var _this = this;
        if ((this.myForm.value.email == null || this.myForm.value.email.trim() == "") && (this.myForm.value.phone == null || this.myForm.value.phone.trim() == "")) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('Por gentileza preencha o campo e-mail ou telefone', 5000);
        }
        else {
            this.myForm.disable;
            this.contactService.saveContact(this.myForm.value.name, this.myForm.value.email, this.myForm.value.phone, this.myForm.value.message, this.myForm.value.heard, this.myForm.value.reply)
                .subscribe(function (data) {
                console.log("Success!");
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('Sua mensagem foi enviada com sucesso! Obrigado por nos contactar, retornaremos em breve.', 5000);
                console.log("Toasted!");
                _this.myForm.reset();
                console.log("Reseted!");
            }, function (error) {
                console.log(error);
            });
        }
    };
    return EntreEmContatoComponent;
}());
EntreEmContatoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-entre-em-contato',
        template: __webpack_require__("../../../../../src/app/entre-em-contato/entre-em-contato.component.html"),
        styles: [__webpack_require__("../../../../../src/app/entre-em-contato/entre-em-contato.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__contato_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__contato_contact_service__["a" /* ContactService */]) === "function" && _a || Object])
], EntreEmContatoComponent);

var _a;
//# sourceMappingURL=entre-em-contato.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-block {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.icon-block div {\r\n  font-size: 48px;\r\n  line-height: 1em;\r\n  font-family: \"Poppins\";\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n.carousel .carousel-item, .carousel .carousel-item > img {\r\n  height: 100%;\r\n}\r\n.vertical-middle {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n.fs28 {\r\n  font-size: 28px !important;\r\n}\r\n.abstract-about-us-title {\r\n  font-family: \"Eras ITC\", \"Eras Light ITC\",  sans-serif ;\r\n  color: gray;\r\n  text-transform: uppercase;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n.abstract-who-we-are {\r\n  font-family: \"Eras ITC\", \"Eras Light ITC\",  sans-serif ;\r\n  padding-top: 20px;\r\n  padding-top: 20px;\r\n}\r\n.abstract-who-we-are, .depoimentos {\r\n  font-size: 16px;\r\n  padding-left: 20px; \r\n  padding-right: 20px; \r\n}\r\n.depoimentos {\r\n  text-align: center;\r\n}\r\n.depoimentos img {\r\n  border-radius: 50%; \r\n  width: 100px;\r\n}\r\n.invite-interested-title {\r\n  margin-bottom: 20px; \r\n  color: gray;\r\n}\r\n.invite-interested-button, .invite-interested-title, .depoimentos-title, .depoimentos .client-name {\r\n  text-transform: uppercase; \r\n  font-family: 'Eras ITC', 'Eras Light ITC', sans-serif ; \r\n  font-weight: bold;\r\n}\r\n.invite-interested-button {\r\n  padding: 10px 0;\r\n  height: auto;\r\n}\r\n#carousel-depoimentos {\r\n  height: 400px !important;\r\n}\r\n.row {\r\n  margin-bottom: 0;\r\n}\r\n.row .col {\r\n    padding: 0 0;\r\n}\r\n@media (min-width: 993px) {\r\n  .row-flex-on-large .row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n}\r\n@media (min-width: 601px) {\r\n  .flex-medium {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n}\r\n@media (max-width: 993px) {\r\n  .row-flex-on-large .img-bg-cover {\r\n    height: 400px;\r\n  }\r\n}\r\n@media (max-width: 600px) {\r\n  #carousel-depoimentos {\r\n    height: 600px !important;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row grey darken-3\">\r\n\t<div class=\"col s12 m6 push-m3 l4 push-l4\">\r\n\t\t<div style=\"padding: 30px 0; text-align: center;\">\r\n\t\t\t<img src=\"/assets/img/logo-fitness-o2.png\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--   Icon Section   -->\r\n<div class=\"row block-1 flex-medium\">\r\n\t<!-- CAROUSEL -->\r\n\t<div #carouselSmall1 class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: true}]\" [materializeActions]=\"actions\" style=\"flex: 1;\">\r\n\r\n\t\t<div class=\"carousel-item white-text\" href=\"#one!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-12.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#two!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-14.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#three!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-2.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#four!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-10.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"icon-block grey darken-3\" style=\"flex: 1;\">\r\n\t\t<div #carouselWords1 class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: false}]\" [materializeActions]=\"actions\">\r\n\t\t\r\n\t\t\t<div class=\"carousel-item center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Reabilitação</span> <span class=\"grey-text text-lighten-2\">funcional e esportiva</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Preparação</span> <span class=\"amber-text\">Esportiva</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item grey-text text-lighten-2 center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Prevenção</span> <span class=\"grey-text text-lighten-2\">de Lesão</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Ganho de</span> <span class=\"amber-text\">Massa Muscular</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<!--   Icon Section   -->\r\n<div class=\"row block-1 flex-medium\">\r\n\r\n\t<div class=\"icon-block grey darken-3 hide-on-small-only\" style=\"flex: 1;\">\r\n\t\t<div #carouselWords2 class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: false}]\" [materializeActions]=\"actions\">\r\n\t\t\r\n\t\t\t<div class=\"carousel-item center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Definição</span> <span class=\"grey-text text-lighten-2\">Muscular</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Perda de</span> <span class=\"amber-text\">Gordura Corporal</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item grey-text text-lighten-2 center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Correção de desvios</span> <span class=\"grey-text text-lighten-2\">Posturais</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Qualidade</span> <span class=\"amber-text\">de Vida</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- CAROUSEL -->\r\n\t<div #carouselSmall2 class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: true}]\" [materializeActions]=\"actions\" style=\"flex: 1;\">\r\n\r\n\t\t<div class=\"carousel-item white-text\" href=\"#one!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-1.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#two!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-6.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#three!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-7.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#four!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-8.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"icon-block grey darken-3 hide-on-med-and-up\" style=\"flex: 1;\">\r\n\t\t<div #carouselWords2 class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: false}]\" [materializeActions]=\"actions\">\r\n\t\t\r\n\t\t\t<div class=\"carousel-item center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Definição</span> <span class=\"grey-text text-lighten-2\">Muscular</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Perda de</span> <span class=\"amber-text\">Gordura Corporal</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item grey-text text-lighten-2 center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Correção de desvios</span> <span class=\"grey-text text-lighten-2\">Posturais</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Qualidade</span> <span class=\"amber-text\">de Vida</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<!-- Resumo quem somos -->\r\n<div class=\"abstract-who-we-are\">\r\n\t<h5 class=\"abstract-about-us-title\">TREINAMENTO PERSONALIZADO</h5>\r\n\t<p>O Studio Fitness O2 oferece treinamento adequado para cada indivíduo considerando seu histórico e objetivos. Atendendo iniciantes, idosos, pessoas em reabilitação ou até mesmo atletas, sempre adequando o plano de trabalho à real necessidade do aluno. </p>\r\n\t<h5 class=\"abstract-about-us-title\">TREINO COM FOCO EM QUALIDADE DE VIDA</h5>\r\n\t<p>A filosofia de trabalho oferecido no Studio Fitness O2 engloba a orientação sobre hábitos alimentares e estilo de vida, para que o treino seja um aliado em uma trajetória de mudança de comportamento em prol de uma vida mais saudável. </p> \r\n\t<h5 class=\"abstract-about-us-title\">NOVO CONCEITO DE TREINAMENTO</h5>\r\n\t<p>O O2 Fitness oferece um ambiente propício para que o aluno sinta-se à vontade para treinar, tirar suas dúvidas e relacionar-se com pessoas que também estão em busca da melhora na qualidade de vida. Através do atendimento personalizado com poucos alunos por horário, do uso dos melhores equipamentos e metodologias, proporciona a quem treina a eficiência e segurança de um bom acompanhamento profissional.</p>\r\n</div>\r\n\r\n<!--   Icon Section   -->\r\n<div class=\"row block-1\">\r\n\t<div class=\"col s12 amber center-align\">\r\n\t\t<div class=\"icon-block center-align\" style=\"padding: 0 20px 30px;\">\r\n\t\t\t<h3 class=\"invite-interested-title\">Treine <br>com a gente</h3>\r\n\t\t\t<p>Nossos alunos são homens e mulheres que, independentemente da idade, buscam um estilo de vida mais saudável; querem o bem-estar, viver sem dores e disposição para aproveitar a vida.</p>\r\n\t\t\t<p>Oferecemos treinos personalizados, o que garante resultados mais eficazes em menos tempo, sempre indo além do objetivo do aluno. Venha conhecer nosso trabalho!</p>\r\n\t\t\t<a class=\"btn white amber-text invite-interested-button\" href=\"#\">Treine grátis</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col s12 m6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-10.jpg); background-size: cover;\"></div>\r\n</div>\r\n\r\n\r\n<!-- Membership -->\r\n<div class=\"row-flex-on-large\">\r\n    <!-- Personal Trainning -->\r\n  <div class=\"row\">\r\n    <div class=\"col s12 m6 push-m6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-5.jpg); background-size: cover;\"></div>\r\n    <div class=\"col s12 m6 pull-m6\">\r\n      <div class=\"icon-block\" style=\"padding: 30px 0;\">\r\n\t\t\t\t<h3 class=\"black-text center-align\">Jonathas Guedes</h3>\r\n\t\t\t\t<p>Na liderança do Studio Fitness O2 está Jonathas Guedes. Jovem, formado em educação física e com garra para empreender, trouxe\r\n\t\t\t\ta São José dos Campos um novo conceito de treinamento físico. Especializado em reabilitação esportiva, correção postural,\r\n\t\t\t\te emagrecimento, Jonathas consegue oferecer um plano de trabalho completo, onde os objetivos são atingidos de forma mais\r\n\t\t\t\tassertiva, com segurança e ainda mais saúde.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"depoimentos grey darken-3 white-text\" style=\"padding-top: 20px\">\r\n\t<h3 class=\"depoimentos-title\">Depoimentos</h3>\r\n\r\n\t<div #carouselWordsDepoimentos class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: false}]\" [materializeActions]=\"actions\" id=\"carousel-depoimentos\">\r\n\t\t\r\n\t\t<div class=\"carousel-item center-align\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-cecilia.jpg\" >\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\"><strong>Cecília</strong></p>\r\n\t\t\t\t<p>Cheguei ao Studio vindo de uma fratura no tornozelo direito e rompimento de ligamento no tornozelo esquerdo, depois de vários\r\n\t\t\t\tmeses de fisioterapia e depois academia mas os pés ainda não estavam bom. Por recomendação de uma amiga fui conhecer o Studio,\r\n\t\t\t\tjá na aula experimental vi que era exatamente o que eu precisava. John sempre atencioso e muito detalhista, passou um treino\r\n\t\t\t\tdiferenciado e específico para minhas necessidades. Após um mês e meio de treino retornei ao médico para avaliação e meu\r\n\t\t\t\tpé estava 100%, o próprio médico ficou surpreso com a rápida evolução e disse que ele não esperaria que pudesse ficar tão\r\n\t\t\t\tbom. Finalmente tive alta médica, depois de 9 meses do acidente. Tive alta mas não vou parar o treino, só estou começando!\r\n\t\t\t\tAgradeço ao profissionalismo do Studio e recomendo para todos!</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\" style=\"margin: 1rem 0;\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-leticia.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Letícia</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>Há dois anos estava em um momento que só engordava e odiava fazer exercícios físicos.</p>\r\n\t\t\t\t<p>Então conheci o studio FitnessO2, logo vi que era totalmente diferente o propósito. O treino personalizado, a atenção, o\r\n\t\t\t\t\tfoco, o espaço, os profissionais! De repente um caso de amor por esse studio!! Claro minha rotina mudou, eliminei muitos\r\n\t\t\t\t\tkg, ganhei massa, defini, muitas mudanças boas!! Nem acreditava, parecia tão impossível mas, aconteceu!! </p>\r\n\t\t\t\t<p>Eu não saio daqui e daqui ninguém me tira, rs. ❤</p>\r\n\t\t\t\t<p>Indico a todos que estão procurando algo que seja sustentável, dá resultado!!</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\" style=\"margin: 1rem 0;\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-marcelo.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Marcelo</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>Estou treinando há mais de dois anos no Studio Fitness O2. Lá eu pude encontrar uma atenção e dedicação muito maiores que\r\n\t\t\t\tem uma academia padrão. Isso certamente fez a diferença nos resultados e tornou-se um bom motivo para eu continuar a treinar.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-julia.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Júlia</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>Há um tempo procurávamos, eu e meu marido, alguma atividade que nos proporcionasse saúde, qualidade de vida e que fosse prazerosa.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t<p>Em maio de 2017 conhecemos o Studio fitness O2! Além de um espaço bem equipado, contamos com profissionais que nos orienta\r\n\t\t\t\t\tde forma super competente e dedicada em exercícios individualmente pensados para o objetivo de cada um de nós!</p>\r\n\t\t\t\t<p>Desde então, o gosto pelo treino e os bons resultados só aumentaram, encontramos tudo o que procurávamos!</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\" style=\"margin: 1rem 0;\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-andreia.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Andréia</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>Estou no Studio faz 2 anos, obtive ótimos resultados neste período. É bem diferente de outras academias que frequentei, a\r\n\t\t\t\t\tpreocupação constante com a postura correta durante o treino, o exercício certo para cada perfil de aluno. Com treinamento\r\n\t\t\t\t\tpersonalizado tenho a certeza de um treino eficaz em resultados e sem lesões. Super recomendo!</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\" style=\"margin: 1rem 0;\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-anderson.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Anderson</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>Me sinto muito feliz por fazer parte dessa academia principalmente por ter o acompanhamento de um treinador que conheço desde\r\n\t\t\t\ta sua infância e que se tornou um amigo. O John (Jonathas) com seu profissionalismo, conseguiu me carregar, depois de 44\r\n\t\t\t\tanos de sedentarismo para a academia, hoje me sinto uma nova pessoa. Comigo levei minha esposa, filho e sua namorada, nos\r\n\t\t\t\tsentimos bem e o ambiente é super agradável, onde temos o prazer de estar 3 vezes por semana. Hoje me sinto mais disposto\r\n\t\t\t\te de bem comigo mesmo e sem dúvidas eu recomendo a todos que procuram um lugar diferenciado e com excelência.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\" style=\"margin: 1rem 0;\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-edilene.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Edilene</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>Atendimento diferenciado, com orientação e supervisão adequada, num ambiente mega agradável!</p>\r\n\t\t\t\t<p>Tudo que eu tanto procurei!</p>\r\n\t\t\t\t<p>Passei por diversas academias e nenhuma outra me prendeu de forma tão apaixonante. </p>\r\n\t\t\t\t<p>Jonathas é aquele profissional que vc respeita. Super capacitado, paciente e atencioso, o que me trouxe conforto e segurança\r\n\t\t\t\t\tna execução dos treinos, que não são nada entediantes. Sempre acompanhando de pertinho a execução e evolução. E na falta\r\n\t\t\t\t\tde motivação, ainda consegue trazer aquela energia extra necessária para os exercícios.</p>\r\n\t\t\t\t<p>Agradeço muito toda atenção e profissionalismo!</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\" style=\"margin: 1rem 0;\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-patricia.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Patricia</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>O Studio e espetacular, muito bem equipado, além de estar focado na obtenção de resultados, sempre aliado ao bem estar do\r\n\t\t\t\t\taluno.</p>\r\n\t\t\t\t<p>Além da dedicação, profissionalismo e motivação dos professores, que foi o que fez a total diferença na escolha do Studio\r\n\t\t\t\t\tpara alguém que como eu nunca gostou de treinar.</p>\r\n\t\t\t\t<p>Estou há um ano e indico com certeza.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"carousel-item center-align\" style=\"margin: 1rem 0;\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<img src=\"/images/depoimento-flavio.jpg\">\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"amber-text client-name\">\r\n\t\t\t\t\t<strong>Flávio</strong>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>Treino no Studio O2 fitness há dois anos. Conheci pelo Facebook e estou plenamente satisfeito com os treinos. O John é um\r\n\t\t\t\texcelente profissional que nos orienta não apenas pelo lado estético mas como também pelo lado funcional do exercício garantindo\r\n\t\t\t\tresultados sem lesões. Ambiente super organizado e agradável de se treinar</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.actions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carouselSmall'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "carouselSmall", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carouselWords1'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "carouselWords1", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carouselWords2'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "carouselWords2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carouselWordsDepoimentos'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "carouselWordsDepoimentos", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/localizacao/localizacao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n\theight: 400px;\r\n\twidth: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/localizacao/localizacao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n\t\t<agm-info-window>Studio Fitness O2</agm-info-window>\r\n\t</agm-marker>\r\n</agm-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/localizacao/localizacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalizacaoComponent = (function () {
    function LocalizacaoComponent() {
        this.lat = -23.222508;
        this.lng = -45.888061;
        this.zoom = 18;
    }
    LocalizacaoComponent.prototype.ngOnInit = function () {
    };
    return LocalizacaoComponent;
}());
LocalizacaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-localizacao',
        template: __webpack_require__("../../../../../src/app/localizacao/localizacao.component.html"),
        styles: [__webpack_require__("../../../../../src/app/localizacao/localizacao.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalizacaoComponent);

//# sourceMappingURL=localizacao.component.js.map

/***/ }),

/***/ "../../../../../src/app/sobre-nos/sobre-nos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-margin {\r\n  margin: 0;\r\n}\r\n.fs-16 {\r\n  font-size: 16px;\r\n}\r\n.icon-block {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.icon-block div {\r\n  font-size: 48px;\r\n  line-height: 1em;\r\n  font-family: \"Poppins\";\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n.icon-block h3 {\r\n    font-size: 48px;\r\n    line-height: 1em;\r\n    font-family: \"Poppins\";\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n.carousel .carousel-item, .carousel .carousel-item > img {\r\n  height: 100%;\r\n}\r\n.vertical-middle {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n.fs28 {\r\n  font-size: 28px !important;\r\n}\r\n.about-us-title {\r\n  text-transform: uppercase; \r\n  font-family: 'Eras ITC', 'Eras Light ITC', sans-serif ; \r\n  font-weight: bold;\r\n  color: gray;\r\n}\r\n@media (min-width: 601px) {\r\n  .flex-medium {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sobre-nos/sobre-nos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row grey darken-3 no-margin\">\r\n    <div class=\"col s12 m6 push-m3 l4 push-l4\">\r\n        <div style=\"padding: 30px 0; text-align: center;\">\r\n            <img src=\"/assets/img/logo-fitness-o2.png\" class=\"responsive-img\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div #carousel class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\" [materializeParams]=\"[{fullWidth: true, indicators: true}]\"\r\n    [materializeActions]=\"actions\">\r\n\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-4.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-5.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-6.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-7.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-8.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-9.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-10.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-11.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-12.jpg\">\r\n    </div>\r\n    <div class=\"carousel-item white-text\" href=\"#one!\">\r\n        <img src=\"assets/img/sobre-nos-13.jpg\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <h3 class=\"center about-us-title\">Quem somos</h3>\r\n</div>\r\n\r\n<div class=\"row no-margin fs-16\">\r\n    <div class=\"col s12\" style=\"padding: 20px;\">\r\n        <p>Fundado em 2014, em São José dos Campos/SP, o Studio Fitness o2 apresenta um novo modelo de negócio e de conceito de treinamento.\r\n        Um ambiente moderno, completo, que visa a promoção da qualidade de vida a partir de treinos que aliam eficiência e segurança,\r\n        sem perder o foco em resultados.</p>\r\n        <p>Nossos alunos são homens e mulheres que, independentemente da idade, buscam um estilo de vida mais saudável; querem o bem-estar,\r\n        viver sem dores, com disposição para aproveitar a vida na companhia da família e entes queridos.</p>\r\n        <p>Oferecemos treinos personalizados, respeitando a individualidade, o que garante resultados mais eficazes em menos tempo,\r\n        sempre indo além do objetivo do aluno, que normalmente envolve apenas a diminuição do peso e a definição muscular. Nossa\r\n        meta é torná-lo apto para todas as atividades do dia a dia.</p>\r\n        <p>O plano de trabalho acontece em uma relação de parceria onde a busca de resultados passa a ser uma tarefa conjunta. Comemora-se\r\n        cada pequena vitória da mesma forma que há o apoio e a motivação para superar as dificuldades.</p>\r\n        <p>Trabalhamos para ajudar o aluno a apaixonar-se por si mesmo, oferecendo além da atividade física, orientação sobre hábitos\r\n        alimentares e estilo de vida, para que o treino seja um aliado em uma trajetória de mudança de comportamento em prol de uma\r\n        vida mais saudável.</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--   Icon Section   -->\r\n<div class=\"row block-1 flex-medium\">\r\n\t<!-- CAROUSEL -->\r\n\t<div #carouselSmall1 class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: true}]\" [materializeActions]=\"actions\" style=\"flex: 1;\">\r\n\r\n\t\t<div class=\"carousel-item white-text\" href=\"#one!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-12.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#two!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-14.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#three!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-2.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"carousel-item white-text\" href=\"#four!\">\r\n\t\t\t<img src=\"assets/img/sobre-nos-10.jpg\" class=\"responsive-img\">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"icon-block grey darken-3\" style=\"flex: 1;\">\r\n\t\t<div #carouselWords1 class=\"carousel carousel-slider\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\r\n\t\t[materializeParams]=\"[{fullWidth: true, indicators: false}]\" [materializeActions]=\"actions\">\r\n\t\t\r\n\t\t\t<div class=\"carousel-item center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Reabilitação</span> <span class=\"grey-text text-lighten-2\">funcional e esportiva</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Preparação</span> <span class=\"amber-text\">Esportiva</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item grey-text text-lighten-2 center-align\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"amber-text\">Prevenção</span> <span class=\"grey-text text-lighten-2\">de Lesão</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"carousel-item amber-text\" style=\"margin: 1rem 0;\">\r\n\t\t\t\t<div class=\"vertical-middle fs28\">\r\n\t\t\t\t\t<span class=\"grey-text text-lighten-2\">Ganho de</span> <span class=\"amber-text\">Massa Muscular</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div class=\"row no-margin fs-16\">\r\n    <div class=\"col s12\" style=\"padding: 20px;\">\r\n        <h3 class=\"center about-us-title\">MISSÃO</h3>\r\n        <p>Oferecer um novo conceito de treinamento físico, onde o atendimento personalizado possibilita o conhecimento do indivíduo\r\n        e de suas necessidades, possibilitando a criação de planos de trabalho onde os objetivos sejam atingidos de forma mais assertiva\r\n        e em menos tempo.</p>\r\n\r\n        <h3 class=\"center about-us-title\">VISÃO</h3>\r\n        <p>Ser reconhecido como um dos melhores centros de treinamento personalizado do Vale do Paraíba, sendo referência para quem\r\n        busca a melhora na qualidade de vida e o ganho de condicionamento físico, através do atendimento de qualidade, oferecido\r\n        por bons profissionais, com segurança e respeitando os limites de cada um.</p>\r\n\r\n        <h3 class=\"center about-us-title\">VALORES</h3>\r\n        <p><strong>RESPEITO</strong> ao indivíduo e às suas limitações;</p>\r\n        <p><strong>ÉTICA</strong> ao orientar e oferecer o melhor treinamento personalizado possível;</p>\r\n        <p><strong>SOLIDEZ</strong> nas ações e tratativas para construir uma história de sucesso e ser referência na área de treinamento físico;</p>\r\n        <p><strong>EMPREENDEDORISMO</strong> na busca de novas ideias e objetivos para manter a empresa em constante evolução.</p>\r\n        <p><strong>UNIÃO</strong> como objetivo maior, fazendo com que a busca de todos os alunos tenha o único objetivo: mais saúde e qualidade de vida.</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sobre-nos/sobre-nos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreNosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreNosComponent = (function () {
    function SobreNosComponent() {
        this.actions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    SobreNosComponent.prototype.ngOnInit = function () {
    };
    return SobreNosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carousel'),
    __metadata("design:type", Object)
], SobreNosComponent.prototype, "carousel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carouselSmall'),
    __metadata("design:type", Object)
], SobreNosComponent.prototype, "carouselSmall", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carouselWords1'),
    __metadata("design:type", Object)
], SobreNosComponent.prototype, "carouselWords1", void 0);
SobreNosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sobre-nos',
        template: __webpack_require__("../../../../../src/app/sobre-nos/sobre-nos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sobre-nos/sobre-nos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SobreNosComponent);

//# sourceMappingURL=sobre-nos.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map