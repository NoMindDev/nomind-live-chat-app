import React from "react";

// UI
import { Badge } from "@/components/ui/badge";

// Type
import { TabsType } from "@/lib/types/conservationType";

const LiveChatNavigationHeader = ({
  setcurrentTab,
  currentTab,
}: {
  setcurrentTab: React.Dispatch<React.SetStateAction<TabsType>>;
  currentTab: TabsType;
}) => {
  return (
    <div className="p-2 flex flex-col gap-2 border-b">
      <h1 className="text-2xl font-medium">Chats</h1>
      <div className="flex gap-2 w-full overflow-auto">
        <Badge
          onClick={() => setcurrentTab("All")}
          variant="outline"
          className={`text-black/50 ${
            currentTab === "All" ? "bg-[#4A49F9]/50" : "bg-[#ECECF1]"
          } `}
        >
          All
        </Badge>
        <Badge
          onClick={() => setcurrentTab("Assigned")}
          variant="outline"
          className={`text-black/50 ${
            currentTab === "Assigned" ? "bg-[#4A49F9]/50" : "bg-[#ECECF1]"
          } `}
        >
          Assigned
        </Badge>
        <Badge
          onClick={() => setcurrentTab("Requested")}
          variant="outline"
          className={`text-black/50 ${
            currentTab === "Requested" ? "bg-[#4A49F9]/50" : "bg-[#ECECF1]"
          } `}
        >
          Requested
        </Badge>
      </div>
    </div>
  );
};

export default LiveChatNavigationHeader;
