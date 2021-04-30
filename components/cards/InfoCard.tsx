import React from "react";

const InfoCard = () => {
  return (
    <div className="bg-secondary-two rounded-3xl py-8 px-8 shadow-2xl flex flex-row justify-between">
      <div className="flex flex-col">
        <p className="text-gray-100 text-sm ">Plans for 2020</p>
        <h3 className="text-gray-400 font-bold ">Completed</h3>
      </div>
    </div>
  );
};

export default InfoCard;
