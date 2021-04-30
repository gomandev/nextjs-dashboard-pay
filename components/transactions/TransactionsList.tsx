import React from "react";
import * as Icons from "./TransactionIcons";
import { SpendingCategories } from "../../enums/TransactionType.enums";

declare type Iprops = {
  category: string;
  date: string;
  amt?: string;
};
const TransactionsList: React.FC<Iprops> = ({ category, amt, date }) => {
  return (
    <div className="flex flex-row justify-between border-b-2 border-gray-200 px-1  py-3">
      <div className="flex flex-row w-2/6  space-x-5 items-center  ">
        {category === SpendingCategories.BILLS && <Icons.FoodIcon />}
        {category === SpendingCategories.STUDY && <Icons.GymIcon />}
        {category === SpendingCategories.FOOD && <Icons.GiftIcon />}
        <p className="text-gray-700 font-bold">{category}</p>
      </div>
      <div className="flex flex-row w-2/6  py-2 px-1 flex-none  items-center justify-center">
        <p className="text-gray-600 text-sm">{date}</p>
      </div>
      <div className="flex flex-row w-2/6 justify-between py-2 px-1 flex-none">
        <p className="font-bold text-sm text-gray-700">{amt}</p>
        <button role="button" className="outline-none focus:outline-none">
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
    </div>
  );
};

export default TransactionsList;
