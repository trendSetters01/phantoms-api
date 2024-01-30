import express, { Request, Response } from "express";
import checkTransactionAmount from "../algorand/transactionHelpers/checkTransactionAmount";
import { transferBruceLee } from "../polygon/transfernft";

const router = express.Router();

type GetDepositTXResponse = { statusCode: number; txn: any };

router.post<{}, GetDepositTXResponse>(
  "/transfer-bruce-lee",
  async (req: Request, res: Response) => {
    // const origin = req.get("origin");

    // if (origin !== "https://phantoms-ashy.vercel.app") {
    //   console.log(origin);
    //   return res.status(403).json();
    // }

    const { to } = req.body;

    const txhash = await transferBruceLee(`${to}`);
    res.json({ statusCode: 200, txhash });
  }
);

export default router;
