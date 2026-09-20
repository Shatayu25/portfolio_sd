import { FaMapMarkerAlt, FaPhoneAlt, FaRegHandshake } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

function Footer() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20">
      <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center text-[15rem] opacity-5">
        PORTFOLIO
      </div>
      <div className="mx-auto flex max-w-7xl flex-col px-8">
        <div className="grid grid-cols-5">
          <div className="relative z-10 col-span-2 text-zinc-50">
            <p className="font-dmserif text-6xl tracking-wide">
              Let&apos;s <span className="text-emerald-500">Connect</span>
            </p>
            <div className="flex items-center gap-2 text-xl tracking-wider text-emerald-500">
              <span>
                <FaRegHandshake />
              </span>
              <p>And Discuss Potential Opportunities</p>
            </div>
          </div>
          <div className="col-start-4 col-end-6 rounded-2xl border-2 border-green-400 border-dashed font-cascadia mt-10">
            <div className="flex flex-col p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>Contact Details</p>
                </div>
                <p>+91- 9016784962</p>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>
                    <HiEnvelope />
                  </span>
                  <p>Email</p>
                </div>
                <p>shatayudeshpande99@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <p>Location</p>
                </div>
                <p>Vapi, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between border-t border-dashed">
          <div>
            <p className="flex items-center gap-1 tracking-wider">
              MADE WITH
              <span className="inline-block">
                <img
                  src="./react_logo.svg"
                  className="h-5 w-5"
                  alt="react-logo"
                />
              </span>
              &
              <span className="inline-block">
                <img
                  src="tailwind_logo.svg"
                  className="h-5 w-5"
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
