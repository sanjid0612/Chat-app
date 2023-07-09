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
      <div className="w-full h-full flex flex-row justify-center lg:justify-end gap-x-8 pt-6 pb-4 relative lg:pr-[89px]">
        <div className="w-full h-[435px] sm:h-[480px] sm:w-[400px] lg:w-[444px] xl:h-[545px] xl:w-[555px] 2xl:h-[681px] 2xl:w-[694px] rounded-[20px] overflow-hidden relative">
          <Image
            fill
            src={
              "https://images.unsplash.com/photo-1527256035292-ce404f6c704f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            }
            alt="image"
          />
        </div>
        <div className="h-[196px] w-[221px] rounded-[20px] mt-auto overflow-hidden absolute -translate-x-[22%] translate-y-[5%] sm:translate-y-[16%] sm:-translate-x-[18%] left-1/2 top-1/2 lg:left-0 lg:top-0 lg:translate-y-0 lg:-translate-x-0 lg:relative">
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

