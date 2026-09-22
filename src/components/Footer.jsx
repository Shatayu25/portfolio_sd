import { FaMapMarkerAlt, FaPhoneAlt, FaRegHandshake } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

function Footer() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20" id="connect">
      <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center text-[3.5rem] opacity-10 md:text-[9rem] lg:text-[12rem] xl:text-[15rem]">
        PORTFOLIO
      </div>
      <div className="mx-auto flex max-w-7xl flex-col px-8">
        <div className="flex flex-col md:grid md:grid-cols-7 lg:grid-cols-5">
          <div className="relative z-10 col-span-3 text-zinc-50">
            <p className="font-dmserif text-4xl tracking-wide md:text-5xl lg:text-6xl">
              Let&apos;s <span className="text-emerald-500">Connect</span>
            </p>
            <div className="flex items-center gap-2 text-[13px] tracking-wider text-emerald-500 md:text-[15px] lg:text-xl">
              <span>
                <FaRegHandshake />
              </span>
              <p>And Discuss Potential Opportunities</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-green-400 font-cascadia md:col-start-5 md:col-end-8 md:mt-10 lg:col-start-4 lg:col-end-6 lg:border-2">
            <div className="flex flex-col p-3 lg:p-4">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex items-center gap-1 md:gap-2">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p className="text-[13px] text-emerald-500 lg:text-base lg:font-extrabold">
                    Contact Details
                  </p>
                </div>
                <p className="text-[13px] lg:text-base">+91- 9016784962</p>
              </div>
            </div>
            <div className="flex flex-col p-3 lg:p-4">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex items-center gap-2">
                  <span>
                    <HiEnvelope />
                  </span>
                  <p className="text-[13px] text-emerald-500 lg:text-base lg:font-extrabold">
                    Email
                  </p>
                </div>
                <a
                  href="mailto:shatayudeshpande99@gmail.com"
                  className="text-[12.5px] lg:text-base"
                >
                  shatayudeshpande99@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col p-3 lg:p-4">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex items-center gap-2">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <p className="text-[13px] text-emerald-500 lg:text-base lg:font-extrabold">
                    Location
                  </p>
                </div>
                <p className="text-[13px] lg:text-base">Vapi, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between border-t border-dashed text-[13px] md:flex-row md:text-sm lg:text-base">
          <div>
            <p className="flex items-center gap-1 tracking-wider">
              MADE WITH
              <span className="inline-block">
                <img
                  src="./react_logo.svg"
                  className="h-4 w-4 lg:h-5 lg:w-5"
                  alt="react-logo"
                />
              </span>
              &
              <span className="inline-block">
                <img
                  src="tailwind_logo.svg"
                  className="h-4 w-4 lg:h-5 lg:w-5"
                  alt="tailwind-logo"
                />
              </span>
            </p>
          </div>
          <div className="tracking-wider">
            <p>SHATAYU DESHPANDE &copy;</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
