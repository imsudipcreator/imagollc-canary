import ImagoSymbol from "@/components/icons/ImagoSymbol"

const IntelligenceChat = () => {
    return (
        <section className="flex-1  flex flex-col items-center justify-end py-8">
            <div className="max-w-240 w-140 h-12 rounded-full border-2 border-black/20 flex items-center justify-center p-1 gap-1">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <ImagoSymbol name="plus" size={"18px"} />
                </button>
                <input className="flex-1 rounded-full h-full outline-none bg-transparent p-1" placeholder="Ask intelligence" />
            </div>
        </section>
    )
}
export default IntelligenceChat