import { ethers } from "ethers";
import { ABI } from "./abi";


export async function transferBruceLee(recipientAddress: string) {
  const provider = new ethers.AlchemyProvider(
    "matic",
    process.env.ALCHEMY_API_KEY
  );
  const wallet = new ethers.Wallet(`${process.env.OCHO}`, provider);

  //Grab contract ABI and create an instance
  const nftContract = new ethers.Contract(
    "0xC5D6E31F5020Bfedc5d294C3C8CB0BA66cA0DbF8",
    ABI,
    wallet
  );

  const senderAddress = "0xe38678c915f002245ED3Ed24370d745e362cb94e"; // Replace with the sender's address
  const tokenId =
    "0x0000000000000000000000000000000000000000000000000000000000000031"; // Replace with the NFT's token ID

  const gasEstimate = await nftContract[
    "safeTransferFrom(address,address,uint256)"
  ].estimateGas(senderAddress, recipientAddress, tokenId);

  // Execute the transfer
  const transaction = await nftContract[
    "safeTransferFrom(address,address,uint256)"
  ](senderAddress, recipientAddress, tokenId, {
    gasLimit: gasEstimate.toString(),
  });

  // Wait for the transaction to complete
  await transaction.wait();

  // Log transaction hash
  console.log("Transaction Hash: ", transaction.hash);
}