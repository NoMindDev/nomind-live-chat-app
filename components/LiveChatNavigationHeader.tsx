import React from "react";

// UI
import { Badge } from "@/components/ui/badge";

const LiveChatNavigationHeader = () => {
  return (
    <div className="p-2 flex flex-col gap-2 border-b">
      <h1 className="text-2xl font-medium">Chats</h1>
      <div className="flex gap-2">
        <Badge variant="outline">All</Badge>
        <Badge variant="outline">Assigned</Badge>
        <Badge variant="outline">Requested</Badge>
      </div>
    </div>
  );
};

export default LiveChatNavigationHeader;
