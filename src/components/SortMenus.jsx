import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Radio,
} from '@material-tailwind/react';

export function SortMenus() {
  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button
          size="sm"
          className="py-1 px-3 normal-case flex items-center justify-center border-2 border-gray-300 bg-white focus:ring-0 text-gray-600 text-md font-light rounded-md outline-none "
          variant="outlined"
        >
          Sort
          <img src="/assets/icons/sort.png" className="ml-2 " alt="" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem className="p-0">
          <Radio name="type" label="Order date (Newest first)" color="blue" />
        </MenuItem>
        <MenuItem className="p-0">
          <Radio
            name="type"
            label="Order date (Oldest first)"
            defaultChecked
            color="blue"
          />
        </MenuItem>
        <MenuItem className="p-0">
          <Radio
            name="type"
            label="Order amount (High to low)"
            defaultChecked
            color="blue"
          />
        </MenuItem>
        <MenuItem className="p-0">
          <Radio
            name="type"
            label="Order amount (Low to high)"
            defaultChecked
            color="blue"
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
