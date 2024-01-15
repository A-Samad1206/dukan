export const KYCAlert = () => (
  <CustomAlert
    title="Verify KYC to receive payouts"
    subtitle="To receive your Dukaan payouts timely and securely, please verify your
       KYC with Dukaan."
    btnLabel={`Complete your KYC`}
  />
);

export const NewPaymentAlert = () => (
  <CustomAlert
    title="Dukaan Pay will be deactivated soon!"
    subtitle="To continue receiving online payments from your customers, please set up a new payment provider. Dukaan Pay will no longer be operational from 1 September, 2023."
    btnLabel="Set up new payment provider"
  />
);

export const DukanPayDeactivatedAlert = () => (
  <CustomAlert
    title="Dukaan Pay is no longer operational!"
    subtitle="To continue receiving online payments from your customers, please set up a new payment provider. "
    btnLabel="Set up new payment provider"
  />
);

export const CustomAlert = ({ title, subtitle, btnLabel, handleClick }) => {
  return (
    <div className="flex items-center py-2 px-3 border-2 border-red-200 bg-red-50 rounded-md">
      <div>
        <img src="/assets/icons/alert.png" alt="alert" width={27} height={27} />
      </div>

      <div className="flex-1 px-2">
        <p className="text-[#1A181E] text-sm font-medium">{title}</p>
        <p className="text-[#4D4D4D] text-sm">{subtitle}</p>
      </div>
      <button className="btn px-6 py-1 text-sm bg-red-500 text-white font-medium border-0">
        Set up new payment provider
      </button>
      {/* <MyButton
          name={btnLabel}
          className="bg-red-600 text-white font-semibold text-3xl"
          onClick={handleClick}
        /> */}
    </div>
  );
};
