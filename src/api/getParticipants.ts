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

type GetParticipantsResponse = { statusCode: number; txn: any };

router.post<{}, GetParticipantsResponse>(
  "/get-participants",
  async (req: Request, res: Response) => {
    const { password } = req.body;
    if (password === process.env.SPIN_THE_WHEEL) {
      try {
        const participants = await readDataFile();

        return res.json({ statusCode: 200, participants });
      } catch (err) {
        res.status(500).json({ message: "Error checking participant" });
      }
    }
  }
);

export default router;
