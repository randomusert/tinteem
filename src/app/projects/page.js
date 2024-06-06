import Image from "next/image";
import Link from "next/link";


export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-sky-600">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-lg underline font-bold">Projects</h1>
        <h1>Projects that tinteeam is making</h1>
        <Link href="/">
            <button className="bg-lime-800">main page</button>
        </Link>
      </div>
    </main>
  );
}
