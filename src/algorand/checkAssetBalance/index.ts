import { algodClient } from "../config.js";

export async function checkAssetBalance(address: string, assetId: number) {
  try {
    const accountAssetInfo = await algodClient
      .accountAssetInformation(address, assetId)
      .do();

    return accountAssetInfo["asset-holding"]?.amount;
  } catch (error) {
    console.error("Error checking asset holdings: ", error);
    return false;
  }
}
