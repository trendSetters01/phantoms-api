import express, { Request, Response } from "express";

import fs from "fs";
import path from "path";
import { checkAddressContainsPhantomV1NFT } from "../algorand/transactionHelpers/checkForV1NFT";
import { checkPHNTMHolding } from "../algorand/transactionHelpers/checkPHNTMHolding";

const dataPath = path.join(__dirname, "raffleoneparticipants.json");

const readDataFile = (): Promise<
  { participantAddress: string; multiplier: number }[]
> => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const router = express.Router();

type CheckParticipantResponse = { statusCode: number; txn: any };

router.post<{}, CheckParticipantResponse>(
  "/check-participant",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "https://phantom-pals.vercel.app") {
      console.log(origin);
      return res.status(403).json();
    }

    const { to } = req.body;

    try {
      const holdsPhantomPalsV1NFT = await checkAddressContainsPhantomV1NFT(to);
      // const validPHNTMHolding = await checkPHNTMHolding(to);
      if (holdsPhantomPalsV1NFT) {
        const participants = await readDataFile();
        const participantIndex = participants.findIndex(
          (p) => p.participantAddress === to
        );

        if (participantIndex >= 0) {
          return res.json({ statusCode: 429, txn: "Participant not allowed" });
        } else {
          return res.json({ statusCode: 200, txn: "Participant allowed" });
        }
      } else {
        return res.json({ statusCode: 417, txn: "NFT Needed" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error checking participant" });
    }
  }
);

export default router;
