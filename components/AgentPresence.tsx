import React from "react";

// UI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AgentPresence = () => {
  return (
    <div className="flex">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>KN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>KN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AgentPresence;
