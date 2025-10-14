import React from "react";
import PageHeading from "@/components/shared/page-heading";
import Image from "next/image";
import ValuesSection from "./components/values-section";
// import TeamSection from "./components/team-section";
import CtaSection from "@/components/shared/cta-section";

const About = () => {
  return (
    <>
      <section className="bg-gray-50">
        <PageHeading
          title="About Us"
          breadcrumb={["Home", "About Us"]}
          backgroundImage="/hero-section-bg.png"
        />
        <div className="px-6 md:px-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
            {/* Left Column: Text and Stats */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-base font-semibold tracking-wide uppercase text-primary">
                  About Company
                </h2>
                <h3 className="text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  {"Your Partner in Seamless Logistics"}
                </h3>
                <p className="max-w-[600px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Founded on June 20, 2011, by Mr. Madhav Prasad Baral,
                  Bindabasini Logistics is built on over 25 years of expertise
                  in logistics and transportation. From our early
                  entrepreneurial roots, we have grown into a trusted partner,
                  simplifying transportation management and customs clearance
                  across Nepal and beyond.
                </p>
                <p className="max-w-[600px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  With our own fleet of trailers and a reliable carrier network,
                  we ensure cargo moves smoothly, efficiently, and on time.
                  Beyond moving goods, we provide data-driven insights to help
                  businesses cut costs, secure dependable capacity, and
                  streamline operations. Our mission is clear: to bring
                  innovation, energy, and efficiency to logistics while
                  supporting every client&apos;s success. Guided by trust,
                  collaboration, and respect, we build long-term partnerships
                  that deliver confidence, value, and growth. For us, your
                  success is our destination.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    2011
                  </div>
                  <div className="text-sm font-medium uppercase text-gray-500">
                    YEAR FOUNDED
                  </div>
                  <p className="text-gray-600 text-xs md:text-base">
                    Established with a mission to make logistics simpler,
                    faster, and more reliable.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    20K+
                  </div>
                  <div className="text-sm font-medium uppercase text-gray-500">
                    SHIPMENTS MANAGED
                  </div>
                  <p className="text-gray-600 text-xs md:text-base ">
                    With the vision of bringing global procurement experts
                    together
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    100%
                  </div>
                  <div className="text-sm font-medium uppercase text-gray-500">
                    SATISFACTION
                  </div>
                  <p className="text-gray-600 text-xs md:text-base">
                    Building long-term client relationships through trust and
                    reliability.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    500+
                  </div>
                  <div className="text-sm font-medium uppercase text-gray-500">
                    CLIENTS WORLDWIDE
                  </div>
                  <p className="text-gray-600 text-xs md:text-base">
                    Partnering with businesses of all sizes across industries
                    for over a decade.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Image Layout */}
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/about_1.jpg"
                  alt="Yellow and red truck on the road"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 md:-bottom-20 right-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-lg z-10">
                <Image
                  src="/terminal-birgunj8.JPG"
                  alt="Shipping crane lifting a container at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <ValuesSection />

          <div className="flex flex-col-reverse md:flex-row bg-primary/5 rounded-lg justify-center items-center gap-8 md:gap-16 py-8 md:py-18 my-2 md:my-12">
            <div className="flex flex-col justify-center space-y-4 w-full md:w-[56%] px-8 md:px-16">
              <div className="space-y-2">
                <h2 className="text-base font-semibold tracking-wide uppercase text-primary">
                  Message From Chairman
                </h2>
              </div>
              <div className="max-w-[600px] text-muted-foreground text-base md:text-lg">
                <p className="mb-4">
                  Importing goods into Nepal can be complicated, but at
                  Bindabasini Logistics we make it simple, reliable, and
                  stress-free. From handling customs in Kolkata to transport
                  into Nepal and final delivery to your door, our team takes
                  care of every step so you can focus on your business.
                </p>
                <p>
                  With over 25 years of experience, a strong network, and a
                  dedicated team, we’ve become a trusted partner for companies
                  across Nepal delivering not just goods, but confidence, value,
                  and lasting relationships.
                </p>
              </div>
              <div className="mt-2 flex items-center space-x-4">
                <div>
                  <span className="block text-lg font-semibold text-gray-900">
                    Mr. Madhav Prasad Baral
                  </span>
                  <span className="block text-sm text-primary font-medium">
                    Director
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0 px-4 md:px-0">
              <Image
                src="/service1.jpg"
                width={400}
                height={400}
                alt="Message From Chairman"
                className="rounded-lg object-cover max-w-[320px] md:max-w-[480px] h-56 md:h-86"
              />
            </div>
          </div>

          {/* <TeamSection /> */}
          <CtaSection />
        </div>
      </section>
    </>
  );
};

export default About;
