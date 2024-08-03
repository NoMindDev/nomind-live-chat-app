"use client";

import React, { useState } from "react";

// Component
import LiveChatNavigationHeader from "./LiveChatNavigationHeader";
import ConversationList from "./ConversationLists";

// Type
import { TabsType } from "@/lib/types/conservationType";

const LiveChatNavigation = () => {
  const [currentTab, setcurrentTab] = useState<TabsType>("All");
  return (
    <div className="w-1/4 flex flex-col border-r h-screen">
      <LiveChatNavigationHeader setcurrentTab={setcurrentTab} currentTab={currentTab}/>
      <ConversationList currentTab={currentTab} />
    </div>
  );
};

export default LiveChatNavigation;
