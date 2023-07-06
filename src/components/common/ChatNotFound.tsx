import React from "react";
import Chat from "../base/Chat";

const ChatNotFound = () => {
  return (
    <Chat title="Chat" closeCb={() => {}}>
      <div className="w-full h-full text-center pt-[189px] pb-4">
        <div className="flex justify-center gap-x-3">
          <i className="far fa-frown text-[25px] text-ash-500 mb-4 mt-auto"></i>
          <i className="fa-regular fa-message text-[80px] text-ash-500 "></i>
          <i className="far fa-frown text-[25px] text-ash-500 mb-auto mt-1 "></i>
        </div>
        <p className="text-[30px] leading-[14px] font-semibold font-poppins text-black mt-[113px]">
          No Message Found
        </p>
      </div>
    </Chat>
  );
};

export default ChatNotFound;

