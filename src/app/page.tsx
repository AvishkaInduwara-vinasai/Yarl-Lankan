import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to My Next.js App</h1>
      <p className="text-center mt-4 text-lg">This is the home page of your Next.js application.</p>
      <div className="flex justify-center mt-6">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>
    </main>
  );
}
