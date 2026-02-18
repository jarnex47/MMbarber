import OpeningHoursItem from "./OpeningsHoursItem";


export default function OpeningHours() {
    return (
        <div className="border-radius: 16px;border: var(--stroke-weight-1, 1px) solid var(--color-white-5, rgba(255, 255, 255, 0.05)) background: var(--color-azure-8, #0F131A);"> {/*openinghours container*/}
            <div className="flex justify-center items-center gap-2">
                {/*openinghours icon and title*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 text-[#1152D4]" fill="currentColor">
                    <path d="M12.9306 14.2916L14.2917 12.9304L10.6944 9.33322V4.861H8.75V10.111L12.9306 14.2916ZM9.72222 19.4443C8.37731 19.4443 7.11343 19.1891 5.93056 18.6787C4.74769 18.1683 3.71875 17.4756 2.84375 16.6006C1.96875 15.7256 1.27604 14.6967 0.765625 13.5138C0.255208 12.3309 0 11.067 0 9.72211C0 8.37721 0.255208 7.11332 0.765625 5.93045C1.27604 4.74758 1.96875 3.71864 2.84375 2.84364C3.71875 1.96864 4.74769 1.27593 5.93056 0.765516C7.11343 0.2551 8.37731 -0.000108719 9.72222 -0.000108719C11.0671 -0.000108719 12.331 0.2551 13.5139 0.765516C14.6968 1.27593 15.7257 1.96864 16.6007 2.84364C17.4757 3.71864 18.1684 4.74758 18.6788 5.93045C19.1892 7.11332 19.4444 8.37721 19.4444 9.72211C19.4444 11.067 19.1892 12.3309 18.6788 13.5138C18.1684 14.6967 17.4757 15.7256 16.6007 16.6006C15.7257 17.4756 14.6968 18.1683 13.5139 18.6787C12.331 19.1891 11.0671 19.4443 9.72222 19.4443Z" />
                </svg>
                <h3 className="text-white text-[30px] leading-[36px] font-bold">Opening Hours</h3>
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