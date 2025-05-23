import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <h1 className="text-5xl font-extrabold mb-8">
        Welcome to Project Ark 🚀
      </h1>
      <Link
        href="/roadmap"
        className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
        View Roadmap
      </Link>
    </div>
  );
}
