webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'About',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signout_signout_component__ = __webpack_require__("../../../../../src/app/signout/signout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */]
    },
    {
        path: 'signout',
        component: __WEBPACK_IMPORTED_MODULE_5__signout_signout_component__["a" /* SignoutComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"{{cssCtr}}\" >\r\n        <app-header ></app-header>\r\n        <app-aside-bar></app-aside-bar>\r\n        <div class=\"content\" >\r\n                <router-outlet ></router-outlet>\r\n        </div>\r\n        \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(service, s) {
        this.service = service;
        this.s = s;
        this.cssCtr = 'haventId';
        if (this.s.get('chatUserId'))
            this.cssCtr = 'haveId';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aside_bar_aside_bar_component__ = __webpack_require__("../../../../../src/app/aside-bar/aside-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signout_signout_component__ = __webpack_require__("../../../../../src/app/signout/signout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__share_post_share_post_component__ = __webpack_require__("../../../../../src/app/share-post/share-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_post_view_post_component__ = __webpack_require__("../../../../../src/app/view-post/view-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__original_post_original_post_component__ = __webpack_require__("../../../../../src/app/original-post/original-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__view_image_view_image_component__ = __webpack_require__("../../../../../src/app/view-image/view-image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__aside_bar_aside_bar_component__["a" /* AsideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__signout_signout_component__["a" /* SignoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__share_post_share_post_component__["a" /* SharePostComponent */],
                __WEBPACK_IMPORTED_MODULE_16__view_post_view_post_component__["a" /* ViewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_17__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__original_post_original_post_component__["a" /* OriginalPostComponent */],
                __WEBPACK_IMPORTED_MODULE_19__view_image_view_image_component__["a" /* ViewImageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage__["LocalStorageModule"].withConfig({
                    prefix: 'my-app',
                    storageType: 'localStorage'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/aside-bar/aside-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "aside{\n    background: #f8f8f8;;\n    width: 200px;\n    height: 100vh;\n    float: left;\n}\n\n.Index0{\n    z-index: 0;\n    position: fixed;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aside-bar/aside-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"Index0\">\n  <div>s</div>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/aside-bar/aside-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideBarComponent = /** @class */ (function () {
    function AsideBarComponent() {
    }
    AsideBarComponent.prototype.ngOnInit = function () {
    };
    AsideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside-bar',
            template: __webpack_require__("../../../../../src/app/aside-bar/aside-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aside-bar/aside-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AsideBarComponent);
    return AsideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.user = { id: null, post: [], userInfo: {}, follow: {} };
        if (this.storage.get('chatUserId') !== null || this.storage.get('chatUserId') !== undefined) {
            this.user['id'] = this.storage.get('chatUserId');
            this.getProfileInfo({ userId: '' + this.storage.get('chatUserId') }).subscribe(function (res) {
                var post = res.post;
                var userInfo = res.userInfo;
                for (var i = 0; i < post.length; i++) {
                    post[i]['imageUser'] = userInfo.image;
                    post[i]['username'] = userInfo.username;
                    post[i]['userId'] = userInfo._id;
                }
                _this.user = res;
                _this.user['post'] = post;
            });
        }
    }
    DataService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
    };
    DataService.prototype.signUp = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/signup', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.signUpAsGuest = function () {
        return this.http.get('/api/user/signupasguest').map(function (res) { return res.json(); });
    };
    DataService.prototype.signIn = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/signin', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.getProfileInfo = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/getuserinfo', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.signOut = function () {
        this.storage.remove('chatUserId');
        this.user = {};
        this.followingPost = [];
    };
    DataService.prototype.sharePost = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/post/sharepost', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.getFollowingPosts = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/post/getFollowingPosts', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.deletePost = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/post/deletepost', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.randomSuggest = function () {
        return this.http.get('/api/post/randomSuggest').map(function (res) { return res.json(); });
    };
    DataService.prototype.checkIfFollow = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/follow/checkiffollow', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.follow = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/follow/addorremovefollow', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-form {\n    margin-right: 0px;\n    margin-left: 0px;\n}\n\n\n.navbar{\n    margin-bottom: 0px\n}\n\n\n@media (min-width: 768px) {\n    .search{\n        width:200px;\n    -webkit-transition: width .5s;\n    transition: width .5s;\n    \n    }\n    .search:focus{\n        width: 300px;\n    }\n    .search:active{\n        width: 300px;\n    }\n\n    .search:visited{\n        width: 300px;\n    }\n}\n\n\n@media (min-width: 1000px) {\n    .search{\n        width:400px;\n    -webkit-transition: width .5s;\n    transition: width .5s;\n    \n    }\n    .search:focus{\n        width: 500px;\n    }\n    .search:active{\n        width: 500px;\n    }\n\n    .search:visited{\n        width: 500px;\n    }\n}\n\n\n.Index1{\n    width: 100%;\n    z-index: 1;\n    position: fixed;\n}\n\n\n.header-space{\n    height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default Index1\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['']\" >Chat WebSite</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n       <form class=\"navbar-form navbar-left\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"search form-control \"  [routerLink]=\"['searchresult']\"  [(ngModel)]=\"query\"  (ngModelChange)=\"search($event)\"  name=\"search\"  placeholder=\"Search on Post, Username & Email\" >\n      </div>\n    </form>\n    \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLink]=\"['profile']\"><a ><span class=\"glyphicon glyphicon-user\"></span> {{service.user.userInfo.username}} </a></li>\n        <li [routerLink]=\"['signout']\"><a ><span class=\"glyphicon glyphicon-log-out\"></span> SignOut</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n  \n<div class=\"header-space\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, storage, router) {
        this.service = service;
        this.storage = storage;
        this.router = router;
    }
    HeaderComponent.prototype.search = function (query) {
        this.query = query;
        console.log(query);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".randomSuggestPostTEXT{\n    width: 73%;\n    margin: 12px auto 0px;\n    color: #888;\n    font-size: 14px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<sharePost></sharePost>\n\n\n<div *ngIf=\"!randomSuggestPost==[]\">\n    <hr>\n    <p class=\"randomSuggestPostTEXT\">Random Suggest...</p>\n    <viewPost *ngFor=\"let post of randomSuggestPost\" [data]='post'></viewPost>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(servece) {
        var _this = this;
        this.servece = servece;
        this.randomSuggestPost = [];
        this.servece.getFollowingPosts({ id: this.servece.user.id })
            .subscribe(function (res) {
            _this.servece.followingPost = res.following;
        });
    }
    MainComponent.prototype.randomSuggest = function () {
        var _this = this;
        this.servece.randomSuggest()
            .subscribe(function (res) {
            _this.randomSuggestPost.push({
                userId: res.user._id,
                imageUser: res.user.imageUser,
                username: res.user.username,
                date: res.post.date,
                postContent: res.post.postContent,
                postId: res.post._id
            });
        });
    };
    MainComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 3; i++) {
            this.randomSuggest();
        }
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/original-post/original-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/original-post/original-post.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  original-post works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/original-post/original-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OriginalPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OriginalPostComponent = /** @class */ (function () {
    function OriginalPostComponent() {
    }
    OriginalPostComponent.prototype.ngOnInit = function () {
    };
    OriginalPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-original-post',
            template: __webpack_require__("../../../../../src/app/original-post/original-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/original-post/original-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OriginalPostComponent);
    return OriginalPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover{\n    background-size: cover;\n    min-height: 300px;\n    background-color: #001527;\n}\n\n.writeapost{\n    width: 73%;\n    margin: 12px auto -13px;\n    color: #888888;\n}\n\n.image-profile-container img{\n    height: 167px;\n    margin: auto;\n    width: 167px;\n    margin-top: -133px;\n    display: block;\n    -webkit-box-shadow: 0 0 16px 0 #000;\n    box-shadow: 0 0 16px 0 #000;\n    border: 5px solid #fff;\n    border-radius: 6px;\n}\n\n.follow{\n    width: 95px;\n    height: 95px;\n    text-align: center;\n    border: 5px solid #e8e8d2;\n    border-radius: 50%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin: 8px 26px;\n}\n\n.follow p{\n    margin: auto;\n    font-weight: bold;\n    font-family: sans-serif;\n}\n\n.short_info{\n    text-align: center;\n    margin: 8px\n}\n\n.short_info span{\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 24px;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 500;\n    line-height: 30px;\n    max-width: 275px;\n}\n\n.hdn{\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\" *ngIf=\"!service.user.userInfo.cover\" ></div>\n<div class=\"cover\" *ngIf=\"service.user.userInfo.cover\"  style=\"background: url('data:image/jpeg;base64,{{service.user.userInfo.cover}}' ) no-repeat center center ; \"></div>\n<div class=\"image-profile-container\">\n    <img *ngIf=\"service.user.userInfo.image\" src='data:image/jpeg;base64,{{service.user.userInfo.image}}' >\n    <img *ngIf=\"!service.user.userInfo.image\" src=\"assets/profile.png\" >\n</div>\n<div class=\"short_info\">\n    <span>{{service.user.userInfo.username}}</span>\n    <br>\n    <div class=\"follow\"><p>{{service.user.follow.follower.length }} <br> Follower</p></div>  \n    \n    <div class=\"follow\"><p>{{service.user.follow.following.length }} <br> Following</p></div>  \n    \n</div>\n\n \n\n<ul class=\"nav nav-tabs\">\n    <li (click)=\"routeTabs('Posts')\" [class.active]=\"tapRouteVal === 'Posts'\" ><a >Posts</a></li>\n    <li (click)=\"routeTabs('Photos')\" [class.active]=\"tapRouteVal === 'Photos'\" ><a>Photos</a></li>\n    <li (click)=\"routeTabs('About')\" [class.active]=\"tapRouteVal === 'About'\"  ><a>About</a></li>\n    <li><a></a></li>\n  </ul>\n\n\n  <div  *ngIf=\"tapRouteVal=='Posts'\">\n        <p class=\"writeapost\">write a post:</p>\n    <sharePost></sharePost>\n    <viewPost *ngFor=\"let post  of service.user.post\" [data]='post'  ></viewPost>\n</div>\n\n\n<div  *ngIf=\"tapRouteVal==='Photos'\" >\n    <div *ngFor=\"let post  of service.user.post\" >\n        <viewImage  [data]='post'></viewImage>\n    </div>    \n    \n</div>\n\n\n<div  *ngIf=\"tapRouteVal==='About'\">\n    <About></About>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service) {
        this.service = service;
        this.tapRouteVal = 'Posts';
        this.p = 'sq';
    }
    ProfileComponent.prototype.routeTabs = function (a) {
        this.tapRouteVal = a;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        console.log(this.service.user, 'from base');
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/share-post/share-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post{\n   \n    width: 70%;\n    margin: 20px auto;\n    min-height: 150px;\n    -webkit-box-shadow: 0px 0px 0px 1px #8888884f;\n            box-shadow: 0px 0px 0px 1px #8888884f;\n    border-radius: 4px;\n    padding: 10px;\n}\ntable{\n    width: 100%;\n}\n.td20{\n    width: 10%\n}\n.td80{\n    width: 80%\n}\n.post .textAreaContainer{\n    width: 100%;\n    height: 100px;\n    margin: auto;\n}\n.post .textAreaContainer textarea{\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 100%;\n    max-height: 100%;\n    overflow: hidden;\n    padding: 8px 16px;\n    border: none;\n    background: #fafafb;\n    resize: none;\n    -webkit-box-shadow: 0px 0px 1px 0px #cca2a2;\n            box-shadow: 0px 0px 1px 0px #cca2a2;\n}\n.post .textAreaContainer textarea:focus{\n    -webkit-box-shadow: 0px 0px 0px 1px #e8e8d2;\n            box-shadow: 0px 0px 0px 1px #e8e8d2;\n}\n.post:focus {\n    -webkit-box-shadow: 0px 0px 110px 1px #242406;\n            box-shadow: 0px 0px 110px 1px #242406;\n}\n.post .imgPoster{\n    max-width: 60px;\n    max-height: 60px;\n    border-radius: 50%;\n    -webkit-box-shadow: 0px 0px 0px 1px #88888859;\n            box-shadow: 0px 0px 0px 1px #88888859;\n}\n.float-right{\n    float:right;\n}\n.float-left{\n    float:left;\n    margin-top: 8px;\n}\n.marginTop10{\n    height: 35px;\n    margin-top: 10px;\n}\n.photoPostContainer{\n    margin: 30px 0px;\n}\n.photoPostContainer img{\n    width: 90%;\n    margin: auto;\n    display: block;\n}\n.clearFix{\n    clear: both;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/share-post/share-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\n  \n  <table>\n    <tr>\n      <td class=\"td20\">\n          <div class=\"imgPosterContainer\">\n              <img class=\"imgPoster\" *ngIf=\"service.user.userInfo.image\" src='data:image/jpeg;base64,{{service.user.userInfo.image}}' >\n              <img class=\"imgPoster\" *ngIf=\"!service.user.userInfo.image\" src=\"assets/profile.png\" >\n          </div>\n      </td>\n\n\n      <td class=\"td80\">\n          <div class=\"textAreaContainer\"> \n              <textarea class=\"form-control\" [(ngModel)]='textPost' placeholder=\"What's On Your Mind, Jamal? \"   rows=\"5\" id=\"comment\"></textarea> \n            </div>\n      </td>\n    </tr>\n   \n  </table>\n  <div *ngIf=\"photoPost\" class=\"photoPostContainer\">\n      <img   src='data:image/jpeg;base64,{{photoPost}}' >\n  </div>\n  <div class=\"marginTop10\">\n        <form class=\"float-left\" id=\"test_form\" method=\"GET\" action=\"\">\n                <label id=\"pic1\">\n                        <span class=\"glyphicon glyphicon-picture\"> </span> \n                  <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelect($event)\"  >\n              \n                </label>\n              </form>\n  <button class=\"float-right btn btn-primary\" [disabled]=' !textPost && !photoPost ' (click)=\"sharePost()\" >Post</button>  \n    </div>\n</div>\n<div class=\"clearFix\"></div>"

/***/ }),

/***/ "../../../../../src/app/share-post/share-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharePostComponent = /** @class */ (function () {
    function SharePostComponent(service) {
        this.service = service;
    }
    SharePostComponent.prototype.sharePost = function () {
        var _this = this;
        this.service.sharePost({ _id: this.service.user.id,
            postContent: {
                text: this.textPost,
                image: this.photoPost
            } })
            .subscribe(function (res) {
            var oldPosts = _this.service.user['post'];
            var newPost = [{ userId: _this.service.user.id,
                    postContent: { text: _this.textPost, image: _this.photoPost },
                    id_: '',
                    date: 'Just Now',
                    like: 0,
                    comment: 0,
                    imageUser: _this.service.user.userInfo.photo,
                    username: _this.service.user.userInfo.username
                }];
            _this.service.user.post = newPost.concat(oldPosts);
            _this.textPost = '';
            _this.photoPost = '';
        });
    };
    SharePostComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    SharePostComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.photoPost = btoa(binaryString);
    };
    SharePostComponent.prototype.ngOnInit = function () {
    };
    SharePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sharePost',
            template: __webpack_require__("../../../../../src/app/share-post/share-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/share-post/share-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], SharePostComponent);
    return SharePostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"x\">\n  <div class=\"sigin\">\n    <p class=\"h3\">chat and post <span>SignIn</span></p>\n    <input type=\"email\" placeholder=\"example@example.com\"     [(ngModel)]='formData.email' >    \n    <input type=\"password\" placeholder=\"Password\"   [(ngModel)]='formData.password'  >\n    <div>\n      <small class=\"{{msg.type}}\" >{{msg.data}}</small>   \n    </div> \n    \n    <button (click)=\"signin()\">\n      <span class=\"glyphicon glyphicon-arrow-right {{btnSignupDegree}}\"></span>\n    </button>   \n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(service, storage, router) {
        this.service = service;
        this.storage = storage;
        this.router = router;
        this.btnSignupDegree = '';
    }
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this.msg = { type: 'hdn', data: '|' };
        this.btnSignupDegree = 'deg0';
        if (!this.formData.email || !this.formData.password) {
            this.msg = { type: 'err', data: 'invaild form' };
        }
        else {
            this.btnSignupDegree = 'deg360';
            this.service.signIn(this.formData).subscribe(function (res) {
                _this.btnSignupDegree = 'deg0';
                if (res.status == 'signin') {
                    _this.storage.set('chatUserId', res.id);
                    _this.router.navigate(['']);
                    location.reload();
                }
                else {
                    _this.msg = { type: 'err', data: '' + res.status };
                }
            });
        }
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.formData = { email: '', password: '' };
        this.msg = { type: 'hdn', data: '|' };
        if (this.storage.get('chatUserId'))
            this.router.navigate(['']);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signout/signout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signout/signout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/signout/signout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignoutComponent = /** @class */ (function () {
    function SignoutComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    SignoutComponent.prototype.ngOnInit = function () {
        this.service.signOut();
        this.router.navigate(['signin']);
        location.reload();
    };
    SignoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signout',
            template: __webpack_require__("../../../../../src/app/signout/signout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signout/signout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], SignoutComponent);
    return SignoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/img/login_bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login_bg.781d3706f9e21534c7d1.jpg";

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".deg0{\r\n    -webkit-transform: rotate(0deg)!important;\r\n            transform: rotate(0deg)!important;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n}\r\n.deg90{\r\n    -webkit-transform: rotate(450deg)!important;\r\n            transform: rotate(450deg)!important;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n}\r\n.deg360{\r\n   \r\n    -webkit-transition: all 50s ease;\r\n   \r\n    transition: all 50s ease;\r\n    -webkit-transform: rotate(100080deg)!important;\r\n            transform: rotate(100080deg)!important;\r\n}\r\n.err{\r\n    color: #f10000;\r\n    font-size: 16px;\r\n    text-shadow: 0px 0px 52px white;\r\n}\r\n.hdn{\r\n    font-size: 16px;\r\n    text-shadow: 0px 0px 52px transparent;\r\n    color:transparent;\r\n}\r\n.body{\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/signup/img/login_bg.jpg")) + ") no-repeat center center fixed;\r\nbackground-size: cover;\r\nmin-height: 100vh;\r\n}\r\nspan{\r\n    color: rgba(102, 138, 255, 0.973)\r\n}\r\n.x{\r\n      width: 100%;\r\n      min-height: 100vh;\r\n   background: #00000042;\r\n   color: white;\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n\r\n}\r\n.sigin{\r\nwidth: 664px;\r\nmin-height: 60vh;\r\nmargin: auto;\r\ntext-align: center;\r\n}\r\n.sigin p{\r\n    font-weight: 100;\r\nfont-family: initial;\r\nletter-spacing: 5px;\r\nword-wrap: inherit;\r\n   margin-bottom: 75px;\r\n   font-size: 25px;\r\n}\r\n.sigin input:invalid{\r\n    border-bottom: 1px solid rgba(211, 38, 26, 0.651);\r\n    background: #fb9a9a1f;\r\n}\r\n.sigin input:valid {\r\n    border-bottom: 1px solid rgb(255, 255, 255);\r\n}\r\n.sigin input{\r\n    display: block;\r\n      width: 325px;\r\n   padding: 18px;\r\n   background: transparent;\r\n   border: none;\r\n   color: white;\r\n   border-bottom: 1px solid white;\r\n   margin: auto;\r\n}\r\n.sigin button{\r\n    display: block;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    height: 60px;\r\n    width: 60px;\r\n    border: 1px solid white;\r\n    border-radius: 50%;\r\n    background: #ffffff0a;\r\n    color: #ffffff96;\r\n    cursor: pointer;\r\n}\r\n.sigin button span{\r\n    color: white;\r\n    font-size: 20px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); \r\n\r\n}\r\n.sigin button:hover{\r\n    background: #3b3a3a59;\r\n}\r\n.sigin button:active{\r\n    background: #3b3a3a9e;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: #ffffff96;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n    color: #ffffff96;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n    color: #ffffff96;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n    color: #ffffff96;\r\n}\r\n.or{\r\n    background: #18151563;\r\n    width: 28px;\r\n    /* height: 20px; */\r\n    padding-bottom: 6px;\r\n    border-radius: 50%;\r\n    margin: 13px auto;\r\n    padding-top: 9px;\r\n    font-weight: 100;\r\n}\r\n.guest{\r\n    font-size: 17px;\r\n    color: white;\r\n    border-bottom: 1px solid white;\r\n    font-family: sans-serif;\r\n    padding: 2px;\r\n    cursor: pointer;\r\n}\r\n@media (max-width: 375px) {\r\n    .sigin p{\r\n        font-size: 15px\r\n    }\r\n    .sigin input{\r\n        width: unset\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <div class=\"x\">\r\n  <div class=\"sigin\">\r\n    <p class=\"h3\">chat and post <span>SignUp</span></p>\r\n    <input type=\"text\" placeholder=\"username\" [(ngModel)]='formData.username'  >\r\n    <input type=\"email\" placeholder=\"example@example.com\"     [(ngModel)]='formData.email' >    \r\n    <input type=\"password\" placeholder=\"Password\"   [(ngModel)]='formData.password'  >\r\n    <input type=\"password\" placeholder=\"Confirm Password\"   [(ngModel)]='formData.confirmPassword' >\r\n    <div>\r\n      <small class=\"{{msg.type}}\" >{{msg.data}}</small>   \r\n    </div> \r\n    \r\n    <button (click)=\"signup()\">\r\n      <span class=\"glyphicon glyphicon-arrow-right {{btnSignupDegree}}\"></span>\r\n    </button>\r\n      <h6 class=\"or\">OR</h6>\r\n    <small class=\"guest\" (click)=\"signupGuest()\">Signup As Guest</small>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(service, storage, router) {
        this.service = service;
        this.storage = storage;
        this.router = router;
        this.btnSignupDegree = '';
    }
    SignupComponent.prototype.signupGuest = function () {
        var _this = this;
        this.btnSignupDegree = 'deg90';
        this.service.signUpAsGuest().subscribe(function (res) {
            if (res.status === 'signup') {
                _this.storage.set('chatUserId', res.id);
                _this.router.navigate(['guest']);
                location.reload();
            }
            else if (res.status === 'recall') {
                _this.signupGuest();
            }
        });
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.msg = { type: 'hdn', data: '|' };
        this.btnSignupDegree = 'deg0';
        if (!this.formData.username || !this.formData.email || !this.formData.password || !this.formData.confirmPassword) {
            this.msg = { type: 'err', data: 'invaild form' };
        }
        else {
            if (this.formData.password !== this.formData.confirmPassword) {
                this.msg = { type: 'err', data: 'password does\'nt match ' };
            }
            else {
                this.btnSignupDegree = 'deg360';
                this.service.signUp(this.formData).subscribe(function (res) {
                    _this.btnSignupDegree = 'deg0';
                    if (res.status == 'signup') {
                        _this.storage.set('chatUserId', res.id);
                        _this.router.navigate(['']);
                        location.reload();
                    }
                    else {
                        _this.msg = { type: 'err', data: '' + res.status };
                    }
                });
            }
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.formData = { username: '', email: '', password: '', confirmPassword: '' };
        this.msg = { type: 'hdn', data: '|' };
        if (this.storage.get('chatUserId'))
            this.router.navigate(['']);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-image/view-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post{\n    background: white;\n    margin:10px auto;\n    width: 70%;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n            box-shadow: 0px 0px 1px 0px #888888;\n    padding: 15px;\n    border-radius: 4px;\n}\n.post-tool{\n    font-size: 10px;\n    float: right;\n    color: #888888;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n            box-shadow: 0px 0px 1px 0px #888888;\n    padding: 3px;\n    border-radius: 4px;\n}\n.post-tool:hover{\n    color: #2e2d2d;\n    -webkit-box-shadow: 0px 0px 1px 0px #2e2d2d;\n            box-shadow: 0px 0px 1px 0px #2e2d2d;\n}\n.userImage{\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n    box-shadow: 0px 0px 1px 0px #888888;\n    margin: 0px 8px 0px 0px;\n}\n.userpart{\n\n}\n.userpart >* {\n    float: left;\n}\n.clearfix{\n    clear: both\n}\n.userName-date{\n    position: absolute;\n    margin-left: 50px;\n}\n.userName{\n    font-weight: bold;\n    color: #4176b1;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 14px;\n    line-height: 1.38;\n}\n.userName:hover{\n    text-decoration: underline;\n}\n.posttext{\n    margin: 15px 0px 25px 5px;\n}\n.date{\n    color: #90949c;\n    font-size: 12px;\n    font-family: inherit;\n    cursor: pointer;\n    font-weight: normal;\n    margin-top: -9px;\n    display: block;\n}\n.tool > *{\n    float: left;\n    width: 33%;\n    text-align: center;\n    font-size: 13px;\n    color: #616770;\n    font-weight: bold;\n    position: relative;\n    top: 15px;\n    cursor: pointer;\n}\n.tool > *:hover{\n    color: #4176b1;\n    background: #eeeeef4a;\n}\nhr{\n    margin-top: 10px;\n    margin-bottom: -5px;\n}\n.postImageWithText{\n    width: 60%;\n    margin: auto;\n    display: block;\n}\n.postImageWithoutText{\n    width: 100%;\n}\n.displaynone{\n    display: none;\n}\n.delete{\n  opacity: 0;\n  \n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  height: 0px!important;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.delete >*{\n    opacity: 0;\n    display: none;\n    -webkit-transition: all .5s ease;\n    transition: all .5s ease;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-image/view-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.postContent.image\" class=\"post {{deleteCss}}\">\n\n  <p class=\"post-tool\" *ngIf=\"service.user.id===data.userId \" (click)=\"deletePost(data.userId,data._id)\">\n    <span class=\"glyphicon glyphicon-remove\"></span>\n  </p>\n\n\n  <p class=\"post-tool\" *ngIf=\"service.user.id!==data.userId\" (click)=\"follow(data.userId)\">\n    <span class=\"glyphicon glyphicon-remove-sign\"></span>{{btnFollowText}} </p>\n\n\n  <div class=\"userpart\" (click)=\"viewProfile(data.userId)\">\n    <img class=\"userImage\" *ngIf=\"data.imageUser\" src=\"data:image/jpeg;base64,{{data.imageUser ||''}}\" class=\"userImage\" alt=\"\">\n    <img class=\"userImage\" *ngIf=\"!data.imageUser\" src=\"assets/profile.png\">\n\n    <div class=\"userName-date\">\n      <p class=\"userName\">{{data.username}} </p>\n      <a class=\"date\">{{data.date}}</a>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <span (click)=\"viewOriginPost(data)\">\n    <p class=\"posttext\">\n      {{data.postContent.text}}\n    </p>\n\n    <div [class.displaynone]=\"data.postContent.image == '' ||  data.postContent.image == undefined\">\n      <img src=\"data:image/jpeg;base64,{{data.postContent.image ||''}}\" class=\"postImageWithoutText\">\n    </div>\n  </span>\n  <hr>\n  <div class=\"tool\">\n    <p>\n      <i class=\"fa fa-thumbs-o-up\"></i> Like {{data.like || 0}}</p>\n    <p>\n      <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\n      Comment {{data.comment || 0}}</p>\n    <p (click)=\"sharePost(data.postContent)\">\n      <i class=\"fa fa-share\" aria-hidden=\"true\"></i>\n      {{share}}</p>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n<div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/view-image/view-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewImageComponent = /** @class */ (function () {
    function ViewImageComponent(service, router) {
        this.service = service;
        this.router = router;
        this.btnFollowText = '';
        this.share = 'Share';
    }
    ViewImageComponent.prototype.deletePost = function (userId, postId) {
        var _this = this;
        this.service.deletePost({ userId: userId, postId: postId }).subscribe(function (res) {
            if (res.data === 'Deleted') {
                _this.deleteCss = 'delete';
            }
        });
    };
    ViewImageComponent.prototype.checkIfFollow = function (id) {
        var _this = this;
        console.log({ followerId: id, followingId: this.service.user.id + '++ME' });
        this.service.checkIfFollow({ followerId: id, followingId: this.service.user.id })
            .subscribe(function (res) {
            _this.btnFollowText = res.data;
        });
    };
    ViewImageComponent.prototype.follow = function (id) {
        var _this = this;
        this.service.follow({ followerId: id, followingId: this.service.user.id }).subscribe(function (res) {
            _this.btnFollowText = res.data;
        });
    };
    ViewImageComponent.prototype.viewProfile = function (userId) {
        console.log(userId);
    };
    ViewImageComponent.prototype.viewOriginPost = function (postId) {
        console.log(postId);
    };
    ViewImageComponent.prototype.sharePost = function (newPost) {
        var _this = this;
        this.service.sharePost({
            _id: this.service.user.id,
            postContent: newPost
        })
            .subscribe(function (res) {
            _this.share = 'Shared';
        });
    };
    ViewImageComponent.prototype.ngOnInit = function () {
        this.checkIfFollow(this.data.userId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ViewImageComponent.prototype, "data", void 0);
    ViewImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewImage',
            template: __webpack_require__("../../../../../src/app/view-image/view-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-image/view-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ViewImageComponent);
    return ViewImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-post/view-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post{\n    background: white;\n    margin:10px auto;\n    width: 70%;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n            box-shadow: 0px 0px 1px 0px #888888;\n    padding: 15px;\n    border-radius: 4px;\n}\n.post-tool{\n    font-size: 10px;\n    float: right;\n    color: #888888;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n            box-shadow: 0px 0px 1px 0px #888888;\n    padding: 3px;\n    border-radius: 4px;\n}\n.post-tool:hover{\n    color: #2e2d2d;\n    -webkit-box-shadow: 0px 0px 1px 0px #2e2d2d;\n            box-shadow: 0px 0px 1px 0px #2e2d2d;\n}\n.userImage{\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n    box-shadow: 0px 0px 1px 0px #888888;\n    margin: 0px 8px 0px 0px;\n}\n.userpart{\n\n}\n.userpart >* {\n    float: left;\n}\n.clearfix{\n    clear: both\n}\n.userName-date{\n    position: absolute;\n    margin-left: 50px;\n}\n.userName{\n    font-weight: bold;\n    color: #4176b1;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 14px;\n    line-height: 1.38;\n}\n.userName:hover{\n    text-decoration: underline;\n}\n.posttext{\n    margin: 15px 0px 25px 5px;\n}\n.date{\n    color: #90949c;\n    font-size: 12px;\n    font-family: inherit;\n    cursor: pointer;\n    font-weight: normal;\n    margin-top: -9px;\n    display: block;\n}\n.tool > *{\n    float: left;\n    width: 33%;\n    text-align: center;\n    font-size: 13px;\n    color: #616770;\n    font-weight: bold;\n    position: relative;\n    top: 15px;\n    cursor: pointer;\n}\n.tool > *:hover{\n    color: #4176b1;\n    background: #eeeeef4a;\n}\nhr{\n    margin-top: 10px;\n    margin-bottom: -5px;\n}\n.postImageWithText{\n    width: 60%;\n    margin: auto;\n    display: block;\n}\n.postImageWithoutText{\n    width: 100%;\n}\n.displaynone{\n    display: none;\n}\n.delete{\n  opacity: 0;\n  \n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  height: 0px!important;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.delete >*{\n    opacity: 0;\n    display: none;\n    -webkit-transition: all .5s ease;\n    transition: all .5s ease;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-post/view-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post {{deleteCss}}\">\n\n  <p class=\"post-tool\" *ngIf=\"service.user.id===data.userId \" (click)=\"deletePost(data.userId,data._id)\">\n    <span class=\"glyphicon glyphicon-remove\"></span>\n  </p>\n\n\n  <p class=\"post-tool\" *ngIf=\"service.user.id!==data.userId\" (click)=\"follow(data.userId)\">\n    <span class=\"glyphicon glyphicon-remove-sign\"></span>{{btnFollowText}} </p>\n\n\n  <div class=\"userpart\" (click)=\"viewProfile(data.userId)\">\n    <img class=\"userImage\" *ngIf=\"data.imageUser\" src=\"data:image/jpeg;base64,{{data.imageUser ||''}}\" class=\"userImage\" alt=\"\">\n    <img class=\"userImage\" *ngIf=\"!data.imageUser\" src=\"assets/profile.png\">\n\n    <div class=\"userName-date\">\n      <p class=\"userName\">{{data.username}} </p>\n      <a class=\"date\">{{data.date}}</a>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <span (click)=\"viewOriginPost(data)\">\n    <p class=\"posttext\">\n      {{data.postContent.text}}\n    </p>\n\n    <div [class.displaynone]=\"data.postContent.image == '' ||  data.postContent.image == undefined\">\n      <img src=\"data:image/jpeg;base64,{{data.postContent.image ||''}}\" [class.postImageWithText]=\"data.postContent.text !== '' ||  data.postContent.text !== undefined\"\n        [class.postImageWithoutText]=\"data.postContent.text === '' || data.postContent.text === undefined\">\n    </div>\n  </span>\n  <hr>\n  <div class=\"tool\">\n    <p>\n      <i class=\"fa fa-thumbs-o-up\"></i> Like {{data.like || 0}}</p>\n    <p>\n      <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\n      Comment {{data.comment || 0}}</p>\n    <p (click)=\"sharePost(data.postContent)\">\n      <i class=\"fa fa-share\" aria-hidden=\"true\"></i>\n      {{share}}</p>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n<div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/view-post/view-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewPostComponent = /** @class */ (function () {
    function ViewPostComponent(service, router) {
        this.service = service;
        this.router = router;
        this.btnFollowText = '';
        this.share = 'Share';
    }
    ViewPostComponent.prototype.deletePost = function (userId, postId) {
        var _this = this;
        this.service.deletePost({ userId: userId, postId: postId }).subscribe(function (res) {
            if (res.data === 'Deleted') {
                _this.deleteCss = 'delete';
            }
        });
    };
    ViewPostComponent.prototype.checkIfFollow = function (id) {
        var _this = this;
        console.log({ followerId: id, followingId: this.service.user.id + '++ME' });
        this.service.checkIfFollow({ followerId: id, followingId: this.service.user.id })
            .subscribe(function (res) {
            _this.btnFollowText = res.data;
        });
    };
    ViewPostComponent.prototype.follow = function (id) {
        var _this = this;
        this.service.follow({ followerId: id, followingId: this.service.user.id }).subscribe(function (res) {
            _this.btnFollowText = res.data;
        });
    };
    ViewPostComponent.prototype.viewProfile = function (userId) {
        console.log(userId);
    };
    ViewPostComponent.prototype.viewOriginPost = function (postId) {
        console.log(postId);
    };
    ViewPostComponent.prototype.sharePost = function (newPost) {
        var _this = this;
        this.service.sharePost({
            _id: this.service.user.id,
            postContent: newPost
        })
            .subscribe(function (res) {
            _this.share = 'Shared';
        });
    };
    ViewPostComponent.prototype.ngOnInit = function () {
        this.checkIfFollow(this.data.userId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ViewPostComponent.prototype, "data", void 0);
    ViewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewPost',
            template: __webpack_require__("../../../../../src/app/view-post/view-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-post/view-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ViewPostComponent);
    return ViewPostComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map