import express, { Request, Response } from "express";

const router = express.Router();

type GetCardsRPGDeposit = { statusCode: number; txn: any };

router.get<{}, GetCardsRPGDeposit>(
  "/cards-rpg-deposit",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "https://phantoms-ashy.vercel.app") {
      console.log(origin);
      return res.status(403).json();
    }

    res.json({
      statusCode: 200,
      sendParams: {
        receiver: "JQONXCP7LYP2O2XQLOPBM6I67LBGCZGEZGHBRRBJBAJEWEIWIRIFZIPXIQ",
        amount: 2 * 1000000,
        assetId: "0", // '0' for ALGO
        note: `Phantoms Deposit: Cards RPG`,
      },
    });
  }
);

export default router;
