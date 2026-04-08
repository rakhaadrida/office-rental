import { Office } from "@/entities/office";
import Image from "next/image";

export default function Content({ office }: { office: Office }) {
  return (
    <section
      id="Details"
      className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
    >
      <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
        <p className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
          Popular
        </p>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-extrabold text-[32px] leading-[44px]">
              {office.title}
            </h1>
            <div className="flex items-center gap-[6px] mt-[10px]">
              <Image
                src={"/assets/images/icons/location.svg"}
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6"
              />
              <p className="font-semibold">{office.location}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-1">
              <Image
                src="/assets/images/icons/Star 1.svg"
                alt="star"
                width={0}
                height={0}
                sizes="100vw"
                className="w-5 h-5"
              />
              <Image
                src="/assets/images/icons/Star 1.svg"
                alt="star"
                width={0}
                height={0}
                sizes="100vw"
                className="w-5 h-5"
              />
              <Image
                src="/assets/images/icons/Star 1.svg"
                alt="star"
                width={0}
                height={0}
                sizes="100vw"
                className="w-5 h-5"
              />
              <Image
                src="/assets/images/icons/Star 1.svg"
                alt="star"
                width={0}
                height={0}
                sizes="100vw"
                className="w-5 h-5"
              />
              <Image
                src="/assets/images/icons/Star 1.svg"
                alt="star"
                width={0}
                height={0}
                sizes="100vw"
                className="w-5 h-5"
              />
            </div>
            <p className="font-semibold text-right">
              {office.rating}/5 (19,384)
            </p>
          </div>
        </div>
        <p className="leading-[30px]">{office.about}</p>
        <hr className="border-[#F6F5FD]" />
        <h2 className="font-bold">You Get What You Need Most</h2>
        <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
          {office.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={feature.icon}
                alt={feature.label}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[34px] h-[34px]"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">
                  {feature.label}
                </p>
                <p className="text-sm leading-[21px]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-[#F6F5FD]" />
        <div className="flex flex-col gap-[6px]">
          <h2 className="font-bold">Office Address</h2>
          <p>{office.address}</p>
        </div>
        <div className="overflow-hidden w-full h-[280px]">
          <div
            id="my-map-display"
            className="h-full w-full max-w-[none] bg-none"
          >
            <iframe
              className="h-full w-full border-0"
              src="https://www.google.com/maps/embed/v1/place?q=${office.title}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
          <a
            className="from-embedmap-code"
            href="https://www.bootstrapskins.com/themes"
            id="enable-map-data"
          >
            premium bootstrap themes
          </a>
        </div>
      </div>
      <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          {office.isFullyBooked ? (
            <div>
              <p className="font-bold text-xl leading-[30px]">
                Sorry. This office is{" "}
                <span className="text-[#FF2D2D]">fully booked</span> at this
                moment, try next time.
              </p>
            </div>
          ) : (
            <div>
              <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
                Rp {office.price.toLocaleString("id")}
              </p>
              <p className="font-semibold mt-1">
                For {office.duration} working
              </p>
            </div>
          )}
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/icons/verify.svg"
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[30px] h-[30px]"
              />
              <p className="font-semibold leading-[28px]">
                Mendapatkan akses pembelajaran terbaru terkait dunia startup
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/icons/verify.svg"
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[30px] h-[30px]"
              />
              <p className="font-semibold leading-[28px]">
                Mendapatkan akses pembelajaran terbaru terkait dunia startup
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/icons/verify.svg"
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[30px] h-[30px]"
              />
              <p className="font-semibold leading-[28px]">
                Mendapatkan akses pembelajaran terbaru terkait dunia startup
              </p>
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[14px]">
            {!office.isFullyBooked && (
              <a
                href="booking.html"
                className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
              >
                <Image
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-6 h-6"
                />
                <span>Book This Office</span>
              </a>
            )}
            <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
              <Image
                src="/assets/images/icons/save-add.svg"
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6"
              />
              <span>Save for Later</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
          <h2 className="font-bold">Contact Our Sales</h2>
          <div className="flex flex-col gap-[30px]">
            {office.salesContacts.map((sales, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <Image
                      src={sales.photo}
                      alt={sales.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">{sales.name}</p>
                    <p className="text-sm leading-[21px]">{sales.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <Image
                      src="/assets/images/icons/call-green.svg"
                      alt="icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-10 h-10"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/images/icons/chat-green.svg"
                      alt="icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-10 h-10"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
