import Collection from "@/components/shared/Collection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <Collection />
    </div>
  );
}
