import React from 'react';
import DurationMenu from './DurationMenu';

const Overview = () => {
  return (
    <div className="flex justify-between items-end my-6">
      <p className="text-xl font-medium ">Overview</p>

      <DurationMenu
        data={[
          'This Month',
          'Last Month',
          'Last 6 Month',
          'This year',
          'Last Year',
        ]}
      />
    </div>
  );
};

export default Overview;
