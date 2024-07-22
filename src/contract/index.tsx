'use client'

import { useReadContract } from 'wagmi'
import { abi } from './abi'

export default function TotalSupplyUSDC() {
  const {data:TotalSupply} = useReadContract({
    abi,
    address: '0xd98B590ebE0a3eD8C144170bA4122D402182976f',
    functionName: "totalSupply",
  })

  console.log(TotalSupply?.toString());
  return (
    <div>
    { TotalSupply?.toString() }
    </div>
  )
}