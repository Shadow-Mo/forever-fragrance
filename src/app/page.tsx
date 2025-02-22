import Hero from "@/app/Hero";
import PendantGallery from "@/app/PendantGallery";
import HowItWorks from "@/app/HowItWorks";
import CalltoAction from "@/app/CalltoAction";

export default function Home() {
  return (
    <div>
      <Hero />
      <PendantGallery />
      <HowItWorks />
      <CalltoAction />
    </div>
  );
}