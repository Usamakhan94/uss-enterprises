import AnimatedCounter from "@/components/ui/AnimatedCounter";

const Experience = () => {
  return (
    <section className=" pt-16">
      <div className="container">
        <div className="grid sm:grid-cols-3 md:max-w-[80%] m-auto gap-4 sm:gap-0">
          <div className="text-center">
            <h4 className="2xl:text-h2 xl:text-[4.875rem] text-h3 font-bold font-inter leading-tight">
              <AnimatedCounter to={7} />+
            </h4>
            <span className="text-base font-semibold">Years of Experience</span>
          </div>
          <div className="text-center relative sm:before:w-[3px] before:w-full before:h-[0.125rem] sm:before:h-[60%] before:absolute sm:before:top-1/2 top-0 sm:before:-translate-y-1/2 before:left-0 before:bg-gradient-to-br before:from-[#007DFF] before:to-[#3C1477] sm:after:w-[3px] after:w-full sm:after:h-[60%] after:h-[0.125rem] after:absolute sm:after:top-1/2 after:top-[110%] sm:after:-translate-y-1/2 after:right-0 after:bg-gradient-to-br after:from-[#007DFF] after:to-[#3C1477]">
            <h4 className="2xl:text-h2 xl:text-[4.875rem] text-h3 font-bold font-inter leading-tight">
              <AnimatedCounter to={100} />+
            </h4>
            <span className="text-base font-semibold">Satisfied Clients</span>
          </div>
          <div className="text-center">
            <h4 className="2xl:text-h2 xl:text-[4.875rem] text-h3 font-bold font-inter leading-tight">
              <AnimatedCounter to={254} />
            </h4>
            <span className="text-base font-semibold">Orders in Process</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
