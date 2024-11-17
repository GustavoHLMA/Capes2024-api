"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserTestRoutes_1 = __importDefault(require("./UserTestRoutes"));
const AuthRoutes_1 = __importDefault(require("./AuthRoutes"));
const ChatRoutes_1 = __importDefault(require("./ChatRoutes"));
const router = (0, express_1.Router)();
router.use('/userTest', UserTestRoutes_1.default);
router.use('/auth', AuthRoutes_1.default);
router.use('/chat', ChatRoutes_1.default);
router.route('/').get((_, res) => {
    res.status(200).send('The server is running');
});
exports.default = router;
