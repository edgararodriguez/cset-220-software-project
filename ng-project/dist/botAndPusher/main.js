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

/***/ "./src/app/_components/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_components/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_components/alert.component.html")
        }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 offset-sm-3\">\n                <alert></alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app-root', template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html") }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _my_details_my_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-details/my-details.component */ "./src/app/my-details/my-details.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./battleship */ "./src/app/battleship/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_details_my_details_component__WEBPACK_IMPORTED_MODULE_7__["MyDetailsComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"],
                _battleship__WEBPACK_IMPORTED_MODULE_13__["BattleshipComponent"],
                _register__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _login__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
            ],
            imports: [
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"], _services_pusher_service__WEBPACK_IMPORTED_MODULE_5__["PusherService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleship */ "./src/app/battleship/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");




var appRoutes = [
    { path: 'battleship', component: _battleship__WEBPACK_IMPORTED_MODULE_1__["BattleshipComponent"] },
    { path: '', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/battleship/battleship.component.html":
/*!******************************************************!*\
  !*** ./src/app/battleship/battleship.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--battleship game below -->\n<div class=\"section\">\n  <!-- <div class=\"container\"> -->\n    <div class=\"content\">\n      <h1 class=\"title\">Ready to sink some battleships?</h1>\n      <h6 class=\"subtitle is-6\"><strong>Edgar's Battleship</strong></h6>\n      <hr>\n\n      <!-- shows when a player has won the game -->\n      <section *ngIf=\"winner\" class=\"notification is-success has-text-centered\" style=\"color:white\">\n        <h1>Player {{ winner.player.id }} has won the game!</h1>\n        <h5>Click <a href=\"battleship{{ gameUrl }}\">here</a> to start a new game.</h5>\n      </section>\n\n      <!-- shows while waiting for 2nd user to join -->\n      <div *ngIf=\"players < 2\">\n        <h2>Waiting for 2nd user to join...</h2>\n        <h3 class=\"subtitle is-6\">Sign in to the chat below, You can invite them with this link: battleshipchat.herokuapp.com/battleship{{ gameUrl }}?id={{ gameId }}. You can also copy the url in a new browser, to play all by yourself.</h3>\n      </div>\n\n      <!-- loops through the boards array and displays the player and board tiles -->\n      <div class=\"columns\" *ngIf=\"validPlayer\">\n        <div class=\"column has-text-centered\" *ngFor=\"let board of boards; let i = index\">\n          <h5>\n            PLAYER {{ board.player.id }} <span class=\"tag is-info\" *ngIf=\"i == player\">You</span>\n            // <strong>SCORE: {{ board.player.score }}</strong>\n          </h5>\n          <table class=\"is-bordered\" [style.opacity] = \"i == player ? 0.5 : 1\">\n            <tr *ngFor=\"let row of board.tiles; let j = index\">\n              <td *ngFor=\"let col of row; let k = index\"\n              (click) = \"fireTorpedo($event)\"\n              [style.background-color] = \"col.used ? '' : 'transparent'\"\n              [class.win] = \"col.status == 'win'\" [class.fail] = \"col.status !== 'win'\"\n              class=\"battleship-tile\" id=\"t{{i}}{{j}}{{k}}\">\n              {{ col.value == \"X\" ? \"X\" : \"💀\" }}\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"has-text-centered\">\n      <span class=\"tag is-warning\" *ngIf=\"canPlay\">Your turn!</span>\n      <span class=\"tag is-danger\" *ngIf=\"!canPlay\">Other player's turn.</span>\n      <h5 class=\"title\"><small>{{ players }} player(s) in game</small></h5>\n    </div>\n\n  <!-- </div> -->\n</div>\n</div>\n<!-- battleship game abouve -->\n<div class=\"container\">\n\n  <p align=\"center\">\n    <img src=\"assets/battleship.png\" width=\"30\" height=\"100\" width=\"60\"  alt=\"Pusher\">\n  </p>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-12\" [hidden]=\"!chatService.user\">\n      <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n        <app-chat></app-chat>\n      </div>\n    </div>\n    <div class=\"col-md-12\" [hidden]=\"chatService.user\">\n      <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n        <app-my-details></app-my-details>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/battleship/battleship.component.ts":
/*!****************************************************!*\
  !*** ./src/app/battleship/battleship.component.ts ***!
  \****************************************************/
/*! exports provided: BattleshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleshipComponent", function() { return BattleshipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NUM_PLAYERS = 2;
var BOARD_SIZE = 6;
var BattleshipComponent = /** @class */ (function () {
    function BattleshipComponent(router, chatService, toastr, _vcr, boardService, authenticationService) {
        var _this = this;
        this.router = router;
        this.chatService = chatService;
        this.toastr = toastr;
        this._vcr = _vcr;
        this.boardService = boardService;
        this.authenticationService = authenticationService;
        this.canPlay = true;
        this.player = 0;
        this.players = 0;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
        this.createBoards();
        this.initPusher();
        this.listenForChanges();
    }
    // initialise Pusher and bind to presence channel
    BattleshipComponent.prototype.initPusher = function () {
        var _this = this;
        // findOrCreate unique channel ID
        var id = this.getQueryParam('id');
        if (!id) {
            id = this.getUniqueId();
            location.search = location.search ? '&id=' + id : 'id=' + id;
        }
        this.gameId = id;
        // init pusher
        //Insert Key below//
        var pusher = new Pusher('5284221aac761fc73fc7', {
            authEndpoint: '/pusher/auth',
            cluster: 'us2'
        });
        // bind to relevant channels
        this.pusherChannel = pusher.subscribe(id);
        this.pusherChannel.bind('pusher:member_added', function (member) { _this.players++; });
        this.pusherChannel.bind('pusher:subscription_succeeded', function (members) {
            _this.players = members.count;
            _this.setPlayer(_this.players);
            _this.toastr.success("Success", 'Connected!');
        });
        this.pusherChannel.bind('pusher:member_removed', function (member) { _this.players--; });
        return this;
    };
    // Listen for `client-fire` events.
    // Update the board object and other properties when
    // event triggered
    BattleshipComponent.prototype.listenForChanges = function () {
        var _this = this;
        this.pusherChannel.bind('client-fire', function (obj) {
            _this.canPlay = !_this.canPlay;
            _this.boards[obj.boardId] = obj.board;
            _this.boards[obj.player].player.score = obj.score;
        });
        return this;
    };
    // initialise player and set turn
    BattleshipComponent.prototype.setPlayer = function (players) {
        if (players === void 0) { players = 0; }
        this.player = players - 1;
        if (players == 1) {
            this.canPlay = true;
        }
        else if (players == 2) {
            this.canPlay = false;
        }
        return this;
    };
    // event handler for click event on
    // each tile - fires torpedo at selected tile
    BattleshipComponent.prototype.fireTorpedo = function (e) {
        var id = e.target.id, boardId = id.substring(1, 2), row = id.substring(2, 3), col = id.substring(3, 4), tile = this.boards[boardId].tiles[row][col];
        if (!this.checkValidHit(boardId, tile)) {
            return;
        }
        if (tile.value == 1) {
            this.toastr.success("You got this.", "HURRAAA! YOU SANK A SHIP!");
            this.boards[boardId].tiles[row][col].status = 'win';
            this.boards[this.player].player.score++;
        }
        else {
            this.toastr.info("Keep trying fam.", "OOPS! YOU MISSED THIS TIME");
            this.boards[boardId].tiles[row][col].status = 'fail';
        }
        this.canPlay = false;
        this.boards[boardId].tiles[row][col].used = true;
        this.boards[boardId].tiles[row][col].value = "X";
        // trigger `client-fire` event once a torpedo
        // is successfully fired
        this.pusherChannel.trigger('client-fire', {
            player: this.player,
            score: this.boards[this.player].player.score,
            boardId: boardId,
            board: this.boards[boardId]
        });
        return this;
    };
    BattleshipComponent.prototype.createBoards = function () {
        for (var i = 0; i < NUM_PLAYERS; i++)
            this.boardService.createBoard(BOARD_SIZE);
        return this;
    };
    BattleshipComponent.prototype.checkValidHit = function (boardId, tile) {
        if (boardId == this.player) {
            this.toastr.error("Don't commit suicide.", "You can't hit your own board.");
            return false;
        }
        if (this.winner) {
            this.toastr.error("Game is over");
            return false;
        }
        if (!this.canPlay) {
            this.toastr.error("A bit too eager.", "It's not your turn to play.");
            return false;
        }
        if (tile.value == "X") {
            this.toastr.error("Don't waste your torpedos.", "You already shot here.");
            return false;
        }
        return true;
    };
    // helper function to get query param
    BattleshipComponent.prototype.getQueryParam = function (name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    };
    //helper function to create  a unique presence channel
    //name for each game
    BattleshipComponent.prototype.getUniqueId = function () {
        return 'presence-' + Math.random().toString(36).substr(2, 8);
    };
    Object.defineProperty(BattleshipComponent.prototype, "boards", {
        //get all boards and assign to board property
        get: function () {
            return this.boardService.getBoards();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleshipComponent.prototype, "winner", {
        // winner property to determine if a user has won the game.
        // once a user gets a score higher than the size of the game
        // board, he has won.
        get: function () {
            return this.boards.find(function (board) { return board.player.score >= BOARD_SIZE; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleshipComponent.prototype, "validPlayer", {
        //checks if player is a valid player for the game
        get: function () {
            return (this.players >= NUM_PLAYERS) && (this.player < NUM_PLAYERS);
        },
        enumerable: true,
        configurable: true
    });
    BattleshipComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    BattleshipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./battleship.component.html */ "./src/app/battleship/battleship.component.html"),
            // styleUrls: ['./battleship.component.css'],
            providers: [_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], BattleshipComponent);
    return BattleshipComponent;
}());



/***/ }),

/***/ "./src/app/battleship/index.ts":
/*!*************************************!*\
  !*** ./src/app/battleship/index.ts ***!
  \*************************************/
/*! exports provided: BattleshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _battleship_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.component */ "./src/app/battleship/battleship.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BattleshipComponent", function() { return _battleship_component__WEBPACK_IMPORTED_MODULE_0__["BattleshipComponent"]; });




/***/ }),

/***/ "./src/app/board.service.ts":
/*!**********************************!*\
  !*** ./src/app/board.service.ts ***!
  \**********************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/app/board.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/app/player.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardService = /** @class */ (function () {
    function BoardService() {
        this.playerId = 1;
        this.boards = [];
    }
    // method for creating a board which takes
    // an optional size parameter that defaults to 5
    BoardService.prototype.createBoard = function (size) {
        if (size === void 0) { size = 5; }
        // create tiles for board
        var tiles = [];
        for (var i = 0; i < size; i++) {
            tiles[i] = [];
            for (var j = 0; j < size; j++) {
                tiles[i][j] = { used: false, value: 0, status: '' };
            }
        }
        // generate random ships for the board
        for (var i = 0; i < size * 2; i++) {
            tiles = this.randomShips(tiles, size);
        }
        // create board
        var board = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"]({
            player: new _player__WEBPACK_IMPORTED_MODULE_2__["Player"]({ id: this.playerId++ }),
            tiles: tiles
        });
        // append created board to `boards` property
        this.boards.push(board);
        return this;
    };
    // function to return the tiles after a value
    // of 1 (a ship) is inserted into a random tile
    // in the array of tiles
    BoardService.prototype.randomShips = function (tiles, len) {
        len = len - 1;
        var ranRow = this.getRandomInt(0, len), ranCol = this.getRandomInt(0, len);
        if (tiles[ranRow][ranCol].value == 1) {
            return this.randomShips(tiles, len);
        }
        else {
            tiles[ranRow][ranCol].value = 1;
            return tiles;
        }
    };
    // helper function to return a random
    // integer between ${min} and ${max}
    BoardService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // returns all created boards
    BoardService.prototype.getBoards = function () {
        return this.boards;
    };
    BoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./src/app/board.ts":
/*!**************************!*\
  !*** ./src/app/board.ts ***!
  \**************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chats {\n        height: calc(100% - 12px);\n        position: relative;\n        z-index: 0;\n    }\n\n    .chats .chatbox {\n        height: calc(100% - 68px);\n        overflow-x: hidden;\n        padding: 0 16px;\n        margin-bottom: 5px;\n    }\n\n    .joined {\n      clear: both;\n      line-height: 18px;\n      font-size: 15px;\n      margin: 8px 0;\n      padding: 8px;\n    }\n\n    .joined span {\n      padding: 5px\n    }\n\n    /* Messages*/\n\n    .message {\n      color: #000;\n      clear: both;\n      line-height: 18px;\n      font-size: 15px;\n      padding: 8px;\n      position: relative;\n      margin: 8px 0;\n      max-width: 85%;\n      word-wrap: break-word;\n      z-index: -1;\n    }\n\n    .message:after {\n      position: absolute;\n      content: \"\";\n      width: 0;\n      height: 0;\n      border-style: solid;\n    }\n\n    .metadata {\n      display: inline-block;\n      float: right;\n      padding: 0 0 0 7px;\n      position: relative;\n      bottom: -4px;\n    }\n\n    .metadata .time {\n      color: rgba(0, 0, 0, .45);\n      font-size: 11px;\n      display: inline-block;\n    }\n\n    .message:first-child {\n      margin: 16px 0 8px;\n    }\n\n    .message.received {\n      background: #ccc;\n      border-radius: 0px 5px 5px 5px;\n      float: left;\n    }\n\n    .message.received:after {\n      border-width: 0px 10px 10px 0;\n      border-color: transparent #ccc transparent transparent;\n      top: 0;\n      left: -10px;\n    }\n\n    .message.sent {\n      background: #e1ffc7;\n      border-radius: 5px 0px 5px 5px;\n      float: right;\n    }\n\n    .message.sent:after {\n      border-width: 0px 0 10px 10px;\n      border-color: transparent transparent transparent #e1ffc7;\n      top: 0;\n      right: -10px;\n    }\n\n    .metadata {\n      display: inline-block;\n      float: right;\n      padding: 0 0 0 7px;\n      position: relative;\n      bottom: -4px;\n    }\n\n    .metadata .time {\n      color: rgba(0, 0, 0, .45);\n      font-size: 11px;\n      display: inline-block;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLFdBQVc7S0FDZDs7SUFFRDtRQUNJLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtLQUN0Qjs7SUFFRDtNQUNFLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO0tBQ2Q7O0lBQ0Q7TUFDRSxZQUFZO0tBQ2I7O0lBRUQsYUFBYTs7SUFFYjtNQUNFLFlBQVk7TUFDWixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxlQUFlO01BQ2Ysc0JBQXNCO01BQ3RCLFlBQVk7S0FDYjs7SUFFRDtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osU0FBUztNQUNULFVBQVU7TUFDVixvQkFBb0I7S0FDckI7O0lBRUQ7TUFDRSxzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsYUFBYTtLQUNkOztJQUVEO01BQ0UsMEJBQTBCO01BQzFCLGdCQUFnQjtNQUNoQixzQkFBc0I7S0FDdkI7O0lBR0Q7TUFDRSxtQkFBbUI7S0FDcEI7O0lBRUQ7TUFDRSxpQkFBaUI7TUFDakIsK0JBQStCO01BQy9CLFlBQVk7S0FDYjs7SUFHRDtNQUNFLDhCQUE4QjtNQUM5Qix1REFBdUQ7TUFDdkQsT0FBTztNQUNQLFlBQVk7S0FDYjs7SUFFRDtNQUNFLG9CQUFvQjtNQUNwQiwrQkFBK0I7TUFDL0IsYUFBYTtLQUNkOztJQUVEO01BQ0UsOEJBQThCO01BQzlCLDBEQUEwRDtNQUMxRCxPQUFPO01BQ1AsYUFBYTtLQUNkOztJQUdEO01BQ0Usc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGFBQWE7S0FDZDs7SUFFRDtNQUNFLDBCQUEwQjtNQUMxQixnQkFBZ0I7TUFDaEIsc0JBQXNCO0tBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHMge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmNoYXRzIC5jaGF0Ym94IHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAuam9pbmVkIHtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cbiAgICAuam9pbmVkIHNwYW4ge1xuICAgICAgcGFkZGluZzogNXB4XG4gICAgfVxuXG4gICAgLyogTWVzc2FnZXMqL1xuXG4gICAgLm1lc3NhZ2Uge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgIG1heC13aWR0aDogODUlO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2U6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB9XG5cbiAgICAubWV0YWRhdGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgcGFkZGluZzogMCAwIDAgN3B4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm90dG9tOiAtNHB4O1xuICAgIH1cblxuICAgIC5tZXRhZGF0YSAudGltZSB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNDUpO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuXG4gICAgLm1lc3NhZ2U6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAxNnB4IDAgOHB4O1xuICAgIH1cblxuICAgIC5tZXNzYWdlLnJlY2VpdmVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCA1cHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG5cblxuICAgIC5tZXNzYWdlLnJlY2VpdmVkOmFmdGVyIHtcbiAgICAgIGJvcmRlci13aWR0aDogMHB4IDEwcHggMTBweCAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjY2NjIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogLTEwcHg7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2Uuc2VudCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTFmZmM3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5tZXNzYWdlLnNlbnQ6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlMWZmYzc7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogLTEwcHg7XG4gICAgfVxuXG5cbiAgICAubWV0YWRhdGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgcGFkZGluZzogMCAwIDAgN3B4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm90dG9tOiAtNHB4O1xuICAgIH1cblxuICAgIC5tZXRhZGF0YSAudGltZSB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNDUpO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <h6 class=\"pb-2 mb-0\">Group Chat <button class=\"btn btn-sm btn-primary\">invite others</button></h6>\n\n    <div class=\"chats\">\n      <div class=\"chatbox\">\n        <div *ngFor=\"let chat of chats\">\n          <div class=\"message sent\" *ngIf=\"chat.type!=='joined' && chat.isMe\">\n            {{chat.message}}\n            <span class=\"metadata\">\n              <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n            </span>\n          </div>\n          <div class=\"message received\"  *ngIf=\"chat.type!=='joined' && !chat.isMe\">\n            <strong>{{chat.displayName}}</strong> <br>\n            {{chat.message}}\n            <span class=\"metadata\">\n              <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n            </span>\n          </div>\n          <p align=\"center\" class=\"joined\"  *ngIf=\"chat.type==='joined'\">\n          <span class=\"rounded bg-primary text-white\">{{chat.displayName}} Joined</span>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"d-flex flex-row\">\n        <input [(ngModel)]=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Enter message\" style=\"margin-right: 10px\">\n        <button [disabled]=\"!message || sending\" (click)=\"sendMessage(message)\" class=\"btn btn-primary\"> {{sending ? 'Sending' : 'Send'}}</button>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
        this.chats = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to pusher's event
        this._chatService.getChannel().bind('chat', function (data) {
            if (data.email === _this._chatService.user.email) {
                data.isMe = true;
            }
            _this.chats.push(data);
        });
    };
    ChatComponent.prototype.sendMessage = function (message) {
        var _this = this;
        this.sending = true;
        this._chatService.sendMessage(message)
            .subscribe(function (resp) {
            _this.message = undefined;
            _this.sending = false;
        }, function (err) {
            _this.sending = false;
        });
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
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
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/battleship']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/battleship';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-details/my-details.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-details/my-details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 class=\"pb-2 mb-0\">My Details</h6>\n\n<form [formGroup]=\"detailsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"form-group\">\n    <label for=\"name\">Display Name</label>\n    <input formControlName=\"displayName\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Alien\">\n     <small *ngIf=\"detailsForm.get('displayName').hasError('required')\" class=\"form-text text-danger\">Display name is required.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"test@example.com\">\n    <small *ngIf=\"detailsForm.get('email').hasError('required')\" class=\"form-text text-danger\">Email is required.</small>\n    <small *ngIf=\"detailsForm.get('email').hasError('email')\" class=\"form-text text-danger\">Email is invalid.</small>\n  </div>\n  <button type=\"submit\" [disabled]=\"loader || detailsForm.invalid\" class=\"btn btn-primary\">{{loader?'Joining':'Join Group'}}</button>\n</form>\n"

/***/ }),

