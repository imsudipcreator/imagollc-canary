import ImagoIcon from "@/components/icons/ImagoIcon";
import { HydrateClient } from "@/trpc/server";
import Image from "next/image";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="w-full min-h-screen flex flex-col gap-2 justify-start bg-[#161617cc]">
        <section className="w-full relative h-dvh overflow-clip text-black">
          {/* <video src={"/assets/home/hero.webm"} className="w-full md:h-auto h-full object-cover absolute" autoPlay loop muted /> */}
          <Image src="/assets/home/hero.webp" alt="hero" width={1080} height={720} className="w-full object-cover absolute"/>
          <div className="absolute h-full w-full flex items-center justify-center z-1 gap-1.5">
            <h1 style={{fontFamily: "Beau Rivage"}} className="font-medium  md:text-6xl text-3xl">Team</h1>
            <ImagoIcon size={25} className="mt-1.5"/>
            <h1 style={{ fontFamily: "BenchNine"}} className="md:text-5xl text-3xl font-medium ">Imago</h1>
          </div>
        </section>
        <section className="h-screen w-full bg-cyan-400">

        </section>
      </main>
    </HydrateClient>
  );
}
