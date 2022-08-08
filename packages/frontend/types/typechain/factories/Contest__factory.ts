/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Contest, ContestInterface } from "../Contest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_voteToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenIdVotes",
        type: "uint256",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "referenceBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "spentVotePower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "submitItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSubmissions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "voteCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voteToken",
    outputs: [
      {
        internalType: "contract IERC20Votes",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "votingPower_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningSubmission",
    outputs: [
      {
        internalType: "uint256",
        name: "winningSubmission_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200359e3803806200359e833981810160405281019062000037919062000182565b6040518060400160405280601181526020017f436f6e746573745375626d697373696f6e0000000000000000000000000000008152506040518060400160405280600381526020017f434f5300000000000000000000000000000000000000000000000000000000008152508160009081620000b491906200042e565b508060019081620000c691906200042e565b50505080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555043600b819055505062000515565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200014a826200011d565b9050919050565b6200015c816200013d565b81146200016857600080fd5b50565b6000815190506200017c8162000151565b92915050565b6000602082840312156200019b576200019a62000118565b5b6000620001ab848285016200016b565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200023657607f821691505b6020821081036200024c576200024b620001ee565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002b67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000277565b620002c2868362000277565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200030f620003096200030384620002da565b620002e4565b620002da565b9050919050565b6000819050919050565b6200032b83620002ee565b620003436200033a8262000316565b84845462000284565b825550505050565b600090565b6200035a6200034b565b6200036781848462000320565b505050565b5b818110156200038f576200038360008262000350565b6001810190506200036d565b5050565b601f821115620003de57620003a88162000252565b620003b38462000267565b81016020851015620003c3578190505b620003db620003d28562000267565b8301826200036c565b50505b505050565b600082821c905092915050565b60006200040360001984600802620003e3565b1980831691505092915050565b60006200041e8383620003f0565b9150826002028217905092915050565b6200043982620001b4565b67ffffffffffffffff811115620004555762000454620001bf565b5b6200046182546200021d565b6200046e82828562000393565b600060209050601f831160018114620004a6576000841562000491578287015190505b6200049d858262000410565b8655506200050d565b601f198416620004b68662000252565b60005b82811015620004e057848901518255600182019150602085019450602081019050620004b9565b86831015620005005784890151620004fc601f891682620003f0565b8355505b6001600288020188555050505b505050505050565b61307980620005256000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b8578063b384abef1161007c578063b384abef1461038b578063b88d4fde146103a7578063c87b56dd146103c3578063d6c1b227146103f3578063d94c8caa14610423578063e985e9c51461044157610142565b806370a08231146102e557806377174f851461031557806395d89b4114610333578063a22cb46514610351578063a39540161461036d57610142565b806323b872dd1161010a57806323b872dd146101ff578063417e5bc21461021b57806342842e0e1461023957806346a38bc8146102555780634fc8a20d146102855780636352211e146102b557610142565b806301ffc9a71461014757806306fdde0314610177578063081812fc14610195578063095ea7b3146101c5578063160d66ae146101e1575b600080fd5b610161600480360381019061015c9190611c1d565b610471565b60405161016e9190611c65565b60405180910390f35b61017f610553565b60405161018c9190611d19565b60405180910390f35b6101af60048036038101906101aa9190611d71565b6105e5565b6040516101bc9190611ddf565b60405180910390f35b6101df60048036038101906101da9190611e26565b61062b565b005b6101e9610742565b6040516101f69190611ec5565b60405180910390f35b61021960048036038101906102149190611ee0565b610768565b005b6102236107c8565b6040516102309190611f42565b60405180910390f35b610253600480360381019061024e9190611ee0565b610830565b005b61026f600480360381019061026a9190611f5d565b610850565b60405161027c9190611f42565b60405180910390f35b61029f600480360381019061029a9190611d71565b610868565b6040516102ac9190611f42565b60405180910390f35b6102cf60048036038101906102ca9190611d71565b610880565b6040516102dc9190611ddf565b60405180910390f35b6102ff60048036038101906102fa9190611f5d565b610931565b60405161030c9190611f42565b60405180910390f35b61031d6109e8565b60405161032a9190611f42565b60405180910390f35b61033b610ad9565b6040516103489190611d19565b60405180910390f35b61036b60048036038101906103669190611fb6565b610b6b565b005b610375610b81565b6040516103829190611f42565b60405180910390f35b6103a560048036038101906103a09190611ff6565b610b92565b005b6103c160048036038101906103bc919061216b565b610cca565b005b6103dd60048036038101906103d89190611d71565b610d2c565b6040516103ea9190611d19565b60405180910390f35b61040d6004803603810190610408919061228f565b610e3e565b60405161041a9190611f42565b60405180910390f35b61042b610e75565b6040516104389190611f42565b60405180910390f35b61045b600480360381019061045691906122eb565b610e7b565b6040516104689190611c65565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061053c57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061054c575061054b82610f0f565b5b9050919050565b6060600080546105629061235a565b80601f016020809104026020016040519081016040528092919081815260200182805461058e9061235a565b80156105db5780601f106105b0576101008083540402835291602001916105db565b820191906000526020600020905b8154815290600101906020018083116105be57829003601f168201915b5050505050905090565b60006105f082610f79565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061063682610880565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d906123fd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106c5610fc4565b73ffffffffffffffffffffffffffffffffffffffff1614806106f457506106f3816106ee610fc4565b610e7b565b5b610733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072a9061248f565b60405180910390fd5b61073d8383610fcc565b505050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610779610773610fc4565b82611085565b6107b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107af90612521565b60405180910390fd5b6107c383838361111a565b505050565b6000806000905060005b6107dc6007611380565b81101561082b57816008600083815260200190815260200160002054111561081857600860008281526020019081526020016000205491508092505b808061082390612570565b9150506107d2565b505090565b61084b83838360405180602001604052806000815250610cca565b505050565b60096020528060005260406000206000915090505481565b60086020528060005260406000206000915090505481565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091f90612604565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099890612696565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a46b1a833600b546040518363ffffffff1660e01b8152600401610a899291906126b6565b602060405180830381865afa158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca91906126f4565b610ad49190612721565b905090565b606060018054610ae89061235a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b149061235a565b8015610b615780601f10610b3657610100808354040283529160200191610b61565b820191906000526020600020905b815481529060010190602001808311610b4457829003601f168201915b5050505050905090565b610b7d610b76610fc4565b838361138e565b5050565b6000610b8d6007611380565b905090565b6000610b9c6109e8565b905081811015610be1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd8906127a1565b60405180910390fd5b81600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c3091906127c1565b9250508190555081600860008581526020019081526020016000206000828254610c5a91906127c1565b92505081905550823373ffffffffffffffffffffffffffffffffffffffff167fc32b42768a47a585121e9b8d7a2ab9d3f34c326a192dee11ee1732e3d18313f3846008600088815260200190815260200160002054604051610cbd929190612817565b60405180910390a3505050565b610cdb610cd5610fc4565b83611085565b610d1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1190612521565b60405180910390fd5b610d26848484846114fa565b50505050565b6060610d3782610f79565b6000600660008481526020019081526020016000208054610d579061235a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d839061235a565b8015610dd05780601f10610da557610100808354040283529160200191610dd0565b820191906000526020600020905b815481529060010190602001808311610db357829003601f168201915b505050505090506000610de1611556565b90506000815103610df6578192505050610e39565b600082511115610e2b578082604051602001610e1392919061287c565b60405160208183030381529060405292505050610e39565b610e348461156d565b925050505b919050565b600080610e4b6007611380565b9050610e5784826115d5565b610e6181846117ae565b610e6b600761181b565b8091505092915050565b600b5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610f8281611831565b610fc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb890612604565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661103f83610880565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061109183610880565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110d357506110d28185610e7b565b5b8061111157508373ffffffffffffffffffffffffffffffffffffffff166110f9846105e5565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661113a82610880565b73ffffffffffffffffffffffffffffffffffffffff1614611190576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118790612912565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f6906129a4565b60405180910390fd5b61120a83838361189d565b611215600082610fcc565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112659190612721565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112bc91906127c1565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461137b8383836118a2565b505050565b600081600001549050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036113fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f390612a10565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114ed9190611c65565b60405180910390a3505050565b61150584848461111a565b611511848484846118a7565b611550576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154790612aa2565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061157882610f79565b6000611582611556565b905060008151116115a257604051806020016040528060008152506115cd565b806115ac84611a2e565b6040516020016115bd92919061287c565b6040516020818303038152906040525b915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163b90612b0e565b60405180910390fd5b61164d81611831565b1561168d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168490612b7a565b60405180910390fd5b6116996000838361189d565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116e991906127c1565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46117aa600083836118a2565b5050565b6117b782611831565b6117f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ed90612c0c565b60405180910390fd5b806006600084815260200190815260200160002090816118169190612dce565b505050565b6001816000016000828254019250508190555050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006118c88473ffffffffffffffffffffffffffffffffffffffff16611b8e565b15611a21578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118f1610fc4565b8786866040518563ffffffff1660e01b81526004016119139493929190612ef5565b6020604051808303816000875af192505050801561194f57506040513d601f19601f8201168201806040525081019061194c9190612f56565b60015b6119d1573d806000811461197f576040519150601f19603f3d011682016040523d82523d6000602084013e611984565b606091505b5060008151036119c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c090612aa2565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a26565b600190505b949350505050565b606060008203611a75576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611b89565b600082905060005b60008214611aa7578080611a9090612570565b915050600a82611aa09190612fb2565b9150611a7d565b60008167ffffffffffffffff811115611ac357611ac2612040565b5b6040519080825280601f01601f191660200182016040528015611af55781602001600182028036833780820191505090505b5090505b60008514611b8257600182611b0e9190612721565b9150600a85611b1d9190612fe3565b6030611b2991906127c1565b60f81b818381518110611b3f57611b3e613014565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611b7b9190612fb2565b9450611af9565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611bfa81611bc5565b8114611c0557600080fd5b50565b600081359050611c1781611bf1565b92915050565b600060208284031215611c3357611c32611bbb565b5b6000611c4184828501611c08565b91505092915050565b60008115159050919050565b611c5f81611c4a565b82525050565b6000602082019050611c7a6000830184611c56565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611cba578082015181840152602081019050611c9f565b83811115611cc9576000848401525b50505050565b6000601f19601f8301169050919050565b6000611ceb82611c80565b611cf58185611c8b565b9350611d05818560208601611c9c565b611d0e81611ccf565b840191505092915050565b60006020820190508181036000830152611d338184611ce0565b905092915050565b6000819050919050565b611d4e81611d3b565b8114611d5957600080fd5b50565b600081359050611d6b81611d45565b92915050565b600060208284031215611d8757611d86611bbb565b5b6000611d9584828501611d5c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611dc982611d9e565b9050919050565b611dd981611dbe565b82525050565b6000602082019050611df46000830184611dd0565b92915050565b611e0381611dbe565b8114611e0e57600080fd5b50565b600081359050611e2081611dfa565b92915050565b60008060408385031215611e3d57611e3c611bbb565b5b6000611e4b85828601611e11565b9250506020611e5c85828601611d5c565b9150509250929050565b6000819050919050565b6000611e8b611e86611e8184611d9e565b611e66565b611d9e565b9050919050565b6000611e9d82611e70565b9050919050565b6000611eaf82611e92565b9050919050565b611ebf81611ea4565b82525050565b6000602082019050611eda6000830184611eb6565b92915050565b600080600060608486031215611ef957611ef8611bbb565b5b6000611f0786828701611e11565b9350506020611f1886828701611e11565b9250506040611f2986828701611d5c565b9150509250925092565b611f3c81611d3b565b82525050565b6000602082019050611f576000830184611f33565b92915050565b600060208284031215611f7357611f72611bbb565b5b6000611f8184828501611e11565b91505092915050565b611f9381611c4a565b8114611f9e57600080fd5b50565b600081359050611fb081611f8a565b92915050565b60008060408385031215611fcd57611fcc611bbb565b5b6000611fdb85828601611e11565b9250506020611fec85828601611fa1565b9150509250929050565b6000806040838503121561200d5761200c611bbb565b5b600061201b85828601611d5c565b925050602061202c85828601611d5c565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61207882611ccf565b810181811067ffffffffffffffff8211171561209757612096612040565b5b80604052505050565b60006120aa611bb1565b90506120b6828261206f565b919050565b600067ffffffffffffffff8211156120d6576120d5612040565b5b6120df82611ccf565b9050602081019050919050565b82818337600083830152505050565b600061210e612109846120bb565b6120a0565b90508281526020810184848401111561212a5761212961203b565b5b6121358482856120ec565b509392505050565b600082601f83011261215257612151612036565b5b81356121628482602086016120fb565b91505092915050565b6000806000806080858703121561218557612184611bbb565b5b600061219387828801611e11565b94505060206121a487828801611e11565b93505060406121b587828801611d5c565b925050606085013567ffffffffffffffff8111156121d6576121d5611bc0565b5b6121e28782880161213d565b91505092959194509250565b600067ffffffffffffffff82111561220957612208612040565b5b61221282611ccf565b9050602081019050919050565b600061223261222d846121ee565b6120a0565b90508281526020810184848401111561224e5761224d61203b565b5b6122598482856120ec565b509392505050565b600082601f83011261227657612275612036565b5b813561228684826020860161221f565b91505092915050565b600080604083850312156122a6576122a5611bbb565b5b60006122b485828601611e11565b925050602083013567ffffffffffffffff8111156122d5576122d4611bc0565b5b6122e185828601612261565b9150509250929050565b6000806040838503121561230257612301611bbb565b5b600061231085828601611e11565b925050602061232185828601611e11565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061237257607f821691505b6020821081036123855761238461232b565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006123e7602183611c8b565b91506123f28261238b565b604082019050919050565b60006020820190508181036000830152612416816123da565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612479603e83611c8b565b91506124848261241d565b604082019050919050565b600060208201905081810360008301526124a88161246c565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b600061250b602e83611c8b565b9150612516826124af565b604082019050919050565b6000602082019050818103600083015261253a816124fe565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061257b82611d3b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036125ad576125ac612541565b5b600182019050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006125ee601883611c8b565b91506125f9826125b8565b602082019050919050565b6000602082019050818103600083015261261d816125e1565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612680602983611c8b565b915061268b82612624565b604082019050919050565b600060208201905081810360008301526126af81612673565b9050919050565b60006040820190506126cb6000830185611dd0565b6126d86020830184611f33565b9392505050565b6000815190506126ee81611d45565b92915050565b60006020828403121561270a57612709611bbb565b5b6000612718848285016126df565b91505092915050565b600061272c82611d3b565b915061273783611d3b565b92508282101561274a57612749612541565b5b828203905092915050565b7f486173206e6f7420656e6f75676820766f74696e6720706f7765720000000000600082015250565b600061278b601b83611c8b565b915061279682612755565b602082019050919050565b600060208201905081810360008301526127ba8161277e565b9050919050565b60006127cc82611d3b565b91506127d783611d3b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561280c5761280b612541565b5b828201905092915050565b600060408201905061282c6000830185611f33565b6128396020830184611f33565b9392505050565b600081905092915050565b600061285682611c80565b6128608185612840565b9350612870818560208601611c9c565b80840191505092915050565b6000612888828561284b565b9150612894828461284b565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006128fc602583611c8b565b9150612907826128a0565b604082019050919050565b6000602082019050818103600083015261292b816128ef565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061298e602483611c8b565b915061299982612932565b604082019050919050565b600060208201905081810360008301526129bd81612981565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006129fa601983611c8b565b9150612a05826129c4565b602082019050919050565b60006020820190508181036000830152612a29816129ed565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a8c603283611c8b565b9150612a9782612a30565b604082019050919050565b60006020820190508181036000830152612abb81612a7f565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612af8602083611c8b565b9150612b0382612ac2565b602082019050919050565b60006020820190508181036000830152612b2781612aeb565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612b64601c83611c8b565b9150612b6f82612b2e565b602082019050919050565b60006020820190508181036000830152612b9381612b57565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612bf6602e83611c8b565b9150612c0182612b9a565b604082019050919050565b60006020820190508181036000830152612c2581612be9565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612c8e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612c51565b612c988683612c51565b95508019841693508086168417925050509392505050565b6000612ccb612cc6612cc184611d3b565b611e66565b611d3b565b9050919050565b6000819050919050565b612ce583612cb0565b612cf9612cf182612cd2565b848454612c5e565b825550505050565b600090565b612d0e612d01565b612d19818484612cdc565b505050565b5b81811015612d3d57612d32600082612d06565b600181019050612d1f565b5050565b601f821115612d8257612d5381612c2c565b612d5c84612c41565b81016020851015612d6b578190505b612d7f612d7785612c41565b830182612d1e565b50505b505050565b600082821c905092915050565b6000612da560001984600802612d87565b1980831691505092915050565b6000612dbe8383612d94565b9150826002028217905092915050565b612dd782611c80565b67ffffffffffffffff811115612df057612def612040565b5b612dfa825461235a565b612e05828285612d41565b600060209050601f831160018114612e385760008415612e26578287015190505b612e308582612db2565b865550612e98565b601f198416612e4686612c2c565b60005b82811015612e6e57848901518255600182019150602085019450602081019050612e49565b86831015612e8b5784890151612e87601f891682612d94565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000612ec782612ea0565b612ed18185612eab565b9350612ee1818560208601611c9c565b612eea81611ccf565b840191505092915050565b6000608082019050612f0a6000830187611dd0565b612f176020830186611dd0565b612f246040830185611f33565b8181036060830152612f368184612ebc565b905095945050505050565b600081519050612f5081611bf1565b92915050565b600060208284031215612f6c57612f6b611bbb565b5b6000612f7a84828501612f41565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612fbd82611d3b565b9150612fc883611d3b565b925082612fd857612fd7612f83565b5b828204905092915050565b6000612fee82611d3b565b9150612ff983611d3b565b92508261300957613008612f83565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220ff596b9707871a0608488634ad87adecc988ac7b4e3eef889ccfe93c5de6bfdf64736f6c634300080f0033";

export class Contest__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _voteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Contest> {
    return super.deploy(_voteToken, overrides || {}) as Promise<Contest>;
  }
  getDeployTransaction(
    _voteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_voteToken, overrides || {});
  }
  attach(address: string): Contest {
    return super.attach(address) as Contest;
  }
  connect(signer: Signer): Contest__factory {
    return super.connect(signer) as Contest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContestInterface {
    return new utils.Interface(_abi) as ContestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Contest {
    return new Contract(address, _abi, signerOrProvider) as Contest;
  }
}