import ImagoIcon from "@/components/icons/ImagoIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, JSX } from "react";

type Block = {
  id: number;
  header: JSX.Element;
  subText: string;
  bgImage: JSX.Element;
  bgColor: CSSProperties["backgroundColor"];
  btnGroup: JSX.Element;
};

export const blocksData : Block[] = [
  {
    id: 1,
    header: (
      <h1 className="text-3xl md:text-4xl font-medium text-black pb-3">
        Web Development
      </h1>
    ),
    subText:
      "From landing pages to full platforms, we build responsive, high-performing websites that stand out",
    bgImage: <Image src={"/assets/home/web-design-tools.webp"} alt="block-bg" width={200} height={200}/>,
    bgColor: "#F5F5F7",
    btnGroup: (
      <div className="flex items-center gap-4">
        <Button variant={'imago'}>
          <Link href={'/store'}>
            Visit webStore
          </Link>
        </Button>
        <Button variant={'imagoOutline'}>
          <Link href={'/contact'}>
            Get a quote
          </Link>
        </Button>
      </div>
    ),
  },
  {
    id: 2,
    header: (
      <h1 className="text-3xl md:text-4xl font-medium text-black pb-3">
        AI Integration
      </h1>
    ),
    subText:
      "We power your systems with AI from smart search to chatbots, if it can think, we can build it.",
    bgImage: <Image src={"/assets/home/ai-models.webp"} alt="block-bg" width={400} height={200}/>,
    bgColor: "#F5F5F7",
    btnGroup: (
      <div className="flex flex-row gap-4">
        <Button variant={'imago'}>
          <Link href={'/intelligence'}>
            Chat with intelligence
          </Link>
        </Button>
      </div>
    ),
  },
  {
    id: 3,
    header: (
      <h1 className="text-3xl md:text-4xl font-medium text-white pb-3">
        Imago One
      </h1>
    ),
    subText:
      "One simple subscription unlocks the full Imago ecosystem, premium apps, tools, and AI features included.",
    bgImage: <Image src={"/assets/home/imago-one-gradient.webp"} alt="block-bg" width={400} height={200} style={{ width: 400, height: 'auto' }} />,
    bgColor: "#000000",
    btnGroup: (
      <div className="flex flex-row gap-4">
        <Button variant={'imago'}>
          <Link href={'/imago-one'}>
            Try imago one for free
          </Link>
        </Button>
      </div>
    ),
  },
  {
    id: 4,
    header: (
      <div className="flex items-center justify-center pb-3 gap-1">
        {/* <Image src={ImagoIcon as StaticImageData} alt='imago-icon' className='size-6' /> */}
        <ImagoIcon className='md:size-6 size-5' />
        <h1 className="text-3xl md:text-4xl font-medium text-black text-center">
          Creator
        </h1>
      </div>
    ),
    subText:
      "Our dedicated platform for creators to publish their apps and websites directly to the Imago ecosystem.",
    bgImage: <Image src={"/assets/home/icreator.webp"} alt="block-bg" width={200}  height={200}/>,
    bgColor: "#F5F5F7",
    btnGroup: (
      <div className="flex flex-row gap-4 pt-10">
        <Button variant={'imago'}>
          <Link href={'https://icreator.vercel.app/'}>
            Visit iCreator
          </Link>
        </Button>
        <Button variant={'imagoOutline'}>
          <Link href={'https://icreator.vercel.app/documentation/app-submit'}>
            Read Docs
          </Link>
        </Button>
      </div>
    ),
  },
];
