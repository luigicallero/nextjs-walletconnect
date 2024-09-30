'use client'

import { useReadContract } from 'wagmi'
import { abi } from './abi'
import { useState, useEffect } from 'react'

export default function TotalSupplyUSDC() {
  const { data: TotalSupply } = useReadContract({
    abi,
    address: '0xd98B590ebE0a3eD8C144170bA4122D402182976f',
    functionName: 'totalSupply',
  })

  // Local state to store the formatted value
  const [formattedSupply, setFormattedSupply] = useState<string>("");

  // Whenever the contract data changes, format the value
  useEffect(() => {
    if (TotalSupply) {
      const formatted = formatUSDC(TotalSupply.toString()); // Format the supply value
      setFormattedSupply(formatted);
    }
  }, [TotalSupply]);

  // Helper function to format the USDC value
  const formatUSDC = (rawSupply: string) => {
    const supply = parseFloat(rawSupply) / 1e6; // Adjust for 6 decimals (USDC has 6 decimal places)
    return supply.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 });
  };

  return (
    <div>
      {formattedSupply ? `${formattedSupply} USDC` : 'Loading...'}
    </div>
  )
}
