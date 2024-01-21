import algosdk from "algosdk";
import { algodClient } from "../config";

export default async function checkTransactionAmount(
  txId: any,
  expectedAmount: any,
  expectedRecipient: any,
  assetId: any
) {
  try {
    setTimeout(() => {}, 10000);
    const response = await algodClient.pendingTransactionInformation(txId).do();
    if (
      response["confirmed-round"] !== null &&
      response["confirmed-round"] > 0
    ) {
      // Transaction confirmed, now check the amount and recipient
      let transactionCorrect = false;
      if (assetId === 0 || assetId === parseInt("", 10)) {
        // For ALGO
        if (
          response["txn"]["txn"]["amt"] === expectedAmount &&
          algosdk.encodeAddress(response["txn"]["txn"]["rcv"]) ===
            expectedRecipient
        ) {
          transactionCorrect = true;
        }
      } else {
        // For other assets
        if (
          response["txn"]["txn"]["xaid"] === assetId &&
          response["txn"]["txn"]["aamt"] === expectedAmount &&
          algosdk.encodeAddress(response["txn"]["txn"]["arcv"]) ===
            expectedRecipient
        ) {
          transactionCorrect = true;
        }
      }

      if (transactionCorrect) {
        return { isConfirmed: true, correct: true };
      } else {
        return { isConfirmed: true, correct: false };
      }
    } else {
      // Transaction not confirmed, check again after some delay
      return new Promise((resolve) => {
        setTimeout(async () => {
          resolve(
            await checkTransactionAmount(
              txId,
              expectedAmount,
              expectedRecipient,
              parseInt(assetId, 10)
            )
          );
        }, 2000); // Check every 2 seconds
      });
    }
  } catch (error) {
    console.error("Error checking transaction status:", error);
    return { isConfirmed: false, correct: false };
  }
}
