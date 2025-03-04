import { useCryptoPrices } from "../utils/useCryptoPrices";
import { useCryptoStore } from "../utils/store";
import { useState } from "react";

export default function CryptoDashboard() {
  const { data, isLoading, error, refetch } = useCryptoPrices();
  const { search, setSearch } = useCryptoStore();
  const [searchInput, setSearchInput] = useState("");

  let filteredCrypto: Array<[string, { usd: number }]> = [];
  if (data) {
    filteredCrypto = Object.entries(data).filter(([coin]) =>
      coin.toLowerCase().includes(search.toLowerCase()),
    );
  }

  let content;
  if (!filteredCrypto.length) {
    content = <p className="text-black">No matching results.</p>;
  } else {
    content = filteredCrypto.map(([coin, details]) => (
      <div
        key={coin}
        className="flex justify-between bg-white p-4 rounded-md my-2"
      >
        <span className="font-medium text-black">{coin.toUpperCase()}</span>
        <span className="font-medium text-black">
          ${details.usd.toFixed(2)}
        </span>
      </div>
    ));
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-semibold mb-4 text-black">Crypto Prices</h1>

      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          setSearch(e.target.value);
        }}
        className="border border-gray-400 rounded p-2 w-80 text-center text-white"
      />

      <button
        onClick={refetch}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
      >
        Refresh Prices
      </button>

      {isLoading && <p className="mt-4 text-black">Loading prices...</p>}
      {error && <p className="mt-4 text-red-500">Failed to fetch data.</p>}

      <div className="mt-6 w-full max-w-md">{content}</div>
    </div>
  );
}
