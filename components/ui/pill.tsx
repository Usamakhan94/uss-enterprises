const Pills = ({ children }: { children: any }) => {
  return (
    <div className="w-fit px-8 py-1 xsm:pt-2 rounded-[2.0625rem] pill_bg">
      {children}
    </div>
  );
};

export default Pills;
