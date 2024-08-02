import ContractOwner from "@/components/ContractOnwer";
import NewAgreement from "@/components/NewAgreement";
import NFFTName from "@/components/NFTTName";

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
        NFT name is < NFFTName />
      </div>
      <div>
        The Owner of the contract is: <ContractOwner />
      </div>
      <div>
        {/* <w3m-network-button /> */}
      </div>
      <div>
        <NewAgreement />
      </div>
      <hr />
        <form>
          <input aria-label="Recipient" placeholder="0xA0Cf…251e" />
          <input aria-label="Amount (ether)" placeholder="0.05" />
          <button>Send</button>
        </form>
    </main>
  );
}
