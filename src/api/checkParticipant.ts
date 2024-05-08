import express, { Request, Response } from "express";
import { sendRewards } from "../algorand/transactionHelpers/sendReward";

import fs from "fs";
import path from "path";

// Path to the JSON file
const dataPath = path.join(__dirname, "raffleoneparticipants.json");

// Function to read the data file
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
      const participants = await readDataFile();
      const participantIndex = participants.findIndex(
        (p) => p.participantAddress === to
      );

      if (participantIndex >= 0) {
        // nothing
        return res.json({ statusCode: 429, txn: "Participant not allowed" });
      } else {
        // New participant
        return res.json({ statusCode: 200, txn: "Participant allowed" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error checking participant" });
    }
  }
);

export default router;
