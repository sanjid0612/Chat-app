import React from "react";
import Image from "next/image";
import Chat from "../base/Chat";

const VideoCall = () => {
  return (
    <Chat
      title="Calling...."
      closeCb={() => {}}
      callEndCb={() => {}}
      hasCallBtn={true}
    >
      <div className="w-full h-full flex flex-row justify-end gap-x-8 ml-auto pt-6 pb-4 pr-[89px]">
        <div className="h-[681px] w-[694px] rounded-[20px] overflow-hidden relative">
          <Image
            fill
            src={
              "https://images.unsplash.com/photo-1527256035292-ce404f6c704f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            }
            alt="image"
          />
        </div>
        <div className="h-[196px] w-[221px] rounded-[20px] mt-auto overflow-hidden relative">
          <Image
            fill
            src={
              "https://images.unsplash.com/photo-1527260222115-eb3ede58d88d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            }
            alt="image"
          />
        </div>
      </div>
    </Chat>
  );
};

export default VideoCall;

