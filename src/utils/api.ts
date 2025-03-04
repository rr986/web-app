import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3/simple/price';
const COINS = ['bitcoin', 'ethereum', 'solana', 'cardano', 'dogecoin'];
const CURRENCY = 'usd';

type CryptoPrices = {
    [key: string]: {
        usd: number;
    };
};

export const fetchCryptoPrices = async (): Promise<CryptoPrices> => {
    try {
        const response = await axios.get<CryptoPrices>(BASE_URL, {
            params: {
                ids: COINS.join(','),
                vs_currencies: CURRENCY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
        throw new Error('Failed to fetch crypto prices');
    }
};
