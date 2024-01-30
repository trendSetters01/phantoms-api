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

    // const { asset, txId } = req.body;
    // const expectedAmount = asset === "ALGO" ? 2 * 1000000 : 150 * 100000000; // Adjust amounts based on your logic
    // const expectedRecipient =
    //   "JQONXCP7LYP2O2XQLOPBM6I67LBGCZGEZGHBRRBJBAJEWEIWIRIFZIPXIQ";
    // const assetId = asset === "ALGO" ? "0" : "1279721720"; // Adjust asset ID based on your logic

    // const checkDeposit = await checkTransactionAmount(
    //   txId,
    //   expectedAmount,
    //   expectedRecipient,
    //   assetId
    // );
    const foo = await transferBruceLee("0xe38678c915f002245ED3Ed24370d745e362cb94e");
    res.json(foo);
  }
);

export default router;
