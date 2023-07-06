import React, { FC } from "react";

type actionModalProps = {
  modalStates: {
    viewBtn: { label: string; actionCb: () => void };
    editBtn?: { label: string; actionCb: () => void };
    deleteBtn: { label: string; actionCb: () => void };
    blockBtn: { label: string; actionCb: () => void };
  };
};

const ActionModal: FC<actionModalProps> = ({ modalStates }) => {
  const { editBtn, deleteBtn, viewBtn, blockBtn } = modalStates;

  return (
    <>
      <div
        className={`w-[252px] pt-8 pb-5 pl-4 flex flex-col justify-start gap-6 bg-white shadow rounded-lg`}
      >
        <button
          type="button"
          onClick={viewBtn.actionCb}
          className="text-[16px] leading-[14px] font-medium font-poppins flex w-full items-center justify-start text-[#4D5154] capitalize "
        >
          <i className="text-[22px] text-black mr-6 far fa-user-circle"></i>
          {viewBtn.label}
        </button>
        {editBtn && (
          <button
            type="button"
            onClick={editBtn.actionCb}
            className="text-[16px] leading-[14px] font-medium font-poppins flex w-full items-center justify-start text-[#4D5154] capitalize "
          >
            <i className="text-[22px] text-black mr-6 fas fa-pen"></i>
            {editBtn.label}
          </button>
        )}
        <button
          type="button"
          onClick={deleteBtn.actionCb}
          className="text-[16px] leading-[14px] font-medium font-poppins flex w-full items-center justify-start text-[#4D5154] capitalize "
        >
          <i className="text-[22px] text-black mr-6 far fa-trash-alt"></i>
          {deleteBtn.label}
        </button>
        <button
          type="button"
          onClick={blockBtn.actionCb}
          className="text-[16px] leading-[14px] font-medium font-poppins flex w-full items-center justify-start text-[#4D5154] capitalize "
        >
          <i className="text-[19px] text-black mr-5 fas fa-user-times"></i>
          {blockBtn.label}
        </button>
      </div>
    </>
  );
};

export default ActionModal;

