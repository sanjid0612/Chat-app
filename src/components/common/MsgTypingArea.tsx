import React from "react";
import Button from "../base/Button";
import TextField from "../base/TextField";

const MsgTypingArea = () => {
  return (
    <div className="w-full flex flex-row justify-start gap-x-4 pt-2.5 pb-[30px] pl-4 pr-[13px]">
      <Button
        icon="fas fa-file text-red-400 text-[24px] "
        actionCb={() => {}}
      />
      <Button
        icon="fas fa-camera text-red-400 text-[24px] mr-1"
        actionCb={() => {}}
      />
      <Button
        icon="fas fa-image text-red-400 text-[21px] mr-2"
        actionCb={() => {}}
      />
      <Button
        icon="fas fa-microphone text-red-400 text-[23px]"
        actionCb={() => {}}
      />
      <TextField
        onChangeCb={() => {}}
        identifier=""
        placeholder="Aa"
        suffixIcon="fa-sharp fa-solid fa-face-smile"
      />
      <Button
        icon="fas fa-thumbs-up text-red-400 text-[24px]"
        actionCb={() => {}}
      />
    </div>
  );
};

export default MsgTypingArea;
