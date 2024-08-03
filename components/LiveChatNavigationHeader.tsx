import React from "react";

// UI
import { Badge } from "@/components/ui/badge";

const LiveChatNavigationHeader = () => {
  return (
    <div className="p-2 flex flex-col gap-2 border-b">
      <h1 className="text-2xl font-medium">Chats</h1>
      <div className="flex gap-2 w-full overflow-auto">
        <Badge variant="outline" className="text-black/50 bg-[#4A49F9]/50" >
          All
        </Badge>
        <Badge variant="outline" className="text-black/50 bg-[#ECECF1]">
          Assigned
        </Badge>
        <Badge variant="outline" className="text-black/50 bg-[#ECECF1]">
          Requested
        </Badge>
      </div>
    </div>
  );
};

export default LiveChatNavigationHeader;
