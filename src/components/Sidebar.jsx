const navItems = [
  'Home',
  'Orders',
  'Products',
  'Delivery',
  'Marketing',
  'Analytics',
  'Payments',
  'Tools',
  'Discounts',
  'Audience',
  'Appearance',
  'Plugins',
];

const Sidebar = () => {
  return (
    <>
      <LogoBox />
      <div className="flex-1  overflow-hidden pr-0 pl-4 ">
        <div className="h-full overflow-auto myscrollbar ">
          {navItems.map((nav) => (
            <NavItem
              key={nav}
              title={nav}
              icon={`/assets/icons/${nav.toLowerCase()}.png`}
            />
          ))}
        </div>
      </div>
      <AvailCredit />
    </>
  );
};

export default Sidebar;
const LogoBox = () => {
  return (
    <div className="flex items-center p-4">
      <div className="rounded-lg overflow-hidden">
        <img
          src="/assets/dukan.png"
          className=" w-[50px] h-[50px]   aspect-square"
          alt="Dukan Logo"
        />
      </div>
      <div className="flex flex-col flex-1 px-2 pt-1">
        <div className="text-base text-white"> Nishyan</div>
        <div className="text-sm underline text-gray-300 hover:cursor-pointer mt-0.5">
          Visit store
        </div>
      </div>
      <img
        src="/assets/icons/downArrow.png"
        alt="Down Arrow"
        width={25}
        height={25}
        className="hover:cursor-pointer"
      />
    </div>
  );
};
const AvailCredit = () => {
  return (
    <div className="px-4 py-2 flex items-center bg-[#353C53] rounded-md  m-4 text-white">
      <div className="p-3 rounded-md bg-[#495065]">
        <img src="/assets/icons/wallet.png" alt="" width={30} height={30} />
      </div>

      <div className="px-3 flex flex-col h-full justify-around">
        <p className="text-[13px] text-slate-300">Availaible Credit</p>
        <p className="text-[15px] ">220.10</p>
      </div>
    </div>
  );
};

const NavItem = ({ icon, title }) => {
  return (
    <div className="flex px-6 py-2 mb-2 items-center hover:bg-[#495065] cursor-pointer rounded-md text-current transition duration-75 text-gray-300 hover:text-white mr-2">
      <img src={icon} className=" " width={23} height={23} alt="" />
      <p className="px-4  text-base  ">{title}</p>
    </div>
  );
};
