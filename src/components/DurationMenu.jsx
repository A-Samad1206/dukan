import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { useState } from 'react';

const DurationMenu = ({ data }) => {
  const [idx, setIdx] = useState(0);
  const [open, setopem] = useState(false);
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      open={open}
      handler={() => {
        setopem((p) => !p);
      }}
    >
      <MenuHandler>
        <Button
          onClick={() => {
            alert('csnkjdjk');
          }}
          variant="outlined"
          className="py-2 px-4 flex items-center justify-center border-2 border-gray-300 bg-white focus:ring-0 font-medium text-sm rounded-md outline-none "
        >
          <span className="normal-case mr-2">{data[idx]}</span>
          <img
            src="/assets/icons/darkDownArrow.png"
            width={12}
            height={12}
            className={open ? 'rotate-180' : ''}
            alt=""
          />
        </Button>
      </MenuHandler>
      <MenuList>
        {data.map((d, ind) => (
          <MenuItem key={d} onClick={() => setIdx(ind)}>
            {d}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DurationMenu;
