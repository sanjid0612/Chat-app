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
        <div className="text-red-400 capitalize leading-[14px] font-semibold font-poppins w-full text-center text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px]">
          {title}
        </div>
        <Button
          icon="fas fa-times-circle text-red-400 !text-[20px] md:!text-[24px] lg:!text-[28px] xl:!text-[34px] 2xl:!text-[40px]"
          actionCb={closeCb}
        />
      </div>
      {children}
      {hasCallBtn && (
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
            {/* video button condition should implement here */}
          </div>
          <div className="h-16 w-16 rounded-full flex justify-center items-center bg-red-400">
            <Button
              icon="fas fa-phone text-white text-[27px]"
              actionCb={callEndCb}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Chat;

