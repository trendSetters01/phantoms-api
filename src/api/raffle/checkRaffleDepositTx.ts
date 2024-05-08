import express, { Request, Response } from "express";
import checkTransactionAmount from "../../algorand/transactionHelpers/checkTransactionAmount";
import fs from "fs";
import path from "path";

// Path to the JSON file
const dataPath = path.join(__dirname, "nftRaffle.json");

// Function to read the data file
const readDataFile = (): Promise<
  { participantAddress: string; entryId: any }[]
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
  data: { participantAddress: string; entryId: any }[]
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

type GetRaffleDepositTXResponse = { statusCode: number; txn: any };

router.post<{}, GetRaffleDepositTXResponse>(
  "/check-raffle-deposit-tx",
  async (req: Request, res: Response) => {
    const origin = req.get("origin");

    if (origin !== "https://phantom-pals.vercel.app") {
      console.log(origin);
      return res.status(403).json();
    }

    let rafflePrice = 150;

    const { txId, accountAddress, entryId } = req.body;
    const expectedAmount = rafflePrice * 100000000; // Adjust amounts based on your logic
    const expectedRecipient =
      "JQONXCP7LYP2O2XQLOPBM6I67LBGCZGEZGHBRRBJBAJEWEIWIRIFZIPXIQ";
    const assetId = "1279721720"; // Adjust asset ID based on your logic

    const checkDeposit = await checkTransactionAmount(
      txId,
      expectedAmount,
      expectedRecipient,
      assetId
    );
    if (checkDeposit.isConfirmed && checkDeposit.correct) {
      // Read the current data from the file
      readDataFile()
        .then((participants) => {
          // Append the new participant
          const newParticipant = {
            participantAddress: accountAddress,
            entryId: entryId, // Assuming you want to store entryId as well
          };
          const updatedParticipants = [...participants, newParticipant];

          // Write the updated data back to the file
          writeDataFile(updatedParticipants)
            .then(() => {
              res.json({
                ...checkDeposit,
                message: "Participant added successfully.",
              });
            })
            .catch((error) => {
              console.error("Failed to write to nftRaffle.json:", error);
              res.status(500).json({
                statusCode: 500,
                ...checkDeposit,
                message: "Failed to update participant data.",
              });
            });
        })
        .catch((error) => {
          console.error("Failed to read nftRaffle.json:", error);
          res.status(500).json({
            statusCode: 500,
            ...checkDeposit,
            message: "Failed to retrieve current participants.",
          });
        });
    } else {
      // Respond with the original checkDeposit response if the check fails
      res.json(checkDeposit);
    }
  }
);
export default router;
