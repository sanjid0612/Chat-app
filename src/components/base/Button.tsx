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
      } ${btnText ? "text-lg text-center py-[26px] px-7" : ""} ${
        variant === "outlined"
          ? "bg-white border-2 rounded-full border-red-400 h-5 w-5 md:h-[23px] md:w-[23px] lg:h-[26px] lg:w-[26px] xl:h-8 xl:w-8 2xl:h-10 2xl:w-10"
          : variant === "naked"
          ? "text-gray bg-white"
          : ""
      } ${btnClass}`}
    >
      {prefixIcon && <i className={`text-base ${prefixIcon}`}></i>}
      {icon && (
        <i className={`text-[10px] lg:text-xs 2xl:text-base ${icon}`}></i>
      )}
      {btnText}
      {suffixIcon && <i className={`text-base ${suffixIcon}`}></i>}
    </button>
  );
};

export default Button;

