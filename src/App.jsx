import { ThemeProvider } from '@material-tailwind/react';

import Screen from './components/Screen';
import Sidebar from './components/Sidebar';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  // return <SortedPaginatedTable />;
  return (
    <ThemeProvider>
      <Screen>
        <div className="flex h-full w-full">
          <div className="w-[260px] bg-[#1E2640] h-full overflow-hidden flex flex-col">
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden h-full max-h-full bg-[#FAFAFA]">
            <Header />
            <div className="flex-1 overflow-y-auto myscrollbar">
              {/* <PaymentSetup /> */}
              {/* <Transactions /> */}
              <Home />
            </div>
          </div>
        </div>
      </Screen>
    </ThemeProvider>
  );
};

export default App;
