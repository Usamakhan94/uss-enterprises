import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const Clients = () => {
  return (
    <section>
      <div className="container">
        <h2 className="2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h5 pt-4 xsm:pt-0 font-bold leading-[1.2] text-center mb-10">
          Our Clientele
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <InfiniteSlider speedOnHover={20} gap={24}>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
        </InfiniteSlider>
        <InfiniteSlider speedOnHover={20} gap={24} reverse>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[300px] rounded-[4px]"
          />
        </InfiniteSlider>
      </div>
    </section>
  );
};
export default Clients;
