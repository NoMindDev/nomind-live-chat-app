import React from "react";

// Component
import ClientPresence from "./ClientPresence";
import AgentPresence from "./AgentPresence";
import QuickToolsTrigger from "./QuickToolsTrigger";

const ChatHeader = () => {
  return (
    <div className="px-8 py-2 shadow-lg flex justify-between items-center">
      <ClientPresence />
      <AgentPresence />
      <QuickToolsTrigger/> 
    </div>
  );
};

export default ChatHeader;
