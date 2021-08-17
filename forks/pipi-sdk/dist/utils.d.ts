import JSBI from 'jsbi';
import { BigintIsh, SolidityType, ChainId } from './constants';
export declare function validateSolidityTypeInstance(value: JSBI, solidityType: SolidityType): void;
export declare function validateAndParseAddress(address: string): string;
export declare function parseBigintIsh(bigintIsh: BigintIsh): JSBI;
export declare function sqrt(y: JSBI): JSBI;
export declare function sortedInsert<T>(items: T[], add: T, maxSize: number, comparator: (a: T, b: T) => number): T | null;
export declare const getInitCodeHash: (chainId: ChainId) => "0xd805d4c8a7fb3567167020352386905de5d4bd188fe2284675e3ed584653df75" | "0x8523147bd14c2b44dc8294639a79467599661eec2240f76aef4db80d5193d401";
export declare const getFactoryAddress: (chainId: ChainId) => "0x979efE7cA072b72d6388f415d042951dDF13036e" | "0x43cE21cdceeC70828220DF623b3B183D86eD1DB2";
