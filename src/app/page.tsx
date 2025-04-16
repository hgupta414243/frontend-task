import { WithoutSimbian } from "@/components/WithoutSimbian";
import { WithSimbian } from "@/components/WithSimbian";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-10 pb-5 pt-10">
      <h2 className="text-4xl font-semibold text-right mb-2 text-blue-700">
        Without Simbian
      </h2>
      <h2 className="text-xl text-right mb-8 text-blue-700">
        If this sounds all too familiar, you might want to...
      </h2>
      <button className="bg-white float-right text-black py-2 px-5 rounded-full font-semibold">
        Book a Demo
      </button>
      <div className="container mx-auto px-4 py-12">
        <WithoutSimbian />
        <WithSimbian />
      </div>
    </main>
  );
}
