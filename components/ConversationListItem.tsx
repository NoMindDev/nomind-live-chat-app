import React from "react";

// Type
import { Conversation } from "@/lib/types/conversation";

const ConversationListItem = ({
  conversation,
}: {
  conversation: Conversation;
}) => {
  console.log(conversation);
  return (
    <div className="border-b p-5 flex flex-col gap-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-[#ABABAB]">
            Client : hello why is te c...
          </p>
        </div>
        <div>
          <p className="text-sm text-[#ABABAB]">Date</p>
        </div>
      </div>
      <div>
        <p className="text-sm">Bot: Yes,chatbots are ...</p>
      </div>
    </div>
  );
};

export default ConversationListItem;
