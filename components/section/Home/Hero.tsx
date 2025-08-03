"use client";
import { ScrollIcon } from "@/components/ui/icons";
import Transition from "@/components/ui/transition";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
const Hero = () => {
  const [Loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const siteLoaded = () => {
  //     setTimeout(() => {
  //       setLoading(true);
  //     }, 100);
  //   };
  //   console.log(document.readyState);
  //   if (document.readyState === "complete") {
  //     siteLoaded();
  //   }
  // }, []);
  // document.addEventListener("DOMContentLoaded", () =>
  //   console.log("DOMContentLoaded")
  // );

  return (
    <section
      id="hero"
      className="xsm:pt-[10rem] pt-[5rem] relative isolate min-h-screen xsm:block flex justify-center items-center"
    >
      <div className="absolute 2xl:-top-[62.5rem] xl:-top-[42.5rem] md:-top-[32.5rem] sm:-top-[22.5rem] -top-[1.5rem] left-1/2 -translate-x-1/2 w-full -z-50 pointer-events-none max-w-[120rem] blur-[3.125rem]">
        <img src="/colored_bg.webp" className="w-full" alt="" />
      </div>
      <div className="container relative">
        {Loading && (
          <h1 className="lg:text-h1 xsm:text-h2 text-h4 flex flex-col font-bold w-fit m-auto">
            <div className="relative overflow-hidden">
              <Transition>
                <span className=" xsm:ml-[1.5em] ml-[1.25em] inline-block">
                  Design
                </span>
              </Transition>
            </div>
            <div className=" overflow-hidden">
              <Transition>
                <span>Develope</span>
              </Transition>
            </div>
            <div className=" overflow-hidden">
              <Transition>
                <span className=" xsm:ml-[1.5em] ml-[1.25em] inline-block">
                  Implement.
                </span>
              </Transition>
            </div>
          </h1>
        )}
        <div className="flex flex-col justify-center items-center xsm:my-12 mt-48">
          <div className=" animate-bounce duration-1000 xsm:max-w-11 max-w-8">
            <ScrollIcon />
          </div>
          <h6 className=" text-base font-semibold mt-2">Scroll</h6>
        </div>
        <div
          className=" md:w-[180px] md:h-[180px] sm:w-[160px] xsm:w-[120px] w-[80px] sm:h-[160px] xsm:h-[120px] h-[80px] !bg-no-repeat !bg-cover absolute xl:top-[5%] lg:top-[26%] sm:top-[14%] top-[-14%] xl:right-[20%] lg:right-[10%] right-[10%] overflow-hidden"
          style={{ background: "url(/inner-logo.webp)" }}
        >
          <Image
            src="/outer-logo.png"
            alt=""
            fill
            className="!static animate-spin duration-full"
          />
        </div>
      </div>
      <Suspense
        fallback={
          <h1 className="tex-white absolute z-50 font-bold text-[92rem]">
            Loading
          </h1>
        }
      >
        <div className="absolute lg:w-[1200px] md:w-[56.25rem] xsm:w-[500px] w-[300px] lg:h-[700px] md:h-[500px] xsm:h-[400px] h-[200px] pointer-events-none top-[15%] -z-10 -left-[5%]">
          <Image
            className="object-contain"
            src="/main_bnr.webp"
            alt="Bg Curve"
            fill
          />
        </div>
      </Suspense>
    </section>
  );
};

export default Hero;
