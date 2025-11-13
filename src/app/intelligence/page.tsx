import ImagoSymbol from "@/components/icons/ImagoSymbol"
import Image from "next/image"
import Navbar from "./_components/Navbar"


const featureCarouselData = [
    {
        path: "/assets/intelligence/feature-image-1.png",
        smPath: "/assets/intelligence/feature-image-sm-1.png",
        alt: "feature-1",
        description: "Turn on Live Translation to automatically translate texts in Messages,1 display live translated captions in FaceTime and get spoken translations for calls in the Phone app.2"
    },
    {
        path: "/assets/intelligence/feature-image-2.png",
        smPath: "/assets/intelligence/feature-image-sm-2.png",
        alt: "feature-2",
        description: "Transform how you communicate using intelligent Writing Tools that can proofread your text, rewrite different versions until the tone and wording are just right and summarise selected text with a tap. Writing Tools are available nearly everywhere you write, including third-party apps."
    },
    {
        path: "/assets/intelligence/feature-image-3.png",
        smPath: "/assets/intelligence/feature-image-sm-3.png",
        alt: "feature-3",
        description: "Get a summary of your day with a single tap in the Calendar app.3"
    },
    {
        path: "/assets/intelligence/feature-image-4.png",
        smPath: "/assets/intelligence/feature-image-sm-4.png",
        alt: "feature-4",
        description: "Get a summary of your day with a single tap in the Calendar app.3"
    },
    {
        path: "/assets/intelligence/feature-image-5.png",
        smPath: "/assets/intelligence/feature-image-sm-5.png",
        alt: "feature-5",
        description: "Get a summary of your day with a single tap in the Calendar app.3"
    },
    {
        path: "/assets/intelligence/feature-image-6.png",
        smPath: "/assets/intelligence/feature-image-sm-6.png",
        alt: "feature-6",
        description: "Get a summary of your day with a single tap in the Calendar app.3"
    }
]

const Intelligence = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Navbar />
            <section className="flex flex-col md:gap-10 gap-8 items-center h-fit justify-center md:py-14 py-14 w-full overflow-x-clip">
                <div className="flex-col-center md:gap-3 gap-1">
                    <h1
                        style={{
                            background: "linear-gradient(90deg, rgba(38,138,249,1) 0%, rgba(213,79,190,1) 29%, rgba(255,55,76,1) 62%, rgba(255,135,12,1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        className="font-semibold md:text-6xl text-4xl py-2 text-center"
                    >
                        Imago Intelligence
                    </h1>
                    <h2 className="md:text-3xl text-2xl font-semibold">AI for everyone.</h2>
                </div>
                <p className="max-w-160 text-xl text-center mt-3 mb-6 text-balance">Built into every Imago experience to help you think, create, and connect effortlessly, designed with intelligence, privacy, and purpose at every step.</p>
                <Image src={'/assets/intelligence/hero.png'} alt="hero-intelligence" width={1080} height={750} className="w-full h-auto not-md:scale-125" />
            </section>

            <section className="flex md:flex-row flex-col-reverse min-h-screen bg-white items-center justify-center w-full">
                <div className="md:w-[50%] w-full h-full overflow-hidden not-md:mt-8">
                    <Image src={'/assets/intelligence/communication.png'} alt="hero-intelligence" width={1080} height={750} className="md:-translate-x-1/6 -translate-x-2/6 scale-125 object-cover py-16 mr-18" />
                </div>
                <div className="md:w-[50%] w-[92%] h-full flex flex-col items-start md:gap-3 gap-1 px-2">
                    <p
                        style={{
                            background: "linear-gradient(90deg, rgba(38,138,249,1) 0%, rgba(213,79,190,1) 29%, rgba(255,55,76,1) 62%, rgba(255,135,12,1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        className="font-semibold text-2xl py-2 text-center"
                    >
                        Communication
                    </p>
                    <h3 className="md:text-5xl text-3xl font-semibold">
                        More connection.
                        <br />
                        Less noise.
                    </h3>
                    <p className="md:w-[60%] text-lg pt-2">
                        Imago Intelligence simplifies your everyday communication and helps you stay focused. Communicate across languages with Live Translation. Strike just the right tone with Writing Tools. And minimise distractions with prioritised notifications.
                    </p>
                </div>
            </section>


            <section className="flex flex-col bg-background w-full items-center not-md:px-2">
                <div className="flex md:w-244 w-[92%] justify-between md:py-14 py-10">
                    <h1 className="md:text-3xl text-xl font-semibold">
                        Explore new features for <br /> communication, writing and focus.
                    </h1>

                    <div className="flex gap-2 not-md:hidden">
                        <div className="p-2 rounded-full bg-[#E6E6E9] hover:opacity-80 flex-center h-fit aspect-square cursor-pointer">
                            <ImagoSymbol name="chevron_left" size="24px" styles={{ fontWeight: "bolder" }} />
                        </div>
                        <div className="p-2 rounded-full bg-[#E6E6E9] flex-center h-fit aspect-square cursor-pointer">
                            <ImagoSymbol name="chevron_right" size="24px" styles={{ fontWeight: "bolder" }} />
                        </div>
                    </div>
                </div>
                <div className="w-full flex overflow-x-auto md:gap-9 gap-5 md:px-36 px-4 pb-14 no-scrollbar">
                    {
                        featureCarouselData.map((feature, index) => (
                            <div key={index} className="w-[80%] shrink-0 flex flex-col gap-3 not-md:hidden">
                                <div className="flex flex-col gap-4 rounded-4xl overflow-clip">
                                    <Image alt={feature.alt} src={feature.path} width={1080} height={750} className="w-full h-auto not-md:h-60" />
                                </div>
                                <p className="text-lg">{feature.description}</p>
                            </div>
                        ))
                    }
                    {
                        featureCarouselData.map((feature, index) => (
                            <div key={index} className="w-[80%] shrink-0 flex flex-col gap-3 md:hidden">
                                <div className="flex flex-col gap-4 rounded-2xl overflow-clip">
                                    <Image alt={feature.alt} src={feature.smPath} width={1080} height={750} className="w-full h-auto" />
                                </div>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="w-full min-h-screen bg-white">

            </section>
        </div>
    )
}
export default Intelligence