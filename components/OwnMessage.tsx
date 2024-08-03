import React from "react";

// Type
import { Message } from "@/lib/types/conversation";

const OwnMessage = ({ message }: { message: Message }) => {
  return (
    <div key={message.id} className="flex justify-end">
      <div className="rounded-3xl px-4 py-1.5 w-4/6 bg-[#4A49F9]/20">
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
};

export default OwnMessage;
