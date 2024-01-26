import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import sendCardsRPGRewards from "./sendRewards";
import sendBlackjackRewards from "./sendBlackjackRewards";
import checkDepositTx from "./checkDepositTx";
import SendSpinTheWheelRewards from "./sendSpinTheWheelRewards";
import CheckParticipant from "./checkParticipant";
import ClearSpinTheWheelParticipants from "./clearSpinTheWheelParticipants";
import raffle from "./raffle";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/", sendCardsRPGRewards);
router.use("/", sendBlackjackRewards);
router.use("/", SendSpinTheWheelRewards);
router.use("/", CheckParticipant);
router.use("/", ClearSpinTheWheelParticipants);
router.use("/", checkDepositTx);
// router.use('/', raffle);

export default router;
