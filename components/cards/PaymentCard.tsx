import React from "react";
import { IconsType } from "../../enums";
declare type Iprops = {
  method: string;
  desc: string;
  amt: string;
  icon: string;
};

const Payment: React.FC<Iprops> = ({ method, desc, amt, icon }) => {
  return (
    <div className="flex flex-col py-4 px-3 w-40 h-full shadow-md rounded-3xl bg-secondary-one justify-center  space-y-2 items-center">
      <div className="flex  bg-secondary-two p-2 rounded-lg">
        {icon === IconsType.PAYPAL ? <PaypalIcon /> : <BankIcon />}
      </div>
      <div className="flex flex-col space-y-1 items-center">
        <h2 className="text-secondary-two font-bold text-base">{method}</h2>
        <p className="text-sm text gray-400">{desc}</p>
        <p className="text-sm  font-bold text gray-800">{amt}</p>
      </div>
    </div>
  );
};

const BankIcon: React.FC = () => {
  return (
    <svg
      className="w-7 h-7"
      fill="#ffffff"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
      <path
        fillRule="evenodd"
        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

const PaypalIcon: React.FC = () => {
  return (
    <svg
      className="w-7 h-7"
      fill="#ffffff"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};
export default Payment;
