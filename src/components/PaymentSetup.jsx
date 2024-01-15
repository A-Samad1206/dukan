import { useState } from 'react';

import Toggle from './Toggle';
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import MyButton from './UI/MyButton';

const PaymentSetup = () => {
  return (
    <>
      <div className="mt-8  mx-auto w-2/3 flex flex-col ">
        <div className="border-2 border-slate-100 p-8 rounded-md bg-white">
          <p className="text-base text-gray-9 00">Payment providers</p>
          <p className="text-sm text-gray-600 mb-4">
            Set up payment providers to accept payments from your customers.
          </p>
          <PayOption
            title="Cashfree Payments"
            src="/assets/icons/cashfree.png"
            w={50}
            h={25}
            isActive={true}
          />
          <PayOption
            title="Razorpay"
            src="/assets/icons/razorpay.png"
            w={40}
            h={40}
            open={true}
          />
          <PayOption
            title="PhonePe Payment Gateway"
            src="/assets/icons/phonepay.png"
            w={40}
            h={40}
          />
          <PayOption
            title="Paytm Payment Gateway"
            src="/assets/icons/paytm.png"
            w={40}
            h={30}
          />
          <PayOption
            title="Cash on Delivery"
            src="/assets/icons/cod2.png"
            isToggle={true}
          />
        </div>
        <div className="border-2 border-slate-100 p-8 rounded-md bg-white mt-8 flex items-center mb-4">
          <div className="flex-1">
            <p className="text-base text-gray-9 00">Manual payment methods</p>
            <p className="text-sm text-gray-600 mb-4 pr-4">
              Payments that are made outside online store. Allows you to accept
              cash, check or other custom forms of payment.
            </p>
          </div>
          <Toggle />
        </div>
        <div className="flex-1 flex justify-end pb-16">
          <button className="btn text-sm bg-blue-700 px-6 py-2 text-white font-bold">
            Finish
          </button>
        </div>
      </div>
    </>
  );
};
export default PaymentSetup;

const PayOption = ({
  src,
  title,
  w = 30,
  h = 30,
  isToggle,
  open = false,
  isActive = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const handleOpen = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div className="flex items-center mb-3">
      <div className="w-[64px] h-[64px] grid place-items-center border-[2px] rounded-lg border-gray-200 ">
        <img src={src} alt="Razorpay" width={w} height={h} />
      </div>
      <p className="flex-1 pl-4"> {title}</p>
      {isToggle ? (
        <Toggle />
      ) : isActive ? (
        <div className="flex items-center">
          <button className="btn border-gray-400 text-gray-800 rounded-md text-xs px-4 py-2">
            Details
          </button>
          <DeactiveMenu>
            <IconButton className="rounded-full" variant="text" size="md">
              <img src="/assets/icons/more.png" alt="" />
            </IconButton>
          </DeactiveMenu>
        </div>
      ) : (
        <SetupBtn onClick={handleOpen} />
      )}
      {/* <UpdatePaymentDialog open={isOpen} handleOpen={handleOpen} /> */}
      {/* <CashFreeDialog open={isOpen} handleOpen={handleOpen} /> */}
    </div>
  );
};

const DeactiveMenu = ({ children }) => {
  return (
    <Menu>
      <MenuHandler>{children}</MenuHandler>
      <MenuList>
        <MenuItem>Deactivate</MenuItem>
        <MenuItem className="text-red-500 hover:text-red-500">Remove</MenuItem>
      </MenuList>
    </Menu>
  );
};

const SetupBtn = (props) => (
  <button
    className="btn px-4 py-2 text-xs font-bold border-blue-400 text-blue-800"
    {...props}
  >
    Set up
  </button>
);
