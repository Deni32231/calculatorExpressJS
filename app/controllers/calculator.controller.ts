import { Request, Response } from "express";
import calculatorModel from "../models/calculator.model";

const toAdd = (req: Request, res: Response) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a)) {
      throw "a - не число";
    }

    if (isNaN(b)) {
      throw "b - не число";
    }

    const result = calculatorModel.toAdd(a, b);

    return res.json({ result });
  } catch (err) {
    res.json(err);
  }
};

const toSubtract = (req: Request, res: Response) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a)) {
      throw "a - не число";
    }

    if (isNaN(b)) {
      throw "b - не число";
    }

    const result = calculatorModel.toSubtract(a, b);

    return res.json({ result });
  } catch (err) {
    res.json(err);
  }
};

const toMultiply = (req: Request, res: Response) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a)) {
      throw "a - не число";
    }

    if (isNaN(b)) {
      throw "b - не число";
    }

    const result = calculatorModel.toMultiply(a, b);

    return res.json({ result });
  } catch (err) {
    res.json(err);
  }
};

const toDivide = (req: Request, res: Response) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a)) {
      throw "a - не число";
    }

    if (isNaN(b)) {
      throw "b - не число";
    }

    const result = calculatorModel.toDivide(a, b);

    return res.json({ result });
  } catch (err) {
    res.json(err);
  }
};

const universalReq = (req: Request, res: Response) => {
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
        result = calculatorModel.toAdd(a, b);
        break;
      case "-":
        result = calculatorModel.toSubtract(a, b);
        break;
      case "*":
        result = calculatorModel.toMultiply(a, b);
        break;
      case "/":
        result = calculatorModel.toDivide(a, b);
        break;
      default:
        throw "операция не найдена";
    }

    return res.json(result);
  } catch (err) {
    res.json(err);
  }
};

export default { toAdd, toSubtract, toMultiply, toDivide, universalReq };
