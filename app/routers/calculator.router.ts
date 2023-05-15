import express from "express";
import controller from "../controllers/calculator.controller";

const router = express.Router();

router.route("/add").get(controller.toAdd);
router.route("/subtract").get(controller.toSubtract);
router.route("/multiply").get(controller.toMultiply);
router.route("/divide").get(controller.toDivide);
router.route("/*").get(controller.universalReq);

export default router;
