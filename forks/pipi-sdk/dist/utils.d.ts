import JSBI from 'jsbi';
import { BigintIsh, SolidityType, ChainId } from './constants';
export declare function validateSolidityTypeInstance(value: JSBI, solidityType: SolidityType): void;
export declare function validateAndParseAddress(address: string): string;
export declare function parseBigintIsh(bigintIsh: BigintIsh): JSBI;
export declare function sqrt(y: JSBI): JSBI;
export declare function sortedInsert<T>(items: T[], add: T, maxSize: number, comparator: (a: T, b: T) => number): T | null;
export declare const getInitCodeHash: (chainId: ChainId) => "0xd805d4c8a7fb3567167020352386905de5d4bd188fe2284675e3ed584653df75" | "0x39049b80b4bd4fa78c175418c9994a334451144332c03e8b77b994857fc62178";
export declare const getFactoryAddress: (chainId: ChainId) => "0x979efE7cA072b72d6388f415d042951dDF13036e" | "0x0dDF434108DF168b347428De9C8F595471364A48";
