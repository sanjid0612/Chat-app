"use client";
import Header from "@/components/Header";
import React from "react";
import MiniChatPage from "./mini-chat/page";
import AudioCall from "@/components/common/AudioCall";
import ChatNotFound from "@/components/common/ChatNotFound";
import VideoCall from "@/components/common/VideoCall";
import ActionModal from "@/components/base/ActionModal";
import MessengerPage from "./messenger/page";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <MiniChatPage />
      <AudioCall />
      <VideoCall />
      <ChatNotFound />
      <MessengerPage />
      <ActionModal
        modalStates={{
          viewBtn: {
            label: "view profile",
            actionCb: () => {},
          },
          editBtn: {
            label: "edit ",
            actionCb: () => {},
          },
          deleteBtn: {
            label: "delete chat",
            actionCb: () => {},
          },
          blockBtn: {
            label: "block",
            actionCb: () => {},
          },
        }}
      />
    </div>
  );
}

