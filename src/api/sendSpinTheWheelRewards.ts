import express, { Request, Response } from "express";
import { sendRewards } from "../algorand/transactionHelpers/sendReward";

import fs from "fs";
import path from "path";

// Path to the JSON file
const dataPath = path.join(__dirname, "raffleoneparticipants.json");

// Function to read the data file
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

// Function to write to the data file
const writeDataFile = (
  data: { participantAddress: string; multiplier: number }[]
): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(dataPath, JSON.stringify(data, null, 2), "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const router = express.Router();

type SendSpinTheWheelRewardsResponse = { statusCode: number; txn: any };

router.post<{}, SendSpinTheWheelRewardsResponse>(
  "/send-spin-the-wheel-rewards",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "https://phantoms-ashy.vercel.app") {
      console.log(origin);
      return res.status(403).json();
    }

    const { asset, to } = req.body;
    const assetId =
      asset === "ALGO" ? "0" : asset === "TACOS" ? "329110405" : "1279721720";
    const amount = assetId === "0" ? 2 : asset === "TACOS" ? 1000 : 50;

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
        participants.push({ participantAddress: to, multiplier: 1 });
        await writeDataFile(participants);

        const txn = await sendRewards(
          to,
          assetId === "329110405"
            ? amount
            : amount * (assetId === "0" ? 1000000 : 100000000),
          assetId
        );

        res.json({ statusCode: res.statusCode, txn: txn });
      }
    } catch (err) {
      res.status(500).json({ message: "Error adding participant" });
    }
  }
);

export default router;
