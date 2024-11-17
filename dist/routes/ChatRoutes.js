"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ChatController_1 = __importDefault(require("../controllers/ChatController"));
const chatRouter = (0, express_1.Router)();
// Define a rota para o chat
chatRouter.post('/', ChatController_1.default.sendMessage);
chatRouter.route('/').get((_, res) => {
    res.status(200).send('The chat server is running');
});
exports.default = chatRouter;
