(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n    <ion-icon name=\"bar-chart-outline\"></ion-icon>\n      Ranking\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class = \"background\">\n    <ion-card>\n        <ion-searchbar animated></ion-searchbar>\n        <ion-button expand=\"full\" color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon>\n            Find me\n        </ion-button>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n          <ion-card-title class = \"centered\"> Top 10 </ion-card-title><br>\n          <ion-list>\n            <ion-item>\n                <ion-label>\n                    <ion-text color=\"tertiary\">1</ion-text>\n                    Onder Francisco\n                </ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    <ion-text color=\"tertiary\">2</ion-text>\n                    Wolfteinter\n                </ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    <ion-text color=\"tertiary\">3</ion-text>\n                    TheWinderthester\n                </ion-label>\n                    <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    <ion-text color=\"tertiary\">4</ion-text>\n                    Tyufront\n                </ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n\n            </ion-item>\n            <ion-item>\n                <ion-label><ion-text color=\"tertiary\">5</ion-text>\n                jUAN 98</ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label><ion-text color=\"tertiary\">6</ion-text>\n                Grettert</ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label><ion-text color=\"tertiary\">7</ion-text>\n                rodrig987</ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label><ion-text color=\"tertiary\">8</ion-text>\n                johntter12</ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label><ion-text color=\"tertiary\">9</ion-text>\n                disstrafers</ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n            <ion-item>\n                <ion-label><ion-text color=\"tertiary\">10</ion-text>\n                stringeer</ion-label>\n                <ion-button color=\"dark\"><ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n            </ion-item>\n        </ion-list>\n      </ion-card-header>\n    </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content.background {\n  --background: linear-gradient(100deg, rgba(100,100,100,1) 0%, rgba(63,63,63,1) 13.5%, rgba(29,29,29,1) 33.33%, rgba(0,0,0,1) 100%) !important;\n}\n\n.centered {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLDZJQUFBO0FBQ0w7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSgxMDAsMTAwLDEwMCwxKSAwJSwgcmdiYSg2Myw2Myw2MywxKSAxMy41JSwgcmdiYSgyOSwyOSwyOSwxKSAzMy4zMyUsIHJnYmEoMCwwLDAsMSkgMTAwJSkgIWltcG9ydGFudDtcbn1cbi5jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Tab3Page = function Tab3Page() {
        _classCallCheck(this, Tab3Page);
      };

      Tab3Page.ctorParameters = function () {
        return [];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map