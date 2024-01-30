export const ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "collectionName", "type": "string" },
      {
        "internalType": "string",
        "name": "collectionSymbol",
        "type": "string"
      },
      { "internalType": "string", "name": "tokenURISuffix", "type": "string" },
      {
        "internalType": "uint256",
        "name": "maxMintableSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "globalWalletLimit",
        "type": "uint256"
      },
      { "internalType": "address", "name": "cosigner", "type": "address" },
      {
        "internalType": "uint64",
        "name": "timestampExpirySeconds",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error"
  },
  { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" },
  { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" },
  { "inputs": [], "name": "CannotIncreaseMaxMintableSupply", "type": "error" },
  { "inputs": [], "name": "CannotUpdatePermanentBaseURI", "type": "error" },
  { "inputs": [], "name": "CosignerNotSet", "type": "error" },
  { "inputs": [], "name": "CrossmintAddressNotSet", "type": "error" },
  { "inputs": [], "name": "CrossmintOnly", "type": "error" },
  { "inputs": [], "name": "GlobalWalletLimitOverflow", "type": "error" },
  { "inputs": [], "name": "InsufficientStageTimeGap", "type": "error" },
  { "inputs": [], "name": "InvalidCosignSignature", "type": "error" },
  { "inputs": [], "name": "InvalidProof", "type": "error" },
  { "inputs": [], "name": "InvalidQueryRange", "type": "error" },
  { "inputs": [], "name": "InvalidStage", "type": "error" },
  { "inputs": [], "name": "InvalidStageArgsLength", "type": "error" },
  { "inputs": [], "name": "InvalidStartAndEndTimestamp", "type": "error" },
  { "inputs": [], "name": "MintERC2309QuantityExceedsLimit", "type": "error" },
  { "inputs": [], "name": "MintToZeroAddress", "type": "error" },
  { "inputs": [], "name": "MintZeroQuantity", "type": "error" },
  { "inputs": [], "name": "Mintable", "type": "error" },
  { "inputs": [], "name": "NoSupplyLeft", "type": "error" },
  { "inputs": [], "name": "NotEnoughValue", "type": "error" },
  { "inputs": [], "name": "NotMintable", "type": "error" },
  {
    "inputs": [
      { "internalType": "address", "name": "operator", "type": "address" }
    ],
    "name": "OperatorNotAllowed",
    "type": "error"
  },
  { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" },
  {
    "inputs": [],
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error"
  },
  { "inputs": [], "name": "StageSupplyExceeded", "type": "error" },
  { "inputs": [], "name": "TimestampExpired", "type": "error" },
  {
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
  },
  { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" },
  {
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
  },
  { "inputs": [], "name": "TransferToZeroAddress", "type": "error" },
  { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" },
  { "inputs": [], "name": "WalletGlobalLimitExceeded", "type": "error" },
  { "inputs": [], "name": "WalletStageLimitExceeded", "type": "error" },
  { "inputs": [], "name": "WithdrawFailed", "type": "error" },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "toTokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "ConsecutiveTransfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
      }
    ],
    "name": "PermanentBaseURI",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "activeStage",
        "type": "uint256"
      }
    ],
    "name": "SetActiveStage",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
      }
    ],
    "name": "SetBaseURI",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "cosigner",
        "type": "address"
      }
    ],
    "name": "SetCosigner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "crossmintAddress",
        "type": "address"
      }
    ],
    "name": "SetCrossmintAddress",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "globalWalletLimit",
        "type": "uint256"
      }
    ],
    "name": "SetGlobalWalletLimit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxMintableSupply",
        "type": "uint256"
      }
    ],
    "name": "SetMaxMintableSupply",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "mintable",
        "type": "bool"
      }
    ],
    "name": "SetMintable",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "expiry",
        "type": "uint64"
      }
    ],
    "name": "SetTimestampExpirySeconds",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stage",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint80",
        "name": "price",
        "type": "uint80"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "walletLimit",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "merkleRoot",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint24",
        "name": "maxStageSupply",
        "type": "uint24"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "startTimeUnixSeconds",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "endTimeUnixSeconds",
        "type": "uint64"
      }
    ],
    "name": "UpdateStage",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "minter", "type": "address" },
      { "internalType": "uint32", "name": "qty", "type": "uint32" },
      { "internalType": "uint64", "name": "timestamp", "type": "uint64" },
      { "internalType": "bytes", "name": "signature", "type": "bytes" }
    ],
    "name": "assertValidCosign",
    "outputs": [],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "qty", "type": "uint32" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" },
      { "internalType": "uint64", "name": "timestamp", "type": "uint64" },
      { "internalType": "bytes", "name": "signature", "type": "bytes" }
    ],
    "name": "crossmint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "explicitOwnershipOf",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "addr", "type": "address" },
          {
            "internalType": "uint64",
            "name": "startTimestamp",
            "type": "uint64"
          },
          { "internalType": "bool", "name": "burned", "type": "bool" },
          { "internalType": "uint24", "name": "extraData", "type": "uint24" }
        ],
        "internalType": "struct IERC721A.TokenOwnership",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "tokenIds", "type": "uint256[]" }
    ],
    "name": "explicitOwnershipsOf",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "addr", "type": "address" },
          {
            "internalType": "uint64",
            "name": "startTimestamp",
            "type": "uint64"
          },
          { "internalType": "bool", "name": "burned", "type": "bool" },
          { "internalType": "uint24", "name": "extraData", "type": "uint24" }
        ],
        "internalType": "struct IERC721A.TokenOwnership[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint64", "name": "timestamp", "type": "uint64" }
    ],
    "name": "getActiveStageFromTimestamp",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "getApproved",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "minter", "type": "address" },
      { "internalType": "uint32", "name": "qty", "type": "uint32" },
      { "internalType": "uint64", "name": "timestamp", "type": "uint64" }
    ],
    "name": "getCosignDigest",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "minter", "type": "address" }
    ],
    "name": "getCosignNonce",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCosigner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCrossmintAddress",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGlobalWalletLimit",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMaxMintableSupply",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMintable",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumberStages",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "index", "type": "uint256" }
    ],
    "name": "getStageInfo",
    "outputs": [
      {
        "components": [
          { "internalType": "uint80", "name": "price", "type": "uint80" },
          { "internalType": "uint32", "name": "walletLimit", "type": "uint32" },
          {
            "internalType": "bytes32",
            "name": "merkleRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint24",
            "name": "maxStageSupply",
            "type": "uint24"
          },
          {
            "internalType": "uint64",
            "name": "startTimeUnixSeconds",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "endTimeUnixSeconds",
            "type": "uint64"
          }
        ],
        "internalType": "struct IERC721M.MintStageInfo",
        "name": "",
        "type": "tuple"
      },
      { "internalType": "uint32", "name": "", "type": "uint32" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTimestampExpirySeconds",
    "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTokenURISuffix",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "address", "name": "operator", "type": "address" }
    ],
    "name": "isApprovedForAll",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "qty", "type": "uint32" },
      { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" },
      { "internalType": "uint64", "name": "timestamp", "type": "uint64" },
      { "internalType": "bytes", "name": "signature", "type": "bytes" }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "qty", "type": "uint32" },
      { "internalType": "address", "name": "to", "type": "address" }
    ],
    "name": "ownerMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "ownerOf",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "internalType": "bytes", "name": "data", "type": "bytes" }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "operator", "type": "address" },
      { "internalType": "bool", "name": "approved", "type": "bool" }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "baseURI", "type": "string" }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setBaseURIPermanent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "cosigner", "type": "address" }
    ],
    "name": "setCosigner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "crossmintAddress",
        "type": "address"
      }
    ],
    "name": "setCrossmintAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "globalWalletLimit",
        "type": "uint256"
      }
    ],
    "name": "setGlobalWalletLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxMintableSupply",
        "type": "uint256"
      }
    ],
    "name": "setMaxMintableSupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "bool", "name": "mintable", "type": "bool" }],
    "name": "setMintable",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "uint80", "name": "price", "type": "uint80" },
          { "internalType": "uint32", "name": "walletLimit", "type": "uint32" },
          {
            "internalType": "bytes32",
            "name": "merkleRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint24",
            "name": "maxStageSupply",
            "type": "uint24"
          },
          {
            "internalType": "uint64",
            "name": "startTimeUnixSeconds",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "endTimeUnixSeconds",
            "type": "uint64"
          }
        ],
        "internalType": "struct IERC721M.MintStageInfo[]",
        "name": "newStages",
        "type": "tuple[]"
      }
    ],
    "name": "setStages",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint64", "name": "expiry", "type": "uint64" }
    ],
    "name": "setTimestampExpirySeconds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "suffix", "type": "string" }
    ],
    "name": "setTokenURISuffix",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }
    ],
    "name": "supportsInterface",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "tokenURI",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "tokensOfOwner",
    "outputs": [
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "uint256", "name": "start", "type": "uint256" },
      { "internalType": "uint256", "name": "stop", "type": "uint256" }
    ],
    "name": "tokensOfOwnerIn",
    "outputs": [
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "a", "type": "address" }],
    "name": "totalMintedByAddress",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "index", "type": "uint256" },
      { "internalType": "uint80", "name": "price", "type": "uint80" },
      { "internalType": "uint32", "name": "walletLimit", "type": "uint32" },
      { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" },
      { "internalType": "uint24", "name": "maxStageSupply", "type": "uint24" },
      {
        "internalType": "uint64",
        "name": "startTimeUnixSeconds",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "endTimeUnixSeconds",
        "type": "uint64"
      }
    ],
    "name": "updateStage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
