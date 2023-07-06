"use client";
import React, { useState } from "react";
import Button from "./base/Button";
import MsgSideBar from "./common/MsgSideBar";
import MsgSideBar2 from "./common/MsgSideBar2";
import { MsgProfileProps } from "@/utils/types";
import MsgProfile from "./common/MsgProfile";
import { msgProfileData } from "@/static";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="bg-ash-500 w-full flex flex-row justify-between py-[23px] px-[34px] relative">
      <div className=""></div>
      <div className="">
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
          className="w-[55px] h-[55px] rounded-full bg-red-200"
        >
          <i className="fa-regular fa-comment-dots text-red-400 text-[32px]"></i>
        </button>
      </div>
      {/* dropdown area  */}
      <div
        className={`absolute top-[85px] right-0 min-h-screen w-[485px] flex flex-col justify-start items-center bg-white shadow pt-[26px] px-[19px] ${
          open
            ? "z-50 translate-y-0 opacity-100 transition-all duration-1000 "
            : "-z-20 translate-y-2 opacity-0 duration-400 transition"
        }`}
      >
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
        {/* <p className="flex justify-center items-center h-full text-2xl leading-9 font-medium text-center text-red-400">
          No Message Found
        </p> */}
        <Button
          btnText="See all in messenger"
          variant="naked"
          btnClass="border-t border-[#130F26] text-red-400 mt-auto sticky bg-[#FAFAFA] "
        />
      </div>
    </div>
  );
};

export default Header;

