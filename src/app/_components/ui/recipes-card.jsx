import Image from "next/image";
import { MdDinnerDining } from "react-icons/md";
import { PiTimerFill } from "react-icons/pi";

export default function RecipesCard({iconUrl, title, status, ad, web, isLike=false, shrink = false}) {
  return (
    <div className={`flex flex-col items-center gap-3 ${shrink ? 'max-w-[290px] h-[350px]' : 'max-w-[360px] h-[400px]'} ${' '} ${ad ? 'rounded-none bg-[#1D483B]' : 'rounded-lg bg-lily-white'}`}>
        <h2 className={`font-lobster text-stone-50 text-[24px] text-center mt-5 ${ad ?  ' ': 'hidden'}`}>{title}</h2>
        <Image src={iconUrl} alt="" width={350} height={250} className="rounded-xl"/>
        <div className="p-3">
        <h2 className={`${shrink ? 'heading-intro' : 'small-heading'} ${ad ?  'hidden': 'block'}`}>{title}</h2>
        {/* <p className={`text-paragraph ${ad ?  'block': 'hidden'}`}>{web}</p> */}
        <div className={`${ad ? "hidden" : "flex justify-start items-start gap-5 mt-3"}`}>
            <div className="flex justify-between items-center gap-3">
                <PiTimerFill size={20}/>
                <p className="text-paragraph">30 minutes</p>
            </div>

            <div className="flex justify-start items-center gap-3">
                <MdDinnerDining size={20}/>
                <p className="text-paragraph">{status}</p>
            </div>
        </div>
        </div>
    </div>
  )
}
