import Feature from "@/components/Feature";
import GetApps from "@/components/GetApps";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <Packages />
      <Testimonial />
      <GetApps />
    </main>
  );
}
