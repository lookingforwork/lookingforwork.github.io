import { FeatureOne } from "@/components/FeatureOne";
import { LogoBanner } from "@/components/logoBanner";
import { Hero } from "@/components/Hero";
import { VideoPanel } from "@/components/VideoPanel";

export default function Home() {
  return (
    <main className="flex-1 items-center md:items-start min-h-screen">
      <Hero />
      <VideoPanel />
      <LogoBanner />
      <FeatureOne />
    </main>
  );
}
