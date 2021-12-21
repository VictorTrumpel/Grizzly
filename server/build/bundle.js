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

/***/ "./src/controllers/deviceController.ts":
/*!*********************************************!*\
  !*** ./src/controllers/deviceController.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeviceController\": () => (/* binding */ DeviceController),\n/* harmony export */   \"deviceController\": () => (/* binding */ deviceController)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models */ \"./src/models/models.ts\");\n/* harmony import */ var _error_ApiError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/ApiError */ \"./src/error/ApiError.ts\");\n\r\n\r\n\r\n\r\n\r\nclass DeviceController {\r\n    create(req, res, next) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            try {\r\n                const { name } = req.body;\r\n                const { img } = req.files || { img: null };\r\n                const device = yield _models_models__WEBPACK_IMPORTED_MODULE_3__.Device.findOne({ where: { name } });\r\n                if (!img) {\r\n                    return next(_error_ApiError__WEBPACK_IMPORTED_MODULE_4__.ApiError.internal('Файл не добавлен'));\r\n                }\r\n                if (img instanceof Array) {\r\n                    return next(_error_ApiError__WEBPACK_IMPORTED_MODULE_4__.ApiError.internal('Добавлено несколько файлов, но требуется один'));\r\n                }\r\n                if (device) {\r\n                    return next(_error_ApiError__WEBPACK_IMPORTED_MODULE_4__.ApiError.internal('Файл с таким именем уже имеется'));\r\n                }\r\n                const extname = path__WEBPACK_IMPORTED_MODULE_1___default().extname(img.name);\r\n                const filename = uuid__WEBPACK_IMPORTED_MODULE_2__.v4() + extname;\r\n                const newDevice = yield _models_models__WEBPACK_IMPORTED_MODULE_3__.Device.create({ name, img: filename });\r\n                img.mv(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, '..', 'static', filename));\r\n                return res.json(newDevice);\r\n            }\r\n            catch (e) {\r\n                next(_error_ApiError__WEBPACK_IMPORTED_MODULE_4__.ApiError.badRequest(e.message));\r\n            }\r\n        });\r\n    }\r\n    getList(req, res) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            const { name } = req.query;\r\n            const devices = yield _models_models__WEBPACK_IMPORTED_MODULE_3__.Device.findAll({ where: { name } });\r\n            return res.json(devices);\r\n        });\r\n    }\r\n    getItem(req, res) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            const { id } = req.params;\r\n            const device = yield _models_models__WEBPACK_IMPORTED_MODULE_3__.Device.findOne({ where: { id } });\r\n            res.json(device);\r\n        });\r\n    }\r\n}\r\nconst deviceController = new DeviceController();\r\n\n\n//# sourceURL=webpack://server/./src/controllers/deviceController.ts?");

/***/ }),

/***/ "./src/controllers/typeController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/typeController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeController\": () => (/* binding */ typeController)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models */ \"./src/models/models.ts\");\n\r\n\r\nclass TypeController {\r\n    create(req, res) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            try {\r\n                const { name } = req.body;\r\n                const type = yield _models_models__WEBPACK_IMPORTED_MODULE_1__.Type.create({ name });\r\n                return res.json(type);\r\n            }\r\n            catch (e) {\r\n                console.log(e);\r\n            }\r\n        });\r\n    }\r\n    getList(req, res) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            try {\r\n                const types = yield _models_models__WEBPACK_IMPORTED_MODULE_1__.Type.findAll();\r\n                return res.json(types);\r\n            }\r\n            catch (e) {\r\n                console.log(e);\r\n            }\r\n        });\r\n    }\r\n}\r\nconst typeController = new TypeController();\r\n\n\n//# sourceURL=webpack://server/./src/controllers/typeController.ts?");

/***/ }),

