/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/Body.js":
/*!************************!*\
  !*** ./source/Body.js ***!
  \************************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Body\", function() { return Body; });\n/* harmony import */ var _Label_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.js */ \"./source/Label.js\");\n\r\n\r\nfunction Body(args) {\r\n\tthis.mesh = new THREE.Mesh(\r\n\t\tnew THREE.SphereGeometry( args.radius, 32, 32 ),\r\n\t\t// new THREE.BoxGeometry( 4, 4, 1, 1 ),\r\n\t\tnew THREE.MeshBasicMaterial( { color: args.color, wireframe: false, side: THREE.DoubleSide } ),\r\n\t\t// new THREE.MeshBasicMaterial( { color: 0x00aa00, wireframe: false, side: THREE.DoubleSide } ),\r\n\t)\r\n\r\n\tthis.mesh.position.copy( args.coords )\r\n\r\n\tthis.label = new _Label_js__WEBPACK_IMPORTED_MODULE_0__[\"Label\"]( {\r\n\t\ttext: args.name,\r\n\t} )\r\n\r\n\r\n\tthis.label.sprite.position.addVectors( this.mesh.position, new THREE.Vector3( 0, 0, 0 ) )\r\n\r\n\t// this.group = new THREE.Group()\r\n\t// this.group.add( this.mesh );\r\n\t// this.group.add( this.label );\r\n\t// scene.add( this.group );\r\n\r\n\tthis.update = function () {\r\n\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./source/Body.js?");

/***/ }),

/***/ "./source/Label.js":
/*!*************************!*\
  !*** ./source/Label.js ***!
  \*************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\nfunction Label(args) {\r\n\tvar canvas = document.createElement(\"canvas\")\r\n\tcanvas.width = 256\r\n\tcanvas.height = 256\r\n\t// document.body.appendChild(canvas)\r\n\tvar ctx = canvas.getContext(\"2d\")\r\n\r\n\tctx.font = \"48px serif\";\r\n\r\n\tctx.fillStyle = \"rgba(255, 0, 0, 0.5)\"\r\n\tctx.fillRect(0, 0, 256, 256/4)\r\n\r\n\t// ctx.fillStyle = \"blue\";\r\n\r\n\tctx.fillStyle = \"green\";\r\n\tctx.textAlign = \"center\"\r\n\tctx.textBaseline = \"middle\"\r\n\tctx.fillText(args.text, 256/2, 25)\r\n\r\n\t// var spriteMap = new THREE.TextureLoader().load( \"../assets/textures/crate.jpg\" );\r\n\r\n\tvar spriteMap = new THREE.Texture(canvas)\r\n\tspriteMap.needsUpdate = true\r\n\tvar spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });\r\n\tthis.sprite = new THREE.Sprite(spriteMaterial)\r\n}\r\n\n\n//# sourceURL=webpack:///./source/Label.js?");

/***/ }),

/***/ "./source/Ship.js":
/*!************************!*\
  !*** ./source/Ship.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Ship( args ) {\r\n\tobjects.push( this )\r\n\r\n\tthis.velocity = new THREE.Vector3( 0, 0, 0 )\r\n\r\n\tthis.mesh = new THREE.Mesh(\r\n\t\t// new THREE.SphereGeometry( args.radius, 32, 32 ),\r\n\t\tnew THREE.BoxGeometry( 1, 2, 1, 1 ),\r\n\t\tnew THREE.MeshBasicMaterial( { color: 0xaaaaaa, wireframe: false, side: THREE.DoubleSide } ),\r\n\t)\r\n\r\n\tscene.add( this.mesh )\r\n\r\n\tthis.update = function () {\r\n\t\tthis.mesh.position.add( this.velocity )\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./source/Ship.js?");

/***/ }),

