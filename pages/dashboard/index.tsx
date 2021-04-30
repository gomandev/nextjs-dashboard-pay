import React from "react";
import { InfoCard, PaymentCard } from "../../components/cards";
import { SpendingChart } from "../../components/charts";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { TransactionList } from "../../components/transactions";
import { useViewport } from "../../hooks";

const index: React.FC = () => {
  const { width } = useViewport();

  if (width < 1100) {
    return (
      <div className="bg-black h-screen w-full ">
        <div className="flex flex-col justify-center items-center py-16">
          <div className="bg-gray-200 rounded-2xl p-3">
            <h1 className="text-indigo-500 font-bold text-3xl"> Pay</h1>
          </div>
          <h1 className="text-2xl text-white">
            Please open this page in a larger screen
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className=" bg-spartan-gray h-screen w-full  overflow-hidden">
      <div className="flex flex-col container mx-auto">
        <Navbar />
        <div className="flex flex-row h-80vh">
          <Sidebar />
          <div className="bg-white flex-auto flex rounded-3xl p-6 justify-between space-x-4">
            <div className="flex flex-auto flex-col mx-auto max-w-3xl space-y-6">
              <div className="flex flex-row flex-none w-full h-2/6 space-x-5">
                <div className="flex flex-none w-3/6 flex-col ">
                  <h1
                    role="heading"
                    className="text-gray-800 font-bold text-xl"
                  >
                    Dashboard
                  </h1>
                  <div className="bg-black py-10 px-4 flex flex-col items-center justify-center w-full rounded-2xl">
                    <h1
                      role="heading"
                      className="text-white font-bold text-2xl"
                    >
                      Welcome Back John
                    </h1>
                    <p className="text-gray-300 text-xs">
                      Last logged in: yestarday at 22:13 PM
                    </p>
                  </div>
                </div>
                <div className="flex flex-auto flex-col  w-full h-full ">
                  <h1
                    role="heading"
                    className="text-gray-800 font-bold text-xl"
                  >
                    Upcoming payments
                  </h1>
                  <div className="flex flex-row justify-between">
                    <PaymentCard
                      method="Paypal"
                      desc="Shopping casback"
                      amt="$100.00"
                      icon="paypal"
                    />
                    <PaymentCard
                      method="Bank"
                      desc="Trading profits"
                      amt="$464.00"
                      icon="bank"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-auto h-full w-full mt-6 ">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    Recent transactions
                  </h2>
                  <div className="">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <TransactionList
                    category="food"
                    date="05 Jun 2020 10:20PM"
                    amt="$200"
                  />
                  <TransactionList
                    category="school"
                    date="05 Jun 2020 10:20PM"
                    amt="$56"
                  />
                  <TransactionList
                    category="bills"
                    date="05 Jun 2020 10:20PM"
                    amt="$763"
                  />
                  <TransactionList
                    category="bills"
                    date="05 Jun 2020 10:20PM"
                    amt="$93"
                  />
                </div>
              </div>
            </div>
            <div className="flex-none flex w-72 bg-secondary-one shadow-2xl rounded-lg py-4 px-2 flex flex-col ">
              <div className="flex-none h-2/6 bg-transparent  flex flex-col space-y-3">
                <div className="flex flex-row justify-end space-x-14 items-center">
                  <p className="text-sm text-gray-500 font-bold  ">
                    Saved this month
                  </p>
                  <button
                    role="button"
                    className="outline-none focus:outline-none bg-transparent border-none"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-row justify-center">
                  <h1
                    role="heading"
                    className="text-gray-800 font-bold text-3xl"
                  >
                    $234.900
                  </h1>
                </div>
                <div className="flex flex-row space-x-4 max-w-2xl mx-auto">
                  <p className="text-sm font-bold text-gray-800">Day</p>
                  <p className="text-sm font-bold text-gray-800">Month</p>
                  <p className="text-sm font-bold text-gray-800">Year</p>
                </div>
              </div>
              <div className="flex-none h-2/6 bg-transparent flex justify-center">
                <SpendingChart />
              </div>
              <div className="flex-none h-2/6 bg-transparent flex flex-col justify-center">
                <InfoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
