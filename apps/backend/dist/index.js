"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("@repo/common/config");
const app = (0, express_1.default)();
app.get('/', (_req, res) => {
    res.send(`Welcome to ${config_1.BackendURL}`);
});
console.log('BackendURL=>', config_1.BackendURL);
const PORT = process.env.PORT || 3008; // Use the port provided by the environment or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
