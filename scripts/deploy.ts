import bn from 'bignumber.js'
import { Contract, ContractFactory, utils, BigNumber } from 'ethers'
import { ethers, waffle } from 'hardhat'
import { linkLibraries } from '../util/linkLibraries'

const WBNB = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd' // BSC TESTNET

type ContractJson = { abi: any; bytecode: string }
const artifacts: { [name: string]: ContractJson } = {
  // eslint-disable-next-line global-require
  LzEndPoint: require('../artifacts/@layerzerolabs/solidity-examples/contracts/lzApp/LzApp.sol/LzApp.json'),
  Cake: require('../artifacts/contracts/eth/OFT.sol/CakeOFT.json'),
}

async function main() {
  const [owner] = await ethers.getSigners()
  const provider = waffle.provider
  console.log('owner', owner.address)

  const LzEndPoint = new ContractFactory(artifacts.LzEndPoint.abi, artifacts.LzEndPoint.bytecode, owner)
  const lzEndPoint = await LzEndPoint.deploy()

  console.log('LzEndpoint', lzEndPoint.address)

  const Cake = new ContractFactory(artifacts.Cake.abi, artifacts.Cake.bytecode, owner)
  const swapRouter = await Cake.deploy(lzEndPoint.address)
  console.log('Cake', swapRouter.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
