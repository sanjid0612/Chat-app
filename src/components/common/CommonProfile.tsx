import { CommonProfileProps } from "@/utils/types";
import Image from "next/image";
import React, { FC } from "react";

const CommonProfile: FC<CommonProfileProps> = ({
  image,
  groupClass,
  imgClass,
  name,
  nameClass,
  details,
  detailClass,
}) => {
  return (
    <div
      className={`flex flex-row justify-start gap-2 items-center ${groupClass} `}
    >
      <div
        className={`2xl:h-14 2xl:w-14 rounded-full overflow-hidden flex justify-center bg-[#f4f4f4]  items-center relative ${imgClass}`}
      >
        {image ? (
          <Image src={image} alt={"image"} fill className="object-cover" />
        ) : (
          <i className="fas fa-user-alt text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[24px] text-[#b6b5b5]"></i>
        )}
      </div>
      <div className="flex flex-col justify-start items-center gap-y-0.5 ">
        <h3
          className={`text-black font-poppins font-normal text-xs md:text-[13px] md:leading-4 lg:text-sm xl:text-base 2xl:text-lg ${nameClass}`}
        >
          {name}
        </h3>
        {details && (
          <p
            className={`text-black font-poppins font-normal text-[10px] leading-3 sm:text-xs lg:text-sm ${detailClass}`}
          >
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default CommonProfile;

