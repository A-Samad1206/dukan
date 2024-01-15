import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import Toggle from './Toggle';

const cardOptions = [
  'Visa',
  'Mastercard',
  'Maestro',
  'Rupay',
  'American Express',
  'Dinner Club',
  'Paytm',
  'Airtel Money',
  'Amazon Pay',
];
export function UpdatePaymentDialog({ open, handleOpen }) {
  return (
    <Dialog
      size="sm"
      open={open}
      handler={handleOpen}
      className="max-h-[70vh] flex flex-col"
    >
      <DialogHeader className="justify-between items-center">
        <div>
          <Typography variant="h5" color="blue-gray">
            Update payment methods{' '}
          </Typography>
        </div>
        <IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
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
      <DialogBody className="overflow-y-auto !px-5 myscrollbar">
        {cardOptions.map((card) => (
          <PaymentCardOption
            key={card}
            title={card}
            src={`/assets/icons/${card.split(' ').join('').toLowerCase()}.png`}
          />
        ))}
      </DialogBody>
      <DialogFooter className="flex flex-col justify-center  gap-2">
        <button
          onClick={handleOpen}
          className="border-2 ripple mx-auto bg-blue-200 text-white   p-2 self-center   rounded-lg px-8 text-lg hover:bg-blue-500 transition-all duration-100"
        >
          Update
        </button>
        <Typography
          variant="small"
          color="gray"
          className="font-bold underline cursor-pointer"
        >
          Edit Cashfree details
        </Typography>
      </DialogFooter>
    </Dialog>
  );
}

const PaymentCardOption = ({ title, src }) => {
  return (
    <div className="flex items-center mt-4">
      <div className="w-[40px] h-[40px] grid place-items-center bg-gray-300 rounded-md">
        <img src={src} alt="visa" width={30} height={30} />
      </div>
      <p className="pl-4 text-sm text-gray-900 flex-1">{title}</p>
      <Toggle />
    </div>
  );
};
