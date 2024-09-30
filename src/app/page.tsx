import TotalSupplyUSDC from "@/contract";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Testing WalletConnect in NextJS 14</h1>

      <div className="w-full max-w-4xl mb-12 text-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="font-mono text-lg">
          Welcome to WalletConnect Test with Next.js! Connect your wallet and explore the Web3 world.
        </p>
      </div>

      <div className="mb-12">
        {/* WalletConnect Button */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-500 transition-all duration-300 inline-block">
          <w3m-button size="mdl" label="Connect Wallet" />
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <p className="text-xl font-semibold mb-2">Total Supply of USDC:</p>
        {/* Directly render the React component */}
        <div className="text-2xl text-green-400">
          <TotalSupplyUSDC />
        </div>
      </div>

      {/* Footer Section for Reown Mention */}
      <footer className="text-center mt-16">
        <p className="text-sm text-gray-400">
          The connection to Web3 is provided by{" "}
          <a
            href="https://docs.reown.com/appkit/next/core/installation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            Reown
          </a>{" "}
          (previously WalletConnect).
        </p>
      </footer>
    </main>
  );
}
