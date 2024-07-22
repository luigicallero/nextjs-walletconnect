import TotalSupplyUSDC from "@/contract";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Testing WalletConnect in NextJS 14</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Welcome to Tokalty Test!!
      </div>
      <div>
        <w3m-button />
      </div>
      <div>
        This is the Total Supply of USDC: <TotalSupplyUSDC />
      </div>
    </main>
  );
}
