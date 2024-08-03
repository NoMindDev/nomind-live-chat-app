import React from "react";

// Components
import ConversationListItem from "./ConversationListItem";
import { Conversation } from "@/lib/types/conversation";

// Dummy Conversations
const conversations: Conversation[] = [
  {
    id: 1,
    created_at: new Date("2024-08-03T10:00:00Z"),
    messages: [
      {
        id: 1,
        created_at: new Date("2023-10-01T10:01:00Z"),
        role: "CLIENT",
        content: "Hello, I need help with my order.",
        conversationId: 1,
      },
      {
        id: 2,
        created_at: new Date("2023-10-01T10:02:00Z"),
        role: "AGENT",
        content:
          "Sure, I can help with that. Can you please provide your order number?",
        conversationId: 1,
      },
    ],
    agents: [
      {
        id: 1,
      },
    ],
    userId: {
      id: 1,
    },
  },
  {
    id: 2,
    created_at: new Date("2023-10-02T11:00:00Z"),
    messages: [
      {
        id: 3,
        created_at: new Date("2023-10-02T11:01:00Z"),
        role: "CLIENT",
        content: "Is my order shipped?",
        conversationId: 2,
      },
      {
        id: 4,
        created_at: new Date("2023-10-02T11:02:00Z"),
        role: "AGENT",
        content: "Yes, your order has been shipped and is on its way.",
        conversationId: 2,
      },
    ],
    agents: [
      {
        id: 2,
      },
    ],
    userId: {
      id: 2,
    },
  },
];

// Type
import { TabsType } from "@/lib/types/conservationType";

const ConverssationLists = ({ currentTab }: { currentTab: TabsType }) => {
  // In Future based on the currentTab switch the Conversation List
  // console.log("from " + currentTab);
  return (
    <div className="flex-1 overflow-auto">
      {conversations.map((conversation) => (
        <ConversationListItem conversation={conversation} />
      ))}
    </div>
  );
};

export default ConverssationLists;
