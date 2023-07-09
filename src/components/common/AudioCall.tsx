import React from "react";
import CommonProfile from "./CommonProfile";
import Chat from "../base/Chat";

const AudioCall = () => {
  return (
    <Chat
      title="Calling...."
      closeCb={() => {}}
      callEndCb={() => {}}
      hasCallBtn={true}
    >
      <div className="w-full pt-[151px] pb-[384px] h-full">
        <CommonProfile
          name="Ijafiya Nafa"
          imgClass="!w-7 !h-7 sm:!w-11 sm:!h-11 md:!h-14 md:!w-14 lg:!h-[72px] lg:!w-[72px] xl:!h-[90px] xl:!w-[90px] 2xl:!h-[112px] 2xl:!w-[112px]"
          groupClass="flex-col !gap-4"
          nameClass="text-[18px] font-medium"
          details="calling......"
          detailClass="text-red-400 mt-1.5"
        />
      </div>
    </Chat>
  );
};

export default AudioCall;

{
  /* <div className="w-[1328px] flex flex-col justify-start shadow rounded-tl-[10px] rounded-tr-[10px]">
  <div className="border-b border-gray py-11 px-11 flex flex-row justify-between items-center">
    <div className="text-red-400 text-[30px] leading-[14px] font-semibold font-poppins w-full text-center">
      Calling...
    </div>
    <Button
      icon="fas fa-times-circle text-red-400 text-[40px]"
      actionCb={() => {}}
    />
  </div>
  <div className="pt-[151px] pb-[384px]">
    <CommonProfile
      name="Ijafiya Nafa"
      imgClass="!h-[112px] !w-[112px]"
      groupClass="flex-col !gap-4"
      nameClass="text-[18px] font-medium"
      details="calling......"
      detailClass="text-red-400 mt-1.5"
    />
  </div>
  <div className="py-[74px] w-full flex justify-center items-center gap-x-[58px]">
    <div className="h-16 w-16 rounded-full flex justify-center items-center bg-gray">
      <Button
        icon="fas fa-microphone text-[#474747] text-[30px]"
        actionCb={() => {}}
      />
    </div>
    <div className="h-16 w-16 rounded-full flex justify-center items-center bg-gray">
      <Button
        icon="fa-solid fa-video-slash text-[#474747] text-[27px]"
        actionCb={() => {}}
      />
    </div>
    <div className="h-16 w-16 rounded-full flex justify-center items-center bg-red-400">
      <Button icon="fas fa-phone text-white text-[27px]" actionCb={() => {}} />
    </div>
  </div>
</div>; */
}

