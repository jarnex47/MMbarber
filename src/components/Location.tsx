import Image from "next/image";
import DirectionsButton from "./DirectionsButton";

export default function Location() {
    return (
        <div className="flex w-full min-w-0 max-w-[560px] flex-col items-start gap-8 shrink-0 self-stretch mx-auto lg:mx-0">
            <div className="flex items-center gap-[11.99px] self-stretch"> 
                {/*location icon and title*/} 
                <Image
                  src="/images/location.svg"
                  alt=""
                  width={20}
                  height={24}
                  className="shrink-0 w-5 h-6"
                />
                <h3 className="text-white font-bold text-xl sm:text-[30px] sm:leading-[36px]">
                Location
              </h3>
            </div>
            <div className="w-full rounded-2xl border border-white/5 bg-[#0F131A] p-6">
                <div className="flex flex-col w-full min-h-[280px] h-[320px] sm:h-[400px] lg:h-[448px] justify-center items-center gap-4 rounded-xl overflow-hidden"> 
                  <div className="w-full flex-1 min-h-0 relative">
                    <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.627691866106!2d4.19369797114201!3d50.91210470747873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46980481fe724367%3A0x1839f147aaa58500!2sMM%20Barber!5e0!3m2!1snl!2sbe!4v1771424483475!5m2!1snl!2sbe"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  {/* address + directions button */}
                  <div
                    className="rounded-xl bg-white/[0.08] p-4 border border-white/[0.06] w-[calc(100%-2rem)] mx-auto"
                    style={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <div className="flex w-full justify-between items-start">
                      <div className="flex flex-col items-start gap-1">
                          <h4 className="text-white font-extrabold text-[18px] leading-[28px]">MM Barber</h4>    
                          <p className="text-white/80">Kalkoven 9, 1730 Asse</p>
                      </div>
                      <DirectionsButton href="https://www.google.com/maps/dir/?api=1&destination=Kalkoven+9,+1730+Asse,+Belgium" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}