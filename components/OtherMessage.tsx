import React from "react";

// UI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// SVG
import ClientAvatar from "@/components/svg/ClientAvatar";

// Type
import { Message } from "@/lib/types/conversation";

const OtherMessage = ({ message }: { message: Message }) => {
  return (
    <div key={message.id} className="flex gap-2 w-4/6">
      <div>
        {message.role === "AGENT" ? (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KN</AvatarFallback>
          </Avatar>
        ) : (
          <ClientAvatar />
        )}
      </div>
      <div className="bg-[#F0F2F5] rounded-3xl px-4 py-1.5">
        <p className="text-sm">
          {message.content}
        </p>
      </div>
    </div>
  );
};

export default OtherMessage;
