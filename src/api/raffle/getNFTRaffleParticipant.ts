import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Path to the JSON file
const dataPath = path.join(__dirname, "nftRaffle.json");

// Function to read the data file
const readDataFile = (): Promise<
  { participantAddress: string; entryId: string }[]
> => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
};

router.get<
  {},
  {
    statusCode: number;
    participants?: { participantAddress: string; entryId: string }[];
    error?: string;
  }
>("/get-nft-raffle-one-participants", async (req: Request, res: Response) => {
  try {
    const participants = await readDataFile();

    return res.json({ statusCode: 200, participants });
  } catch (err) {
    console.error("Failed to read nftRaffle.json:", err);
    res
      .status(500)
      .json({ statusCode: 500, error: "Failed to load participant data" });
  }
});

export default router;
