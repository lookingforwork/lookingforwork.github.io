import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 items-center md:items-start">
      <Hero />
    </main>
  );
}
