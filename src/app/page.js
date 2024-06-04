import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-lg underline font-bold">The roadmap</h1>
         <a href="/about" className="border-2 border-sky-500 hover:font-bold">About</a>
        
      </div>
    </main>
  );
}
