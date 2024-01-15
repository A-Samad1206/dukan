const Toggle = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-0
           peer-focus:ring-blue-000 dark:peer-focus:ring-blue-000 rounded-full peer
            dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
             peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
              after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
               dark:border-gray-600 peer-checked:bg-blue-500"
      />
    </label>
  );
};
export default Toggle;