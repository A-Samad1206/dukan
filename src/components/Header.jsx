import Search from './Search';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-slate-200 bg-white">
      <div className="flex items-center pl-3 ">
        <p className="text-black text-xl font-medium">Payments</p>
        <img
          src="/assets/icons/howItWorks.png"
          alt="How It Work"
          width={13}
          height={12}
          className="mx-2"
        />
        <p className="text-[#4D4D4D] text-xs">How It Works</p>
      </div>
      <div className="flex-1 flex justify-center  w-fit">
        <Search placeholder={'Search features, tutorials etc.'} />
      </div>
      <div className="flex items-center  ">
        <img
          src="/assets/icons/needHelp.png"
          alt="Nedd Help"
          width={16}
          className=""
          height={16}
        />
        <p className="text-sm text-[#4D4D4D] px-4 py-1 border-r-2 border-slate-400 mr-2">
          Need Help?
        </p>
        <div className="rounded-full bg-gray-300 p-2 mx-2 w-[40px] h-[40px] grid place-items-center">
          <img
            src="/assets/icons/union.png"
            alt="Union"
            width={17}
            height={17}
          />
        </div>
        <div className="rounded-full bg-gray-300 p-2 w-[40px] h-[40px] grid place-items-center mr-2">
          <img
            src="/assets/icons/menuIcon.png"
            alt="Union"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
