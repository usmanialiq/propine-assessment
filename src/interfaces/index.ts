export interface ICsvFile {
    timestamp: number;
    transaction_type: string;
    token: string;
    amount: number;
}

interface Currency {
    USD: number;
}
export interface IRates {
    BTC: Currency;
    ETH: Currency;
    XRP: Currency;
}
