import Image from "next/image";
import OpeningHoursItem from "./OpeningsHoursItem";

export default function OpeningHours() {
    return (
        <div className="flex w-full max-w-[560px] flex-col items-start gap-8 mx-auto lg:mx-0"> {/*openinghours container*/}
            <div className="flex items-center gap-3 self-stretch">
                {/*openinghours icon and title*/}
                <Image src="/images/clock.svg" alt="" width={20} height={20} className="w-5 h-5 shrink-0" />
                <h3 className="text-white text-[30px] leading-[36px] font-bold shrink-0">Opening Hours</h3>
            </div>
            <div className="flex flex-col items-start gap-1 p-8 rounded-2xl border border-white/5 bg-[#0F131A] w-full">
                {/*openinghours list*/}
                <OpeningHoursItem day="Monday" closed={true} />
                <OpeningHoursItem day="Tuesday" closed={true} />
                <OpeningHoursItem day="Wednesday" open="9:30" close="18:30" />
                <OpeningHoursItem day="Thursday" open="9:30" close="18:30" />
                <OpeningHoursItem day="Friday" open="9:30" close="18:30" />
                <OpeningHoursItem day="Saturday" open="9:30" close="18:30" />
                <OpeningHoursItem day="Sunday" open="10:30" close="18:30" />
            </div>
        </div>

    );
}