import React from "react";

// UI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// SVG
import OfflineAvatar from "@/components/svg/OfflineAvatar";
import OnlineAvatar from "./svg/OnlineAvatar";

const ClientPresence = () => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        {/* <OfflineAvatar /> */}
        <OnlineAvatar />
      </div>
      <div>
        <h1 className="text-sm font-medium">Client</h1>
        <p className="text-sm font-light">Offline</p>
      </div>
    </div>
  );
};

export default ClientPresence;
