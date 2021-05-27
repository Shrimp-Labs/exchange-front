export const contractAddresses = {
  sushi: {
    256: '0x8fB1D8C8085663bF574a5c44313CC50e9719FC22',
    128: '0xaaae746b5e55d14398879312660e9fde07fbc1dc',
  },
  syrup: {
    256: '0xB5cB3f21A4C241f572857c2f74e197B5D751036E',
    128: '0x8377D9A4069e92653906a061Fa66270476c1Dc9e',
  },
  masterChef: {
    256: '0x203f1800EE213c0284c0f2A723ed4228633125cD',
    128: '0xa02fF30986211B7ca571AcAE5AD4D25ab1e58426',
  },
  sousChef: {
    256: '0x9b7d4fd169A38e33011B96cFA36CFfB70e3e8236',
    128: '0xd5B771014369Fa718Dca73b101793E56F1B43E6d',
  },
  weth: {
    256: '0x8fB1D8C8085663bF574a5c44313CC50e9719FC22',
    128: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
  },
  airdrop: {
    256: '0xA94213C0c9DCadADe05205Ca500d60cd001B8798',
    128: '0x448Ec9549cc7C7D4cF0E8dfb1fA0E56bFA9086C5',
  }
}

const multicall = {
  256: '0xC33994Eb943c61a8a59a918E2de65e03e4e385E0',
  128: '0x37ab26db3df780e7026f3e767f65efb739f48d8e',
}
const chainId = 128

interface AddressProps {
  128: string // Address of the contract
}
export const getAddress = (obj: AddressProps) => {
  return obj[chainId] ? obj[chainId] : obj
}

export const getMasterChefAddress = () => {
  return getAddress(contractAddresses.masterChef)
}
export const getMulticallAddress = () => {
  return multicall[chainId]
}

export const getPipiAddress = () => {
  return getAddress(contractAddresses.sushi)
}
