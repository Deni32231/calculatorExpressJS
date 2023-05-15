"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calculator_controller_1 = __importDefault(require("../controllers/calculator.controller"));
const router = express_1.default.Router();
router.route("/add").get(calculator_controller_1.default.toAdd);
router.route("/subtract").get(calculator_controller_1.default.toSubtract);
router.route("/multiply").get(calculator_controller_1.default.toMultiply);
router.route("/divide").get(calculator_controller_1.default.toDivide);
router.route("/*").get(calculator_controller_1.default.universalReq);
exports.default = router;
