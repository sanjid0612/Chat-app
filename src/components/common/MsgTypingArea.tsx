import React from "react";
import Button from "../base/Button";
import TextField from "../base/TextField";

const MsgTypingArea = () => {
  return (
    <div className="w-full flex flex-row justify-start gap-x-2.5 xl:gap-x-3 2xl:gap-x-4 pt-2.5 pb-[30px] px-1 lg:pl-4 lg:pr-[13px]">
      <Button
        icon="fas fa-file text-red-400 text-base lg:text-xl 2xl:text-2xl "
        actionCb={() => {}}
      />
      <Button
        icon="fas fa-camera text-red-400 text-base lg:text-xl 2xl:text-2xl mr-1"
        actionCb={() => {}}
      />
      <Button
        icon="fas fa-image text-red-400 text-base lg:text-xl 2xl:text-[21px] mr-1 2xl:mr-2"
        actionCb={() => {}}
      />
      <Button
        icon="fas fa-microphone text-red-400 text-base lg:text-xl 2xl:text-[23px]"
        actionCb={() => {}}
      />
      <TextField
        onChangeCb={() => {}}
        identifier=""
        placeholder="Aa"
        suffixIcon="fa-sharp fa-solid fa-face-smile"
        inputClass="py-1.5 md:py-2 lg:py-2.5 2xl:py-4 pl-3 md:pl-4 lg:pl-5 xl:pl-6 !text-[10px] md:!text-[12px] xl:!text-[13px]"
      />
      <Button
        icon="fas fa-thumbs-up text-red-400 text-base lg:text-xl 2xl:text-2xl"
        actionCb={() => {}}
      />
    </div>
  );
};

export default MsgTypingArea;

