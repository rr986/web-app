# API Integration

## Public API Used

- This project fetches live cryptocurrency prices from [CoinGecko](https://www.coingecko.com/).
- API Endpoint:

  ```url
  https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,dogecoin&vs_currencies=usd

  ```

- React Query fetches new data every 30 seconds.
- We use axios to make API requests.
- React Query handles caching and automatic refetching.
- The "Refresh Prices" button triggers refetch() to manually update prices.
