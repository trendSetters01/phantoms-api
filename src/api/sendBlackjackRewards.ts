import express, { Request, Response } from "express";
import { sendRewards } from "../algorand/transactionHelpers/sendReward";

const router = express.Router();

type SendRewardsResponse = { statusCode: number; txn: any };

router.post<{}, SendRewardsResponse>(
  "/send-phantoms-21-rewards",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "https://phantoms-ashy.vercel.app") {
      console.log(origin);
      return res.status(403).json();
    }

    const { to } = req.body;
    if(to === '6BAUSC2VDXRBL5SHYPEEJNLVQ5OMUTZBZTKDEE2F3B67FTCSLHKJBFP5XE'){
      return res.status(403).json();
    }
    const amount = Math.floor(Math.random() * 120) + 1;
    const txn = await sendRewards(
      to,
      (amount > 120 ? amount : 120) * 100000000,
      "1279721720"
    );

    res.json({ statusCode: res.statusCode, txn: txn });
  }
);

export default router;
