import express from "express";

import calculator from "./calculator.router";

const router = express.Router();

router.use(calculator);

export default router;
