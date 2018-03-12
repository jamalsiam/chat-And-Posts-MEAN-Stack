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
exports.push([module.i, ".aboutContainer{\n    position: relative;\n    margin-bottom: 50px;\n}\n.settings{\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background: #bcd2d2;\n    height: 18px;\n    width: 18px;\n    text-align: center;\n    border-radius: 4px;\n    color: #8e8a8a;\n    cursor: pointer;\n    -webkit-transition: all .5s;\n    transition: all .5s;\n}\n.settings p{\n    display: none;\n    color: white;\n}\n.form-control{\n    display: unset;\n    height: 29px;\n}\n.headerData{\n    color: #888888;\n    margin: 30px auto 0px auto;\n    width: 85%;\n\n}\n.aboutContainer:hover .settings {\n    background: #a3adad;\n    color: white;\n    width: 115px;\n    text-align: left;\n}\n.aboutContainer:hover .settings p{\n    display: inline\n}\n.data{\n    display: inline;\n    padding-left: 20px;\n}\n.changeData{\n    display: none;\n    padding-left: 20px;\n    \n}\n.error-border{\n    border-color: red;\n}\n.saveChange{\n    width: 100px;\n    display: none;\n    margin: 50px auto;\n    background: #163d5e;\n    color: white;\n    border: 1px solid #6f6f6f70;\n    border-radius: 2px;\n}\n.saveChange:hover{\n    background: #1d496e;\n}\n.saveChange:active{\n    background: #3776ac;\n}\n.tableContainer{\n    margin: auto;\n    width: 80%;\n}\ntr{\n    height: 45px;\n}\n.interest{\n    background: #8dd1fb;\n    height: 30px;\n    display: inline-block;\n    padding: 5px 20px;\n    border-radius: 30px;\n    position: relative;\n    -webkit-box-shadow: 0px 0px 2px 0px #888888;\n            box-shadow: 0px 0px 2px 0px #888888;\n    margin: 5px;\n\n}\n.deleteInterest{\n    display: none;\n    position: absolute;\n    right: 4px;\n    top: 8px;\n    background: #2e739e;\n    height: 14px;\n    width: 14px;\n    border-radius: 48%;\n    color: white;\n    font-size: 10px;\n    text-align: center;\n    cursor: pointer;\n    /* box-shadow: 0px 0px 1px 0px #888888; */\n}\n.interest:hover .deleteInterest{\n    display: block;\n}\n.addInterest{\n    position: absolute;\n    right: 4px;\n    top: 8px;\n    background: #2e739e;\n    height: 14px;\n    width: 14px;\n    border-radius: 48%;\n    color: white;\n    font-size: 10px;\n    text-align: center;\n    cursor: pointer;\n    padding: 2px;\n    /* font-weight: 900; */\n}\n.interest input{\n    width: 30px;\n    background: #8dd1fb;\n    border: none;\n    height: 15px;\n    margin-left: -15px;\n    -webkit-transition: width .5s;\n    transition: width .5s;\n}\n.width100px{\n    width: 100px!important;\n}\n.interest ::-webkit-input-placeholder {\n    color: white;\n    opacity: 1; /* Firefox */\n}\n.interest :-ms-input-placeholder {\n    color: white;\n    opacity: 1; /* Firefox */\n}\n.interest ::-ms-input-placeholder {\n    color: white;\n    opacity: 1; /* Firefox */\n}\n.interest ::placeholder {\n    color: white;\n    opacity: 1; /* Firefox */\n}\n.err-color{\n     color: red;\n }\n/* change Mode */\n.changeMode .data{\n    display: none;\n}\n.changeMode .changeData{\n    display: inline;\n}\n.changeMode .settings{\n    display: none;\n}\n.changeMode .saveChange{\n    display: block;\n}\n.changeMode .interests-container{\n    display: none;\n}\n/*END change Mode */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutContainer {{changeDateVal}}\">\n  <div class=\"settings\" (click)=\"changeData()\">\n    <span class=\"glyphicon glyphicon-cog\"></span>\n    <p>Change</p>\n  </div>\n  <div class=\"shortUserInfo\">\n    <p class=\"headerData\">general information:</p>\n  \n    <div class=\"tableContainer\">\n        <hr>\n\n      <table>\n        <tr>\n          <td>\n            <span>Name:</span>\n          </td>\n          <td>\n            <span class=\"data\">{{service.user.userInfo.username}}</span>\n            <span class=\"changeData\">\n              <input type=\"text\" class=\"form-control\" [ngClass]=\"{'error-border': !name}\"\n              value=\"{{service.user.userInfo.username}}\" [(ngModel)]='name'>\n            </span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>E-mail:</span>\n\n          </td>\n          <td>\n            <span class=\"data\">{{service.user.userInfo.email}}</span>\n            <span class=\"changeData\">\n              <input type=\"text\" class=\"form-control\" value=\"{{service.user.userInfo.email}}\" disabled>\n            </span>\n          </td>\n        </tr>\n        <tr>\n            <td>\n              <span>Work at:</span>\n            </td>\n            <td>\n              <span class=\"data\">{{service.user.userInfo.work || 'unset'}}</span>\n              <span class=\"changeData\">\n                <input type=\"text\" class=\"form-control\" value=\"{{service.user.userInfo.work || 'unset' }}\"  [(ngModel)]='work'>\n              </span>\n            </td>\n          </tr>\n          <tr>\n              <td>\n                <span>Lives in:</span>\n              </td>\n              <td>\n                <span class=\"data\">{{service.user.userInfo.location || 'unset'}}</span>\n                <span class=\"changeData\">\n                  <input type=\"text\" class=\"form-control\" value=\"{{service.user.userInfo.location}}\" [(ngModel)]='location'>\n                </span>\n              </td>\n            </tr>\n\n            <tr>\n                <td>\n                  <span>Gender:</span>\n                </td>\n                <td>\n                  <span class=\"data\">{{service.user.userInfo.gender || 'unset'}}</span>\n                  <span class=\"changeData\">\n                  \n                      <select class=\"form-control\" [(ngModel)]='gender' >\n                          <option value=\"unset\">unset</option>\n                          <option value=\"male\">Male</option>\n                          <option value=\"female\">Female</option>\n                        </select>\n                  </span>\n\n                  \n                </td>\n              </tr>\n\n              <tr>\n                  <td>\n                    <span>Relationship:</span>\n                  </td>\n                  <td>\n                    <span class=\"data\">{{service.user.userInfo.relationship || 'unset'}}</span>\n                    <span class=\"changeData\">\n                        <select class=\"form-control\"  [(ngModel)]='relationship'>\n                            <option value=\"unset\">unset</option>\n                            <option value=\"single\">Single</option>\n                            <option value=\"inrelationship\" >In Relationship</option>\n                            <option value=\"engaged\" >Engaged</option>\n                            <option value=\"marriage\" >Marriage</option>\n                          </select>\n                    </span>\n  \n                    \n                  </td>\n                </tr>\n                <tr>\n                    <td>\n                      <span> Birth Date:</span>\n                    </td>\n                    <td>\n                      <span class=\"data\">{{service.user.userInfo.birth || 'unset'}}</span>\n                      <span class=\"changeData\">\n                          <input type=\"date\" class=\"form-control\" value=\"{{service.user.userInfo.birth}}\"  [(ngModel)]='birth' >\n                      </span>\n    \n                      \n                    </td>\n                  </tr>\n\n\n      </table>\n    </div>\n    <span class=\"interests-container\">\n    <p class=\"headerData\">Interests Of:</p>\n    <div class=\"tableContainer\">\n        <hr>\n\n        <span class=\"interest\"   *ngFor=\"let interest  of service.user.userInfo.interests ;let indx = index\"    >{{interest}} <span class=\"deleteInterest\" (click)=\"deleteInterest(indx) \">x </span></span>\n\n        <span class=\"interest\"> <input type=\"text\" class=\" {{changeWidthInterestInputVal}}\" placeholder=\"ADD\" (click)=\"changeWidthInterestInput()\" [(ngModel)]=\"newInterest\"> <span class=\"addInterest glyphicon glyphicon-plus \" (click)=\"addInterest() \">  </span></span>\n    </div>\n  </span>\n    <button class=\"saveChange\" (click)=\"saveChange()\">Save Change </button>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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


var AboutComponent = /** @class */ (function () {
    function AboutComponent(service) {
        this.service = service;
        this.changeDateVal = '';
        this.changeWidthInterestInputVal = '';
    }
    AboutComponent.prototype.deleteInterest = function (index) {
        this.service.user.userInfo.interests.splice(index, 1);
        this.service.changeUserInterests({ _id: this.service.user.id, interests: this.service.user.userInfo.interests }).subscribe(function (res) {
            if (res.status === 'succses') { }
        });
    };
    AboutComponent.prototype.addInterest = function () {
        var _this = this;
        if (this.newInterest) {
            if (this.service.user.userInfo.interests.indexOf(this.newInterest) === -1) {
                this.service.user.userInfo.interests.push(this.newInterest);
                this.newInterest = '';
                this.service.changeUserInterests({ _id: this.service.user.id, interests: this.service.user.userInfo.interests }).subscribe(function (res) {
                    if (res.status === 'succses') {
                        _this.changeWidthInterestInputVal = '';
                    }
                });
            }
            else {
                this.changeWidthInterestInputVal = 'err-color';
            }
        }
    };
    AboutComponent.prototype.changeData = function () {
        this.name = this.service.user.userInfo.username;
        this.email = this.service.user.userInfo.email;
        this.work = this.service.user.userInfo.work;
        this.location = this.service.user.userInfo.location;
        this.relationship = this.service.user.userInfo.relationship;
        this.gender = this.service.user.userInfo.gender;
        this.birth = this.service.user.userInfo.birth;
        this.changeDateVal = 'changeMode';
    };
    AboutComponent.prototype.saveChange = function () {
        var _this = this;
        if (this.name) {
            this.service.changeInfoUser({
                username: this.name,
                work: this.work,
                location: this.location,
                relationship: this.relationship,
                gender: this.gender,
                birth: this.birth,
                _id: this.service.user.id
            }).subscribe(function (res) {
                if (res.status === 'succses') {
                    _this.service.user.userInfo.username = _this.name;
                    _this.service.user.userInfo.work = _this.work;
                    _this.service.user.userInfo.location = _this.location;
                    _this.service.user.userInfo.relationship = _this.relationship;
                    _this.service.user.userInfo.gender = _this.gender;
                    _this.service.user.userInfo.birth = _this.birth;
                    _this.changeDateVal = '';
                }
            });
        }
    };
    AboutComponent.prototype.changeWidthInterestInput = function () {
        this.changeWidthInterestInputVal = 'width100px';
    };
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'About',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__original_post_original_post_component__ = __webpack_require__("../../../../../src/app/original-post/original-post.component.ts");
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
    },
    {
        path: 'user/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'originalpost',
        component: __WEBPACK_IMPORTED_MODULE_8__original_post_original_post_component__["a" /* OriginalPostComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aside_bar_aside_bar_component__ = __webpack_require__("../../../../../src/app/aside-bar/aside-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signout_signout_component__ = __webpack_require__("../../../../../src/app/signout/signout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__share_post_share_post_component__ = __webpack_require__("../../../../../src/app/share-post/share-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__view_post_view_post_component__ = __webpack_require__("../../../../../src/app/view-post/view-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__original_post_original_post_component__ = __webpack_require__("../../../../../src/app/original-post/original-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__view_image_view_image_component__ = __webpack_require__("../../../../../src/app/view-image/view-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_info_user_info_component__ = __webpack_require__("../../../../../src/app/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_12__aside_bar_aside_bar_component__["a" /* AsideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__signout_signout_component__["a" /* SignoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__share_post_share_post_component__["a" /* SharePostComponent */],
                __WEBPACK_IMPORTED_MODULE_17__view_post_view_post_component__["a" /* ViewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_18__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__original_post_original_post_component__["a" /* OriginalPostComponent */],
                __WEBPACK_IMPORTED_MODULE_20__view_image_view_image_component__["a" /* ViewImageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__user_info_user_info_component__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_23__comment_comment_component__["a" /* CommentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__["LocalStorageModule"].withConfig({
                    prefix: 'my-app',
                    storageType: 'localStorage'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, "aside{\n    background: #f8f8f8;;\n    width: 200px;\n    height: 100vh;\n    float: left;\n    position: relative;\n    border-right: 1px solid #d5d5d5;\n}\n\n.Index0{\n    z-index: 40;\n    position: fixed;\n}\n\n.side-btn{\n    position: absolute;\n    right: -12px;\n    top: 41px;\n    height: 24px;\n    width: 24px;\n    border-radius: 50%;\n    text-align: center;\n    background: #79a7cf;\n    -webkit-box-shadow: 0px 0px 9px 1px #888888;\n            box-shadow: 0px 0px 9px 1px #888888;\n    color: white;\n    padding: 3px;\n    cursor: pointer;\n    display: none;\n}\n\n.side-btn:hover{\n    background: #3f78ab;\n}\n\n.closed{\n    left: -50px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n}\n\n.opened{\n    left: 0px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aside-bar/aside-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"Index0 {{changeSideBarStateVal}}\">\n  <div class=\"side-btn \" (click)=\"sideBarStateChanger()\"><span class=\"glyphicon glyphicon-envelope\"></span></div>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/aside-bar/aside-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
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
    function AsideBarComponent(messageService) {
        this.messageService = messageService;
        this.changeSideBarStateVal = 'closed';
        this.messageService.m({ aa: 'aa' }).subscribe(function (res) {
            console.log(res);
        });
    }
    AsideBarComponent.prototype.sideBarStateChanger = function () {
        if (this.changeSideBarStateVal === 'closed') {
            this.changeSideBarStateVal = 'opened';
        }
        else {
            this.changeSideBarStateVal = 'closed';
        }
    };
    AsideBarComponent.prototype.ngOnInit = function () {
    };
    AsideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside-bar',
            template: __webpack_require__("../../../../../src/app/aside-bar/aside-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aside-bar/aside-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], AsideBarComponent);
    return AsideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment{\n    margin: 5px 0px;\n    padding: 4px;\n    -webkit-box-shadow: 0px 0px 1px -1px #888888;\n            box-shadow: 0px 0px 1px -1px #888888;\n    background: #f8f8f8;\n    position: relative;\n}\n.userImageComment{\n    width: 30px;\n    float: left;\n}\n.userImageComment img{\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n}\n.userNameComment{\n    float: left;\n    padding-left: 10px;\n    color: #0070d3;\n    \n}\n.userNameComment p{\n    margin: 0; \n}\n.date{\n    font-size: 10px;\n    color: #b0acac;\n    position: absolute;\n    right: 5px;\n    bottom: 0px;\n}\n.pointer{\n    cursor: pointer;\n}\n.commentText{\n    margin: -9px 0px 7px 38px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment\">\n    <span class=\"pointer\" routerLink=\"user/{{data.comment.userId}}\" >\n  <div class=\"userImageComment\">\n    <img *ngIf=\"data.image\" src='data:image/jpeg;base64,{{data.image}}'>\n    <img *ngIf=\"!data.image\" src=\"assets/profile.png\">\n  </div>\n\n  <div class=\"userNameComment\">\n    <p>{{data.username}}</p>\n    <p class=\"date\">{{data.comment.date}}</p>\n  </div>\n</span>\n  <div class=\"clearfix\"></div>\n  \n  <p class=\"commentText\">{{data.comment.commentContent.text}}</p> \n</div>"

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
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


var CommentComponent = /** @class */ (function () {
    function CommentComponent(servece) {
        this.servece = servece;
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "data", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'comment',
            template: __webpack_require__("../../../../../src/app/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], CommentComponent);
    return CommentComponent;
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
        this.user = { id: null, post: [], userInfo: {}, follow: { following: [], follower: [] } };
        if (this.storage.get('chatUserId') !== null || this.storage.get('chatUserId') !== undefined) {
            this.user['id'] = this.storage.get('chatUserId');
            this.getProfileInfo({ userId: '' + this.storage.get('chatUserId') }).subscribe(function (res) {
                var post = res.post;
                var userInfo = res.userInfo;
                for (var i = 0; i < post.length; i++) {
                    post[i]['imageUser'] = userInfo.image;
                    post[i]['username'] = userInfo.username;
                    post[i]['userId'] = userInfo._id;
                    post[i]['postId'] = post[i]._id;
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
    DataService.prototype.changeProfileImage = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/changeprofileimage', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.changeProfileCover = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/changeprofilecover', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.changeInfoUser = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/changeprofileinfo', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.changeUserInterests = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/changeuserinterests', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.getUserProfile = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/getuserprofile', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.likeAndCommentLength = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/post/likeandcommentlength', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.putOrRemoveLike = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/post/putorremovelike', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.shareComment = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/comment/sharecomment', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.viewComments = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/comment/viewcomments', record, { headers: headers }).map(function (res) { return res.json(); });
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
exports.push([module.i, ".navbar-form {\n    margin-right: 0px;\n    margin-left: 0px;\n}\n\n\n.navbar{\n    margin-bottom: 0px\n}\n\n\n@media (min-width: 768px) {\n    .search{\n        width:200px;\n    -webkit-transition: width .5s;\n    transition: width .5s;\n    \n    }\n    .search:focus{\n        width: 300px;\n    }\n    .search:active{\n        width: 300px;\n    }\n\n    .search:visited{\n        width: 300px;\n    }\n}\n\n\n@media (min-width: 1000px) {\n    .search{\n        width:400px;\n    -webkit-transition: width .5s;\n    transition: width .5s;\n    \n    }\n    .search:focus{\n        width: 500px;\n    }\n    .search:active{\n        width: 500px;\n    }\n\n    .search:visited{\n        width: 500px;\n    }\n}\n\n\n.Index1{\n    width: 100%;\n    z-index: 111;\n    position: fixed;\n}\n\n\n.header-space{\n    height: 50px;\n}", ""]);

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
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

module.exports = "<sharePost></sharePost>\n\n<viewPost *ngFor=\"let post of servece.followingPost\" [data]='post'></viewPost>\n<div *ngIf=\"!randomSuggestPost==[]\">\n    <hr>\n    <p class=\"randomSuggestPostTEXT\">Random Suggest...</p>\n    <viewPost *ngFor=\"let post of randomSuggestPost\" [data]='post'></viewPost>\n</div>"

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
        this.servece = servece;
        this.randomSuggestPost = [];
    }
    MainComponent.prototype.randomSuggest = function () {
        var _this = this;
        this.servece.randomSuggest()
            .subscribe(function (res) {
            _this.randomSuggestPost.push({
                userId: res.user._id,
                imageUser: res.user.image,
                username: res.user.username,
                date: res.post.date,
                postContent: res.post.postContent,
                postId: res.post._id
            });
        });
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 1; i <= 3; i++) {
            this.randomSuggest();
        }
        this.servece.getFollowingPosts({ id: this.servece.user.id })
            .subscribe(function (res) {
            _this.servece.followingPost = [];
            var data = res.data[0];
            for (var user = 0; user < data.userInfo.length; user++) {
                for (var post = 0; post < data.postInfo.length; post++) {
                    if (data.userInfo[user]._id === data.postInfo[post].userId) {
                        _this.servece.followingPost.push({
                            userId: data.userInfo[user]._id,
                            imageUser: data.userInfo[user].image,
                            username: data.userInfo[user].username,
                            date: data.postInfo[post].date,
                            postContent: data.postInfo[post].postContent,
                            postId: data.postInfo[post]._id
                        });
                    }
                }
            }
        });
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

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
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




var MessageService = /** @class */ (function () {
    function MessageService(http, storage) {
        this.http = http;
        this.storage = storage;
        alert('a');
        this.m({}).subscribe(function (res) {
            console.log('s');
        });
    }
    MessageService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
    };
    MessageService.prototype.m = function (record) {
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/message/getmessage', record, { headers: headers }).map(function (res) { return res.json(); });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]])
    ], MessageService);
    return MessageService;
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

module.exports = "<div>\n  <viewPost  [data]='service.originPost'></viewPost>\n\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/original-post/original-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OriginalPostComponent; });
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


var OriginalPostComponent = /** @class */ (function () {
    function OriginalPostComponent(service) {
        this.service = service;
    }
    OriginalPostComponent.prototype.ngOnInit = function () {
    };
    OriginalPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-original-post',
            template: __webpack_require__("../../../../../src/app/original-post/original-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/original-post/original-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], OriginalPostComponent);
    return OriginalPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover{\n    background-size: cover!important;\n    min-height: 300px;\n    background-color: #001527;\n    position: relative\n}\n\n \n.cover label{\n    position: absolute;\n    background: #0050964f;\n    color: white;\n    border: 1px solid #6f6f6f70;\n    width: auto;\n    zoom: 0.8;\n    right: 68px;  \n    bottom: 14px;\n    opacity: 0;  \n}\n\n \n.cover label:hover{\n    background: #5f9dd375;\n}\n\n \n.cover:hover  label {\n    opacity: 1;\n}\n\n \n.writeapost{\n    width: 73%;\n    margin: 12px auto -13px;\n    color: #888888;\n}\n\n \n.image-profile-container{\n    margin: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n \n.image-profile-container{\n    z-index: 33;\n    position: relative;\n}\n\n \n.image-profile-container img{\n    height: 167px;\n    margin: auto;\n    width: 167px;\n    margin-top: -133px;\n    display: block;\n    -webkit-box-shadow: 0 0 16px 0 #000;\n    box-shadow: 0 0 16px 0 #000;\n    /* border: 5px solid #fff; */\n    border-radius: 6px;\n}\n\n \n.image-profile-container:hover .change-image-profile-container{\n    opacity: 1;\n}\n\n \n.change-image-profile-container{\n    height: 167px;\n    margin: auto;\n    width: 167px;\n    position: relative;\n    margin-top: -167px;\n    z-index: 11;\n    border: 5px solid #fff;\n    border-radius: 6px;\n    opacity: 0;\n    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff00), to(#001527fc));\n    background: linear-gradient(#ffffff00, #001527fc);\n    -webkit-transition: all .4s ease;\n    transition: all .4s ease;\n}\n\n \n.change-image-profile-container label {\n    bottom: 0px;\n    right: 6px;\n    position: absolute;\n    background: #00509654;\n    color: white;\n    border: 1px solid #6f6f6f70;\n    width: auto;\n    zoom: 0.8;\n}\n\n \n.follow{\n    width: 95px;\n    height: 95px;\n    text-align: center;\n    border: 5px solid #e8e8d2;\n    border-radius: 50%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin: 8px 26px;\n}\n\n \n.follow p{\n    margin: auto;\n    font-weight: bold;\n    font-family: sans-serif;\n}\n\n \n.short_info{\n    text-align: center;\n    margin: 8px\n}\n\n \n.short_info span{\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 24px;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 500;\n    line-height: 30px;\n    max-width: 275px;\n}\n\n \n.hdn{\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"cover\" *ngIf=\"!service.user.userInfo.cover\">\n        <form method=\"GET\">\n            <label id=\"pic1\">\n                <span class=\"glyphicon glyphicon-picture\"> </span> <span class=\"cover-changer\">Change Cover</span> \n                <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelectCover($event)\">\n            </label>\n        </form>\n    </div>\n    <div class=\"cover\" *ngIf=\"service.user.userInfo.cover\" [ngStyle]=\"{background: 'url(data:image/jpeg;base64,' + service.user.userInfo.cover + ')  no-repeat  center'}\">\n        <form method=\"GET\">\n            <label id=\"pic1\">\n                <span class=\"glyphicon glyphicon-picture\"> </span> <span class=\"cover-changer\">Change Cover</span> \n                <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelectCover($event)\">\n            </label>\n        </form>\n    </div>\n  \n</div>\n<div class=\"image-profile-container\">\n    <img *ngIf=\"service.user.userInfo.image\" src='data:image/jpeg;base64,{{service.user.userInfo.image}}'>\n    <img *ngIf=\"!service.user.userInfo.image\" src=\"assets/profile.png\">\n    <div class=\"change-image-profile-container\">\n        <form method=\"GET\">\n            <label id=\"pic1\">\n                <span class=\"glyphicon glyphicon-picture\"> </span>\n                Change\n                <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelectImage($event)\">\n            </label>\n        </form>\n    </div>\n</div>\n<div class=\"short_info\">\n    <span>{{service.user.userInfo.username}}</span>\n    <br>\n    <div class=\"follow\">\n        <p>{{service.user.follow.follower.length }}\n            <br> Follower</p>\n    </div>\n\n    <div class=\"follow\">\n        <p>{{service.user.follow.following.length }}\n            <br> Following</p>\n    </div>\n\n</div>\n\n\n\n<ul class=\"nav nav-tabs\">\n    <li (click)=\"routeTabs('Posts')\" [class.active]=\"tapRouteVal === 'Posts'\">\n        <a>Posts</a>\n    </li>\n    <li (click)=\"routeTabs('Photos')\" [class.active]=\"tapRouteVal === 'Photos'\">\n        <a>Photos</a>\n    </li>\n    <li (click)=\"routeTabs('About')\" [class.active]=\"tapRouteVal === 'About'\">\n        <a>About</a>\n    </li>\n    <li>\n        <a></a>\n    </li>\n</ul>\n\n\n<div *ngIf=\"tapRouteVal=='Posts'\">\n    <p class=\"writeapost\">write a post:</p>\n    <sharePost></sharePost>\n    <viewPost *ngFor=\"let post  of service.user.post\" [data]='post'></viewPost>\n</div>\n\n\n<div *ngIf=\"tapRouteVal==='Photos'\">\n    <div *ngFor=\"let post  of service.user.post\">\n        <viewImage [data]='post'></viewImage>\n    </div>\n\n</div>\n\n\n<div *ngIf=\"tapRouteVal==='About'\">\n    <About></About>\n</div>"

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
    }
    ProfileComponent.prototype.routeTabs = function (a) {
        this.tapRouteVal = a;
    };
    /*Change image profile*/
    ProfileComponent.prototype.handleFileSelectImage = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoadedImage.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    ProfileComponent.prototype._handleReaderLoadedImage = function (readerEvt) {
        var _this = this;
        var binaryString = readerEvt.target.result;
        this.service.user.userInfo['image'] = btoa(binaryString);
        this.service.changeProfileImage({ image: btoa(binaryString), _id: this.service.user.id }).subscribe(function (res) {
            _this.service.user.userInfo['image'] = btoa(binaryString);
        });
    };
    /*END Change image profile*/
    /*Change cover profile*/
    ProfileComponent.prototype.handleFileSelectCover = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoadedCover.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    ProfileComponent.prototype._handleReaderLoadedCover = function (readerEvt) {
        var _this = this;
        var binaryString = readerEvt.target.result;
        this.service.user.userInfo['cover'] = btoa(binaryString);
        this.service.changeProfileCover({ cover: btoa(binaryString), _id: this.service.user.id }).subscribe(function (res) {
            _this.service.user.userInfo['cover'] = btoa(binaryString);
        });
    };
    /*END Change cover profile*/
    ProfileComponent.prototype.ngOnInit = function () {
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
exports.push([module.i, ".post{\n   \n    width: 70%;\n    margin: 20px auto;\n    min-height: 150px;\n    -webkit-box-shadow: 0px 0px 0px 1px #8888884f;\n            box-shadow: 0px 0px 0px 1px #8888884f;\n    border-radius: 4px;\n    padding: 10px;\n}\ntable{\n    width: 100%;\n}\n.td20{\n    width: 10%\n}\n.td80{\n    width: 80%\n}\n.post .textAreaContainer{\n    width: 100%;\n    height: 100px;\n    margin: auto;\n}\n.post .textAreaContainer textarea{\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 100%;\n    max-height: 100%;\n    overflow: hidden;\n    padding: 8px 16px;\n    border: none;\n    background: #fafafb;\n    resize: none;\n    -webkit-box-shadow: 0px 0px 1px 0px #cca2a2;\n            box-shadow: 0px 0px 1px 0px #cca2a2;\n}\n.post .textAreaContainer textarea:focus{\n    -webkit-box-shadow: 0px 0px 0px 1px #e8e8d2;\n            box-shadow: 0px 0px 0px 1px #e8e8d2;\n}\n.post:focus {\n    -webkit-box-shadow: 0px 0px 110px 1px #242406;\n            box-shadow: 0px 0px 110px 1px #242406;\n}\n.post .imgPoster{\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    -webkit-box-shadow: 0px 0px 0px 1px #88888859;\n            box-shadow: 0px 0px 0px 1px #88888859;\n}\n.float-right{\n    float:right;\n}\n.float-left{\n    float:left;\n    margin-top: 8px;\n}\n.marginTop10{\n    height: 35px;\n    margin-top: 10px;\n}\n.photoPostContainer{\n    margin: 30px 0px;\n}\n.photoPostContainer img{\n    width: 90%;\n    margin: auto;\n    display: block;\n}\n.clearFix{\n    clear: both;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/share-post/share-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\n  \n  <table>\n    <tr>\n      <td class=\"td20\">\n          <div class=\"imgPosterContainer\">\n              <img class=\"imgPoster\" *ngIf=\"service.user.userInfo.image\" src='data:image/jpeg;base64,{{service.user.userInfo.image}}' >\n              <img class=\"imgPoster\" *ngIf=\"!service.user.userInfo.image\" src=\"assets/profile.png\" >\n          </div>\n      </td>\n\n\n      <td class=\"td80\">\n          <div class=\"textAreaContainer\"> \n              <textarea class=\"form-control\" [(ngModel)]='textPost' placeholder=\"What's On Your Mind, {{service.user.userInfo.username}}? \"   rows=\"5\" id=\"comment\"></textarea> \n            </div>\n      </td>\n    </tr>\n   \n  </table>\n  <div *ngIf=\"photoPost\" class=\"photoPostContainer\">\n      <img   src='data:image/jpeg;base64,{{photoPost}}' >\n  </div>\n  <div class=\"marginTop10\">\n        <form class=\"float-left\" id=\"test_form\" method=\"GET\" action=\"\">\n                <label id=\"pic1\">\n                        <span class=\"glyphicon glyphicon-picture\"> </span> \n                  <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelect($event)\"  >\n              \n                </label>\n              </form>\n  <button class=\"float-right btn btn-primary\" [disabled]=' !textPost && !photoPost ' (click)=\"sharePost()\" >Post</button>  \n    </div>\n</div>\n<div class=\"clearFix\"></div>"

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
        this.service.sharePost({
            _id: this.service.user.id,
            postContent: {
                text: this.textPost,
                image: this.photoPost
            }
        })
            .subscribe(function (res) {
            var oldfollowingPost = _this.service.followingPost;
            var oldPosts = _this.service.user['post'];
            var newPost = [{
                    userId: _this.service.user.id,
                    postContent: { text: _this.textPost, image: _this.photoPost },
                    id_: '',
                    date: 'Just Now',
                    like: 0,
                    comment: 0,
                    imageUser: _this.service.user.userInfo.image,
                    username: _this.service.user.userInfo.username
                }];
            _this.service.followingPost = newPost.concat(oldfollowingPost);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
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
                    if (res.status === 'signup') {
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
        if (this.storage.get('chatUserId')) {
            this.router.navigate(['']);
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-info works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
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

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-info',
            template: __webpack_require__("../../../../../src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover{\n    background-size: cover!important;\n    min-height: 300px;\n    background-color: #001527;\n    position: relative\n}\n\n\n \n.image-profile-container{\n    margin: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n\n \n.image-profile-container{\n    z-index: 33;\n    position: relative;\n}\n\n\n \n.image-profile-container img{\n    height: 167px;\n    margin: auto;\n    width: 167px;\n    margin-top: -133px;\n    display: block;\n    -webkit-box-shadow: 0 0 16px 0 #000;\n    box-shadow: 0 0 16px 0 #000;\n    /* border: 5px solid #fff; */\n    border-radius: 6px;\n}\n\n\n \n.change-image-profile-container{\n    height: 167px;\n    margin: auto;\n    width: 167px;\n    position: relative;\n    margin-top: -167px;\n    z-index: 11;\n    border: 5px solid #fff;\n    border-radius: 6px;\n    opacity: 0;\n    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff00), to(#001527fc));\n    background: linear-gradient(#ffffff00, #001527fc);\n    -webkit-transition: all .4s ease;\n    transition: all .4s ease;\n}\n\n\n \n.change-image-profile-container label {\n    bottom: 0px;\n    right: 6px;\n    position: absolute;\n    background: #00509654;\n    color: white;\n    border: 1px solid #6f6f6f70;\n    width: auto;\n    zoom: 0.8;\n}\n\n\n \n.follow{\n    width: 95px;\n    height: 95px;\n    text-align: center;\n    border: 5px solid #e8e8d2;\n    border-radius: 50%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin: 8px 26px;\n}\n\n\n \n.follow p{\n    margin: auto;\n    font-weight: bold;\n    font-family: sans-serif;\n}\n\n\n \n.short_info{\n    text-align: center;\n    margin: 8px\n}\n\n\n \n.short_info span{\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 24px;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 500;\n    line-height: 30px;\n    max-width: 275px;\n}\n\n\n \n.hdn{\n    display: none;\n}\n\n\n \n.followAndMessage{\n    width: 220px;\n    margin: 0 auto -20px auto;\n}\n\n\n \n.followAndMessage > span{\n    font-size: 13px;\n    border: 1px solid #888888;\n    padding: 0 7px;\n    cursor: pointer;\n    border-radius: 6px;\n    display: inline-block;\n}\n\n\n \n.followAndMessage > span span{\n    font-size: 17px;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"cover\" *ngIf=\"!userObject.userDate.cover\"></div>\n    <div class=\"cover\" *ngIf=\"userObject.userDate.cover\" [ngStyle]=\"{background: 'url(data:image/jpeg;base64,' + userObject.userDate.cover + ')  no-repeat  center'}\"></div>\n\n</div>\n<div class=\"image-profile-container\">\n    <img *ngIf=\"userObject.userDate.image\" src='data:image/jpeg;base64,{{userObject.userDate.image}}'>\n    <img *ngIf=\"!userObject.userDate.image\" src=\"assets/profile.png\">\n</div>\n<div class=\"short_info\">\n    <span>{{userObject.userDate.username}}</span>\n    <br>\n    <div class=\"followAndMessage\"> \n        <span class=\"flaotLeft\" *ngIf=\"userObject.followingFromMe\" (click)=\"follow(userObject.userDate._id,service.user.id)\">\n            following\n            <span class=\"glyphicon glyphicon-remove\"></span>\n        </span>\n\n        <span  class=\"flaotLeft\" *ngIf=\"!userObject.followingFromMe\" (click)=\"follow(userObject.userDate._id,service.user.id)\">\n            Follow\n            <span class=\"glyphicon glyphicon-plus\"></span>\n        </span>\n        <span class=\"flaotRight\">\n            Send\n            <span class=\"glyphicon glyphicon-envelope\"></span>\n        </span>\n        <div class=\"clearFex\"></div>\n    </div>\n    <br>\n    <div class=\"follow\">\n        <p>{{ followerLength(userObject.followData) }}\n            <br> Follower</p>\n    </div>\n    <div class=\"follow\">\n        <p>{{followingLength(userObject.followData) }}\n            <br> Following</p>\n    </div>\n</div>\n<ul class=\"nav nav-tabs\">\n    <li (click)=\"routeTabs('Posts')\" [class.active]=\"tapRouteVal === 'Posts'\">\n        <a>Posts</a>\n    </li>\n    <li (click)=\"routeTabs('Photos')\" [class.active]=\"tapRouteVal === 'Photos'\">\n        <a>Photos</a>\n    </li>\n    <li (click)=\"routeTabs('About')\" [class.active]=\"tapRouteVal === 'About'\">\n        <a>About</a>\n    </li>\n</ul>\n<div *ngIf=\"tapRouteVal=='Posts'\">\n    <viewPost *ngFor=\"let post  of posts\" [data]='post'></viewPost>\n</div>\n<div *ngIf=\"tapRouteVal==='Photos'\">\n    <div *ngFor=\"let post  of posts\">\n        <viewImage [data]='post'></viewImage>\n    </div>\n</div>\n<div *ngIf=\"tapRouteVal==='About'\">\n    <div class=\"aboutContainer \">\n        <div class=\"shortUserInfo\">\n            <p class=\"headerData\">general information:</p>\n            <div class=\"tableContainer\">\n                <hr>\n                <table>\n                    <tr>\n                        <td>\n                            <span>Name:</span>\n                        </td>\n                        <td>\n                            <span class=\"data\">{{userObject.userDate.username}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <span>E-mail:</span>\n                        </td>\n                        <td>\n                            <span class=\"data\">{{userObject.userDate.email}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <span>Work at:</span>\n                        </td>\n                        <td>\n                            <span class=\"data\">{{userObject.userDate.work || 'Unset'}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <span>Lives in:</span>\n                        </td>\n                        <td>\n                            <span class=\"data\">{{userObject.userDate.location || 'Unset'}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <span>Gender:</span>\n                        </td>\n                        <td>\n                            <span class=\"data\">{{userObject.userDate.gender || 'Unset'}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <span>Relationship:</span>\n                        </td>\n                        <td>\n                            <span class=\"data\">{{userObject.userDate.relationship || 'Unset'}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <span> Birth Date:</span>\n                        </td>\n                        <td>\n                            <span class=\"data\">{{userObject.userDate.birth || 'Unset'}}</span>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <span class=\"interests-container\">\n                <p class=\"headerData\">Interests Of:</p>\n                <div class=\"tableContainer\">\n                    <hr>\n                    <span class=\"interest\" *ngFor=\"let interest  of userObject.userDate.interests\">{{interest}}\n                    </span>\n                    <span class=\"interest\" *ngIf=\"userObject.userDate.interests.length === 0\">there is no interests\n                    </span>\n                </div>\n            </span>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
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



var UserComponent = /** @class */ (function () {
    function UserComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.userObject = { userDate: { interests: [] }, postData: '' };
        this.tapRouteVal = 'Posts';
    }
    UserComponent.prototype.followerLength = function (followData) {
        var followerCuont = 0;
        if (!followData) {
            return 0;
        }
        for (var i = 0; i < followData.length; i++) {
            if (followData[i].followerId === this.userObject.userDate._id) {
                followerCuont++;
            }
        }
        return followerCuont;
    };
    UserComponent.prototype.followingLength = function (followData) {
        var followigCuont = 0;
        if (!followData) {
            return 0;
        }
        for (var i = 0; i < followData.length; i++) {
            if (followData[i].followingId === this.userObject.userDate._id) {
                followigCuont++;
            }
        }
        return followigCuont;
    };
    UserComponent.prototype.fetchPost = function (postData, userDate) {
        var userPosts = [];
        for (var i = 0; i < postData.length; i++) {
            userPosts.push({
                userId: userDate._id || '',
                imageUser: userDate.image,
                username: userDate.username,
                date: postData[i].date,
                postContent: postData[i].postContent,
                postId: postData[i]._id
            });
        }
        return userPosts;
    };
    UserComponent.prototype.follow = function (followerId, followingId) {
        var _this = this;
        this.service.follow({ followerId: followerId, followingId: followingId })
            .subscribe(function (res) {
            console.log(res);
            console.log(_this.userObject.followData);
            if (res.data) {
                _this.userObject.followData = [res.newFollow].concat(_this.userObject.followData);
            }
            else {
                var record = [];
                for (var i = 0; i < _this.userObject.followData.length; i++) {
                    if (_this.userObject.followData[i].followerId === followerId && _this.userObject.followData[i].followingId === followingId) {
                        continue;
                    }
                    else {
                        record.push(_this.userObject.followData[i]);
                    }
                }
                _this.userObject.followData = record;
            }
            _this.userObject.followingFromMe = res.data;
        });
    };
    UserComponent.prototype.routeTabs = function (a) {
        this.tapRouteVal = a;
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (query) {
            if (_this.service.user.id === query.id) {
                _this.router.navigate(['profile']);
            }
            _this.service.getUserProfile({ query: query, profile: _this.service.user.id }).subscribe(function (res) {
                if (res.status === 'fail') {
                }
                else {
                    _this.userObject = res;
                    _this.posts = _this.fetchPost(_this.userObject.postData, _this.userObject.userDate);
                }
            });
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css"), __webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserComponent);
    return UserComponent;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewImageComponent);
    return ViewImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-post/view-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post{\n    background: white;\n    margin:10px auto;\n    width: 70%;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n            box-shadow: 0px 0px 1px 0px #888888;\n    padding: 15px;\n    border-radius: 4px;\n    overflow: auto;\n}\n.post-tool{\n    font-size: 10px;\n    float: right;\n    color: #888888;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n            box-shadow: 0px 0px 1px 0px #888888;\n    padding: 3px;\n    border-radius: 4px;\n}\n.post-tool:hover{\n    color: #2e2d2d;\n    -webkit-box-shadow: 0px 0px 1px 0px #2e2d2d;\n            box-shadow: 0px 0px 1px 0px #2e2d2d;\n}\n.userImage{\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n    box-shadow: 0px 0px 1px 0px #888888;\n    margin: 0px 8px 0px 0px;\n}\n.userpart{\n\n}\n.userpart >* {\n    float: left;\n}\n.clearfix{\n    clear: both\n}\n.userName-date{\n    position: absolute;\n    margin-left: 50px;\n}\n.userName{\n    font-weight: bold;\n    color: #4176b1;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 14px;\n    line-height: 1.38;\n}\n.userName:hover{\n    text-decoration: underline;\n}\n.posttext{\n    margin: 15px 0px 25px 5px;\n}\n.date{\n    color: #90949c;\n    font-size: 12px;\n    font-family: inherit;\n    cursor: pointer;\n    font-weight: normal;\n    margin-top: -9px;\n    display: block;\n}\n.tool > *{\n    float: left;\n    width: 33%;\n    text-align: center;\n    font-size: 13px;\n    color: #616770;\n    font-weight: bold;\n    position: relative;\n    top: 15px;\n    cursor: pointer;\n}\n.tool > *:hover{\n    color: #4176b1;\n}\nhr{\n    margin-top: 10px;\n    margin-bottom: -5px;\n}\n.postImageWithText{\n    width: 60%;\n    margin: auto;\n    display: block;\n}\n.postImageWithoutText{\n    width: 100%;\n}\n.displaynone{\n    display: none;\n}\n.cursor-pointer{\n    cursor: pointer;\n}\n.delete{\n  opacity: 0;\n  \n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  height: 0px!important;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.delete >*{\n    opacity: 0;\n    display: none;\n    -webkit-transition: all .5s ease;\n    transition: all .5s ease;\n}\n.blue-color{\n    color: #4176b1!important;\n}\n.x{\n    margin-top: 10px;\n}\n.x hr{\n    margin: 5px 0px;\n    height: 1px;\n}\n.x input{\n    width: 90%;\n    padding: 0;\n    border: none;\n    background: white;\n    float: left;\n    border-bottom-left-radius: 6px;\n    border-top-left-radius: 6px;\n    /* border-bottom: 1px solid #9f9898; */\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\n            box-shadow: 0px 0px 1px 0px #888888;\n    height: 25px;\n    padding-left: 7px;\n}\n.x button{\n    width: 10%;\n    padding: 0px;\n    border: none;\n    margin: 0px;\n    float: right;\n    border-bottom-right-radius: 6px;\n    border-top-right-radius: 6px;\n    height: 27px;\n    margin-top: -1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-post/view-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post {{deleteCss}}\">\n\n  <p class=\"post-tool\" *ngIf=\"service.user.id===data.userId \" (click)=\"deletePost(data.userId,data._id)\">\n    <span class=\"glyphicon glyphicon-remove\"></span>\n  </p>\n\n  <div class=\"userpart\" (click)=\"viewProfile(data.userId)\">\n    <img class=\"userImage\" *ngIf=\"data.imageUser\" src=\"data:image/jpeg;base64,{{data.imageUser ||''}}\" class=\"userImage\" alt=\"\">\n    <img class=\"userImage\" *ngIf=\"!data.imageUser\" src=\"assets/profile.png\">\n\n    <div class=\"userName-date\">\n      <p class=\"userName\">{{data.username}} </p>\n      <a class=\"date\">{{data.date}}</a>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <span (click)=\"viewOriginPost(data)\" class=\"cursor-pointer\">\n    <p class=\"posttext\">\n      {{data.postContent.text}}\n    </p>\n\n    <div [class.displaynone]=\"data.postContent.image == '' ||  data.postContent.image == undefined\">\n      <img src=\"data:image/jpeg;base64,{{data.postContent.image ||''}}\" [class.postImageWithText]=\"data.postContent.text !== '' ||  data.postContent.text !== undefined\"\n        [class.postImageWithoutText]=\"data.postContent.text === '' || data.postContent.text === undefined\">\n    </div>\n  </span>\n  <hr>\n  <div class=\"tool\">\n    <p class=\"blue-color\" *ngIf=\"checkUserLiked\" (click)=\"putOrRemoveLike(data.postId,service.user.id)\">\n      <i class=\"fa fa-thumbs-o-up \"></i> Liked{{ likesLingth }}\n    </p>\n\n    <p *ngIf=\"!checkUserLiked\" (click)=\"putOrRemoveLike(data.postId,service.user.id)\" >\n      <i class=\"fa fa-thumbs-o-up\"></i> Like{{ likesLingth }}\n    </p>\n\n\n    <p (click)=\"getComments()\">\n      <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\n      Comment{{ commentsLength }}</p>\n    <p (click)=\"sharePost(data.postContent)\">\n      <i class=\"fa fa-share\" aria-hidden=\"true\"></i>\n      {{share}}</p>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"x\" *ngIf=\"viewComments\">\n    <hr>\n    <comment *ngFor=\"let comment of commentSet\" [data]=\"comment\"> </comment>\n    <form action=\"post\">\n        <input type=\"text\" placeholder=\"write a comment...\" name=\"commentText\" [(ngModel)]=\"commentText\">\n        <button type=\"submit\" (click)=\"shareComment(data.postId,service.user.id)\" >save</button>\n    </form>\n    \n  </div>\n</div>\n<div class=\"clearfix\"></div>"

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
    ViewPostComponent.prototype.viewProfile = function (userId) {
        if (userId !== this.service.user.id) {
            this.router.navigate(['user/' + userId]);
        }
        else {
            this.router.navigate(['profile']);
        }
    };
    ViewPostComponent.prototype.viewOriginPost = function (post) {
        this.service.originPost = post;
        this.router.navigate(['originalpost']);
    };
    ViewPostComponent.prototype.sharePost = function (newPost) {
        var _this = this;
        if (this.share !== 'Shared') {
            this.service.sharePost({
                _id: this.service.user.id,
                postContent: newPost
            })
                .subscribe(function (res) {
                _this.share = 'Shared';
            });
        }
    };
    ViewPostComponent.prototype.putOrRemoveLike = function (postId, userId) {
        var _this = this;
        if (this.checkUserLiked) {
            this.checkUserLiked = false;
            this.likesLingth--;
        }
        else {
            this.checkUserLiked = true;
            this.likesLingth++;
        }
        console.log(userId, postId);
        this.service.putOrRemoveLike({ postId: postId, userId: userId }).subscribe(function (res) {
            _this.getLikeAndCommentLength();
        });
    };
    ViewPostComponent.prototype.getLikeAndCommentLength = function () {
        var _this = this;
        this.service.likeAndCommentLength({ postId: this.data.postId, profileId: this.service.user.id }).subscribe(function (res) {
            _this.commentsLength = res.commentsLength;
            _this.likesLingth = res.likesLength;
            _this.checkUserLiked = res.checkUserLiked;
        });
    };
    ViewPostComponent.prototype.shareComment = function (postId, userId) {
        var _this = this;
        if (this.commentText) {
            this.service.shareComment({ postId: postId, userId: userId, commentContent: { text: this.commentText } }).subscribe(function (res) {
                _this.commentsLength++;
                _this.commentSet.push({
                    comment: {
                        commentContent: { text: _this.commentText },
                        date: 'Now',
                        postId: postId,
                        userId: userId,
                    },
                    image: _this.service.user.userInfo.image,
                    username: _this.service.user.userInfo.username
                });
                _this.commentText = '';
            });
        }
    };
    ViewPostComponent.prototype.getComments = function () {
        var _this = this;
        this.service.viewComments({ postId: this.data.postId }).subscribe(function (res) {
            _this.commentSet = res.data;
            _this.viewComments = true;
        });
    };
    ViewPostComponent.prototype.ngOnInit = function () {
        this.likesLingth = 0;
        this.commentsLength = 0;
        this.checkUserLiked = false;
        this.commentText = '';
        this.getLikeAndCommentLength();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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