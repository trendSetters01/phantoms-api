import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

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

// POST route to record a participant
router.post("/add-participant", async (req: Request, res: Response) => {
  const { participantAddress } = req.body;
  try {
    const participants = await readDataFile();
    const participantIndex = participants.findIndex(
      (p) => p.participantAddress === participantAddress
    );

    if (participantIndex >= 0) {
      // Participant exists, increment multiplier
      participants[participantIndex].multiplier += 1;
    } else {
      // New participant
      participants.push({ participantAddress, multiplier: 1 });
    }

    await writeDataFile(participants);
    res
      .status(200)
      .json({ message: "Participant added successfully", participants });
  } catch (err) {
    res.status(500).json({ message: "Error adding participant" });
  }
});

// GET route to retrieve the list of participants
router.get("/participants", async (req: Request, res: Response) => {
  const origin = req.get("origin");
  if (origin !== "http://localhost:3000") {
    console.log(origin);
    return res.status(403).json();
  }
  try {
    const participants = await readDataFile();
    res.status(200).json({ participants });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving participants" });
  }
});

export default router;
