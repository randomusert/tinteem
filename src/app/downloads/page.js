import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-sky-200">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-xl p-10">Downloads page</h1>
        <div>
            <a href="https://github.com/tinteeam/tinos_version2/releases/download/build-3/tinos_version2-build3.iso">
                <h1>tinos_ver2 latest build</h1>
            </a>
        </div>
      </div>
    </main>
  );
}
