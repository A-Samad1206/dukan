import Search from './Search';
import { SortMenus } from './SortMenus';
import SortedPaginatedTable from './SortedPaginatedTable';

import { DukanPayDeactivatedAlert } from './Alerts';
import Overview from './Overview';

const Transactions = () => {
  return (
    <div className="p-6">
      <DukanPayDeactivatedAlert />
      {/* Start - Overview and right side time-period selector */}
      <Overview />
      {/* End - Overview and right side time-period selector */}

      {/* Start - Payment types */}
      <div className="flex items-center border-b-2 border-gray-400">
        <button className="text-blue-700 text-lg px-3 py-2 border-b-2 border-blue-700 font-semibold">
          Razorpay
        </button>
        <button className="text-[#4D4D4D] text-lg px-3 py-2 mx-4  border-b-2 ">
          COD order(Dukaan Delivery)
        </button>
        <button className="text-[#4D4D4D] text-lg px-3 py-2 border-b-2 ">
          Dukaan Pay
        </button>
      </div>
      {/* End - Payment types */}

      {/* Start - Payout card */}
      <div className="flex items-center py-5">
        <PayoutCard title={'Pending Payout'} amount={'9,312'} />
        <div className="w-[20px]" />
        <PayoutCard title={'Completed Payout'} amount={'12,312.9'} />
      </div>
      {/* End - Payout card */}

      {/* Start - Table data Title */}
      <div className="p-0 flex items-center text-lg text-gray-900 font-semibold">
        <p className="pr-3 border-r-2 border-gray-700">Transactions</p>
        <p className="pl-3">This Month</p>
      </div>
      {/* End - Table data Title */}

      {/* Start - Pill */}
      <div className="flex items-center my-2">
        <button className="btn rounded-full py-1 px-5 bg-blue-700 text-sm text-white mr-3">
          Pending payout (23)
        </button>
        <button className="btn border-0 rounded-full py-1 px-5 bg-gray-300 text-sm text-gray-500 mr-3 font-semibold">
          Completed payout (2)
        </button>
      </div>
      {/* End - Pill */}

      {/* Start - Table data */}
      <div className="bg-white rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <Search
            placeholder={'Search by order ID...'}
            className="w-[200px] bg-white px-6 py-0"
          />
          <SortMenus />
        </div>
        <SortedPaginatedTable />
      </div>
      {/* End - Table data */}
    </div>
  );
};

export default Transactions;

const PayoutCard = ({ title, amount }) => {
  return (
    <div className="flex-1 rounded-xl py-6 px-4 bg-white shadow-[0px_2px_6px_0px_#1A181E0A]">
      <p className="text-md text-gray-700 mb-4 flex items-center">
        {title}
        <span className="inline-block ml-2">
          <img
            src="/assets/icons/moreInfo.png"
            width={18}
            height={18}
            alt="more info"
          />
        </span>
      </p>
      <p className="text-3xl text-black font-medium">₹{amount}</p>
    </div>
  );
};
