import DirectionsButton from "./DirectionsButton";

export default function Location() {
    return (
        <div className="flex w-[617px] flex-col items-start gap-8 shrink-0 self-stretch">
            <div className="flex items-center gap-[11.99px] self-stretch"> 
                {/*location icon and title*/} 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.549"
                  height="19.436"
                  viewBox="0 0 16 20"
                  fill="none"
                  className="shrink-0 opacity-100"
                >
                  <path
                    d="M7.77454 9.71823C7.77454 9.71823 7.90816 9.71823 8.17541 9.71823C8.44266 9.71823 8.7666 9.52791 9.14723 9.14728C9.52786 8.76665 9.71817 8.30909 9.71817 7.77459C9.71817 7.24009 9.52786 6.78253 9.14723 6.4019C8.7666 6.02127 8.30904 5.83096 7.77454 5.83096C7.24004 5.83096 6.78248 6.02127 6.40185 6.4019C6.02122 6.78253 5.8309 7.24009 5.8309 7.77459C5.8309 8.30909 6.02122 8.76665 6.40185 9.14728C6.78248 9.52791 7.24004 9.71823 7.77454 9.71823ZM7.77454 16.8611C9.75057 15.047 11.2164 13.399 12.172 11.917C13.1276 10.4349 13.6054 9.11894 13.6054 7.96896C13.6054 6.20349 13.0426 4.75791 11.9169 3.63222C10.7912 2.50653 9.41043 1.94369 7.77454 1.94369C6.13865 1.94369 4.75786 2.50653 3.63217 3.63222C2.50648 4.75791 1.94363 6.20349 1.94363 7.96896C1.94363 9.11894 2.42145 10.4349 3.37707 11.917C4.33269 13.399 5.79851 15.047 7.77454 16.8611ZM7.77454 19.4364C5.16683 17.2174 3.21915 15.1564 1.93149 13.2532C0.643829 11.3501 0 9.58865 0 7.96896C0 5.53941 0.781503 3.60387 2.34451 2.16234C3.90752 0.720816 5.71753 5.14984e-05 7.77454 5.14984e-05C9.83155 5.14984e-05 11.6416 0.720816 13.2046 2.16234C14.7676 3.60387 15.5491 5.53941 15.5491 7.96896C15.5491 9.58865 14.9053 11.3501 13.6176 13.2532C12.3299 15.1564 10.3822 17.2174 7.77454 19.4364Z"
                    fill="#1152D4"
                  />
                </svg>
                <h3 className="text-white font-bold text-[30px] leading-[36px]">
                Location
              </h3>
            </div>
            <div className="flex flex-col w-[615.33px] h-[448px] p-4 justify-center items-center gap-4 rounded-xl bg-[#0D1117] overflow-hidden"> 
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
                  className="rounded-xl bg-white/[0.08] p-4 border border-white/[0.06]"
                  style={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.20), 0 8px 10px -6px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="flex w-[517.33px] justify-between items-start">
                    <div className="flex flex-col items-start gap-1">
                        <h4 className="text-white font-extrabold text-[18px] leading-[28px]">MM Barber</h4>    
                        <p className="text-white/80">Kalkoven 9, 1730 Asse</p>
                    </div>
                    <DirectionsButton href="https://www.google.com/maps/dir/?api=1&destination=Kalkoven+9,+1730+Asse,+Belgium" />
                  </div>
                </div>
            </div>
        </div>
    );
}