# Challenges

### **CoinGecko API wasn't returning responses**

- Problem: API request was incorrectly formatted.
- Solution: Used `curl` to manually test the API request, then adjusted the formatting in the Next.js app. The ids parameter should be a comma-separated list, not an array format ([...])./

### **React Query v5 API Change**

- Problem: `useQuery()` gave an error due to v5 changes.
- Solution: Updated to new syntax:

```typescript
useQuery({
  queryKey: ["cryptoPrices"],
  queryFn: fetchCryptoPrices,
  refetchInterval: 30000,
});
```
