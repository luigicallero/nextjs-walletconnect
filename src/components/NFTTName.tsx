'use client'

import { useReadContract } from 'wagmi'
import { abi } from './tokaltyAbi'

export default function NFFTName() {
  const {data:getNFTName} = useReadContract(
      {
        abi,
        address: '0x29Dc4E904E4e635744392dF298D8C4A3B7584a8c',
        functionName: "name",
      }
  )
  
    console.log(getNFTName);

    return (
      <div>
        { getNFTName }
      </div>
    )
  }