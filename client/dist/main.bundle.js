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
exports.push([module.i, ".aboutContainer{\r\n    position: relative;\r\n    margin-bottom: 50px;\r\n}\r\n.settings{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    background: #bcd2d2;\r\n    height: 18px;\r\n    width: 18px;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n    color: #8e8a8a;\r\n    cursor: pointer;\r\n    -webkit-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n.settings p{\r\n    display: none;\r\n    color: white;\r\n}\r\n.form-control{\r\n    display: unset;\r\n    height: 29px;\r\n}\r\n.headerData{\r\n    color: #888888;\r\n    margin: 30px auto 0px auto;\r\n    width: 85%;\r\n\r\n}\r\n.aboutContainer:hover .settings {\r\n    background: #a3adad;\r\n    color: white;\r\n    width: 115px;\r\n    text-align: left;\r\n}\r\n.aboutContainer:hover .settings p{\r\n    display: inline\r\n}\r\n.data{\r\n    display: inline;\r\n    padding-left: 20px;\r\n}\r\n.changeData{\r\n    display: none;\r\n    padding-left: 20px;\r\n    \r\n}\r\n.error-border{\r\n    border-color: red;\r\n}\r\n.saveChange{\r\n    width: 100px;\r\n    display: none;\r\n    margin: 50px auto;\r\n    background: #163d5e;\r\n    color: white;\r\n    border: 1px solid #6f6f6f70;\r\n    border-radius: 2px;\r\n}\r\n.saveChange:hover{\r\n    background: #1d496e;\r\n}\r\n.saveChange:active{\r\n    background: #3776ac;\r\n}\r\n.tableContainer{\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\ntr{\r\n    height: 45px;\r\n}\r\n.interest{\r\n    background: #8dd1fb;\r\n    height: 30px;\r\n    display: inline-block;\r\n    padding: 5px 20px;\r\n    border-radius: 30px;\r\n    position: relative;\r\n    -webkit-box-shadow: 0px 0px 2px 0px #888888;\r\n            box-shadow: 0px 0px 2px 0px #888888;\r\n    margin: 5px;\r\n\r\n}\r\n.deleteInterest{\r\n    display: none;\r\n    position: absolute;\r\n    right: 4px;\r\n    top: 8px;\r\n    background: #2e739e;\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 48%;\r\n    color: white;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    /* box-shadow: 0px 0px 1px 0px #888888; */\r\n}\r\n.interest:hover .deleteInterest{\r\n    display: block;\r\n}\r\n.addInterest{\r\n    position: absolute;\r\n    right: 4px;\r\n    top: 8px;\r\n    background: #2e739e;\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 48%;\r\n    color: white;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    padding: 2px;\r\n    /* font-weight: 900; */\r\n}\r\n.interest input{\r\n    width: 30px;\r\n    background: #8dd1fb;\r\n    border: none;\r\n    height: 15px;\r\n    margin-left: -15px;\r\n    -webkit-transition: width .5s;\r\n    transition: width .5s;\r\n}\r\n.width100px{\r\n    width: 100px!important;\r\n}\r\n.interest ::-webkit-input-placeholder {\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n.interest :-ms-input-placeholder {\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n.interest ::-ms-input-placeholder {\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n.interest ::placeholder {\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n.err-color{\r\n     color: red;\r\n }\r\n/* change Mode */\r\n.changeMode .data{\r\n    display: none;\r\n}\r\n.changeMode .changeData{\r\n    display: inline;\r\n}\r\n.changeMode .settings{\r\n    display: none;\r\n}\r\n.changeMode .saveChange{\r\n    display: block;\r\n}\r\n.changeMode .interests-container{\r\n    display: none;\r\n}\r\n/*END change Mode */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutContainer {{changeDateVal}}\">\r\n  <div class=\"settings\" (click)=\"changeData()\">\r\n    <span class=\"glyphicon glyphicon-cog\"></span>\r\n    <p>Change</p>\r\n  </div>\r\n  <div class=\"shortUserInfo\">\r\n    <p class=\"headerData\">general information:</p>\r\n  \r\n    <div class=\"tableContainer\">\r\n        <hr>\r\n\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <span>Name:</span>\r\n          </td>\r\n          <td>\r\n            <span class=\"data\">{{service.user.userInfo.username}}</span>\r\n            <span class=\"changeData\">\r\n              <input type=\"text\" class=\"form-control\" [ngClass]=\"{'error-border': !name}\"\r\n              value=\"{{service.user.userInfo.username}}\" [(ngModel)]='name'>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>E-mail:</span>\r\n\r\n          </td>\r\n          <td>\r\n            <span class=\"data\">{{service.user.userInfo.email}}</span>\r\n            <span class=\"changeData\">\r\n              <input type=\"text\" class=\"form-control\" value=\"{{service.user.userInfo.email}}\" disabled>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n              <span>Work at:</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"data\">{{service.user.userInfo.work || 'unset'}}</span>\r\n              <span class=\"changeData\">\r\n                <input type=\"text\" class=\"form-control\" value=\"{{service.user.userInfo.work || 'unset' }}\"  [(ngModel)]='work'>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n              <td>\r\n                <span>Lives in:</span>\r\n              </td>\r\n              <td>\r\n                <span class=\"data\">{{service.user.userInfo.location || 'unset'}}</span>\r\n                <span class=\"changeData\">\r\n                  <input type=\"text\" class=\"form-control\" value=\"{{service.user.userInfo.location}}\" [(ngModel)]='location'>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <td>\r\n                  <span>Gender:</span>\r\n                </td>\r\n                <td>\r\n                  <span class=\"data\">{{service.user.userInfo.gender || 'unset'}}</span>\r\n                  <span class=\"changeData\">\r\n                  \r\n                      <select class=\"form-control\" [(ngModel)]='gender' >\r\n                          <option value=\"unset\">unset</option>\r\n                          <option value=\"male\">Male</option>\r\n                          <option value=\"female\">Female</option>\r\n                        </select>\r\n                  </span>\r\n\r\n                  \r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                  <td>\r\n                    <span>Relationship:</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"data\">{{service.user.userInfo.relationship || 'unset'}}</span>\r\n                    <span class=\"changeData\">\r\n                        <select class=\"form-control\"  [(ngModel)]='relationship'>\r\n                            <option value=\"unset\">unset</option>\r\n                            <option value=\"single\">Single</option>\r\n                            <option value=\"inrelationship\" >In Relationship</option>\r\n                            <option value=\"engaged\" >Engaged</option>\r\n                            <option value=\"marriage\" >Marriage</option>\r\n                          </select>\r\n                    </span>\r\n  \r\n                    \r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                      <span> Birth Date:</span>\r\n                    </td>\r\n                    <td>\r\n                      <span class=\"data\">{{service.user.userInfo.birth || 'unset'}}</span>\r\n                      <span class=\"changeData\">\r\n                          <input type=\"date\" class=\"form-control\" value=\"{{service.user.userInfo.birth}}\"  [(ngModel)]='birth' >\r\n                      </span>\r\n    \r\n                      \r\n                    </td>\r\n                  </tr>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <span class=\"interests-container\">\r\n    <p class=\"headerData\">Interests Of:</p>\r\n    <div class=\"tableContainer\">\r\n        <hr>\r\n\r\n        <span class=\"interest\"   *ngFor=\"let interest  of service.user.userInfo.interests ;let indx = index\"    >{{interest}} <span class=\"deleteInterest\" (click)=\"deleteInterest(indx) \">x </span></span>\r\n\r\n        <span class=\"interest\"> <input type=\"text\" class=\" {{changeWidthInterestInputVal}}\" placeholder=\"ADD\" (click)=\"changeWidthInterestInput()\" [(ngModel)]=\"newInterest\"> <span class=\"addInterest glyphicon glyphicon-plus \" (click)=\"addInterest() \">  </span></span>\r\n    </div>\r\n  </span>\r\n    <button class=\"saveChange\" (click)=\"saveChange()\">Save Change </button>\r\n  </div>\r\n\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_info_user_info_component__ = __webpack_require__("../../../../../src/app/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_19__view_image_view_image_component__["a" /* ViewImageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__user_info_user_info_component__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__user_user_component__["a" /* UserComponent */]
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
exports.push([module.i, "aside{\r\n    background: #f8f8f8;;\r\n    width: 200px;\r\n    height: 100vh;\r\n    float: left;\r\n    position: relative;\r\n    border-right: 1px solid #d5d5d5;\r\n}\r\n\r\n.Index0{\r\n    z-index: 40;\r\n    position: fixed;\r\n}\r\n\r\n.side-btn{\r\n    position: absolute;\r\n    right: -12px;\r\n    top: 41px;\r\n    height: 24px;\r\n    width: 24px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    background: #79a7cf;\r\n    -webkit-box-shadow: 0px 0px 9px 1px #888888;\r\n            box-shadow: 0px 0px 9px 1px #888888;\r\n    color: white;\r\n    padding: 3px;\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n\r\n.side-btn:hover{\r\n    background: #3f78ab;\r\n}\r\n\r\n.closed{\r\n    left: -50px;\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.opened{\r\n    left: 0px;\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aside-bar/aside-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"Index0 {{changeSideBarStateVal}}\">\r\n  <div class=\"side-btn \" (click)=\"sideBarStateChanger()\"><span class=\"glyphicon glyphicon-envelope\"></span></div>\r\n</aside>\r\n"

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
        this.changeSideBarStateVal = 'closed';
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
exports.push([module.i, ".navbar-form {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n\r\n.navbar{\r\n    margin-bottom: 0px\r\n}\r\n\r\n\r\n@media (min-width: 768px) {\r\n    .search{\r\n        width:200px;\r\n    -webkit-transition: width .5s;\r\n    transition: width .5s;\r\n    \r\n    }\r\n    .search:focus{\r\n        width: 300px;\r\n    }\r\n    .search:active{\r\n        width: 300px;\r\n    }\r\n\r\n    .search:visited{\r\n        width: 300px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 1000px) {\r\n    .search{\r\n        width:400px;\r\n    -webkit-transition: width .5s;\r\n    transition: width .5s;\r\n    \r\n    }\r\n    .search:focus{\r\n        width: 500px;\r\n    }\r\n    .search:active{\r\n        width: 500px;\r\n    }\r\n\r\n    .search:visited{\r\n        width: 500px;\r\n    }\r\n}\r\n\r\n\r\n.Index1{\r\n    width: 100%;\r\n    z-index: 111;\r\n    position: fixed;\r\n}\r\n\r\n\r\n.header-space{\r\n    height: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default Index1\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['']\" >Chat WebSite</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav\">\r\n       <form class=\"navbar-form navbar-left\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"search form-control \"  [routerLink]=\"['searchresult']\"  [(ngModel)]=\"query\"  (ngModelChange)=\"search($event)\"  name=\"search\"  placeholder=\"Search on Post, Username & Email\" >\r\n      </div>\r\n    </form>\r\n    \r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li [routerLink]=\"['profile']\"><a ><span class=\"glyphicon glyphicon-user\"></span> {{service.user.userInfo.username}} </a></li>\r\n        <li [routerLink]=\"['signout']\"><a ><span class=\"glyphicon glyphicon-log-out\"></span> SignOut</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n  \r\n<div class=\"header-space\">\r\n\r\n</div>"

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
exports.push([module.i, ".randomSuggestPostTEXT{\r\n    width: 73%;\r\n    margin: 12px auto 0px;\r\n    color: #888;\r\n    font-size: 14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<sharePost></sharePost>\r\n\r\n<viewPost *ngFor=\"let post of servece.followingPost\" [data]='post'></viewPost>\r\n<div *ngIf=\"!randomSuggestPost==[]\">\r\n    <hr>\r\n    <p class=\"randomSuggestPostTEXT\">Random Suggest...</p>\r\n    <viewPost *ngFor=\"let post of randomSuggestPost\" [data]='post'></viewPost>\r\n</div>"

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

module.exports = "<div>\r\n  <viewPost  [data]='service.originPost'></viewPost>\r\n\r\n</div>\r\n "

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
exports.push([module.i, ".cover{\r\n    background-size: cover!important;\r\n    min-height: 300px;\r\n    background-color: #001527;\r\n    position: relative\r\n}\r\n\r\n \r\n.cover label{\r\n    position: absolute;\r\n    background: #0050964f;\r\n    color: white;\r\n    border: 1px solid #6f6f6f70;\r\n    width: auto;\r\n    zoom: 0.8;\r\n    right: 68px;  \r\n    bottom: 14px;\r\n    opacity: 0;  \r\n}\r\n\r\n \r\n.cover label:hover{\r\n    background: #5f9dd375;\r\n}\r\n\r\n \r\n.cover:hover  label {\r\n    opacity: 1;\r\n}\r\n\r\n \r\n.writeapost{\r\n    width: 73%;\r\n    margin: 12px auto -13px;\r\n    color: #888888;\r\n}\r\n\r\n \r\n.image-profile-container{\r\n    margin: auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n \r\n.image-profile-container{\r\n    z-index: 33;\r\n    position: relative;\r\n}\r\n\r\n \r\n.image-profile-container img{\r\n    height: 167px;\r\n    margin: auto;\r\n    width: 167px;\r\n    margin-top: -133px;\r\n    display: block;\r\n    -webkit-box-shadow: 0 0 16px 0 #000;\r\n    box-shadow: 0 0 16px 0 #000;\r\n    /* border: 5px solid #fff; */\r\n    border-radius: 6px;\r\n}\r\n\r\n \r\n.image-profile-container:hover .change-image-profile-container{\r\n    opacity: 1;\r\n}\r\n\r\n \r\n.change-image-profile-container{\r\n    height: 167px;\r\n    margin: auto;\r\n    width: 167px;\r\n    position: relative;\r\n    margin-top: -167px;\r\n    z-index: 11;\r\n    border: 5px solid #fff;\r\n    border-radius: 6px;\r\n    opacity: 0;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff00), to(#001527fc));\r\n    background: linear-gradient(#ffffff00, #001527fc);\r\n    -webkit-transition: all .4s ease;\r\n    transition: all .4s ease;\r\n}\r\n\r\n \r\n.change-image-profile-container label {\r\n    bottom: 0px;\r\n    right: 6px;\r\n    position: absolute;\r\n    background: #00509654;\r\n    color: white;\r\n    border: 1px solid #6f6f6f70;\r\n    width: auto;\r\n    zoom: 0.8;\r\n}\r\n\r\n \r\n.follow{\r\n    width: 95px;\r\n    height: 95px;\r\n    text-align: center;\r\n    border: 5px solid #e8e8d2;\r\n    border-radius: 50%;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin: 8px 26px;\r\n}\r\n\r\n \r\n.follow p{\r\n    margin: auto;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n \r\n.short_info{\r\n    text-align: center;\r\n    margin: 8px\r\n}\r\n\r\n \r\n.short_info span{\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    font-size: 24px;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-weight: 500;\r\n    line-height: 30px;\r\n    max-width: 275px;\r\n}\r\n\r\n \r\n.hdn{\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"cover\" *ngIf=\"!service.user.userInfo.cover\">\r\n        <form method=\"GET\">\r\n            <label id=\"pic1\">\r\n                <span class=\"glyphicon glyphicon-picture\"> </span> <span class=\"cover-changer\">Change Cover</span> \r\n                <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelectCover($event)\">\r\n            </label>\r\n        </form>\r\n    </div>\r\n    <div class=\"cover\" *ngIf=\"service.user.userInfo.cover\" [ngStyle]=\"{background: 'url(data:image/jpeg;base64,' + service.user.userInfo.cover + ')  no-repeat  center'}\">\r\n        <form method=\"GET\">\r\n            <label id=\"pic1\">\r\n                <span class=\"glyphicon glyphicon-picture\"> </span> <span class=\"cover-changer\">Change Cover</span> \r\n                <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelectCover($event)\">\r\n            </label>\r\n        </form>\r\n    </div>\r\n  \r\n</div>\r\n<div class=\"image-profile-container\">\r\n    <img *ngIf=\"service.user.userInfo.image\" src='data:image/jpeg;base64,{{service.user.userInfo.image}}'>\r\n    <img *ngIf=\"!service.user.userInfo.image\" src=\"assets/profile.png\">\r\n    <div class=\"change-image-profile-container\">\r\n        <form method=\"GET\">\r\n            <label id=\"pic1\">\r\n                <span class=\"glyphicon glyphicon-picture\"> </span>\r\n                Change\r\n                <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelectImage($event)\">\r\n            </label>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"short_info\">\r\n    <span>{{service.user.userInfo.username}}</span>\r\n    <br>\r\n    <div class=\"follow\">\r\n        <p>{{service.user.follow.follower.length }}\r\n            <br> Follower</p>\r\n    </div>\r\n\r\n    <div class=\"follow\">\r\n        <p>{{service.user.follow.following.length }}\r\n            <br> Following</p>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<ul class=\"nav nav-tabs\">\r\n    <li (click)=\"routeTabs('Posts')\" [class.active]=\"tapRouteVal === 'Posts'\">\r\n        <a>Posts</a>\r\n    </li>\r\n    <li (click)=\"routeTabs('Photos')\" [class.active]=\"tapRouteVal === 'Photos'\">\r\n        <a>Photos</a>\r\n    </li>\r\n    <li (click)=\"routeTabs('About')\" [class.active]=\"tapRouteVal === 'About'\">\r\n        <a>About</a>\r\n    </li>\r\n    <li>\r\n        <a></a>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<div *ngIf=\"tapRouteVal=='Posts'\">\r\n    <p class=\"writeapost\">write a post:</p>\r\n    <sharePost></sharePost>\r\n    <viewPost *ngFor=\"let post  of service.user.post\" [data]='post'></viewPost>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"tapRouteVal==='Photos'\">\r\n    <div *ngFor=\"let post  of service.user.post\">\r\n        <viewImage [data]='post'></viewImage>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"tapRouteVal==='About'\">\r\n    <About></About>\r\n</div>"

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
exports.push([module.i, ".post{\r\n   \r\n    width: 70%;\r\n    margin: 20px auto;\r\n    min-height: 150px;\r\n    -webkit-box-shadow: 0px 0px 0px 1px #8888884f;\r\n            box-shadow: 0px 0px 0px 1px #8888884f;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n}\r\ntable{\r\n    width: 100%;\r\n}\r\n.td20{\r\n    width: 10%\r\n}\r\n.td80{\r\n    width: 80%\r\n}\r\n.post .textAreaContainer{\r\n    width: 100%;\r\n    height: 100px;\r\n    margin: auto;\r\n}\r\n.post .textAreaContainer textarea{\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    min-height: 100%;\r\n    max-height: 100%;\r\n    overflow: hidden;\r\n    padding: 8px 16px;\r\n    border: none;\r\n    background: #fafafb;\r\n    resize: none;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #cca2a2;\r\n            box-shadow: 0px 0px 1px 0px #cca2a2;\r\n}\r\n.post .textAreaContainer textarea:focus{\r\n    -webkit-box-shadow: 0px 0px 0px 1px #e8e8d2;\r\n            box-shadow: 0px 0px 0px 1px #e8e8d2;\r\n}\r\n.post:focus {\r\n    -webkit-box-shadow: 0px 0px 110px 1px #242406;\r\n            box-shadow: 0px 0px 110px 1px #242406;\r\n}\r\n.post .imgPoster{\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    -webkit-box-shadow: 0px 0px 0px 1px #88888859;\r\n            box-shadow: 0px 0px 0px 1px #88888859;\r\n}\r\n.float-right{\r\n    float:right;\r\n}\r\n.float-left{\r\n    float:left;\r\n    margin-top: 8px;\r\n}\r\n.marginTop10{\r\n    height: 35px;\r\n    margin-top: 10px;\r\n}\r\n.photoPostContainer{\r\n    margin: 30px 0px;\r\n}\r\n.photoPostContainer img{\r\n    width: 90%;\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.clearFix{\r\n    clear: both;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/share-post/share-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\r\n  \r\n  <table>\r\n    <tr>\r\n      <td class=\"td20\">\r\n          <div class=\"imgPosterContainer\">\r\n              <img class=\"imgPoster\" *ngIf=\"service.user.userInfo.image\" src='data:image/jpeg;base64,{{service.user.userInfo.image}}' >\r\n              <img class=\"imgPoster\" *ngIf=\"!service.user.userInfo.image\" src=\"assets/profile.png\" >\r\n          </div>\r\n      </td>\r\n\r\n\r\n      <td class=\"td80\">\r\n          <div class=\"textAreaContainer\"> \r\n              <textarea class=\"form-control\" [(ngModel)]='textPost' placeholder=\"What's On Your Mind, {{service.user.userInfo.username}}? \"   rows=\"5\" id=\"comment\"></textarea> \r\n            </div>\r\n      </td>\r\n    </tr>\r\n   \r\n  </table>\r\n  <div *ngIf=\"photoPost\" class=\"photoPostContainer\">\r\n      <img   src='data:image/jpeg;base64,{{photoPost}}' >\r\n  </div>\r\n  <div class=\"marginTop10\">\r\n        <form class=\"float-left\" id=\"test_form\" method=\"GET\" action=\"\">\r\n                <label id=\"pic1\">\r\n                        <span class=\"glyphicon glyphicon-picture\"> </span> \r\n                  <input type=\"file\" id=\"filePicker\" (change)=\"handleFileSelect($event)\"  >\r\n              \r\n                </label>\r\n              </form>\r\n  <button class=\"float-right btn btn-primary\" [disabled]=' !textPost && !photoPost ' (click)=\"sharePost()\" >Post</button>  \r\n    </div>\r\n</div>\r\n<div class=\"clearFix\"></div>"

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

module.exports = "<div class=\"body\">\r\n  <div class=\"x\">\r\n  <div class=\"sigin\">\r\n    <p class=\"h3\">chat and post <span>SignIn</span></p>\r\n    <input type=\"email\" placeholder=\"example@example.com\"     [(ngModel)]='formData.email' >    \r\n    <input type=\"password\" placeholder=\"Password\"   [(ngModel)]='formData.password'  >\r\n    <div>\r\n      <small class=\"{{msg.type}}\" >{{msg.data}}</small>   \r\n    </div> \r\n    \r\n    <button (click)=\"signin()\">\r\n      <span class=\"glyphicon glyphicon-arrow-right {{btnSignupDegree}}\"></span>\r\n    </button>   \r\n  </div>\r\n</div>\r\n</div>\r\n"

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

module.exports = "<p>\r\n  user-info works!\r\n</p>\r\n"

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
exports.push([module.i, ".cover{\r\n    background-size: cover!important;\r\n    min-height: 300px;\r\n    background-color: #001527;\r\n    position: relative\r\n}\r\n\r\n\r\n \r\n.image-profile-container{\r\n    margin: auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n\r\n \r\n.image-profile-container{\r\n    z-index: 33;\r\n    position: relative;\r\n}\r\n\r\n\r\n \r\n.image-profile-container img{\r\n    height: 167px;\r\n    margin: auto;\r\n    width: 167px;\r\n    margin-top: -133px;\r\n    display: block;\r\n    -webkit-box-shadow: 0 0 16px 0 #000;\r\n    box-shadow: 0 0 16px 0 #000;\r\n    /* border: 5px solid #fff; */\r\n    border-radius: 6px;\r\n}\r\n\r\n\r\n \r\n.change-image-profile-container{\r\n    height: 167px;\r\n    margin: auto;\r\n    width: 167px;\r\n    position: relative;\r\n    margin-top: -167px;\r\n    z-index: 11;\r\n    border: 5px solid #fff;\r\n    border-radius: 6px;\r\n    opacity: 0;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff00), to(#001527fc));\r\n    background: linear-gradient(#ffffff00, #001527fc);\r\n    -webkit-transition: all .4s ease;\r\n    transition: all .4s ease;\r\n}\r\n\r\n\r\n \r\n.change-image-profile-container label {\r\n    bottom: 0px;\r\n    right: 6px;\r\n    position: absolute;\r\n    background: #00509654;\r\n    color: white;\r\n    border: 1px solid #6f6f6f70;\r\n    width: auto;\r\n    zoom: 0.8;\r\n}\r\n\r\n\r\n \r\n.follow{\r\n    width: 95px;\r\n    height: 95px;\r\n    text-align: center;\r\n    border: 5px solid #e8e8d2;\r\n    border-radius: 50%;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin: 8px 26px;\r\n}\r\n\r\n\r\n \r\n.follow p{\r\n    margin: auto;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n\r\n \r\n.short_info{\r\n    text-align: center;\r\n    margin: 8px\r\n}\r\n\r\n\r\n \r\n.short_info span{\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    font-size: 24px;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-weight: 500;\r\n    line-height: 30px;\r\n    max-width: 275px;\r\n}\r\n\r\n\r\n \r\n.hdn{\r\n    display: none;\r\n}\r\n\r\n\r\n \r\n.followAndMessage{\r\n    width: 220px;\r\n    margin: 0 auto -20px auto;\r\n}\r\n\r\n\r\n \r\n.followAndMessage > span{\r\n    font-size: 13px;\r\n    border: 1px solid #888888;\r\n    padding: 0 7px;\r\n    cursor: pointer;\r\n    border-radius: 6px;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n \r\n.followAndMessage > span span{\r\n    font-size: 17px;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"cover\" *ngIf=\"!userObject.userDate.cover\"></div>\r\n    <div class=\"cover\" *ngIf=\"userObject.userDate.cover\" [ngStyle]=\"{background: 'url(data:image/jpeg;base64,' + userObject.userDate.cover + ')  no-repeat  center'}\"></div>\r\n\r\n</div>\r\n<div class=\"image-profile-container\">\r\n    <img *ngIf=\"userObject.userDate.image\" src='data:image/jpeg;base64,{{userObject.userDate.image}}'>\r\n    <img *ngIf=\"!userObject.userDate.image\" src=\"assets/profile.png\">\r\n</div>\r\n<div class=\"short_info\">\r\n    <span>{{userObject.userDate.username}}</span>\r\n    <br>\r\n    <div class=\"followAndMessage\"> \r\n        <span class=\"flaotLeft\" *ngIf=\"userObject.followingFromMe\" (click)=\"follow(userObject.userDate._id,service.user.id)\">\r\n            following\r\n            <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </span>\r\n\r\n        <span  class=\"flaotLeft\" *ngIf=\"!userObject.followingFromMe\" (click)=\"follow(userObject.userDate._id,service.user.id)\">\r\n            Follow\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </span>\r\n        <span class=\"flaotRight\">\r\n            Send\r\n            <span class=\"glyphicon glyphicon-envelope\"></span>\r\n        </span>\r\n        <div class=\"clearFex\"></div>\r\n    </div>\r\n    <br>\r\n    <div class=\"follow\">\r\n        <p>{{ followerLength(userObject.followData) }}\r\n            <br> Follower</p>\r\n    </div>\r\n    <div class=\"follow\">\r\n        <p>{{followingLength(userObject.followData) }}\r\n            <br> Following</p>\r\n    </div>\r\n</div>\r\n<ul class=\"nav nav-tabs\">\r\n    <li (click)=\"routeTabs('Posts')\" [class.active]=\"tapRouteVal === 'Posts'\">\r\n        <a>Posts</a>\r\n    </li>\r\n    <li (click)=\"routeTabs('Photos')\" [class.active]=\"tapRouteVal === 'Photos'\">\r\n        <a>Photos</a>\r\n    </li>\r\n    <li (click)=\"routeTabs('About')\" [class.active]=\"tapRouteVal === 'About'\">\r\n        <a>About</a>\r\n    </li>\r\n</ul>\r\n<div *ngIf=\"tapRouteVal=='Posts'\">\r\n    <viewPost *ngFor=\"let post  of fetchPost(userObject.postData,userObject.userDate)\" [data]='post'></viewPost>\r\n</div>\r\n<div *ngIf=\"tapRouteVal==='Photos'\">\r\n    <div *ngFor=\"let post  of fetchPost(userObject.postData,userObject.userDate)\">\r\n        <viewImage [data]='post'></viewImage>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"tapRouteVal==='About'\">\r\n    <div class=\"aboutContainer \">\r\n        <div class=\"shortUserInfo\">\r\n            <p class=\"headerData\">general information:</p>\r\n            <div class=\"tableContainer\">\r\n                <hr>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <span>Name:</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"data\">{{userObject.userDate.username}}</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span>E-mail:</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"data\">{{userObject.userDate.email}}</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span>Work at:</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"data\">{{userObject.userDate.work || 'Unset'}}</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span>Lives in:</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"data\">{{userObject.userDate.location || 'Unset'}}</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span>Gender:</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"data\">{{userObject.userDate.gender || 'Unset'}}</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span>Relationship:</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"data\">{{userObject.userDate.relationship || 'Unset'}}</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span> Birth Date:</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"data\">{{userObject.userDate.birth || 'Unset'}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <span class=\"interests-container\">\r\n                <p class=\"headerData\">Interests Of:</p>\r\n                <div class=\"tableContainer\">\r\n                    <hr>\r\n                    <span class=\"interest\" *ngFor=\"let interest  of userObject.userDate.interests\">{{interest}}\r\n                    </span>\r\n                    <span class=\"interest\" *ngIf=\"userObject.userDate.interests.length === 0\">there is no interests\r\n                    </span>\r\n                </div>\r\n            </span>\r\n        </div>\r\n    </div>\r\n"

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
    function UserComponent(service, route) {
        this.service = service;
        this.route = route;
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
            _this.service.getUserProfile({ query: query, profile: _this.service.user.id }).subscribe(function (res) {
                if (res.status === 'fail') {
                }
                else {
                    _this.userObject = res;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-image/view-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post{\r\n    background: white;\r\n    margin:10px auto;\r\n    width: 70%;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\r\n            box-shadow: 0px 0px 1px 0px #888888;\r\n    padding: 15px;\r\n    border-radius: 4px;\r\n}\r\n.post-tool{\r\n    font-size: 10px;\r\n    float: right;\r\n    color: #888888;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\r\n            box-shadow: 0px 0px 1px 0px #888888;\r\n    padding: 3px;\r\n    border-radius: 4px;\r\n}\r\n.post-tool:hover{\r\n    color: #2e2d2d;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #2e2d2d;\r\n            box-shadow: 0px 0px 1px 0px #2e2d2d;\r\n}\r\n.userImage{\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\r\n    box-shadow: 0px 0px 1px 0px #888888;\r\n    margin: 0px 8px 0px 0px;\r\n}\r\n.userpart{\r\n\r\n}\r\n.userpart >* {\r\n    float: left;\r\n}\r\n.clearfix{\r\n    clear: both\r\n}\r\n.userName-date{\r\n    position: absolute;\r\n    margin-left: 50px;\r\n}\r\n.userName{\r\n    font-weight: bold;\r\n    color: #4176b1;\r\n    cursor: pointer;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    line-height: 1.38;\r\n}\r\n.userName:hover{\r\n    text-decoration: underline;\r\n}\r\n.posttext{\r\n    margin: 15px 0px 25px 5px;\r\n}\r\n.date{\r\n    color: #90949c;\r\n    font-size: 12px;\r\n    font-family: inherit;\r\n    cursor: pointer;\r\n    font-weight: normal;\r\n    margin-top: -9px;\r\n    display: block;\r\n}\r\n.tool > *{\r\n    float: left;\r\n    width: 33%;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: #616770;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: 15px;\r\n    cursor: pointer;\r\n}\r\n.tool > *:hover{\r\n    color: #4176b1;\r\n    background: #eeeeef4a;\r\n}\r\nhr{\r\n    margin-top: 10px;\r\n    margin-bottom: -5px;\r\n}\r\n.postImageWithText{\r\n    width: 60%;\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.postImageWithoutText{\r\n    width: 100%;\r\n}\r\n.displaynone{\r\n    display: none;\r\n}\r\n.delete{\r\n  opacity: 0;\r\n  \r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding: 0;\r\n  height: 0px!important;\r\n  -webkit-transition: all 1s ease;\r\n  transition: all 1s ease;\r\n}\r\n.delete >*{\r\n    opacity: 0;\r\n    display: none;\r\n    -webkit-transition: all .5s ease;\r\n    transition: all .5s ease;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-image/view-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.postContent.image\" class=\"post {{deleteCss}}\">\r\n\r\n  <p class=\"post-tool\" *ngIf=\"service.user.id===data.userId \" (click)=\"deletePost(data.userId,data._id)\">\r\n    <span class=\"glyphicon glyphicon-remove\"></span>\r\n  </p>\r\n\r\n\r\n  <p class=\"post-tool\" *ngIf=\"service.user.id!==data.userId\" (click)=\"follow(data.userId)\">\r\n    <span class=\"glyphicon glyphicon-remove-sign\"></span>{{btnFollowText}} </p>\r\n\r\n\r\n  <div class=\"userpart\" (click)=\"viewProfile(data.userId)\">\r\n    <img class=\"userImage\" *ngIf=\"data.imageUser\" src=\"data:image/jpeg;base64,{{data.imageUser ||''}}\" class=\"userImage\" alt=\"\">\r\n    <img class=\"userImage\" *ngIf=\"!data.imageUser\" src=\"assets/profile.png\">\r\n\r\n    <div class=\"userName-date\">\r\n      <p class=\"userName\">{{data.username}} </p>\r\n      <a class=\"date\">{{data.date}}</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <span (click)=\"viewOriginPost(data)\">\r\n    <p class=\"posttext\">\r\n      {{data.postContent.text}}\r\n    </p>\r\n\r\n    <div [class.displaynone]=\"data.postContent.image == '' ||  data.postContent.image == undefined\">\r\n      <img src=\"data:image/jpeg;base64,{{data.postContent.image ||''}}\" class=\"postImageWithoutText\">\r\n    </div>\r\n  </span>\r\n  <hr>\r\n  <div class=\"tool\">\r\n    <p>\r\n      <i class=\"fa fa-thumbs-o-up\"></i> Like {{data.like || 0}}</p>\r\n    <p>\r\n      <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\r\n      Comment {{data.comment || 0}}</p>\r\n    <p (click)=\"sharePost(data.postContent)\">\r\n      <i class=\"fa fa-share\" aria-hidden=\"true\"></i>\r\n      {{share}}</p>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n"

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
exports.push([module.i, ".post{\r\n    background: white;\r\n    margin:10px auto;\r\n    width: 70%;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\r\n            box-shadow: 0px 0px 1px 0px #888888;\r\n    padding: 15px;\r\n    border-radius: 4px;\r\n}\r\n.post-tool{\r\n    font-size: 10px;\r\n    float: right;\r\n    color: #888888;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\r\n            box-shadow: 0px 0px 1px 0px #888888;\r\n    padding: 3px;\r\n    border-radius: 4px;\r\n}\r\n.post-tool:hover{\r\n    color: #2e2d2d;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #2e2d2d;\r\n            box-shadow: 0px 0px 1px 0px #2e2d2d;\r\n}\r\n.userImage{\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 0px 1px 0px #888888;\r\n    box-shadow: 0px 0px 1px 0px #888888;\r\n    margin: 0px 8px 0px 0px;\r\n}\r\n.userpart{\r\n\r\n}\r\n.userpart >* {\r\n    float: left;\r\n}\r\n.clearfix{\r\n    clear: both\r\n}\r\n.userName-date{\r\n    position: absolute;\r\n    margin-left: 50px;\r\n}\r\n.userName{\r\n    font-weight: bold;\r\n    color: #4176b1;\r\n    cursor: pointer;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    line-height: 1.38;\r\n}\r\n.userName:hover{\r\n    text-decoration: underline;\r\n}\r\n.posttext{\r\n    margin: 15px 0px 25px 5px;\r\n}\r\n.date{\r\n    color: #90949c;\r\n    font-size: 12px;\r\n    font-family: inherit;\r\n    cursor: pointer;\r\n    font-weight: normal;\r\n    margin-top: -9px;\r\n    display: block;\r\n}\r\n.tool > *{\r\n    float: left;\r\n    width: 33%;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: #616770;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: 15px;\r\n    cursor: pointer;\r\n}\r\n.tool > *:hover{\r\n    color: #4176b1;\r\n    background: #eeeeef4a;\r\n}\r\nhr{\r\n    margin-top: 10px;\r\n    margin-bottom: -5px;\r\n}\r\n.postImageWithText{\r\n    width: 60%;\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.postImageWithoutText{\r\n    width: 100%;\r\n}\r\n.displaynone{\r\n    display: none;\r\n}\r\n.cursor-pointer{\r\n    cursor: pointer;\r\n}\r\n.delete{\r\n  opacity: 0;\r\n  \r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding: 0;\r\n  height: 0px!important;\r\n  -webkit-transition: all 1s ease;\r\n  transition: all 1s ease;\r\n}\r\n.delete >*{\r\n    opacity: 0;\r\n    display: none;\r\n    -webkit-transition: all .5s ease;\r\n    transition: all .5s ease;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-post/view-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post {{deleteCss}}\">\r\n\r\n  <p class=\"post-tool\" *ngIf=\"service.user.id===data.userId \" (click)=\"deletePost(data.userId,data._id)\">\r\n    <span class=\"glyphicon glyphicon-remove\"></span>\r\n  </p>\r\n\r\n  <div class=\"userpart\" (click)=\"viewProfile(data.userId)\">\r\n    <img class=\"userImage\" *ngIf=\"data.imageUser\" src=\"data:image/jpeg;base64,{{data.imageUser ||''}}\" class=\"userImage\" alt=\"\">\r\n    <img class=\"userImage\" *ngIf=\"!data.imageUser\" src=\"assets/profile.png\">\r\n\r\n    <div class=\"userName-date\">\r\n      <p class=\"userName\">{{data.username}} </p>\r\n      <a class=\"date\">{{data.date}}</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <span (click)=\"viewOriginPost(data)\" class=\"cursor-pointer\">\r\n    <p class=\"posttext\">\r\n      {{data.postContent.text}}\r\n    </p>\r\n\r\n    <div [class.displaynone]=\"data.postContent.image == '' ||  data.postContent.image == undefined\">\r\n      <img src=\"data:image/jpeg;base64,{{data.postContent.image ||''}}\" [class.postImageWithText]=\"data.postContent.text !== '' ||  data.postContent.text !== undefined\"\r\n        [class.postImageWithoutText]=\"data.postContent.text === '' || data.postContent.text === undefined\">\r\n    </div>\r\n  </span>\r\n  <hr>\r\n  <div class=\"tool\">\r\n    <p>\r\n      <i class=\"fa fa-thumbs-o-up\"></i> Like {{data.like || 0}}</p>\r\n    <p>\r\n      <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\r\n      Comment {{data.comment || 0}}</p>\r\n    <p (click)=\"sharePost(data.postContent)\">\r\n      <i class=\"fa fa-share\" aria-hidden=\"true\"></i>\r\n      {{share}}</p>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n"

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
            this.router.navigate(['user/id:' + userId]);
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
    ViewPostComponent.prototype.ngOnInit = function () { };
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