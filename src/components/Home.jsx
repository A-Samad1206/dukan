import { DukanPayDeactivatedAlert } from './Alerts';
import Overview from './Overview';

const Home = () => {
  return (
    <div className="p-6">
      <DukanPayDeactivatedAlert />
      <Overview />
      <div className="flex gap-3 items-stretch ">
        <CardWrapper>
          <div className="px-4 py-5 ">
            <h2 className="text-xl text-gray-900 font-medium pb-2">
              Share store link
            </h2>
            <p className="text-md text-gray-500 pb-2">
              Customers can visit the following link and place their orders.
            </p>
            <a
              href=""
              className="flex items-center text-[#EE741F] text-lg pb-6"
            >
              <span className="underline mr-1">manosuperstore.com</span>
              <img
                src="/assets/icons/extLink.png"
                alt="External Link"
                width={15}
                height={15}
              />
            </a>
            <div className="flex items-center pb-3">
              <p className="text-[#808080] mr-3">Share via</p>

              <div className="flex items-center justify-center">
                <img src="/assets/icons/whatsapp.png" alt="" />
                <img src="/assets/icons/fb.png" className="mx-3" alt="" />
                <img src="/assets/icons/twt.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center bg-[#F2F2F2] items-center py-4">
            <span>Get your custom domain</span>
            <img src="/assets/icons/rightArrow.png" className="ml-2" alt="" />
          </div>
        </CardWrapper>
        <CardWithChart
          title1={'TOTAL SALES'}
          title2={'View breakdown'}
          title3={'58.61%'}
          title4={'4 orders'}
        />
        <CardWithChart
          title1={'STORE CONVERSION RATE'}
          title3={'58.61%'}
          title4={'121 sessions'}
        />
      </div>

      <div className="flex gap-6 my-4">
        <div className="flex-[7]">
          <TopStrip title="Shortcuts (3/6)" subtitle={'Edit'} />
          <div className="flex gap-4 flex-wrap bg-white">
            <StatsCards
              icon={'/assets/icons/plus.png'}
              title="Add New Product"
            />
            <StatsCards
              icon={'/assets/icons/doubleQuote.png'}
              title="Product reviews and ..."
            />
            <StatsCards
              icon={'/assets/icons/speaker.png'}
              title="Marketing Designs"
            />

            {/* <p>Product reviews and product</p>
            <p>Marketing design</p>
            <p>Add new shortcut</p> */}
          </div>
        </div>
        <div className="flex-[3]">
          <TopStrip title="Orders" subtitle={'View all'} />
          <div className="flex items-center py-5 px-4 bg-white mb-2">
            <div className="flex-1">
              <img
                src="/assets/icons/copyIcon.png"
                width={32}
                height={32}
                alt=""
              />
              <p className="text-md mt-2">13 pending orders worth ₹2,999</p>
            </div>
            <img src="/assets/icons/rightArrowWhite.png" alt="" />
          </div>
          <div className="flex items-center py-5 px-4 bg-white mb-2">
            <div className="flex-1">
              <img
                src="/assets/icons/shipIcon.png"
                width={32}
                height={32}
                alt=""
              />
              <p className="text-md mt-2">8 orders to ship</p>
            </div>
            <img src="/assets/icons/rightArrowWhite.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const CardWrapper = ({ children, className }) => (
  <div
    className={
      'flex-1 bg-white rounded-lg shadow-[0_2px_6px_p_#1A181E] ' + className
    }
  >
    {children}
  </div>
);

const CardWithChart = ({ title1, title2, title3, title4 }) => {
  return (
    <CardWrapper className="py-5 px-4">
      <div className="flex items-center">
        <p className="text-[#4D4D4D] mr-1 text-md">{title1}</p>
        <img src="/assets/icons/infoWhite.png" alt="" />
        {title2 ? (
          <p className="flex-1 text-right text-[#4D4D4D] underline">{title2}</p>
        ) : (
          ''
        )}
      </div>
      <div className="flex justify-between items-end my-2">
        <p className="text-3xl font-semibold">{title3}</p>
        <p className="text-[#808080] text-base">{title4}</p>
      </div>
      <img src="/assets/icons/chart1.png" width="100%" alt="" />
    </CardWrapper>
  );
};

const StatsCards = ({ title, icon, TopStrip }) => (
  <div className="flex   flex-col px-4 pr-16 py-4 rounded-md border-2 border-gray-200 w-[300px] h-[120px]">
    {/* {TopStrip} */}
    <img src={icon} className="mb-2" width={50} height={50} alt="" />
    <p
      className="text-clip w-full overflow-hidden"
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {title}
    </p>
  </div>
);
const TopStrip = ({ title, subtitle }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <p className="text-lg font-medium">{title}</p>
      <p className="font-light underline">{subtitle}</p>
    </div>
  );
};
