import { MsgProfileProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const MsgProfile: FC<MsgProfileProps> = ({
  image,
  name,
  lastMsg,
  time,
  totalMsg,
}) => {
  return (
    <Link
      href={""}
      className="flex flex-row justify-start items-center gap-x-2 lg:gap-x-3 w-full"
    >
      <div className="w-9 h-9 flex justify-center bg-[#f4f4f4] items-center rounded-full overflow-hidden relative md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-14 xl:w-14 2xl:h-[70px] 2xl:w-[70px] ">
        {image ? (
          <Image src={image} alt={"image"} fill className="object-cover" />
        ) : (
          <i className="fas fa-user-alt text-[32px] text-[#b6b5b5]"></i>
        )}
      </div>
      <div className="flex flex-col justify-start gap-y-0.5 w-[83%] md:w-[79%] ">
        <div className="flex flex-row justify-between ">
          <h6 className="text-black capitalize font-poppins font-medium text-xs md:text-[13px] lg:text-sm xl:text-base 2xl:text-lg ">
            {name}
          </h6>
          <span
            className={`text-[10px] leading-3 font-medium font-poppins text-red-400 md:text-xs lg:text-[13px] 2xl:text-sm`}
          >
            {time}
          </span>
        </div>
        <div className="flex flex-row justify-between gap-x-px lg:gap-x-1.5 ">
          <p className="text-[10px] leading-3 line-clamp-1 font-poppins font-normal text-[#474B54] md:text-xs lg:line-clamp-2 xl:text-sm">
            {lastMsg}
          </p>
          {totalMsg && (
            <span className="h-3 w-3 flex flex-row justify-center items-center rounded-full bg-red-400 text-white font-normal text-[10px] leading-3 md:text-xs xl:text-sm md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5">
              {totalMsg}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MsgProfile;

