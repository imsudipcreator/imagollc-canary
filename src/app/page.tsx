import ImagoIcon from "@/components/icons/ImagoIcon";
import ImagoSymbol from "@/components/icons/ImagoSymbol";
import { Button } from "@/components/ui/button";
import { HydrateClient } from "@/trpc/server";
import Image from "next/image";
import Link from "next/link";
import { blocksData } from "./_data/blocks-data";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="w-full min-h-screen flex flex-col justify-start bg-white">
        {/** Suggestion Section */}
        <div className="w-full flex items-center justify-center md:text-sm text-body gap-1 md:font-medium py-2 px-3 bg-black/6">
          <p className="text-black/80">Connect to imago for better experience.</p>
          <Link href={"/sign-in"} className="flex items-center justify-center text-primary group">
            <p className="group-hover:underline">Connect</p>
            <ImagoSymbol name="chevron_right" size="12px" />
          </Link>
        </div>

        <div className="w-full flex flex-col gap-4 items-center">
          {/** Hero Section */}
          <section className="w-full relative h-dvh overflow-clip text-black">
            {/* <video src={"/assets/home/hero.webm"} className="w-full md:h-auto h-full object-cover absolute" autoPlay loop muted /> */}
            <Image src="/assets/home/hero.webp" alt="hero" width={1080} height={720} className="md:w-full h-full object-cover absolute" />
            <div className="absolute h-full w-full flex items-center justify-center z-1 gap-1.5">
              <h1 style={{ fontFamily: "Beau Rivage" }} className="font-medium  md:text-6xl text-6xl">Team</h1>
              <ImagoIcon size={25} className="mt-1.5" />
              <h1 style={{ fontFamily: "BenchNine" }} className="md:text-5xl text-5xl font-medium ">Imago</h1>
            </div>
          </section>



          <section className="w-full min-h-svh flex flex-col items-center justify-start md:pt-24 gap-2 bg-[#F2F2F7] py-12">
            <p className="md:text-5xl text-3xl font-semibold">Build. Launch. Evolve.</p>
            <p className="md:text-2xl text-xl md:w-[52%] w-[80%] text-center">At Imago, we specialize in crafting powerful digital experiences that push boundaries and drive results.</p>
            <Image src={"/assets/home/browser-mockup-sm.webp"} alt="browser-mockup" width={768} height={1080} style={{ width: 900, height: 'auto' }} priority className="mt-6 md:hidden" />
            <Image id="browser-mockup" src={"/assets/home/browser-mockup.webp"} alt="browser-mockup" width={900} height={800} style={{ width: 900, height: 'auto' }} className="mt-6 hidden md:flex" />
            <div className="flex items-center gap-4">
              <Button variant={'imago'} className=''>
                <Link href={'/apps'}>
                  Visit our work
                </Link>
              </Button>
              <Button variant={'imagoOutline'}>
                <Link href={'/contact'}>
                  Get a quote
                </Link>
              </Button>
            </div>
          </section>


          <section className="w-full min-h-svh flex flex-col items-center justify-center gap-2 py-12 bg-linear-to-b from-[#D4EAF7] via-[#E6F1F7] to-[#FDFFFE]">
            <h1 className="md:text-5xl text-3xl font-semibold">App Development</h1>
            <p className="md:text-2xl text-xl md:w-[54%] w-[80%] text-center">We build fast, secure, and scalable mobile apps tailored to your unique needs — from idea to deployment.</p>
            <Image src={"/assets/home/apps-float.webp"} width={300} height={300} alt="apps-float" style={{ width: 300, height: 'auto' }} />
            <div className="flex items-center gap-4">
              <Button variant={'imago'}>
                <Link href={'/apps'}>
                  Visit iStore
                </Link>
              </Button>
              <Button variant={'imagoOutline'}>
                <Link href={'/contact'}>
                  Build your app
                </Link>
              </Button>
            </div>
          </section>

          {/** Blocks Section */}
          <section className='md:w-[98%] w-full min-h-screen flex flex-row flex-wrap items-center justify-between gap-5'>
            {
              blocksData.map((block) => (
                <div
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  key={block.id}
                  style={{
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    backgroundColor: block.bgColor,
                  }}
                  className={`md:w-[49%] shrink-0 relative w-full md:h-screen max-h-[700px]  flex flex-col items-center justify-center md:pt-12 py-16 gap-2`}
                >
                  {block.header}
                  <p
                    className={`md:text-xl text-lg text-center px-6 md:px-16 ${block.bgColor === "#000000" ? "text-white" : "text-black"
                      }`}
                  >
                    {block.subText}
                  </p>
                  {block.bgImage}
                  {block.btnGroup}
                </div>
              ))
            }
          </section>


          {/** Footer notes */}
          <section className='bg-[#f5f5f7] text-black/60 mt-10 pt-7 w-full flex items-center justify-center'>
            <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line w-[92%] md:max-w-244 border-b border-border pb-8">
              ◊ Imago llc uses the SF Pro typeface to maintain a modern and accessible reading experience. SF Pro is a trademark of Apple Inc., registered in the U.S. and other countries.

              {"\n\n"}Our use of SF Pro is strictly for design and presentation purposes, with full respect for Apple&apos;s intellectual property. If you are an Apple representative or license holder and have questions or concerns about our usage, please feel free to <a href="/contact" className='underline'>contact us</a> — we are happy to discuss or make any adjustments needed.
            </p>
          </section>

        </div>
      </main>
    </HydrateClient>
  );
}
