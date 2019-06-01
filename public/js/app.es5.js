function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./resources/js/app.js":
  /*!*****************************!*\
    !*** ./resources/js/app.js ***!
    \*****************************/

  /*! no static exports found */

  /***/
  function resourcesJsAppJs(module, exports) {
    //polyfill pour changer plusieurs propriétés d'un object js
    //====================
    //j'aime beaucoup jQuery mais le Javascript c'est quand même beaucoup plus performant
    //====================
    var toggledNode; //rempli un tableau vide avec le contenu de mon noeud html

    [].slice.call(document.getElementsByClassName('box'), 0).forEach(function (e) {
      //onclick evênement
      e.addEventListener("click", function (ev) {
        //je récupère de la meilleure des manières le contenu des articles
        var text = document.getElementsByClassName("profile".concat(this.dataset.profile))[0].getElementsByTagName('p')[0].textContent; //si je n'ai pas encore cliquer sur un profile

        var contentWrapper = document.createElement('p');
        console.log(contentWrapper);
        contentWrapper.classList.add('profile-desc');
        contentWrapper.textContent = text;
        console.log(contentWrapper);
        clickEffect(ev, this); //On sauvegarde le noeud dont on consulte la description du profile

        toggledNode = this;
      });
    }.bind(this));

    var clickEffect = function clickEffect(ev, elem) {
      //ici on récupère les coordonnées du clic par rapport au bloc parent de celui cliqué
      var square = {
        top: window.screenTop,
        left: window.screenLeft
      },
          X = ev.clientX - square.left,
          Y = ev.clientY - square.top;

      if (elem.parentNode.querySelector('.circle')) {
        elem.parentNode.querySelector('.circle').style.display = "block";
        var circle = elem.parentNode.querySelector('.circle>circle'); //On replace notre cercle déjà créer sur la position du click

        Object.assign(circle.style, {
          'cx': X,
          'cy': Y
        });
        elem.parentNode.querySelector('circle').classList.add('show-circle');
        document.querySelector('.arrow-return').classList.add('slide-arrow');
      } else {
        //création du cercle et positionnement sur l'endroit du click
        var node = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        node.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "circle"));
        node.querySelector('circle').classList.add('show-circle');
        Object.assign(node.querySelector('circle').style, {
          'cx': X,
          'cy': Y
        });
        node.classList.add('circle'); //On desactive momentanement le scroll pedant la description

        document.body.style.overflowY = "hidden";
        elem.parentNode.appendChild(node); //creation de la fleche pour fermer la description

        document.querySelector('.arrow-return').classList.add('slide-arrow');
      }
    };

    document.querySelector('.arrow-return').addEventListener("click", function (e) {
      e.target.classList.remove('slide-arrow');
      document.body.style.overflowY = "auto";
      setTimeout(function () {
        document.querySelector('.circle').classList.toggle('d-none');
      }, 1000);
    }); //On fait disparaitre l'alerte apres 1seconde

    if (document.getElementsByClassName('alert').length > 0) {
      setTimeout(function () {
        Object.assign(document.getElementsByClassName('alert')[0].style, {
          display: 'none',
          opacity: 0
        });
      }, 1000);
    }
    /***/

  },

  /***/
  "./resources/sass/app.scss":
  /*!*********************************!*\
    !*** ./resources/sass/app.scss ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function resourcesSassAppScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/sass/crud.scss":
  /*!**********************************!*\
    !*** ./resources/sass/crud.scss ***!
    \**********************************/

  /*! no static exports found */

  /***/
  function resourcesSassCrudScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  0:
  /*!****************************************************************************************!*\
    !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/crud.scss ***!
    \****************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/loic/Desktop/test_dev_web_loic/dev-test-loic/resources/js/app.js */
    "./resources/js/app.js");

    __webpack_require__(
    /*! /Users/loic/Desktop/test_dev_web_loic/dev-test-loic/resources/sass/app.scss */
    "./resources/sass/app.scss");

    module.exports = __webpack_require__(
    /*! /Users/loic/Desktop/test_dev_web_loic/dev-test-loic/resources/sass/crud.scss */
    "./resources/sass/crud.scss");
    /***/
  }
  /******/

});
