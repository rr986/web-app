# State Management

## Why Zustand for Search?
- Simple state management
- Responsiveness

## Why React Query?
- Handles API caching automatically.
- Built-in background refetching every 30 seconds.
- Prevents unnecessary API requests.

### Hook for Fetching Prices:
```typescript
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from './api';

export const useCryptoPrices = () => 
    return useQuery({
        queryKey: ['cryptoPrices'],
        queryFn: fetchCryptoPrices,
        refetchInterval: 30000,
    });
};

