import axios from 'axios';
import 'dotenv/config';

export const fetchExchangeRates = async () => {
    try {
        const conversions = 'fsyms=BTC,ETH,XRP&tsyms=USD';
        const url = `${process.env.CRYPTO_API_URL}?api_key=${process.env.CRYPTO_API_KEY}&${conversions}`;
        const { data } = await axios.get(url);

        return {
            ...data,
        };
    } catch(error) {
        console.log("🚀 ~ file: index.ts ~ line 52 ~ fetchExchangeRates ~ error", error);
    }
}
