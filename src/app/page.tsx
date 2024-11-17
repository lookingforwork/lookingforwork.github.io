import { FeatureOne } from "@/components/FeatureOne";
import { Hero } from "@/components/Hero";
import { VideoPanel } from "@/components/VideoPanel";
import { DemoVideo } from "@/components/DemoVideo";
import { FeatureLights } from "@/components/FeatureLights";
import { FeatureRag } from "@/components/FeatureRag";
import { FeatureAction } from "@/components/FeatureAction";
import Faq from "@/components/Faq";
import { Banner } from "@/components/Banner";
import { LogoBanner } from "@/components/LogoBanner";
import { PartnerBanner } from "@/components/PartnerBanner";
import { Security } from "@/components/Security";
import { FeatureParser } from "@/components/FeatureParser";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8">
      <Hero />
      <VideoPanel />
      <PartnerBanner />
      <FeatureLights />
      <FeatureAction />
      <FeatureParser />
      <Security />
      <LogoBanner />
      <DemoVideo />
      <Faq />
    </main>
  );
}
