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

    const { to } = req.body;
    const amount = Math.floor(Math.random() * 200) + 1;
    const txn = await sendRewards(to, amount * 100000000, "1279721720");

    res.json({ statusCode: res.statusCode, txn: txn });
  }
);

export default router;
