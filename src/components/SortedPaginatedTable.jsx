// import { PencilIcon } from '@heroicons/react/24/solid';

import { Typography, Button, IconButton } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { formatDate, getRandomDate } from '../util';

const TABLE_HEAD = ['Order ID', 'Order status', 'Order date'];

const data = Array.from({ length: 100 }, () => 1).map((_, index) => ({
  index,
  id: Math.ceil(Math.random() * 10000000),
  orderDate: getRandomDate(),
  orderAmount: Math.ceil(Math.random() * 10000),
  status: ['pending', 'accepted', 'shipped', 'delivered'][
    Math.floor(Math.random() * 4)
  ],
}));

const rowLength = 10;

function SortedPaginatedTable() {
  const [tableData, setTableData] = useState(data.slice(0, rowLength));
  const [crtIndex, setCrtIndex] = useState(0);

  useEffect(() => {
    const startData = crtIndex * rowLength;
    setTableData(data.slice(startData, startData + rowLength));
  }, [crtIndex]);
  return (
    <div className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70 text-center"
              >
                Order Amount
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(
            ({ id, status, orderAmount, orderDate, index: idx }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-bold"
                      >
                        #{id}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {status.charAt(0).toUpperCase() +
                        status.slice(1).toLowerCase()}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatDate(orderDate)}
                    </Typography>
                  </td>
                  <td className={classes + ' text-center'}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {orderAmount}
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <div className="flex items-center justify-center border-t border-blue-gray-50 p-4">
        <Button
          variant="outlined"
          size="sm"
          className="flex items-center px-3 py-1 rounded-md border-2 border-gray-300 normal-case text-sm font-light text-gray-700"
          disabled={crtIndex == 0}
          onClick={() => setCrtIndex((p) => p - 1)}
        >
          <img
            src="/assets/icons/darkDownArrow.png"
            alt=""
            className="mr-2 rotate-90"
          />
          <span>Previous</span>
        </Button>
        <div className="flex items-center gap-2 mx-2">
          {Array.from({ length: data.length / rowLength }, () => 1).map(
            (_, index) => (
              <IconButton
                variant={crtIndex == index ? 'filled' : 'text'}
                color={crtIndex == index ? 'blue' : 'black'}
                size="sm"
                key={index}
                onClick={() => setCrtIndex(index)}
              >
                {index + 1}
              </IconButton>
            )
          )}
        </div>
        <Button
          variant="outlined"
          size="sm"
          disabled={crtIndex == data.length / rowLength - 1}
          onClick={() => setCrtIndex((p) => p + 1)}
          className="flex items-center px-3 py-1 rounded-md border-2 border-gray-300 normal-case text-sm  font-light text-gray-700"
        >
          <span>Next</span>
          <img
            src="/assets/icons/darkDownArrow.png"
            alt=""
            className="ml-2 rotate-[270deg]"
          />
        </Button>
      </div>
    </div>
  );
}
export default SortedPaginatedTable;
