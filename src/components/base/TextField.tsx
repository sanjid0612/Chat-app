"use client";
import React, { ChangeEvent, FC, useRef } from "react";

export type inputProps = {
  inputType?: "text" | "email" | "password";
  onChangeCb: (e: ChangeEvent<HTMLInputElement>) => void;
  identifier: string;
  label?: string;
  suffixCb?: () => void;
  prefixCb?: () => void;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
  groupClass?: string;
  largeInput?: boolean;
  inputClass?: string;
  suffixIcon?: string;
  prefixIcon?: string;
} & (
  | {
      inputType: "password";
      showStrength?: boolean;
    }
  | {
      inputType?: Exclude<"text" | "email", "password">;
      showStrength?: never;
    }
);

const TextField: FC<inputProps> = ({
  onChangeCb,
  suffixCb,
  prefixCb,
  suffixIcon,
  prefixIcon,
  label,
  inputClass,
  groupClass,
  placeholder,
  identifier,
  value,
  largeInput,
  inputType = "text",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`w-full flex flex-col justify-start items-start gap-1 ${groupClass}`}
    >
      {label && (
        <label
          htmlFor={identifier}
          className="text-gray text-[12px] uppercase leading-[15px]"
        >
          {label}
        </label>
      )}
      {largeInput ? (
        <input
          ref={inputRef}
          type={inputType}
          name={identifier}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeCb(e);
          }}
          placeholder={placeholder}
          value={value}
          id={identifier}
          className={`w-full border-0 border-b py-8 text-[28px] leading-[21px] ${
            prefixIcon ? "pl-[52px]" : "pl-5"
          } pr-5 relative z-10 ${inputClass} `}
        />
      ) : (
        <div className="relative w-full">
          {prefixIcon && (
            <button
              type="button"
              onClick={() => {
                inputRef.current?.focus();
                prefixCb && prefixCb();
              }}
              className="absolute z-50 left-5 top-1/2 -translate-y-1/2 w-6 h-6  "
            >
              <i className={`text-gray text-[16px] ${prefixIcon}`}></i>
            </button>
          )}
          <input
            ref={inputRef}
            type={inputType}
            name={identifier}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChangeCb(e);
            }}
            placeholder={placeholder}
            value={value}
            id={identifier}
            className={`w-full bg-ash-400 rounded-full py-2 text-[17px] leading-5 ${
              prefixIcon ? "pl-[52px]" : "pl-3.5"
            } pr-1.5 relative z-10 ${inputClass} `}
          />
          {suffixIcon && (
            <button
              type="button"
              onClick={() => {
                suffixCb && suffixCb();
              }}
              className="absolute z-50 right-1.5 top-1/2 -translate-y-1/2 w-6 h-6"
            >
              <i className={`text-red-400 text-[24px] ${suffixIcon}`}></i>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;

