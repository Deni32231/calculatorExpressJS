"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_model_1 = __importDefault(require("../models/calculator.model"));
const toAdd = (req, res) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        if (isNaN(a)) {
            throw "a - не число";
        }
        if (isNaN(b)) {
            throw "b - не число";
        }
        const result = calculator_model_1.default.toAdd(a, b);
        return res.json({ result });
    }
    catch (err) {
        res.json(err);
    }
};
const toSubtract = (req, res) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        if (isNaN(a)) {
            throw "a - не число";
        }
        if (isNaN(b)) {
            throw "b - не число";
        }
        const result = calculator_model_1.default.toSubtract(a, b);
        return res.json({ result });
    }
    catch (err) {
        res.json(err);
    }
};
const toMultiply = (req, res) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        if (isNaN(a)) {
            throw "a - не число";
        }
        if (isNaN(b)) {
            throw "b - не число";
        }
        const result = calculator_model_1.default.toMultiply(a, b);
        return res.json({ result });
    }
    catch (err) {
        res.json(err);
    }
};
const toDivide = (req, res) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        if (isNaN(a)) {
            throw "a - не число";
        }
        if (isNaN(b)) {
            throw "b - не число";
        }
        const result = calculator_model_1.default.toDivide(a, b);
        return res.json({ result });
    }
    catch (err) {
        res.json(err);
    }
};
const universalReq = (req, res) => {
    try {
        const request = req.url;
        const requestUrl = request.slice(1);
        console.log(requestUrl);
        const hasOperator = requestUrl.match(/[*+/-]/);
        console.log(hasOperator);
        if (!hasOperator) {
            return res.status(400).json({ message: "запрос должен быть вида - a+b" });
        }
        const operator = hasOperator[0];
        if (!requestUrl.match(/\d/g)) {
        }
        const numbersArray = requestUrl.match(/\d+\.*\d*/g);
        if (!numbersArray) {
            return res.status(400).json({ message: "запрос должен быть вида - a+b" });
        }
        const a = Number(numbersArray[0]);
        const b = Number(numbersArray[1]);
        let result;
        switch (operator) {
            case "+":
                result = calculator_model_1.default.toAdd(a, b);
                break;
            case "-":
                result = calculator_model_1.default.toSubtract(a, b);
                break;
            case "*":
                result = calculator_model_1.default.toMultiply(a, b);
                break;
            case "/":
                result = calculator_model_1.default.toDivide(a, b);
                break;
            default:
                throw "операция не найдена";
        }
        return res.json(result);
    }
    catch (err) {
        res.json(err);
    }
};
exports.default = { toAdd, toSubtract, toMultiply, toDivide, universalReq };
