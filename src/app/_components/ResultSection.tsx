import ImagoSymbol from "@/components/icons/ImagoSymbol";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/utils";
import Link from "next/link";

interface ResultSectionProps {
    title: string;
    results: {
        name: string
        path: string
    }[];
    handleClick: () => void;
}

const ResultSection = ({ results, title, handleClick }: ResultSectionProps) => {
    const isMobile = useIsMobile();
    return (
        <div className='w-full min-h-8 flex flex-col'>
            <h1 className='text-[#707070] text-lg mb-2 md:text-base'>
                {title}
            </h1>
            <div className='flex flex-col gap-1'>
                {
                    results.map((result, index) => (
                        <Link
                            onClick={handleClick}
                            href={result.path ?? "/"}
                            key={index}
                            className={cn('flex items-center gap-3 cursor-pointer py-1 w-full rounded-[6px] group hover:bg-black/7 active:bg-black/7 px-1'
                            )}>
                            <ImagoSymbol name='arrow_right' className={cn("f7-icons text-[#707070] group-hover:font-semibold group-hover:text-black")} size={isMobile ? '16px' : '14px'} />
                            <span className={cn('text-body text-lg md:text-[13px] font-semibold text-[#333333]')}>
                                {result.name}
                            </span>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default ResultSection