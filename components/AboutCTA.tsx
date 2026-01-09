export default function AboutCTA() {
  return (
    <section className="bg-primary-light px-3 md:px-10 py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 w-full">
          <h2 className="text-4xl font-bold font-poppins text-dark leading-tight mb-6">
            About Us
          </h2>

          <p className="text-dark max-w-max lg:max-w-80 leading-relaxed mb-8">
            White divine luxury. Place for HOF inspired modern architects and
            creative designers to build timeless living. We blend aesthetics,
            functionality and emotional living through elegant structures,
            premium finishing and sustainable architecture.
          </p>

          <a
            href="/contact-us"
            className="flex  max-w-80 items-center justify-between bg-primary  border border-gray-300 p-3 rounded-full text-sm text-white "
          >
            <p>Contact</p>
            <span className="w-8 h-8 rounded-full ws-double-ring ws-double-ring--tight bg-white text-black flex items-center justify-center text-xs">
              →
            </span>
          </a>
        </div>

        {/* Right Image Grid */}
        <div className="col-span-2 order-1 lg:order-2 grid grid-cols-2 md:grid-cols-4 gap-3">
          <img
            src="/assets/portfolio/bedroom.png"
            className="rounded-3xl object-cover h-[160px] w-full"
            alt=""
            loading="lazy"
            width={200}
            height={160}
          />

          <img
            src="/assets/portfolio/bedroom.png"
            className="rounded-3xl object-cover h-[160px] w-full"
            alt=""
            loading="lazy"
            width={200}
            height={160}
          />

          <img
            src="/assets/portfolio/bedroom.png"
            className="rounded-3xl object-cover h-[160px] w-full col-span-2"
            alt=""
            loading="lazy"
            width={400}
            height={160}
          />

          <img
            src="/img-1.png"
            className="rounded-3xl object-cover h-[160px] w-full col-span-2"
            alt=""
            loading="lazy"
            width={400}
            height={160}
          />

          <img
            src="/img-2.png"
            className="rounded-3xl object-cover h-[160px] w-full"
            alt=""
            loading="lazy"
            width={200}
            height={160}
          />

          <img
            src="/img-2.png"
            className="rounded-3xl object-cover h-[160px] w-full"
            alt=""
            loading="lazy"
            width={200}
            height={160}
          />
        </div>
      </div>
    </section>
  );
}

