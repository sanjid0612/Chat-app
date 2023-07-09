import React, { FC, ReactElement } from "react";
import Button from "./Button";
type chatProps = {
  video?: boolean;
  title?: string;
  children: ReactElement;
  hasCallBtn?: boolean;
  closeCb: () => void;
  callEndCb?: () => void;
};
const Chat: FC<chatProps> = ({
  title,
  children,
  closeCb,
  callEndCb,
  hasCallBtn = false,
}) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start shadow rounded-tl-[10px] rounded-tr-[10px]">
      <div className="border-b border-gray flex flex-row justify-between items-center p-4 md:p-5 lg:p-7 xl:p-9 2xl:p-11">
        <div className="text-red-400 capitalize leading-[14px] font-semibold font-poppins w-full text-center text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-3xl">
          {title}
        </div>
        <Button
          icon="fas fa-times-circle text-red-400 !text-xl md:!text-2xl lg:!text-[28px] xl:!text-[32px] 2xl:!text-[40px]"
          actionCb={closeCb}
        />
      </div>
      {children}
      {hasCallBtn && (
        <div className="py-10 lg:py-[74px] text w-full flex justify-center items-center gap-x-[58px]">
          <div className="w-9 h-9 lg:h-10 lg:w-10 xl:h-[50px] xl:w-[50px] 2xl:h-16 2xl:w-16 rounded-full flex justify-center items-center bg-gray">
            <Button
              icon="fas fa-microphone text-[#474747] text-sm md:!text-base xl:!text-xl 2xl:!text-[30px]"
              actionCb={() => {}}
            />
          </div>
          <div className="w-9 h-9 lg:h-10 lg:w-10 xl:h-[50px] xl:w-[50px] 2xl:h-16 2xl:w-16 rounded-full flex justify-center items-center bg-gray">
            <Button
              icon="fa-solid fa-video-slash text-[#474747] text-sm md:!text-base xl:!text-xl 2xl:!text-[27px]"
              actionCb={() => {}}
            />
            {/* video button condition will implement here */}
          </div>
          <div className="w-9 h-9 lg:h-10 lg:w-10 xl:h-[50px] xl:w-[50px] 2xl:h-16 2xl:w-16 rounded-full flex justify-center items-center bg-red-400">
            <Button
              icon="fas fa-phone text-white text-sm md:!text-base xl:!text-xl 2xl:!text-[27px]"
              actionCb={callEndCb}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Chat;

