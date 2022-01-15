/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./db.ts":
/*!***************!*\
  !*** ./db.ts ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize(\"hlqpyvin\" || 0, \"hlqpyvin\" || 0, \"oGy-dNhZTE764sNY4QqHdJuxboXVvafE\" || 0, {\r\n    dialect: 'postgres',\r\n    host: \"batyr.db.elephantsql.com\",\r\n    port: Number(\"5432\" || 0),\r\n    omitNull: true\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sequelize);\r\n\n\n//# sourceURL=webpack://server/./db.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../db */ \"./db.ts\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _middleware_ErrorHandlingMiddleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middleware/ErrorHandlingMiddleware */ \"./src/middleware/ErrorHandlingMiddleware.ts\");\n\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst PORT = \"5000\";\r\nconst app = express__WEBPACK_IMPORTED_MODULE_2__();\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\r\napp.use(express__WEBPACK_IMPORTED_MODULE_2__.json());\r\napp.use(express__WEBPACK_IMPORTED_MODULE_2__[\"static\"](path__WEBPACK_IMPORTED_MODULE_7___default().resolve(__dirname, '..', 'static')));\r\napp.use(express_fileupload__WEBPACK_IMPORTED_MODULE_1___default()({}));\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({\r\n    extended: true\r\n}));\r\napp.use(\"/api\" || 0, _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\n// Обработка ошибок\r\napp.use(_middleware_ErrorHandlingMiddleware__WEBPACK_IMPORTED_MODULE_8__.ErrorHandlingMiddleware);\r\nconst start = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {\r\n    try {\r\n        yield _db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].authenticate();\r\n        yield _db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sync();\r\n        app.listen(PORT, () => console.log(`SERVER started on port http://localhost:${PORT}`));\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n    }\r\n});\r\nstart();\r\n\n\n//# sourceURL=webpack://server/./src/app.ts?");

/***/ }),

/***/ "./src/controllers/artistController/artistController.ts":
/*!**************************************************************!*\
  !*** ./src/controllers/artistController/artistController.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArtistController\": () => (/* binding */ ArtistController),\n/* harmony export */   \"artistController\": () => (/* binding */ artistController)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _validation_artist_artistRegistrationValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validation/artist/artistRegistrationValid */ \"./src/validation/artist/artistRegistrationValid.ts\");\n/* harmony import */ var _methods_addArtistMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/addArtistMethod */ \"./src/controllers/artistController/methods/addArtistMethod.ts\");\n\r\n\r\n\r\n\r\nclass ArtistController {\r\n    constructor() {\r\n        this.addArtist = _methods_addArtistMethod__WEBPACK_IMPORTED_MODULE_3__.addArtistMethod;\r\n        // async login(req: Request, res: Response, next: NextFunction) {\r\n        //   const { email, password } = req.body;\r\n        //   const user = await User.findOne({ where: { email } });\r\n        //   if (!user) {\r\n        //     return next(ApiError.internal('Пользователь с таким именем не найден'));\r\n        //   }\r\n        //\r\n        //   const userPassword = user.getDataValue('password');\r\n        //   const userId = user.getDataValue('id');\r\n        //   const userEmail = user.getDataValue('email');\r\n        //   const userRole = user.getDataValue('role');\r\n        //\r\n        //   const isPassword = bcrypt.compareSync(password, userPassword);\r\n        //\r\n        //   if (!isPassword) {\r\n        //     return next(ApiError.internal('Указан неверный пароль'));\r\n        //   }\r\n        //   const token = generateUserJwt(userId, userEmail, userRole);\r\n        //   return res.json(token);\r\n        // }\r\n        //\r\n        // async auth(req: Request, res: Response, next: NextFunction) {\r\n        //   const token = generateUserJwt(req.user.id, req.user.email, req.user.role);\r\n        //   res.json(token);\r\n        // }\r\n    }\r\n    registration(req, res, next) {\r\n        var _a;\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            const userRegData = {\r\n                userAvatar: ((_a = req === null || req === void 0 ? void 0 : req.files) === null || _a === void 0 ? void 0 : _a.avatar) || null,\r\n                userEmail: req.body.email,\r\n                userPassword: req.body.password,\r\n                userNickname: req.body.nickname\r\n            };\r\n            (0,_validation_artist_artistRegistrationValid__WEBPACK_IMPORTED_MODULE_2__.artistRegistrationValid)(next, userRegData, this.addArtist.bind(null, res));\r\n        });\r\n    }\r\n    static GenerateUserJwt(id, email, role) {\r\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({ id, email, role }, \"cytradovechera29\" || 0, {\r\n            expiresIn: '24h'\r\n        });\r\n    }\r\n}\r\nconst artistController = new ArtistController();\r\n\n\n//# sourceURL=webpack://server/./src/controllers/artistController/artistController.ts?");

