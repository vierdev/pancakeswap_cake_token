/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestPancakeswapCallee,
  TestPancakeswapCalleeInterface,
} from "../../../contracts/test/TestPancakeswapCallee";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "pancakeV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swap0ForExact1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swap1ForExact0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swapExact0For1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swapExact1For0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610785806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063bac7bf7811610050578063bac7bf7814610133578063e2be91091461017c578063f603482c146101c557610067565b806323a69e751461006c5780636dfc0ddb146100ea575b600080fd5b6100e86004803603606081101561008257600080fd5b8135916020810135918101906060810160408201356401000000008111156100a957600080fd5b8201836020820111156100bb57600080fd5b803590602001918460018302840111640100000000831117156100dd57600080fd5b50909250905061020e565b005b6100e86004803603608081101561010057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359160408201358116916060013516610495565b6100e86004803603608081101561014957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359160408201358116916060013516610607565b6100e86004803603608081101561019257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013591604082013581169160600135166106fa565b6100e8600480360360808110156101db57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359160408201358116916060013516610722565b60008282602081101561022057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1690506000851315610366573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561028957600080fd5b505afa15801561029d573d6000803e3d6000fd5b505050506040513d60208110156102b357600080fd5b5051604080517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015233602483015260448201899052915191909216916323b872dd9160648083019260209291908290030181600087803b15801561033457600080fd5b505af1158015610348573d6000803e3d6000fd5b505050506040513d602081101561035e57600080fd5b5061048e9050565b6000841361037057fe5b3373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b657600080fd5b505afa1580156103ca573d6000803e3d6000fd5b505050506040513d60208110156103e057600080fd5b5051604080517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015233602483015260448201889052915191909216916323b872dd9160648083019260209291908290030181600087803b15801561046157600080fd5b505af1158015610475573d6000803e3d6000fd5b505050506040513d602081101561048b57600080fd5b50505b5050505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb088360016104bd87610746565b8533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561058657818101518382015260200161056e565b50505050905090810190601f1680156105b35780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b1580156105d557600080fd5b505af11580156105e9573d6000803e3d6000fd5b505050506040513d60408110156105ff57600080fd5b505050505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb0883600161062f87610746565b6000038533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360008381101561058657818101518382015260200161056e565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb088360006104bd87610746565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb0883600061062f875b60007f8000000000000000000000000000000000000000000000000000000000000000821061077457600080fd5b509056fea164736f6c6343000706000a";

type TestPancakeswapCalleeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestPancakeswapCalleeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestPancakeswapCallee__factory extends ContractFactory {
  constructor(...args: TestPancakeswapCalleeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestPancakeswapCallee> {
    return super.deploy(overrides || {}) as Promise<TestPancakeswapCallee>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestPancakeswapCallee {
    return super.attach(address) as TestPancakeswapCallee;
  }
  override connect(signer: Signer): TestPancakeswapCallee__factory {
    return super.connect(signer) as TestPancakeswapCallee__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestPancakeswapCalleeInterface {
    return new utils.Interface(_abi) as TestPancakeswapCalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestPancakeswapCallee {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestPancakeswapCallee;
  }
}
