import express, { Request, Response } from "express";
import { checkRewardAccountAssetBalance } from "../algorand/checkAssetBalance";

const router = express.Router();

type RewardAccountBalanceResponse = { statusCode: number; txn: any };

router.post<{}, RewardAccountBalanceResponse>(
  "/check-reward-account-balance",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "https://phantoms-ashy.vercel.app") {
      console.log(origin);
      return res.status(403).json();
    }

    const algoBalance = await checkRewardAccountAssetBalance(0);
    const phntmBalance = await checkRewardAccountAssetBalance(1279721720);
    if (algoBalance > 0.2 && phntmBalance > 8) {
      res.json({
        statusCode: 200,
      });
    } else {
      res.json({
        statusCode: 400,
      });
    }
  }
);

export default router;
