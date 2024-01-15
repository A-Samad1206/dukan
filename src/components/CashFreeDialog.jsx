import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from '@material-tailwind/react';

const CashFreeDialog = ({ open, handleOpen }) => {
  return (
    <Dialog
      open={open}
      size="sm"
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader className="flex justify-between ">
        <div>
          <Typography variant="h5" color="blue-gray">
            Set up Cashfree Payments
          </Typography>
          <Typography color="gray" variant="paragraph" className="text-xs">
            Please enter your Cashfree API keys. You can find your API keys on{' '}
          </Typography>
          <Typography color="blue" className="underline cursor-pointer text-xs">
            Cashfree API Key Dashboard
          </Typography>
        </div>
        <IconButton
          color="blue-gray"
          size="lg"
          variant="text"
          onClick={handleOpen}
          className="self-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={2}
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </DialogHeader>
      <DialogBody className="pt-0">
        <div className="bg-[#E7F0F7] flex justify-center items-center p-2">
          <img src="/assets/icons/info.png" alt="Info" width={20} height={32} />
          <p className="px-2 text-gray-800 text-sm ">
            Don’t have an Cashfree account?{' '}
            <span className="underline">Create now</span>
          </p>
        </div>
        <FormField label="API ID" placeholder="Enter merchant ID" />
        <FormField label="Secrey Key" placeholder="Enter public key" />
      </DialogBody>
      <DialogFooter>
        <button
          onClick={handleOpen}
          className="border-2 ripple mx-auto bg-blue-200 text-white p-1 self-center   rounded-lg px-8 text-lg hover:bg-blue-500 transition-all duration-100"
        >
          Continue
        </button>
      </DialogFooter>
    </Dialog>
  );
};

export default CashFreeDialog;

const FormField = ({ label, placeholder }) => {
  return (
    <div className="mt-8">
      <p className="text-xs text-gray-500 mb-2">
        {label} <span className="text-red-800">*</span>
      </p>
      <input
        type="password"
        className="w-full outline-none border-[1px]  border-gray-400 rounded-sm p-1"
        placeholder={placeholder}
      />
    </div>
  );
};
