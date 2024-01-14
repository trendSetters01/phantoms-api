import express, { Request, Response } from "express";
import { sendRewards } from "../algorand/transactionHelpers/sendReward";

const router = express.Router();

type SendRewardsResponse = { statusCode: number; txn: any };

router.post<{}, SendRewardsResponse>(
  "/send-rewards",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "http://localhost:3000") {
      console.log(origin);
      return res.status(403).json();
    }

    const { to, amount, assetId } = req.body;

    const txn = await sendRewards(to, amount, assetId);

    res.json({ statusCode: res.statusCode, txn: txn });
  }
);

export default router;
