'use client'

import { abi } from './tokaltyAbi'
import { useWriteContract } from 'wagmi';

export default function CreateAgreement() {
  const { writeContract } = useWriteContract()

  return (
    <button 
      onClick={() => 
        writeContract({ 
          abi,
          address: '0x29Dc4E904E4e635744392dF298D8C4A3B7584a8c',
          functionName: 'createAgreement',
          args: [
            '0xEa3b5a6b3b90cA1910D7566a1f593a74857fde87', // employee address
            'Company1', // company name
            'DS8K Implementation', // project name
            10, // _royaltyPercentage uint 8
            BigInt(1727694000), // _paymentStartDate uint256 - October 1st 2024 NZT (in unixtime)
            BigInt(1209600), // _paymentFrequency uint256 - 2 weeks (in seconds)
            BigInt(1759230000), // _expirationDate uint256 - October 1st 2025 NZT (in unixtime)
          ],
       })
      }
    >
      Create Agreement
    </button>
  )
}