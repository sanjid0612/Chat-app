import React from "react";
import CommonProfile from "../common/CommonProfile";
import MsgTypingArea from "../common/MsgTypingArea";
import Button from "./Button";
import Image from "next/image";

const dummy = () => {
  return (
    <div className="w-[68%] flex flex-col justify-start pl-9 pr-11">
      <div className="flex flex-row justify-between pb-2 border-b border-gray ml-4">
        <CommonProfile name="Martha Craig" imgClass="!h-[46px] !w-[46px]" />
        <div className="flex flex-row justify-center items-center gap-x-[42px]">
          <Button
            variant="outlined"
            icon="fas fa-video text-red-400 text-[16px]"
            actionCb={() => {}}
          />
          <Button
            variant="outlined"
            icon="fas fa-phone text-red-400 text-[14px]"
            actionCb={() => {}}
          />

          <Button
            variant="outlined"
            icon="far fa-user text-red-400 text-[14px]"
            actionCb={() => {}}
          />
        </div>
      </div>
      {/* header section ends  */}
      <div className="flex flex-col justify-start gap-y-[22px] pr-[100px] pt-16 pl-4">
        <div className="flex flex-row justify-start gap-x-3">
          <div className="h-9 w-9 rounded-full overflow-hidden relative">
            <Image
              fill
              src={
                "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              }
              alt="image"
            />
          </div>
          {/* profile ends  */}
          <div className="flex flex-col gap-y-2.5">
            <div className="max-w-[600px] flex flex-row justify-start border border-ash-400 rounded-[20px] rounded-tl-none pl-6 pr-1 pt-10 pb-6 ">
              <span className="border h-auto rounded-full border-red-400"></span>
              <div className="flex flex-col justify-start gap-y-2 pl-3 pb-5">
                <p className="font-inter font-normal text-[14px] leading-4 text-black">
                  Pharmacy app ui/ux design
                </p>
                <p className="text-[16px] leading-6 font-poppins font-normal text-black">
                  Heay dude whats up? Can we talk for a while i need to talk to
                  you its too much important for me........
                </p>
                <div className="w-[224px] h-[146px] rounded-lg overflow-hidden relative">
                  <Image
                    fill
                    src={
                      "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    }
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/* msg box ends */}
            <span className="text-right text-[14px] leading-5 font-poppins font-normal text-[#B5BFD6] mr-16">
              01:51 PM
            </span>
          </div>
        </div>
        {/* message 01 ends */}
        <div className="flex flex-row justify-start gap-x-3">
          <div className="h-9 w-9 rounded-full overflow-hidden relative">
            <Image
              fill
              src={
                "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              }
              alt="image"
            />
          </div>
          {/* profile ends  */}
          <div className="flex flex-col gap-y-2.5">
            <div className="w-[501px] border border-ash-400 rounded-[20px] rounded-tl-none pl-[30px] py-[30px] text-[16px] leading-6 font-poppins font- normal text-[#B5BFD6]">
              Check this out
            </div>
            <span className="text-right text-[14px] leading-5 font-poppins font-normal text-[#B5BFD6] mr-16">
              01:51 PM
            </span>
          </div>
          {/* msg box ends */}
        </div>
        {/* message 02 ends  */}
        <div className="mt-[38px] w-[284px] pt-9 pb-3 px-5 flex justify-between bg-red-400 rounded-2xl rounded-br-none ml-auto">
          <i className="fas fa-pause-circle text-white text-[28px] ml-auto"></i>
        </div>
      </div>
      <div className="mt-auto pr-[100px] ">
        <MsgTypingArea />
        <div className="w-full flex flex-row justify-start gap-x-4 pt-2.5 pb-[30px] pl-4 pr-[13px]">
          <Button
            icon="fas fa-microphone text-red-400 text-[23px]"
            actionCb={() => {}}
          />
          <div className="py-1.5 px-2 flex justify-between rounded-full w-full bg-red-400">
            <div className="">
              <i className="fas fa-stop-circle text-[25px] text-white"></i>
            </div>
            <div className="w-[62px] flex justify-center items-center py-0.5 rounded-full bg-white text-[14px] leading-5 font-poppins font-medium ">
              0:45
            </div>
          </div>
          <Button
            icon="fas fa-location-arrow text-black rotate-[45deg] text-[24px]"
            actionCb={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default dummy;