/***/ "./src/controllers/userController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/userController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserController\": () => (/* binding */ UserController),\n/* harmony export */   \"userController\": () => (/* binding */ userController)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _error_ApiError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/ApiError */ \"./src/error/ApiError.ts\");\n/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models */ \"./src/models/models.ts\");\n\r\n\r\n\r\n\r\n\r\nconst generateUserJwt = (id, email, role) => {\r\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({ id, email, role }, \"cytradovechera29\" || 0, {\r\n        expiresIn: '24h'\r\n    });\r\n};\r\nclass UserController {\r\n    registration(req, res, next) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            const { email, password, role } = req.body;\r\n            if (!email || !password) {\r\n                return next(_error_ApiError__WEBPACK_IMPORTED_MODULE_3__.ApiError.badRequest('Некорректный email или password'));\r\n            }\r\n            const candidate = yield _models_models__WEBPACK_IMPORTED_MODULE_4__.User.findOne({ where: { email } });\r\n            if (candidate) {\r\n                return next(_error_ApiError__WEBPACK_IMPORTED_MODULE_3__.ApiError.badRequest('Пользователь с таким email уже существует'));\r\n            }\r\n            const hashPassword = yield bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 5);\r\n            const user = yield _models_models__WEBPACK_IMPORTED_MODULE_4__.User.create({\r\n                email,\r\n                role,\r\n                password: hashPassword\r\n            });\r\n            const userId = user.getDataValue('id');\r\n            const userEmail = user.getDataValue('email');\r\n            const userRole = user.getDataValue('role');\r\n            yield _models_models__WEBPACK_IMPORTED_MODULE_4__.Basket.create({ userId, name: `basket-${userId}` });\r\n            const jwtToken = generateUserJwt(userId, userEmail, userRole);\r\n            return res.json(jwtToken);\r\n        });\r\n    }\r\n    login(req, res, next) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            const { email, password } = req.body;\r\n            const user = yield _models_models__WEBPACK_IMPORTED_MODULE_4__.User.findOne({ where: { email } });\r\n            if (!user) {\r\n                return next(_error_ApiError__WEBPACK_IMPORTED_MODULE_3__.ApiError.internal('Пользователь с таким именем не найден'));\r\n            }\r\n            const userPassword = user.getDataValue('password');\r\n            const userId = user.getDataValue('id');\r\n            const userEmail = user.getDataValue('email');\r\n            const userRole = user.getDataValue('role');\r\n            const isPassword = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(password, userPassword);\r\n            if (!isPassword) {\r\n                return next(_error_ApiError__WEBPACK_IMPORTED_MODULE_3__.ApiError.internal('Указан неверный пароль'));\r\n            }\r\n            const token = generateUserJwt(userId, userEmail, userRole);\r\n            return res.json(token);\r\n        });\r\n    }\r\n    auth(req, res, next) {\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\r\n            const token = generateUserJwt(req.user.id, req.user.email, req.user.role);\r\n            res.json(token);\r\n        });\r\n    }\r\n}\r\nconst userController = new UserController();\r\n\n\n//# sourceURL=webpack://server/./src/controllers/userController.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User),\n/* harmony export */   \"Basket\": () => (/* binding */ Basket),\n/* harmony export */   \"BasketDevice\": () => (/* binding */ BasketDevice),\n/* harmony export */   \"Device\": () => (/* binding */ Device),\n/* harmony export */   \"Type\": () => (/* binding */ Type),\n/* harmony export */   \"Brand\": () => (/* binding */ Brand),\n/* harmony export */   \"DeviceInfo\": () => (/* binding */ DeviceInfo),\n/* harmony export */   \"TypeBrand\": () => (/* binding */ TypeBrand)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"./db.ts\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst User = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('user', {\r\n    id: {\r\n        type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.INTEGER,\r\n        unique: true,\r\n        autoIncrement: true,\r\n        primaryKey: true\r\n    },\r\n    email: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true },\r\n    password: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING },\r\n    role: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, defaultValue: 'USER' }\r\n});\r\nconst Basket = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('basket', {\r\n    userId: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.INTEGER, unique: true, allowNull: false },\r\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false }\r\n});\r\nconst BasketDevice = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('basket_device', {\r\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false }\r\n});\r\nconst Device = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('device', {\r\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false },\r\n    img: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false }\r\n});\r\nconst Type = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('type', {\r\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false }\r\n});\r\nconst Brand = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('type', {\r\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false }\r\n});\r\nconst DeviceInfo = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('device_info', {\r\n    title: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false },\r\n    description: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, allowNull: false }\r\n});\r\nconst TypeBrand = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].define('type_brand', {\r\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes.STRING, unique: true, allowNull: false }\r\n});\r\nUser.hasOne(Basket);\r\nBasket.belongsTo(User);\r\nBasket.hasMany(BasketDevice);\r\nBasketDevice.belongsTo(Basket);\r\nType.hasMany(Device);\r\nDevice.belongsTo(Type);\r\nBrand.hasMany(Device);\r\nDevice.belongsTo(Brand);\r\nDevice.hasMany(BasketDevice);\r\nBasketDevice.belongsTo(Device);\r\nType.belongsToMany(Brand, { through: TypeBrand });\r\nBrand.belongsToMany(Type, { through: TypeBrand });\r\n\n\n//# sourceURL=webpack://server/./src/models/models.ts?");