/***/ }),

/***/ "./src/controllers/artistController/index.ts":
/*!***************************************************!*\
  !*** ./src/controllers/artistController/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"artistController\": () => (/* reexport safe */ _artistController__WEBPACK_IMPORTED_MODULE_0__.artistController)\n/* harmony export */ });\n/* harmony import */ var _artistController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artistController */ \"./src/controllers/artistController/artistController.ts\");\n\r\n\n\n//# sourceURL=webpack://server/./src/controllers/artistController/index.ts?");

/***/ }),

/***/ "./src/controllers/artistController/methods/addArtistMethod.ts":
/*!*********************************************************************!*\
  !*** ./src/controllers/artistController/methods/addArtistMethod.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addArtistMethod\": () => (/* binding */ addArtistMethod)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/models */ \"./src/models/models.ts\");\n/* harmony import */ var _artistController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artistController */ \"./src/controllers/artistController/artistController.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst addArtistMethod = (res, artistData) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {\r\n    const { password, email, avatar, nickname } = artistData;\r\n    const extname = path__WEBPACK_IMPORTED_MODULE_4___default().extname(avatar.name);\r\n    const filename = uuid__WEBPACK_IMPORTED_MODULE_5__.v4() + extname;\r\n    const hashPassword = yield bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 5);\r\n    const artist = yield _models_models__WEBPACK_IMPORTED_MODULE_2__.Artist.create({\r\n        email,\r\n        password: hashPassword,\r\n        nickname,\r\n        avatar: filename\r\n    });\r\n    const userId = artist.getDataValue('id');\r\n    const userEmail = artist.getDataValue('email');\r\n    const userRole = artist.getDataValue('role');\r\n    const jwtToken = _artistController__WEBPACK_IMPORTED_MODULE_3__.ArtistController.GenerateUserJwt(userId, userEmail, userRole);\r\n    return res.json(jwtToken);\r\n});\r\n\n\n//# sourceURL=webpack://server/./src/controllers/artistController/methods/addArtistMethod.ts?");

/***/ }),

/***/ "./src/error/ApiError.ts":
/*!*******************************!*\
  !*** ./src/error/ApiError.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiError\": () => (/* binding */ ApiError)\n/* harmony export */ });\nclass ApiError extends Error {\r\n    constructor(status, message) {\r\n        super();\r\n        this.status = status;\r\n        this.message = message;\r\n    }\r\n    static badRequest(message) {\r\n        return new ApiError(404, message);\r\n    }\r\n    static internal(message) {\r\n        return new ApiError(500, message);\r\n    }\r\n    static forbidden(message) {\r\n        return new ApiError(403, message);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://server/./src/error/ApiError.ts?");

/***/ }),

/***/ "./src/middleware/ErrorHandlingMiddleware.ts":
/*!***************************************************!*\
  !*** ./src/middleware/ErrorHandlingMiddleware.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorHandlingMiddleware\": () => (/* binding */ ErrorHandlingMiddleware)\n/* harmony export */ });\n/* harmony import */ var _error_ApiError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/ApiError */ \"./src/error/ApiError.ts\");\n\r\nconst ErrorHandlingMiddleware = (err, req, res, next) => {\r\n    if (err instanceof _error_ApiError__WEBPACK_IMPORTED_MODULE_0__.ApiError) {\r\n        return res.status(err.status).json({ message: err.message });\r\n    }\r\n    return res.status(500).json({ message: 'unknown Error' });\r\n};\r\n\n\n//# sourceURL=webpack://server/./src/middleware/ErrorHandlingMiddleware.ts?");

/***/ }),

/***/ "./src/middleware/authMiddleware.ts":
/*!******************************************!*\
  !*** ./src/middleware/authMiddleware.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authMiddleware\": () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst authMiddleware = (req, res, next) => {\r\n    var _a;\r\n    if (req.method === 'OPTIONS') {\r\n        next();\r\n    }\r\n    try {\r\n        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];\r\n        if (!token) {\r\n            return res.status(401).json({ message: 'Не авторизован' });\r\n        }\r\n        req.user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"cytradovechera29\" || 0);\r\n        next();\r\n    }\r\n    catch (e) {\r\n        res.status(401).json({ message: 'не авторизован' });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://server/./src/middleware/authMiddleware.ts?");

/***/ }),

