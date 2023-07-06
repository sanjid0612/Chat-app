import React, { FC, ReactElement } from "react";

type buttonProps = {
  btnType?: "submit" | "reset" | "button";
  btnText?: string;
  btnClass?: string;
  icon?: string;
  suffixIcon?: string;
  prefixIcon?: string;
  variant?: "outlined" | "naked";
} & (
  | {
      btnType?: "reset" | "button";
      actionCb: () => void;
    }
  | {
      btnType?: "submit";
      actionCb?: never;
    }
);

const Button: FC<buttonProps> = ({
  btnText,
  icon,
  suffixIcon,
  prefixIcon,
  btnClass,
  actionCb,
  btnType = "button",
  variant = "primary",
}) => {
  return (
    <button
      type={btnType}
      onClick={actionCb}
      className={`font-medium flex justify-center items-center ${
        icon ? "px-0 py-0" : ""
      } ${suffixIcon ? "flex gap-x-2" : ""} ${
        prefixIcon ? "flex gap-x-2" : ""
      } ${
        btnText ? "text-[18px] leading-[27px] text-center py-[26px] px-7" : ""
      } ${
        variant === "outlined"
          ? "bg-white border-2 rounded-full h-10 w-10 border-red-400"
          : variant === "naked"
          ? "text-gray bg-white"
          : ""
      } ${btnClass}`}
    >
      {prefixIcon && <i className={`text-[16px] ${prefixIcon}`}></i>}
      {icon && <i className={`text-[16px] ${icon}`}></i>}
      {btnText}
      {suffixIcon && <i className={`text-[16px] ${suffixIcon}`}></i>}
    </button>
  );
};

export default Button;

