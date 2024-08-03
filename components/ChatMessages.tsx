import React from "react";

// Component
import OtherMessage from "./OtherMessage";
import OwnMessage from "./OwnMessage";

// Type
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

const ChatMessages = () => {
  // Will get the conversation data from the state
  // Make sure to support multiple agents
  return (
    <div className="h-full flex-1 overflow-auto px-8 pt-14">
      <div className="space-y-3.5">
        {conversations[0].messages.map((message) => {
          if (message.role === "CLIENT") {
            return <OtherMessage message={message} />;
          } else {
            // For Now
            return <OwnMessage message={message} />;
            
            // Future 
            // if (message.role === "AGENT") {
            //   // First Condition for the agent who is logged into the dashbaord
            //   <OwnMessage message={message} />;
            // } else {
            //   // Second condition for other agents that has joined the conversation
            //   <OtherMessage message={message} />;
            // }
          }
        })}
      </div>
    </div>
  );
};

export default ChatMessages;