/***/ "./src/models/models.ts":
/*!******************************!*\
  !*** ./src/models/models.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Artist\": () => (/* binding */ Artist),\n/* harmony export */   \"Song\": () => (/* binding */ Song)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"./db.ts\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst Artist = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('artist', {\r\n    id: {\r\n        type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.INTEGER,\r\n        unique: true,\r\n        autoIncrement: true,\r\n        primaryKey: true\r\n    },\r\n    email: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false },\r\n    password: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false },\r\n    nickname: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false },\r\n    avatar: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false },\r\n    role: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, defaultValue: 'USER' }\r\n});\r\nconst Song = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('song', {\r\n    id: {\r\n        type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.INTEGER,\r\n        unique: true,\r\n        autoIncrement: true,\r\n        primaryKey: true\r\n    },\r\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false },\r\n    img: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false },\r\n    artistName: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false },\r\n    artistId: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.NUMBER, allowNull: false },\r\n    src: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false }\r\n});\r\nArtist.hasMany(Song);\r\nSong.belongsTo(Artist);\r\n\n\n//# sourceURL=webpack://server/./src/models/models.ts?");

/***/ }),

/***/ "./src/routes/artistRouter.ts":
/*!************************************!*\
  !*** ./src/routes/artistRouter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_artistController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/artistController */ \"./src/controllers/artistController/index.ts\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst artistRouter = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();\r\nartistRouter.post('/registration', function (...args) {\r\n    _controllers_artistController__WEBPACK_IMPORTED_MODULE_0__.artistController.registration(...args);\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (artistRouter);\r\n\n\n//# sourceURL=webpack://server/./src/routes/artistRouter.ts?");

/***/ }),

/***/ "./src/routes/deviceRouter.ts":
/*!************************************!*\
  !*** ./src/routes/deviceRouter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n// import { deviceController } from '../controllers/deviceController';\r\n\r\nconst deviceRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n// deviceRouter.post('/', deviceController.create);\r\n// deviceRouter.get('/', deviceController.getList);\r\n// deviceRouter.get('/:id', deviceController.getItem);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deviceRouter);\r\n\n\n//# sourceURL=webpack://server/./src/routes/deviceRouter.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRouter */ \"./src/routes/userRouter.ts\");\n/* harmony import */ var _typeRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeRouter */ \"./src/routes/typeRouter.ts\");\n/* harmony import */ var _deviceRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deviceRouter */ \"./src/routes/deviceRouter.ts\");\n/* harmony import */ var _artistRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artistRouter */ \"./src/routes/artistRouter.ts\");\n/* harmony import */ var _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middleware/authMiddleware */ \"./src/middleware/authMiddleware.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\nrouter.use('/type', _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_5__.authMiddleware, _typeRouter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nrouter.use('/device', _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_5__.authMiddleware, _deviceRouter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nrouter.use('/user', _userRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nrouter.use('/artist', _artistRouter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://server/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/typeRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/typeRouter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\r\n// import { typeController } from '../controllers/typeController';\r\nconst typeRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n// typeRouter.post('/', typeController.create);\r\n// typeRouter.get('/', typeController.getList);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeRouter);\r\n\n\n//# sourceURL=webpack://server/./src/routes/typeRouter.ts?");

/***/ }),

/***/ "./src/routes/userRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/userRouter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst userRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n// userRouter.get('/auth', authMiddleware, userController.auth);\r\n// userRouter.post('/registration', userController.registration);\r\n// userRouter.post('/login', userController.login);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userRouter);\r\n\n\n//# sourceURL=webpack://server/./src/routes/userRouter.ts?");

/***/ }),

/***/ "./src/validation/artist/artistAvatarValid.ts":
/*!****************************************************!*\
  !*** ./src/validation/artist/artistAvatarValid.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"artistAvatarValid\": () => (/* binding */ artistAvatarValid)\n/* harmony export */ });\n/* harmony import */ var _error_ApiError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/ApiError */ \"./src/error/ApiError.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst ALLOWABLE_EXT = ['jpg', 'png'];\r\nconst artistAvatarValid = (avatar) => {\r\n    if (!avatar) {\r\n        return { avatar: null, err: _error_ApiError__WEBPACK_IMPORTED_MODULE_0__.ApiError.internal('Файл не добавлен') };\r\n    }\r\n    if (avatar instanceof Array) {\r\n        return {\r\n            avatar: null,\r\n            err: _error_ApiError__WEBPACK_IMPORTED_MODULE_0__.ApiError.internal('Добавлено несколько файлов, но требуется один')\r\n        };\r\n    }\r\n    const extname = path__WEBPACK_IMPORTED_MODULE_1___default().extname(avatar.name);\r\n    if (!!~ALLOWABLE_EXT.indexOf(extname)) {\r\n        return {\r\n            avatar: null,\r\n            err: _error_ApiError__WEBPACK_IMPORTED_MODULE_0__.ApiError.internal(`Допустимые расширения файла: ${ALLOWABLE_EXT.join(', ')}`)\r\n        };\r\n    }\r\n    return { avatar, err: null };\r\n};\r\n\n\n//# sourceURL=webpack://server/./src/validation/artist/artistAvatarValid.ts?");

/***/ }),

