'use client'

import { useReadContract } from 'wagmi'
import { abi } from './tokaltyAbi'

export default function ContractOwner() {
    const {data:getContractOwner} = useReadContract({
        abi,
        address: '0x29Dc4E904E4e635744392dF298D8C4A3B7584a8c',
        functionName: "getContractOwner",
    })
  
    console.log(getContractOwner);
    return (
      <div>
      { getContractOwner }
      </div>
    )
  }