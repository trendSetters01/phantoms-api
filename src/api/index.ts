import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import sendCardsRPGRewards from "./sendRewards";
import sendBlackjackRewards from "./sendBlackjackRewards";
import checkDepositTx from "./checkDepositTx";
import SendSpinTheWheelRewards from "./sendSpinTheWheelRewards";
import CheckParticipant from "./checkParticipant";
import ClearSpinTheWheelParticipants from "./clearSpinTheWheelParticipants";
import GetParticipants from "./getParticipants";
import RewardAccountBalance from "./checkRewardAccountBalance";
import Transferbrucelee from "./transferbrucelee";
import GetCardsRPG from "./getCardsRPG";
import GetNFTRaffleParticipant from "./raffle/getNFTRaffleParticipant";
import ClearNFTRaffleParticipant from "./raffle/clearRaffleParticipants";
import checkRaffleDepositTx from "./raffle/checkRaffleDepositTx";

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
router.use("/", GetParticipants);
router.use("/", checkDepositTx);
router.use("/", RewardAccountBalance);
router.use("/", Transferbrucelee);
router.use("/", GetCardsRPG);
router.use("/", checkRaffleDepositTx);
router.use("/", GetNFTRaffleParticipant);
router.use("/", ClearNFTRaffleParticipant);

export default router;
