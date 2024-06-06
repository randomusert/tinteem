import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-sky-600">
      <div className="z-10 max-w-5xl w-full  space-x-2">
        <h1 className="text-lg underline font-bold">The roadmap</h1>
        
        <Link href="/about" clLinkssNLinkme="border-2 border-sky-500 hover:font-bold text-xl">
        <button>About</button>
        </Link>
        <Link href="/downloads" clLinkssNLinkme="border-2 border-sky-500 hover:font-bold text-xl">
        <button>Downloads</button>
        </Link>
        
      </div>
    </main>
  );
}
