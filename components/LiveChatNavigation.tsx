import React from "react";

// Component
import LiveChatNavigationHeader from "./LiveChatNavigationHeader";
import ConversationList from "./ConversationLists";

const LiveChatNavigation = () => {
  return (
    <div className="w-1/4 flex flex-col gap-2 border-r">
      <LiveChatNavigationHeader />
      <ConversationList />
    </div>
  );
};

export default LiveChatNavigation;
