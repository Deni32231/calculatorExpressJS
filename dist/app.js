"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
const port = 3000;
app.use(routers_1.default);
app.listen(port, () => {
    console.log(`Server start on http://localhost:${port}/`);
});