/***/ "./src/validation/artist/artistRegistrationValid.ts":
/*!**********************************************************!*\
  !*** ./src/validation/artist/artistRegistrationValid.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"artistRegistrationValid\": () => (/* binding */ artistRegistrationValid)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _artistAvatarValid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artistAvatarValid */ \"./src/validation/artist/artistAvatarValid.ts\");\n/* harmony import */ var _loginDataValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginDataValid */ \"./src/validation/artist/loginDataValid.ts\");\n/* harmony import */ var _nickNameValid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nickNameValid */ \"./src/validation/artist/nickNameValid.ts\");\n\r\n\r\n\r\n\r\nconst artistRegistrationValid = (next, fields, callback) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {\r\n    console.log('Валидация началась');\r\n    const { userAvatar, userPassword, userEmail, userNickname } = fields;\r\n    const { email, password, err: loginDataErr } = yield (0,_loginDataValid__WEBPACK_IMPORTED_MODULE_2__.loginDataValid)(userEmail, userPassword);\r\n    const { avatar, err: avatarErr } = (0,_artistAvatarValid__WEBPACK_IMPORTED_MODULE_1__.artistAvatarValid)(userAvatar);\r\n    const { nickname, err: nickNameErr } = yield (0,_nickNameValid__WEBPACK_IMPORTED_MODULE_3__.nickNameValid)(userNickname);\r\n    if (!avatar || avatarErr) {\r\n        return next(avatarErr);\r\n    }\r\n    if (!email || !password || loginDataErr) {\r\n        return next(loginDataErr);\r\n    }\r\n    if (!nickname || nickNameErr) {\r\n        return next(nickNameErr);\r\n    }\r\n    console.log('Проверки прошли');\r\n    callback({ avatar, email, password, nickname });\r\n});\r\n\n\n//# sourceURL=webpack://server/./src/validation/artist/artistRegistrationValid.ts?");

/***/ }),

/***/ "./src/validation/artist/loginDataValid.ts":
/*!*************************************************!*\
  !*** ./src/validation/artist/loginDataValid.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginDataValid\": () => (/* binding */ loginDataValid)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _error_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/ApiError */ \"./src/error/ApiError.ts\");\n/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ \"./src/models/models.ts\");\n\r\n\r\n\r\nconst loginDataValid = (email, password) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {\r\n    if (typeof email !== 'string') {\r\n        return {\r\n            email: null,\r\n            password: null,\r\n            err: _error_ApiError__WEBPACK_IMPORTED_MODULE_1__.ApiError.badRequest('Некорректный email или password')\r\n        };\r\n    }\r\n    if (typeof password !== 'string') {\r\n        return {\r\n            email: null,\r\n            password: null,\r\n            err: _error_ApiError__WEBPACK_IMPORTED_MODULE_1__.ApiError.badRequest('Некорректный email или password')\r\n        };\r\n    }\r\n    console.log('Пароль и email на месте');\r\n    const candidate = yield _models_models__WEBPACK_IMPORTED_MODULE_2__.Artist.findOne({ where: { email } });\r\n    console.log('CANDIDATE');\r\n    if (candidate) {\r\n        return {\r\n            email: null,\r\n            password: null,\r\n            err: _error_ApiError__WEBPACK_IMPORTED_MODULE_1__.ApiError.badRequest('Пользователь с таким email уже существует')\r\n        };\r\n    }\r\n    return { email, password, err: null };\r\n});\r\n\n\n//# sourceURL=webpack://server/./src/validation/artist/loginDataValid.ts?");

/***/ }),

/***/ "./src/validation/artist/nickNameValid.ts":
/*!************************************************!*\
  !*** ./src/validation/artist/nickNameValid.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nickNameValid\": () => (/* binding */ nickNameValid)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _error_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/ApiError */ \"./src/error/ApiError.ts\");\n/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ \"./src/models/models.ts\");\n\r\n\r\n\r\nconst nickNameValid = (nickname) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {\r\n    if (typeof nickname !== 'string') {\r\n        return {\r\n            nickname: null,\r\n            err: _error_ApiError__WEBPACK_IMPORTED_MODULE_1__.ApiError.badRequest('Некорректный никнейм')\r\n        };\r\n    }\r\n    const candidate = yield _models_models__WEBPACK_IMPORTED_MODULE_2__.Artist.findOne({ where: { nickname } });\r\n    if (candidate) {\r\n        return {\r\n            nickname: null,\r\n            err: _error_ApiError__WEBPACK_IMPORTED_MODULE_1__.ApiError.badRequest('Артист с таким никнеймом уже существует')\r\n        };\r\n    }\r\n    return { nickname, err: null };\r\n});\r\n\n\n//# sourceURL=webpack://server/./src/validation/artist/nickNameValid.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-fileupload");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;