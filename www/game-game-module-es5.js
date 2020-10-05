(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGameGamePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title><ion-icon name=\"game-controller-outline\"></ion-icon> Game</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>What is a comet?</ion-card-title>\n        </ion-card-header>\n\n        <ion-list>\n          <ion-radio-group>\n\n            <ion-item >\n                <ion-radio value=\"a\" slot=\"start\"></ion-radio>\n                <ion-text class = \"iteam_s\" slot=\"end\">A ball of dirty carbon dioxide and organic compounds iced with high eccentricities</ion-text>\n            </ion-item>\n\n            <ion-item>\n                <ion-radio value=\"b\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">A ball of dirty carbon hydroxide and organic compounds iced with low eccentricities</ion-text>\n            </ion-item>\n\n            <ion-item>\n                <ion-radio value=\"c\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">A ball of dirty carbon dioxide and organic compounds iced with low eccentricities</ion-text>\n            </ion-item>\n\n          </ion-radio-group>\n        </ion-list>\n        <ion-button expand=\"full\"  color=\"success\"><ion-icon name=\"checkbox-outline\"></ion-icon>Submit</ion-button>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>How is the head of the comet called?</ion-card-title>\n        </ion-card-header>\n\n        <ion-list>\n          <ion-radio-group>\n\n            <ion-item>\n                <ion-radio value=\"a\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">Coma</ion-text>\n            </ion-item>\n\n            <ion-item>\n                <ion-radio value=\"b\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">Nucleus</ion-text>\n            </ion-item>\n\n            <ion-item>\n                <ion-radio value=\"c\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">Dust tail</ion-text>\n            </ion-item>\n\n          </ion-radio-group>\n        </ion-list>\n        <ion-button expand=\"full\"  color=\"success\"><ion-icon name=\"checkbox-outline\"></ion-icon>Submit</ion-button>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>When does the plasma and dust tail start shining with it’s excited atoms?</ion-card-title>\n        </ion-card-header>\n\n        <ion-list>\n          <ion-radio-group>\n\n            <ion-item class = \"iteam_s\">\n                <ion-radio value=\"a\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">During orbit</ion-text>\n            </ion-item>\n\n            <ion-item>\n                <ion-radio value=\"b\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">At aphelion</ion-text>\n            </ion-item>\n\n            <ion-item>\n                <ion-radio value=\"c\" slot=\"start\"></ion-radio>\n                <ion-text slot=\"end\">At perihelion</ion-text>\n            </ion-item>\n\n          </ion-radio-group>\n        </ion-list>\n        <ion-button expand=\"full\"  color=\"success\"><ion-icon name=\"checkbox-outline\"></ion-icon>Submit</ion-button>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n            <ion-card-title>Card Title</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            Keep close to Nature's heart... and break clear away, once in awhile,\n            and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n            <ion-card-title>Card Title</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            Keep close to Nature's heart... and break clear away, once in awhile,\n            and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/game/game-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/game/game-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: GamePageRoutingModule */

    /***/
    function srcAppGameGameRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamePageRoutingModule", function () {
        return GamePageRoutingModule;
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


      var _game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./game.page */
      "./src/app/game/game.page.ts");

      var routes = [{
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_3__["GamePage"]
      }];

      var GamePageRoutingModule = function GamePageRoutingModule() {
        _classCallCheck(this, GamePageRoutingModule);
      };

      GamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GamePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/game/game.module.ts":
    /*!*************************************!*\
      !*** ./src/app/game/game.module.ts ***!
      \*************************************/

    /*! exports provided: GamePageModule */

    /***/
    function srcAppGameGameModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamePageModule", function () {
        return GamePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-routing.module */
      "./src/app/game/game-routing.module.ts");
      /* harmony import */


      var _game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game.page */
      "./src/app/game/game.page.ts");

      var GamePageModule = function GamePageModule() {
        _classCallCheck(this, GamePageModule);
      };

      GamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _game_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamePageRoutingModule"]],
        declarations: [_game_page__WEBPACK_IMPORTED_MODULE_6__["GamePage"]]
      })], GamePageModule);
      /***/
    },

    /***/
    "./src/app/game/game.page.scss":
    /*!*************************************!*\
      !*** ./src/app/game/game.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppGameGamePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content.background {\n  --background: linear-gradient(197deg, rgba(100,100,100,1) 0%, rgba(63,63,63,1) 13.5%, rgba(29,29,29,1) 33.33%, rgba(0,0,0,1) 100%) !important;\n}\n\n.option_button_l {\n  float: left;\n}\n\n.option_button_r {\n  float: right;\n}\n\n.iteam_s {\n  /*\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  */\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZJQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSTs7OztHQUFBO0VBS0EsaUJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5N2RlZywgcmdiYSgxMDAsMTAwLDEwMCwxKSAwJSwgcmdiYSg2Myw2Myw2MywxKSAxMy41JSwgcmdiYSgyOSwyOSwyOSwxKSAzMy4zMyUsIHJnYmEoMCwwLDAsMSkgMTAwJSkgIWltcG9ydGFudDtcbn1cbi5vcHRpb25fYnV0dG9uX2x7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ub3B0aW9uX2J1dHRvbl9ye1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5pdGVhbV9ze1xuICAgIC8qXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICovXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/game/game.page.ts":
    /*!***********************************!*\
      !*** ./src/app/game/game.page.ts ***!
      \***********************************/

    /*! exports provided: GamePage */

    /***/
    function srcAppGameGamePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamePage", function () {
        return GamePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GamePage = /*#__PURE__*/function () {
        function GamePage() {
          _classCallCheck(this, GamePage);
        }

        _createClass(GamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GamePage;
      }();

      GamePage.ctorParameters = function () {
        return [];
      };

      GamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./game.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./game.page.scss */
        "./src/app/game/game.page.scss"))["default"]]
      })], GamePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=game-game-module-es5.js.map