import { FeatureOne } from "@/components/FeatureOne";
import { LogoBanner } from "@/components/LogoBanner";
import { Hero } from "@/components/Hero";
import { VideoPanel } from "@/components/VideoPanel";
import { DemoVideo } from "@/components/DemoVideo";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8">
      <Hero />
      <VideoPanel />
      <LogoBanner />
      <DemoVideo />
      {/* <FeatureOne /> */}
    </main>
  );
}
