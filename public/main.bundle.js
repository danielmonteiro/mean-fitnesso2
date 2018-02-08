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
exports.push([module.i, "#navbar, #navbar a.button-collapse, #navbar a.button-collapse i, .icon-collapse {\n  height: 65px !important;\n  line-height: 65px !important;\n}\n.icon-collapse {\n\tcursor: pointer;\n}\n.side-nav {\n  padding-top: 15px;\n}\n.side-nav li {\n    line-height: 40px;\n}\n.side-nav li > a {\n  height: 40px;\n}\n.footer-links {\n  padding: 30px;\n}\n.footer-links h5 {\n  font-size: 24px;\n  line-height: 1em;\n  font-family: \"Poppins\";\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.footer-links p {\n  margin: 0 0 3px;\n}\n.footer-links a:hover {\n  text-decoration: underline;\n}\ncollapsible-list {\n\tmargin: 0 !important;\n\tborder: 0;\n\tbox-shadow: none;\n}\ncollapsible-header {\n\tmin-height: 0;\n\tline-height: 0;\n\tborder: 0;\n}\ncollapsible-body {\n\tpadding: 7.5px 0;\n}\ncollapsible-body p {\n\tpadding: 10px 15px;\n\tline-height: 20px;\n\tmargin: 0;\n}\ncollapsible-body p a {\n\tcolor: #777;\n\tdisplay: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"white\" role=\"navigation\" id=\"navbar\">\n  <div class=\"nav-wrapper container\">\n    <a routerLink=\"\" class=\"brand-logo black-text\"><img src=\"assets/img/logotipo-fitness-o2-header.jpg\" alt=\"Logotipo Fitness O2\" style=\"margin-top: 3px;\"></a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a routerLink=\"\" class=\"black-text\">Home</a></li>\n      <li><a routerLink=\"sobre-nos\" class=\"black-text\">Sobre nós</a></li>\n\t\t\t<li><a routerLink=\"entre-em-contato\" class=\"black-text\">Entre em contato</a></li>\n\t\t\t<li><a href=\"/blog\" class=\"black-text\">Blog</a></li>\n\t\t\t<li><a href=\"/gallery\" class=\"black-text\">Galeria</a></li>\n    </ul>\n\t\t\n    <i class=\"material-icons black-text right icon-collapse hide-on-large-only\" (click)=\"onClickSideNav()\">menu</i>\n\t\t\n  </div>\n</nav>\n\n<collapsible-list [type]=\"'accordion'\">\n\n\t<collapsible-list-item>\n\t\t<collapsible-header class=\"waves-effect\">\n\t\t\t<div #menuCollapse></div>\n\t\t</collapsible-header>\n\t\t<collapsible-body [expanded]=\"false\">\n\t\t\t<p><a (click)=\"onClickSideNav()\" routerLink=\"\">Home</a></p>\n\t\t\t<p><a (click)=\"onClickSideNav()\" routerLink=\"sobre-nos\">Sobre nós</a></p>\n\t\t\t<p><a (click)=\"onClickSideNav()\" routerLink=\"entre-em-contato\">Entre em contato</a></p>\n\t\t\t<p><a (click)=\"onClickSideNav()\" href=\"/blog\">Blog</a></p>\n\t\t\t<p><a (click)=\"onClickSideNav()\" href=\"/gallery\">Galeria</a></p>\n\t\t</collapsible-body>\n\t</collapsible-list-item>\n\n</collapsible-list>\n\n<router-outlet></router-outlet>\n\n<footer class=\"page-footer grey darken-3\">\n\t\n\t<app-contato></app-contato>\n\n  <div class=\"amber footer-links\">\n    <div class=\"container grey-text text-darken-3\" style=\"padding: 0 15px;\">\n      <div class=\"row\">\n        <div class=\"col s3 push-s1 m2 push-m3 l1 push-l5\">\n          <a href=\"https://api.whatsapp.com/send?l=pt&phone=5512988001234\" target=\"_blank\"><img src=\"assets/img/whatsapp.png\" style=\"width: 100%\"></a>\n        </div>\n        <div class=\"col s3 push-s1 m2 push-m3 l1 push-l5\">\n          <a href=\"https://www.facebook.com/studiofitnesso2/\" target=\"_blank\"><img src=\"assets/img/facebook.png\" style=\"width: 100%\"></a>\n        </div>\n        <div class=\"col s3 push-s1 m2 push-m3 l1 push-l5\">\n          <a href=\"https://www.instagram.com/studiofitnesso2/\" target=\"_blank\"><img src=\"assets/img/instagram.png\" style=\"width: 100%\"></a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m6 l4\">\n          <h5>Services</h5>\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 1</a></p>\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 2</a></p>\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 3</a></p>\n        </div>\n        <div class=\"col s12 m6 l4\">\n          <h5>Info</h5>\n          <p><a href=\"https://www.portalenaf.com.br\" target=\"_blank\" class=\"grey-text text-darken-4\">PortalEnaf</a></p>\n          <p><a href=\"http://www.educacaofisica.com.br\" target=\"_blank\" class=\"grey-text text-darken-4\">EducacaoFisica</a></p>\n          <p><a href=\"https://www.crefsp.gov.br\" target=\"_blank\" class=\"grey-text text-darken-4\">CREFSP</a></p>\n        </div>\n        <div class=\"col s12 m6 l4\">\n          <h5>Studio Fitness</h5>\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 1</a></p>\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 2</a></p>\n          <p><a href=\"#\" class=\"grey-text text-darken-4\">Link 3</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

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
exports.push([module.i, ".input-field label,\n.input-field input[type=text]:focus + label,\n.input-field input[type=text]:focus,\n.input-field input[type=email]:focus + label,\n.input-field input[type=email]:focus\n.input-field textarea:focus + label,\n.input-field textarea:focus {\n color: #ffc107;\n}\ninput[type=text]:not(.browser-default):focus:not([readonly]),\ninput[type=email]:not(.browser-default):focus:not([readonly]),\ntextarea.materialize-textarea:focus:not([readonly]) {\n\tborder-bottom: 1px solid #ffc107;\n\tbox-shadow: 0 1px 0 0 #ffc107;\n}\ntextarea.materialize-textarea:focus:not([readonly]) + label {\n\tcolor: #ffc107;\n}\n.contact-us h4 {\n  font-size: 48px;\n  line-height: 1em;\n  font-family: \"Poppins\";\n  font-weight: 700;\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contato/contato.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"center contact-us grey-text text-lighten-2\">\n\t\t<h4>Entre em <span class=\"amber-text\">contato</span></h4>\n\t</div>\n\t<div class=\"row\">\n\t\t<form class=\"col s12\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"first_name\" type=\"text\" class=\"validate\" formControlName=\"name\">\n\t\t\t\t\t<label for=\"first_name\" class=\"active\">Nome</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"validate\" formControlName=\"email\">\n\t\t\t\t\t<label for=\"email\" class=\"active\">Email</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"phone\" type=\"text\" class=\"validate\" formControlName=\"phone\">\n\t\t\t\t\t<label for=\"phone\" class=\"active\">Telefone</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea id=\"message\" class=\"materialize-textarea\" formControlName=\"message\"></textarea>\n\t\t\t\t\t\t<label for=\"message\" class=\"active\">Mensagem</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"center\">\n\t\t\t\t<button class=\"btn amber waves-effect waves-light\" type=\"submit\" name=\"action\">Enviar\n            <i class=\"material-icons right\">send</i>\n          </button>\n\t\t\t</div>\n\n\t\t</form>\n\t</div>\n</div>\n"

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
exports.push([module.i, "agm-map {\n\theight: 400px;\n\twidth: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entre-em-contato/entre-em-contato.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"contact-u\">\n\t\t<h4>Entre em contato</h4>\n\t</div>\n\t<div class=\"row\">\n\t\t<form class=\"col s12\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"first_name\" type=\"text\" class=\"validate\" formControlName=\"name\">\n\t\t\t\t\t<label for=\"first_name\" class=\"active\">Nome</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"validate\" formControlName=\"email\">\n\t\t\t\t\t<label for=\"email\" class=\"active\">Email</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"phone\" type=\"text\" class=\"validate\" formControlName=\"phone\">\n\t\t\t\t\t<label for=\"phone\" class=\"active\">Telefone</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<select formControlName=\"heard\" materialize=\"material_select\" [(ngModel)]=\"selectedHeard\" [materializeSelectOptions]=\"heard\">\n\t\t\t\t\t\t<option value=\"\" disabled selected>Selecione uma opção...</option>\n\t\t\t\t\t\t<option *ngFor=\"let option of heardOptions\" [value]=\"option.value\">{{option.value}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<label>Como você nos conheceu?</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<select formControlName=\"reply\" materialize=\"material_select\" [(ngModel)]=\"selectedReply\" [materializeSelectOptions]=\"reply\">\n\t\t\t\t\t\t<option value=\"\" disabled selected>Selecione uma opção...</option>\n\t\t\t\t\t\t<option *ngFor=\"let option of replyOptions\" [value]=\"option.value\">{{option.value}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<label>Como você prefere que entremos em contato?</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea id=\"message\" class=\"materialize-textarea\" formControlName=\"message\"></textarea>\n\t\t\t\t\t\t<label for=\"message\" class=\"active\">Mensagem</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"center\">\n\t\t\t\t<button class=\"btn amber waves-effect waves-light\" type=\"submit\" name=\"action\">Enviar\n            <i class=\"material-icons right\">send</i>\n          </button>\n\t\t\t</div>\n\n\t\t</form>\n\t</div>\n\n\t<div class=\"card\">\n\t\t<div class=\"card-content\">\n\t\t\t<span class=\"card-title\">\n\t\t\t\t<i class=\"material-icons amber-text\">access_time</i> Horário de funcionamento\n\t\t\t</span>\n\t\t\t<p><strong>Segunda a Sexta:</strong> 6 às 22h</p>\n\t\t\t<p style=\"margin-bottom: 20px;\"><strong>Sábado:</strong> 8 às 12h</p>\n\n\t\t\t<span class=\"card-title\">\n\t\t\t\t<i class=\"material-icons amber-text\">local_phone</i> Telefone\n\t\t\t</span>\n\t\t\t<p>(12) 98800-1234</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card\">\n\t\t<div class=\"card-content\">\n\t\t\t<span class=\"card-title\">\n\t\t\t\t<i class=\"material-icons amber-text\">location_on</i> Endereço\n\t\t\t</span>\n\t\t\t<p style=\"margin-bottom: 20px;\">Avenida Andrômeda, 753 - Sala 1</p>\n\n\t\t\t<!-- this creates a google map on the page with the given lat/lng from -->\n\t\t\t<!-- the component as the initial center of the map: -->\n\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n\t\t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n\t\t\t\t\t<agm-info-window>Studio Fitness O2</agm-info-window>\n\t\t\t\t</agm-marker>\n\t\t\t</agm-map>\n\t\t\t\n\t\t</div>\n\t</div>\n\n</div>\n"

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
exports.push([module.i, ".block-1 .icon-block {\r\n  padding: 80px 0;\r\n}\r\n.icon-block h3 {\r\n  font-size: 48px;\r\n  line-height: 1em;\r\n  font-family: \"Poppins\";\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n.row {\r\n  margin-bottom: 0;\r\n}\r\n.row .col {\r\n    padding: 0 0;\r\n}\r\n@media (min-width: 993px) {\r\n  .row-flex-on-large .row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n}\r\n@media (max-width: 993px) {\r\n  .row-flex-on-large .img-bg-cover {\r\n    height: 400px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--   Icon Section   -->\n<div class=\"row block-1\">\n\t<div class=\"col s12 m6 grey darken-3\">\n\t\t<!-- CAROUSEL -->\n\t\t<div #carouselSmall1 class=\"carousel carousel-slider hide-on-large-only\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\n\t\t [materializeParams]=\"[{fullWidth: true, indicators: true}]\" [materializeActions]=\"actions\">\n\n\t\t\t<div class=\"carousel-item white-text\" href=\"#one!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-12.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#two!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-14.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#three!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-2.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#four!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-10.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- CAROUSEL -->\n\t\t<div #carouselLarge1 class=\"carousel carousel-slider hide-on-med-and-down\" [ngClass]=\"{ 'initialized': showInitialized }\"\n\t\t materialize=\"carousel\" [materializeParams]=\"[{fullWidth: true, indicators: true}]\" [materializeActions]=\"actions\">\n\t\t\t<div class=\"carousel-item white-text\" href=\"#one!\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-12.jpg\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-14.jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#three!\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-2.jpg\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-10.jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  <div class=\"col s12 m6 grey darken-3\">\n    <div class=\"icon-block\">\n      <h3 class=\"grey-text text-lighten-2 center-align\">Who can <br><span class=\"amber-text\">join</span></h3>\n    </div>\n  </div>\n</div>\n\n<!--   Icon Section   -->\n<div class=\"row block-1\">\n\t<div class=\"col s12 m6 push-m6 grey darken-3\">\n\t\t<!-- CAROUSEL -->\n\t\t<div #carouselSmall2 class=\"carousel carousel-slider hide-on-large-only\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\"\n\t\t [materializeParams]=\"[{fullWidth: true, indicators: true}]\" [materializeActions]=\"actions\">\n\n\t\t\t<div class=\"carousel-item white-text\" href=\"#one!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-1.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#two!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-6.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#three!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-7.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#four!\">\n\t\t\t\t<img src=\"assets/img/sobre-nos-8.jpg\" class=\"responsive-img\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- CAROUSEL -->\n\t\t<div #carouselLarge2 class=\"carousel carousel-slider hide-on-med-and-down\" [ngClass]=\"{ 'initialized': showInitialized }\"\n\t\t materialize=\"carousel\" [materializeParams]=\"[{fullWidth: true, indicators: true}]\" [materializeActions]=\"actions\">\n\t\t\t<div class=\"carousel-item white-text\" href=\"#one!\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-1.jpg\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-6.jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item white-text\" href=\"#three!\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-7.jpg\">\n\t\t\t\t\t<img class=\"col l6\" src=\"assets/img/sobre-nos-8.jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col s12 m6 pull-m6 grey darken-3\">\n\t\t<div class=\"icon-block\">\n\t\t\t<h3 class=\"grey-text text-lighten-2 center-align\">Who can <br><span class=\"amber-text\">join</span></h3>\n\t\t</div>\n\t</div>\n</div>\n\n<!--   Icon Section   -->\n<div class=\"row block-1\">\n\t<div class=\"col s12 amber center-align\">\n\t\t<div class=\"icon-block\" style=\"padding-bottom: 30px;\">\n\t\t\t<h3 class=\"white-text center-align\" style=\"margin-bottom: 20px\">Enjoy <br>a free trial</h3>\n\t\t\t<a class=\"btn white amber-text\" href=\"#\">FREE 7 DAYS TRIAL</a>\n\t\t</div>\n\t</div>\n\t<div class=\"col s12 m6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-10.jpg); background-size: cover;\"></div>\n</div>\n\n\n<!-- Membership -->\n<div class=\"row-flex-on-large\">\n    <!-- Personal Trainning -->\n  <div class=\"row\">\n    <div class=\"col s12 m6 push-m6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-5.jpg); background-size: cover;\"></div>\n    <div class=\"col s12 m6 pull-m6\">\n      <div class=\"icon-block\" style=\"padding: 100px 0;\">\n        <h3 class=\"black-text center-align\">Personal Training</h3>\n      </div>\n    </div>\n  </div>\n\n  <!-- Group Classes -->\n  <div class=\"row\">\n    <div class=\"col s12 m6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-8.jpg); background-size: cover;\"></div>\n    <div class=\"col s12 m6\">\n      <div class=\"icon-block\" style=\"padding: 100px 0;\">\n        <h3 class=\"black-text center-align\">Group Classes</h3>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carouselLarge'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "carouselLarge", void 0);
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
exports.push([module.i, "agm-map {\n\theight: 400px;\n\twidth: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/localizacao/localizacao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n\t\t<agm-info-window>Studio Fitness O2</agm-info-window>\n\t</agm-marker>\n</agm-map>\n"

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
exports.push([module.i, ".no-margin {\r\n  margin: 0;\r\n}\r\n.fs-16 {\r\n  font-size: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sobre-nos/sobre-nos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 class=\"center\">Sobre nós</h3>\n</div>\n\n<div class=\"row no-margin fs-16\">\n    <div class=\"col s12 l6\" style=\"padding: 20px;\">\n        <p class=\"center\">Fundado em 2014, um novo modelo de negócio e de conceito de treinamento. Um ambiente moderno, completo, que visa a promoção da qualidade de vida a partir de treinos que prezam por eficiência e segurança, sem nunca perder o foco em resultados.</p>\n    </div>\n    <div class=\"col s12 l6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-1.jpg); background-size: cover; height: 350px;\"></div>\n</div>\n<div class=\"row no-margin fs-16\">\n    <div class=\"col s12 l6\" style=\"padding: 20px;\">\n        <p class=\"center\">Nossos clientes são homens e mulheres que, independente da idade, desejam um estilo de vida, não para impressionar outros, mas em primeiro lugar, querem o bem estar, viver sem dores, com disposição para aproveitar a vida na companhia de quem ama.</p>\n    </div>\n    <div class=\"col s12 l6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-2.jpg); background-size: cover; height: 350px;\"></div>\n</div>\n<div class=\"row no-margin fs-16\">\n    <div class=\"col s12 l6\" style=\"padding: 20px;\">\n        <p class=\"center\">Nossos treinos são personalizados, respeitando a individualidade do aluno e prezando pela otimização do tempo x eficiência, sempre indo além do objetivo do aluno, que normalmente envolve apenas a perda de gordura e definição muscular. Nossa meta é torná-lo apto para todas as atividades do dia a dia.</p>\n    </div>\n    <div class=\"col s12 l6 img-bg-cover\" style=\"background: url(assets/img/sobre-nos-3.jpg); background-size: cover; height: 350px;\"></div>\n</div>\n\n<div \n    #carousel\n    class=\"carousel carousel-slider\" \n    [ngClass]=\"{ 'initialized': showInitialized }\" \n    materialize=\"carousel\" \n    [materializeParams]=\"[{fullWidth: true, indicators: true}]\" \n    [materializeActions]=\"actions\">\n\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-4.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-5.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-6.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-7.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-8.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-9.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-10.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-11.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-12.jpg\">\n    </div>\n    <div class=\"carousel-item white-text\" href=\"#one!\">\n        <img src=\"assets/img/sobre-nos-13.jpg\">\n    </div>\n</div>\n\n<!--   Icon Section   -->\n<div class=\"row block-1\">\n\t<div class=\"col s12 amber center-align\">\n\t\t<div class=\"icon-block\" style=\"padding-bottom: 30px;\">\n\t\t\t<h3 class=\"white-text center-align\" style=\"margin-bottom: 20px\">Enjoy <br>a free trial</h3>\n\t\t\t<a class=\"btn white amber-text\" href=\"#\">FREE 7 DAYS TRIAL</a>\n\t\t</div>\n\t</div>\n</div>\n"

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