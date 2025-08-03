import { useState } from "react";
import { MissionIcon, VisionIcon, GoalIcon } from "@/components/ui/icons";

const VisionCard = ({
  cardContent,
  indexed,
}: {
  cardContent: any;
  indexed: number;
}) => {
  const [activeCard, setActiveCard] = useState(false);

  let iconRendering;

  switch (indexed) {
    case 0:
      iconRendering = <MissionIcon fill={activeCard} />;
      break;
    case 1:
      iconRendering = <VisionIcon fill={activeCard} />;
      break;
    case 2:
      iconRendering = <GoalIcon fill={activeCard} />;
      break;
  }
  return (
    <div
      className={`rounded-[0.9375rem] xsm:px-[2.4375rem] px-[1.4375rem] xsm:py-[3.75rem] py-[1.75rem] group transition-all duration-700 flex flex-col items-center justify-center xsm:gap-7 gap-2 text-center relative overflow-hidden before:absolute before:top-[1px] before:-z-10 before:left-[1px] before:rounded-[0.9375rem] ${
        indexed === 1
          ? "about_cards"
          : indexed === 2
          ? "bg-card-foregrounddark"
          : "bg-card"
      }`}
      onMouseEnter={() => setActiveCard((prev) => !prev)}
      onMouseLeave={() => setActiveCard(false)}
    >
      <div className="relative isolate pb-4">
        <div
          className={`xsm:w-[135px] w-[100px] xsm:h-[135px] h-[100px] rounded-full transition-all duration-300 rotate-45 absolute -left-[1px] -top-[1px] -z-10 ${
            indexed === 1
              ? "shadow-single group-hover:shadow-multi"
              : "shadow-multi group-hover:shadow-single"
          }`}
        />
        <div
          className={`group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 xsm:w-[133px] w-[99px] xsm:h-[133px] h-[99px] rounded-full translate-x-4 translate-y-4 grid place-items-center ${
            indexed === 2
              ? "bg-card"
              : indexed === 1
              ? "bg-white"
              : "bg-card-foreground"
          }`}
        >
          {iconRendering}
        </div>
      </div>
      <h4 className="xl:text-h4 xsm:text-h5 text-h6 font-bold leading-none">
        {cardContent.heading}
      </h4>
      <p
        className={`font-medium xsm:mb-9 xsm:text-body text-sm transition-all duration-300 ${
          indexed === 1 ? "text-white" : ""
        }`}
      >
        {cardContent.details}
      </p>
    </div>
  );
};

export default VisionCard;
