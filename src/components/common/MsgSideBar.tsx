import React from "react";
import Button from "../base/Button";

const MsgSideBar = () => {
  return (
    <div className="h-screen w-[485px] flex flex-col justify-start items-center bg-white shadow py-[26px] px-[19px]">
      <p className="flex justify-center items-center h-full text-2xl leading-9 font-medium text-center text-red-400">
        No Message Found
      </p>
      <Button
        btnText="See all in messenger"
        variant="naked"
        btnClass="border-t border-[#130F26] text-red-400 mt-auto sticky bg-[#FAFAFA] "
      />
    </div>
  );
};

export default MsgSideBar;

