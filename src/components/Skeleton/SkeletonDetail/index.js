const SkeletonDetail = () => {
  return (
    <>
      <div className="m-auto gap-5 animate-pulse border-2 flex items-center w-[300px] h-[300px] bg-slate-200 rounded-xl"></div>
      <div className="lg:justify-self-auto flex w-full flex-col gap-3 justify-self-start">
        <div className="w-full animate-pulse rounded-lg h-[20px] bg-slate-200 font-semibold"></div>
        <div className="w-full animate-pulse rounded-lg h-[20px] bg-slate-200 font-semibold"></div>
        <span className="animate-pulse rounded-lg w-32 h-[20px] bg-slate-200 "></span>
        <span className="animate-pulse rounded-lg w-32 h-[20px] bg-slate-200 "></span>
        <span className="animate-pulse rounded-lg w-56 h-[20px] bg-slate-200 "></span>
        <span className="animate-pulse rounded-lg w-full h-[20px] bg-slate-200 "></span>
        <span className="animate-pulse rounded-lg w-full h-[20px] bg-slate-200 "></span>
        <span className="animate-pulse rounded-lg w-full h-[20px] bg-slate-200 "></span>
        <div>
          <h1 className="text-xl font-medium mb-3"></h1>
          <p className="text-base"></p>
        </div>
        <div className="border-2 animate-pulse border-slate-200  rounded-lg flex flex-wrap justify-between items-center gap-5 p-5">
          <div>
            <div className="animate-pulse rounded-lg w-32 h-[20px] bg-slate-200 mb-3"></div>
            <div className="animate-pulse rounded-lg w-56 h-[20px] bg-slate-200 mb-3"></div>
            <div className="animate-pulse rounded-lg w-56 h-[20px] bg-slate-200"></div>
          </div>
          <div>
            <div className="animate-pulse rounded-lg w-32 h-[20px] bg-slate-200 mb-3"></div>
            <div className="animate-pulse rounded-lg w-16 h-[20px] bg-slate-200"></div>
          </div>
          <div className="animate-pulse rounded-lg w-32 h-[45px] bg-slate-200 mb-3"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonDetail;
