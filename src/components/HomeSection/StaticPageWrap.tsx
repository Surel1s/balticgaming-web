const StaticPagesWrap = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="container ml-[0px] mr-[50px] md:mx-auto w-[84%] md:w-[70vw]">
      {children}
    </div>
  );
};

export default StaticPagesWrap;
