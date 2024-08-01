import React from "react";

// UI
import { Badge } from "@/components/ui/badge";

const LiveChatNavigationHeader = () => {
  return (
    <div>
      <h1 className="text-2xl">Chats</h1>
      <div className="flex gap-2">
        <Badge variant="outline">All</Badge>
        <Badge variant="outline">Assigned</Badge>
        <Badge variant="outline">Requested</Badge>
      </div>
    </div>
  );
};

export default LiveChatNavigationHeader;
