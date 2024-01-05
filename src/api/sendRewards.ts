import express from "express";
import { send } from "../algorand/transactionHelpers/sendReward";

const router = express.Router();

type EmojiResponse = string[];

router.get<{}, EmojiResponse>("/", async (req, res) => {
  const origin = req.get("origin");
  if (origin !== "http://localhost:3001") {
  console.log(origin);
  return res.status(403).json();
  }
  const txn = await send(
    "6ULBDIYQMAUGKURRWIGOQWBDWUDROA357P55MHGRJJOGD3CDBZ5GOVEDKI",
    "6ULBDIYQMAUGKURRWIGOQWBDWUDROA357P55MHGRJJOGD3CDBZ5GOVEDKI",
    1 * 100000000, // ( / 1e8).toFixed(8)
    "1279721720", // '0' for ALGO
    "raffleId"
  );
  console.log(txn);
  res.json(["😀", "😳", "🙄"]);
});

export default router;
