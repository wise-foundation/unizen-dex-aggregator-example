import {
  Currency,
  TradeType
} from '@uniswap/sdk-core';

interface DexInfo {
    name: string;
    logo: string;
    route: string[];
    percentage: number;
}
interface CallItem {
    targetExchange: string;
    data: string;
    amount: string;
}
enum TradeProtocol {
    SINGLE_TRADE = 'SINGLE_TRADE',
    SPLIT_TRADE = 'SPLIT_TRADE',
    CROSS_CHAIN_STARGATE = 'CROSS_CHAIN_STARGATE',
    CROSS_CHAIN_CELER = 'CROSS_CHAIN_CELER',
}
enum ContractVersion {
    V1 = 'V1',
    V2 = 'V2',
}
interface SingleQuoteAPIData {
    fromTokenAmount: string;
    toTokenAmount: string;
    deltaAmount: string;
    tokenFrom?: Currency | undefined;
    tokenTo?: Currency | undefined;
    tradeType: TradeType;
    tradeProtocol?: TradeProtocol;
    protocol?: DexInfo[];
    transactionData?: {
        info: {
            amountIn: string;
            amountOutMin: string;
            srcToken: string;
            dstToken: string;
        } | {
            amountInMax: string;
            amountOut: string;
            srcToken: string;
            dstToken: string;
        };
        call: CallItem[];
    };
    nativeValue?: string;
    contractVersion?: ContractVersion;
}
export { SingleQuoteAPIData };