/***/ "./src/app/my-details/my-details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-details/my-details.component.ts ***!
  \****************************************************/
/*! exports provided: MyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDetailsComponent", function() { return MyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyDetailsComponent = /** @class */ (function () {
    function MyDetailsComponent(_fb, _chatService) {
        this._fb = _fb;
        this._chatService = _chatService;
    }
    MyDetailsComponent.prototype.ngOnInit = function () {
        this._createForm();
    };
    /**
     * create our reactive form here
     */
    MyDetailsComponent.prototype._createForm = function () {
        this.detailsForm = this._fb.group({
            displayName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    /**
         * Join the fun
         */
    MyDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var param = this.detailsForm.value;
        this._chatService.join(param)
            .subscribe(function (resp) {
            _this.loader = false;
        }, function (error) {
            console.error(error);
            _this.loader = false;
        });
    };
    MyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-details',
            template: __webpack_require__(/*! ./my-details.component.html */ "./src/app/my-details/my-details.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], MyDetailsComponent);
    return MyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(values) {
        if (values === void 0) { values = {}; }
        this.score = 0;
        Object.assign(this, values);
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(_pusherService, _http) {
        this._pusherService = _pusherService;
        this._http = _http;
        this._endPoint = 'https://battleshipchat.herokuapp.com'; // normally you use environment.ts
        this._channel = this._pusherService.getPusher().subscribe('chat-group');
    }
    ChatService.prototype.join = function (param) {
        var _this = this;
        return this._http.post(this._endPoint + "/join", param)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.user = param;
        }));
    };
    ChatService.prototype.sendMessage = function (message) {
        var param = __assign({ message: message, type: 'human' }, this.user);
        return this._http.post(this._endPoint + "/message", param);
    };
    ChatService.prototype.getChannel = function () {
        return this._channel;
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_pusher_service__WEBPACK_IMPORTED_MODULE_1__["PusherService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/pusher.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pusher.service.ts ***!
  \********************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// this is here to discourage the instantianting of pusher any where its
// needed, better to reference it from one place
var PusherService = /** @class */ (function () {
    ///Insert pusher key below
    function PusherService() {
        this._pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_1__('5284221aac761fc73fc7', {
            cluster: 'us2',
            encrypted: true
        });
    }
    PusherService.prototype.getPusher = function () {
        return this._pusher;
    };
    PusherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PusherService);
    return PusherService;
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
    apiUrl: 'https://whispering-mountain-28600.herokuapp.com'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eagascarodriguez171/Desktop/cset-220-software-project/ng-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map