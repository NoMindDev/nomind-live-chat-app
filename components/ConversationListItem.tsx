import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Type
import { Conversation } from "@/lib/types/conversation";

// Date
import { format, isToday } from "date-fns";

const ConversationListItem = ({
  conversation,
}: {
  conversation: Conversation;
}) => {
  // Step 2 => Add the last message of the client => Ask Jam if it should have been agent => After integrating with Jam
  // Step 3 => Add the last messae of the agent => Ask Jam if it should have been agent => After integrating with Jam

  const pathname = usePathname();

  // Date Formatter
  const createdAt = new Date(conversation.created_at);
  const formattedDate = isToday(createdAt)
    ? format(createdAt, "hh:mm a")
    : format(createdAt, "yyyy-MM-dd");

  return (
    <Link href={`/dash/live-chat/${conversation.id}`}>
      <div
        key={conversation.id}
        className={`border-b p-5 flex flex-col gap-5 ${
          pathname == `/dash/live-chat/${conversation.id}` && "bg-[#ECECF1]"
        }`}
      >
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-[#ABABAB]">
              Client : hello why is te c...
            </p>
          </div>
          <div>
            <p className="text-sm text-[#ABABAB]">{formattedDate}</p>
          </div>
        </div>
        <div>
          <p className="text-sm">Bot: Yes,chatbots are ...</p>
        </div>
      </div>
    </Link>
  );
};

export default ConversationListItem;
