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
        className={`h-14 w-14 rounded-full overflow-hidden flex justify-center bg-[#f4f4f4]  items-center relative ${imgClass}`}
      >
        {image ? (
          <Image src={image} alt={"image"} fill className="object-cover" />
        ) : (
          <i className="fas fa-user-alt text-[24px] text-[#b6b5b5]"></i>
        )}
      </div>
      <div className="flex flex-col justify-start items-center gap-y-0.5 ">
        <h3
          className={`text-black font-poppins text-[17px] font-normal leading-[27px] ${nameClass}`}
        >
          {name}
        </h3>
        {details && (
          <p
            className={`text-black font-poppins font-normal text-[13px] leading-5 ${detailClass}`}
          >
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default CommonProfile;

