// Imports the Alchemy SDK
import { Network, Alchemy, Wallet, Utils } from "alchemy-sdk";
const OCHO = process.env.OCHO;
// Configures the Alchemy SDK
const config = {
  apiKey: process.env.ALCHEMY_API_KEY, // Replace with your API key
  network: Network.MATIC_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);
const wallet = new Wallet(OCHO); // Replace with your private key

const main = async () => {
  // Define the transaction
  const transaction = {
    to: "0xe38678c915f002245ED3Ed24370d745e362cb94e", // Replace with the receiver's address
    value: Utils.parseEther("0.001"),
    gasLimit: "21000",
    maxPriorityFeePerGas: Utils.parseUnits("5", "gwei"),
    maxFeePerGas: Utils.parseUnits("20", "gwei"),
    nonce: await alchemy.core.core.getTransactionCount(wallet.getAddress()),
    type: 2,
    chainId: 137, // Polygon Mainnet Chain ID
  };

  const rawTransaction = await wallet.signTransaction(transaction);
  const response = await alchemy.transact.sendTransaction(rawTransaction);

  console.log("Transaction sent. Waiting for confirmation...");
  console.log(`Transaction Hash: ${response.hash}`);

  // Polling for transaction receipt
  const receipt = await alchemy.core.waitForTransaction(response.hash);

  // Logging the transaction receipt
  console.log("Transaction confirmed!");
  console.log(receipt);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
