import React from "react";

// Component
import OtherMessage from "./OtherMessage";
import OwnMessage from "./OwnMessage";

const ChatMessages = () => {
  return (
    <div className="h-full flex-1 overflow-auto px-8 pt-14">
      <div className="space-y-3.5">
        <OtherMessage />
        <OwnMessage/>
      </div>
    </div>
  );
};

export default ChatMessages;
