import Button from "@/components/base/Button";
import Chat from "@/components/base/Chat";
import TextField from "@/components/base/TextField";
import CommonProfile from "@/components/common/CommonProfile";
import MsgProfile from "@/components/common/MsgProfile";
import MsgTypingArea from "@/components/common/MsgTypingArea";
import { msgProfileData } from "@/static";
import { MsgProfileProps } from "@/utils/types";
import Image from "next/image";
import React from "react";

const MessengerPage = () => {
  return (
    <Chat closeCb={() => {}} title="chat">
      <div className="w-full flex flex-row justify-start py-2.5 md:pt-4 lg:pt-5 2xl:pt-6 md:pb-4">
        <div className="w-full max-w-[507px] sm:w-auto flex flex-col justify-start gap-y-1 pt-[22px] px-2 md:px-2.5 lg:px-4 xl:px-8 2xl:px-10">
          <div className="pl-1.5 lg:pl-2.5 2xl:pl-3 pb-3 md:pb-4 lg:pb-5 xl:pb-7 2xl:pb-8">
            <TextField
              identifier=""
              onChangeCb={() => {}}
              placeholder="Search Friends"
              inputClass="py-1.5 md:py-2 lg:py-2.5 2xl:py-4 pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-7 !text-[10px] md:!text-[12px] 2xl:!text-[17px]"
            />
          </div>
          {msgProfileData.map((item: MsgProfileProps, id: number) => (
            <div
              key={id}
              className="py-1.5 pr-2.5 hover:bg-[#FFE5E5] rounded-full md:py-2 md:pl-2.5 md:pr-3.5 xl:py-2.5 pl-2 xl:pl-3 xl:pr-4"
            >
              <MsgProfile
                image={item.image}
                name={item.name}
                lastMsg={item.lastMsg}
                time={item.time}
                totalMsg={item.totalMsg}
              />
            </div>
          ))}
        </div>
        {/* chat side bar ends  */}
        <div className="w-full sm:w-[68%] flex flex-col justify-start px-2 md:px-3 lg:px-5 2xl:pl-[52px] 2xl:pr-11">
          <div className="flex flex-row justify-between pb-2 border-b border-gray ">
            <CommonProfile
              name="Martha Craig"
              imgClass="h-6 !w-6 sm:!h-7 sm:!w-7 lg:!h-9 lg:!w-9 xl:!h-10 xl:!w-10 2xl:!h-[46px] 2xl:!w-[46px]"
            />
            <div className="flex flex-row justify-center items-center gap-x-3 2xl:gap-x-[42px]">
              <Button
                variant="outlined"
                icon="fas fa-video text-red-400 "
                actionCb={() => {}}
              />
              <Button
                variant="outlined"
                icon="fas fa-phone text-red-400"
                actionCb={() => {}}
              />

              <Button
                variant="outlined"
                icon="far fa-user text-red-400"
                actionCb={() => {}}
              />
            </div>
          </div>
          {/* header section ends  */}
          <div className="flex flex-col justify-start gap-y-[22px] 2xl:pr-[100px] pt-16 ">
            <div className="flex flex-row justify-start gap-x-2 md:gap-x-3">
              <div className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 rounded-full overflow-hidden relative">
                <Image
                  fill
                  src={
                    "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  }
                  alt="image"
                />
              </div>
              {/* profile ends  */}
              <div className="flex flex-col gap-y-1.5 lg:gap-y-2 2xl:gap-y-2.5">
                <div className="max-w-xs lg:max-w-md 2xl:max-w-[600px] flex flex-row justify-start border border-ash-400 rounded-xl !rounded-tl-none xl:rounded-[20px] p-4 pr-1 md:pt-5 lg:pt-6 lg:p-5 xl:pt-8 2xl:pt-10 2xl:p-6 ">
                  <span className="border h-auto rounded-full border-red-400"></span>
                  <div className="flex flex-col justify-start gap-y-2 pl-3 pb-5">
                    <p className="font-inter font-normal text-[10px] leading-3 text-black md:text-[11px] lg:text-[13px] 2xl:text-sm xl:leading-4">
                      Pharmacy app ui/ux design
                    </p>
                    <p className="font-poppins font-normal text-black text-[10px] leading-3 md:text-xs lg:text-sm xl:text-[15px] 2xl:text-base">
                      Heay dude whats up? Can we talk for a while i need to talk
                      to you its too much important for me........
                    </p>
                    <div className="w-[200px] md:w-[224px] h-[136px] md:h-[146px] rounded-lg overflow-hidden relative">
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
                <span className="text-right text-[10px] leading-3 font-poppins font-normal text-[#B5BFD6] mr-16 md:text-[11px] md:leading-4 lg:text-xs 2xl:text-sm">
                  01:51 PM
                </span>
              </div>
            </div>
            {/* message 01 ends */}
            <div className="flex flex-row justify-start gap-x-3">
              <div className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 rounded-full overflow-hidden relative">
                <Image
                  fill
                  src={
                    "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  }
                  alt="image"
                />
              </div>
              {/* profile ends  */}
              <div className="flex flex-col gap-y-1.5 lg:gap-y-2 2xl:gap-y-2.5">
                <div className="w-[300px] sm:w-[301px] lg:w-[401px] 2xl:w-[501px] border border-ash-400 rounded-xl !rounded-tl-none xl:rounded-[20px] font-poppins font- normal text-[#B5BFD6] text-[10px] leading-3 md:text-xs lg:text-sm xl:text-[15px] 2xl:text-base p-4 pr-1 lg:p-5 xl:p-6 2xl:p-[30px]">
                  Check this out
                </div>
                <span className="text-right text-[10px] leading-3 font-poppins font-normal text-[#B5BFD6] mr-16 md:text-[11px] md:leading-4 lg:text-xs 2xl:text-sm">
                  01:51 PM
                </span>
              </div>
              {/* msg box ends */}
            </div>
            {/* message 02 ends  */}
            <div className="mt-[38px] w-[284px] flex justify-between bg-red-400 rounded-xl !rounded-br-none xl:rounded-[20px] ml-auto pt-5 pb-2 px-4 2xl:pt-9 2xl:pb-3 2xl:px-5">
              <i className="fas fa-pause-circle text-white text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] ml-auto"></i>
            </div>
          </div>
          <div className="mt-auto 2xl:pr-[100px] ">
            <MsgTypingArea />
            <div className="w-full flex flex-row justify-start gap-x-2.5 xl:gap-x-3 2xl:gap-x-4 pt-2.5 pb-[30px] px-1 lg:pl-4 lg:pr-[13px]">
              <Button
                icon="fas fa-microphone text-red-400 !text-base xl:!text-xl 2xl:!text-2xl"
                actionCb={() => {}}
              />
              <div className="py-1.5 px-2 flex justify-between items-center rounded-full w-full bg-red-400">
                <i className="fas fa-stop-circle text-base lg:text-xl 2xl:text-[25px] text-white"></i>
                <p className="w-[62px] flex justify-center items-center py-0.5 rounded-full bg-white text-[10px] leading-3 md:text-xs lg:text-[13px] 2xl:text-sm font-poppins font-medium ">
                  0:45
                </p>
              </div>
              <Button
                icon="fas fa-location-arrow text-black rotate-45 !text-base lg:!text-xl 2xl:!text-2xl"
                actionCb={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </Chat>
  );
};

export default MessengerPage;