/***/ "./source/Station.js":
/*!***************************!*\
  !*** ./source/Station.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Station( args ) {\r\n\tthis.mesh = new THREE.Mesh(\r\n\t\tnew THREE.SphereGeometry( args.radius, 32, 32 ),\r\n\t\t// new THREE.BoxGeometry( 0.1, 0.1, 0.1 ),\r\n\t\tnew THREE.MeshBasicMaterial( { color: 0xaaaaaa, wireframe: false, side: THREE.DoubleSide } ),\r\n\t)\r\n\r\n\tthis.mesh.position.copy( args.coords )\r\n\tscene.add( this.mesh )\r\n\r\n\tthis.label = new Label( {\r\n\t\ttext: args.name,\r\n\t} )\r\n\tscene.add( this.label.sprite )\r\n\r\n\tthis.label.sprite.position.addVectors( this.mesh.position, new THREE.Vector3( 0, 0, 0 ) )\r\n\r\n\tthis.update = function () {\r\n\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./source/Station.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Label_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.js */ \"./source/Label.js\");\n/* harmony import */ var _Body_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body.js */ \"./source/Body.js\");\n/* harmony import */ var _Station_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Station.js */ \"./source/Station.js\");\n/* harmony import */ var _Station_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Station_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship.js */ \"./source/Ship.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Ship_js__WEBPACK_IMPORTED_MODULE_3__);\n//\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar myImage = document.querySelector('img')\r\n\r\n\r\n\r\nvar entities\r\nfetch( \"data/bodies.json\" ).then( response => {\r\n\treturn response.json()\r\n} ).then( json => {\r\n\tentities = json\r\n\tstart()\r\n} )\r\n\r\nconst scene = new THREE.Scene()\r\nconst camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 100000 )\r\n// const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, -10, 1000 )\r\nscene.add( camera )\r\ncamera.position.set( 5, 3, 5 )\r\n\r\n// const renderer = new THREE.WebGLRenderer( { alpha: true } )\r\nconst renderer = new THREE.WebGLRenderer()\r\nrenderer.setSize( window.innerWidth, window.innerHeight )\r\ndocument.body.appendChild( renderer.domElement )\r\n\r\n// document.addEventListener(\"click\", function () {\r\n// \tdocument.documentElement.webkitRequestFullscreen()\r\n// })\r\n\r\n// document.addEventListener(\"webkitfullscreenchange\", function () {\r\n// \tconsole.log(\"webkitfullscreenchange\")\r\n// })\r\n// document.addEventListener(\"mozfullscreenchange\", function () {\r\n// \tconsole.log(\"mozfullscreenchange\")\r\n// })\r\n// document.addEventListener(\"fullscreenchange\", function () {\r\n// \tconsole.log(\"fullscreenchange\")\r\n// })\r\n//\r\n// document.addEventListener(\"webkitfullscreenchange\", function () {\r\n// \tif (!document.webkitFullscreenElement) {\r\n// \t\tfullscreenButton.style.display = \"block\"\r\n// \t} else {\r\n// \t\tfullscreenButton.style.display = \"none\"\r\n// \t}\r\n// })\r\n\r\n// function toggleFullScreen() {\r\n// \tif (!document.webkitFullscreenElement) {\r\n// \t\tdocument.documentElement.webkitRequestFullscreen()\r\n// \t} else {\r\n// \t\tdocument.webkitExitFullscreen()\r\n// \t}\r\n// }\r\n//\r\n// var fullscreenButton = document.querySelector(\"#fullscreen-button\")\r\n// fullscreenButton.addEventListener(\"click\", function () {\r\n// \ttoggleFullScreen()\r\n// })\r\n\r\nconst controls = new THREE.OrbitControls(camera)\r\n\r\nconst colors = [\r\n\t\"#FFFFFF\",\r\n\t// \"#FFFFFF\",\r\n\t// \"#FFFFFF\",\r\n\t\"#FFCCCC\",\r\n\t\"#CCFFFF\",\r\n\t\"#CCCCFF\",\r\n]\r\n\r\nvar loader = new THREE.CubeTextureLoader()\r\nloader.setPath( '/assets/cube_textures/space/' )\r\n\r\nvar textureCube = loader.load( [\r\n\t\"r.png\", \"l.png\", // 'px.png', 'nx.png',\r\n\t\"t.png\", \"b.png\", // 'py.png', 'ny.png',\r\n\t\"c.png\", \"rr.png\", // 'pz.png', 'nz.png',\r\n] )\r\n\r\nvar material = new THREE.MeshBasicMaterial( { color: 0xffff00, envMap: textureCube } )\r\nscene.background = textureCube\r\n// scene.background = new THREE.Color( 0x0000ff )\r\n\r\nlet objects = []\r\n\r\nfunction parseCoords( coords ) {\r\n\tvar result = coords.split( \":\" )\r\n\tvar name = result[ 1 ]\r\n\treturn new THREE.Vector3( result[2], result[3], result[4] )\r\n}\r\n\r\nvar originVec\r\n\r\n// @todo\r\nfunction setOrigin( coords ) {\r\n\tif ( typeof vec === \"string\" ) {\r\n\t\toriginVec = parseCoords( coords )\r\n\t} else {\r\n\t\toriginVec = coords\r\n\t}\r\n\t// reposition things\r\n}\r\n\r\nsetOrigin( new THREE.Vector3( 0, 0, 0 ) )\r\n\r\nvar scale = 1/1000000\r\n\r\nfunction convertCoords(vec) {\r\n\treturn vec.clone().sub( originVec ).multiplyScalar( scale )\r\n}\r\n\r\n// var geometry = new THREE.BoxGeometry( 1, 1, 1 )\r\n//\r\n// var material = new THREE.LineDashedMaterial({\r\n// \tcolor: utils.randomColor(),\r\n// \tlinewidth: 1,\r\n// \tscale: 1,\r\n// \tdashSize: 0.1,\r\n// \tgapSize: 0.05,\r\n// })\r\n// geometry.computeLineDistances();\r\n// var line = new THREE.Line(geometry, material)\r\n// scene.add(line)\r\n\r\nfunction start() {\r\n\t// console.log( entities )\r\n\tfor ( let entity of entities ) {\r\n\t\t// console.log( entity )\r\n\t\tswitch ( entity.category ) {\r\n\t\t\tcase \"asteroid\":\r\n\t\t\t\tvar tmp = new _Body_js__WEBPACK_IMPORTED_MODULE_1__[\"Body\"]( {\r\n\t\t\t\t\t// color: utils.chooseColor(),\r\n\t\t\t\t\tcolor: new THREE.Color( \"gray\" ),\r\n\t\t\t\t\tradius: entity.radius * scale,\r\n\t\t\t\t\tcoords: convertCoords( parseCoords( entity.coords ) ),\r\n\t\t\t\t\tname: entity.tag,\r\n\t\t\t\t} )\r\n\t\t\t\tobjects.push( tmp )\r\n\t\t\t\tbreak\r\n\t\t\tcase \"station\":\r\n\t\t\t\tvar tmp = new _Body_js__WEBPACK_IMPORTED_MODULE_1__[\"Body\"]( {\r\n\t\t\t\t\t// color: utils.chooseColor(),\r\n\t\t\t\t\tcolor: new THREE.Color( entity.color ),\r\n\t\t\t\t\tradius: entity.radius * scale,\r\n\t\t\t\t\tcoords: convertCoords( parseCoords( entity.coords ) ),\r\n\t\t\t\t\tname: entity.tag,\r\n\t\t\t\t} )\r\n\t\t\t\tobjects.push( tmp )\r\n\t\t\t\tbreak\r\n\t\t\tcase \"planet\":\r\n\t\t\t\tvar tmp = new _Body_js__WEBPACK_IMPORTED_MODULE_1__[\"Body\"]( {\r\n\t\t\t\t\tcolor: new THREE.Color( entity.color ),\r\n\t\t\t\t\tradius: entity.radius * scale,\r\n\t\t\t\t\tcoords: convertCoords( parseCoords( entity.coords ) ),\r\n\t\t\t\t\tname: entity.name,\r\n\t\t\t\t} )\r\n\t\t\t\tobjects.push( tmp )\r\n\t\t\t\tscene.add( tmp.mesh )\r\n\t\t\t\tscene.add( tmp.label.sprite )\r\n\t\t\t\tbreak\r\n\t\t\tcase \"moon\":\r\n\t\t\t\tvar tmp = new _Body_js__WEBPACK_IMPORTED_MODULE_1__[\"Body\"]( {\r\n\t\t\t\t\tcolor: new THREE.Color( entity.color ),\r\n\t\t\t\t\tradius: entity.radius * scale,\r\n\t\t\t\t\tcoords: convertCoords( parseCoords( entity.coords ) ),\r\n\t\t\t\t\tname: entity.name,\r\n\t\t\t\t} )\r\n\t\t\t\tobjects.push( tmp )\r\n\t\t\t\tscene.add( tmp.mesh )\r\n\t\t\t\tscene.add( tmp.label.sprite )\r\n\r\n\t\t\t\t// var material = new THREE.LineBasicMaterial({\r\n\t\t\t\t// \tcolor: 0x0000ff\r\n\t\t\t\t// });\r\n\t\t\t\t// var material = new THREE.LineBasicMaterial({\r\n\t\t\t\t// \t// color: 0xffffff,\r\n\t\t\t\t// \tcolor: utils.randomColor(),\r\n\t\t\t\t// \tlinewidth: 10,\r\n\t\t\t\t// })\r\n\t\t\t\tvar material = new THREE.LineDashedMaterial( {\r\n\t\t\t\t\tcolor: utils.randomColor(),\r\n\t\t\t\t\tlinewidth: 10,\r\n\t\t\t\t\tscale: 1,\r\n\t\t\t\t\tdashSize: 0.1,\r\n\t\t\t\t\tgapSize: 0.025,\r\n\t\t\t\t} )\r\n\r\n\t\t\t\tvar geometry = new THREE.Geometry()\r\n\r\n\t\t\t\tvar orbitBody = entities.find( e => e.name == entity.orbits )\r\n\r\n\t\t\t\tgeometry.vertices.push(\r\n\t\t\t\t\tconvertCoords( parseCoords( entity.coords ) ),\r\n\t\t\t\t\tconvertCoords( parseCoords( orbitBody.coords ) ),\r\n\t\t\t\t)\r\n\t\t\t\tgeometry.computeLineDistances()\r\n\r\n\t\t\t\tvar line = new THREE.Line( geometry, material )\r\n\t\t\t\tscene.add( line )\r\n\r\n\t\t\t\tbreak\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// var plane = new THREE.Mesh(\r\n// \tnew THREE.PlaneGeometry( 10, 10, 10, 10 ),\r\n// \tnew THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, side: THREE.DoubleSide }),\r\n// )\r\n// scene.add( plane )\r\n// plane.rotation.x = Math.PI/2\r\n\r\n// var axisHelper = new THREE.AxisHelper( 5 )\r\n// scene.add( axisHelper )\r\n\r\n// colorCenterLine, colorGrid\r\n// var gridHelper = new THREE.GridHelper( 10, 10 )\r\n// var gridHelper = new THREE.GridHelper( 100, 100, new THREE.Color(\"rgb(100%, 100%, 0%)\"), new THREE.Color(\"rgb(100%, 0%, 0%)\") )\r\n// scene.add( gridHelper )\r\n\r\nfunction update() {\r\n\tfor ( let object of objects ) {\r\n\t\tobject.update()\r\n\t}\r\n}\r\nsetInterval(update, 10)\r\n\r\nfunction render() {\r\n\trequestAnimationFrame( render )\r\n\trenderer.render( scene, camera )\r\n\tcontrols.update()\r\n\tfor ( let object of objects ) {\r\n\t\t// object.update()\r\n\t}\r\n}\r\nrequestAnimationFrame( render )\r\n\r\nfunction onWindowResize() {\r\n\tcamera.aspect = window.innerWidth / window.innerHeight;\r\n\tcamera.updateProjectionMatrix();\r\n\trenderer.setSize( window.innerWidth, window.innerHeight );\r\n}\r\nwindow.addEventListener( 'resize', onWindowResize, false );\r\n\n\n//# sourceURL=webpack:///./source/index.js?");

/***/ })

/******/ });