/***/ }),

/***/ "./src/routes/deviceRouter.ts":
/*!************************************!*\
  !*** ./src/routes/deviceRouter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_deviceController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/deviceController */ \"./src/controllers/deviceController.ts\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst deviceRouter = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();\r\ndeviceRouter.post('/', _controllers_deviceController__WEBPACK_IMPORTED_MODULE_0__.deviceController.create);\r\ndeviceRouter.get('/', _controllers_deviceController__WEBPACK_IMPORTED_MODULE_0__.deviceController.getList);\r\ndeviceRouter.get('/:id', _controllers_deviceController__WEBPACK_IMPORTED_MODULE_0__.deviceController.getItem);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deviceRouter);\r\n\n\n//# sourceURL=webpack://server/./src/routes/deviceRouter.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRouter */ \"./src/routes/userRouter.ts\");\n/* harmony import */ var _typeRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeRouter */ \"./src/routes/typeRouter.ts\");\n/* harmony import */ var _deviceRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deviceRouter */ \"./src/routes/deviceRouter.ts\");\n/* harmony import */ var _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware/authMiddleware */ \"./src/middleware/authMiddleware.ts\");\n\r\n\r\n\r\n\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\nrouter.use('/type', _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_4__.authMiddleware, _typeRouter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nrouter.use('/device', _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_4__.authMiddleware, _deviceRouter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nrouter.use('/user', _userRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://server/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/typeRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/typeRouter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_typeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/typeController */ \"./src/controllers/typeController.ts\");\n\r\n\r\nconst typeRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\ntypeRouter.post('/', _controllers_typeController__WEBPACK_IMPORTED_MODULE_1__.typeController.create);\r\ntypeRouter.get('/', _controllers_typeController__WEBPACK_IMPORTED_MODULE_1__.typeController.getList);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeRouter);\r\n\n\n//# sourceURL=webpack://server/./src/routes/typeRouter.ts?");

/***/ }),

/***/ "./src/routes/userRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/userRouter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/userController */ \"./src/controllers/userController.ts\");\n/* harmony import */ var _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/authMiddleware */ \"./src/middleware/authMiddleware.ts\");\n\r\n\r\n\r\nconst userRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\nuserRouter.get('/auth', _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_2__.authMiddleware, _controllers_userController__WEBPACK_IMPORTED_MODULE_1__.userController.auth);\r\nuserRouter.post('/registration', _controllers_userController__WEBPACK_IMPORTED_MODULE_1__.userController.registration);\r\nuserRouter.post('/login', _controllers_userController__WEBPACK_IMPORTED_MODULE_1__.userController.login);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userRouter);\r\n\n\n//# sourceURL=webpack://server/./src/routes/userRouter.ts?");

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