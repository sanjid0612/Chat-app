import React from "react";
import Button from "../base/Button";
import MsgProfile from "./MsgProfile";
import { msgProfileData } from "@/static";
import { MsgProfileProps } from "@/utils/types";

const MsgSideBar2 = () => {
  return (
    <div className=" min-h-screen w-[485px] flex flex-col justify-start items-center bg-white shadow pt-[26px] px-[19px]">
      <div className="w-full pl-[21px] pr-9 pt-[17px] pb-[50px] flex flex-col justify-start items-center gap-y-6">
        {msgProfileData.map((item: MsgProfileProps, id: number) => (
          <MsgProfile
            key={id}
            image={item.image}
            name={item.name}
            lastMsg={item.lastMsg}
            time={item.time}
            totalMsg={item.totalMsg}
          />
        ))}
      </div>
      <Button
        btnText="See all in messenger"
        variant="naked"
        btnClass="border-t border-[#130F26] text-red-400 mt-auto sticky bg-[#FAFAFA] "
      />
    </div>
  );
};

export default MsgSideBar2;

