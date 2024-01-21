import express, { Request, Response } from "express";
import checkTransactionAmount from "../algorand/transactionHelpers/checkTransactionAmount";

const router = express.Router();

type GetDepositTXResponse = { statusCode: number; txn: any };

router.post<{}, GetDepositTXResponse>(
  "/check-deposit-tx",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "https://phantoms-ashy.vercel.app") {
      console.log(origin);
      return res.status(403).json();
    }

    const { asset, txId } = req.body;
    const checkDeposit = await checkTransactionAmount(
      txId,
      asset === "ALGO" ? 2 * 1000000 : 150 * 100000000,
      "JQONXCP7LYP2O2XQLOPBM6I67LBGCZGEZGHBRRBJBAJEWEIWIRIFZIPXIQ",
      asset === "ALGO" ? "0" : "1279721720"
    );

    res.json(checkDeposit);
  }
);

export default router;
