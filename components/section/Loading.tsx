import Image from "next/image";

const Loader = () => {
  return (
    <div className="absolute bg-card-foregrounddark inset-0 z-50 h-full w-full overflow-hidden grid place-items-center">
      <div className="flex items-end justify-start">
        <Image
          className=""
          src="/loader-logo.png"
          alt="Logo"
          width="160"
          height="98"
        />
      </div>
    </div>
  );
};

export default Loader;
