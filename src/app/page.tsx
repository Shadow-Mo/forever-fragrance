import Hero from "@/app/Hero";
import PendantGallery from "@/app/PendantGallery";
import HowItWorks from "@/app/HowItWorks";
import CalltoAction from "@/app/CalltoAction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PendantGallery />
      <HowItWorks />
      <CalltoAction />
      <Footer />
    </div>
  );
}