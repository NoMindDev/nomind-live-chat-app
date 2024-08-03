import React from "react";

// UI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// SVG
import ClientAvatar from "@/components/svg/ClientAvatar";

const Message = () => {
  return (
    <div className="flex gap-2 w-4/6">
      <div>
        {/* Need a condition to display the avatar based on whether the message is send by client or agent */}
        {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>KN</AvatarFallback>
        </Avatar> */}
        <ClientAvatar />
      </div>
      <div className="bg-[#F0F2F5] rounded-3xl px-4 py-1.5">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, iste!
          Deleniti accusantium laborum, provident fugit harum velit suscipit!
          Deserunt, asperiores?
        </p>
      </div>
    </div>
  );
};

export default Message;
