import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import React from "react";

const IndividualConversation = () => {
  return (
    <div className="flex flex-1 h-screen">
      <div className="w-full h-full border-r flex flex-col">
        <ChatHeader />
        <>
          <ChatMessages />
          <ChatInput />
        </>
      </div>
      {/* <div className=" w-1/4">Quick Tools</div> */}
    </div>
  );
};

export default IndividualConversation;
