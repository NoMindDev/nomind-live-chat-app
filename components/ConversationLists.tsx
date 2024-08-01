import React from "react";

// Components
import ConversationListItem from "./ConversationListItem";

// Dummy Conversations
const conversations = [
  {
    date: "2023-10-01T10:00:00Z",
    clientMessage: "Hello, I need help with my order.",
    botMessage:
      "Sure, I can help with that. Can you please provide your order number?",
  },
  {
    date: "2023-10-01T10:05:00Z",
    clientMessage: "My order number is 12345.",
    botMessage: "Thank you. Let me check the status of your order.",
  },
  {
    date: "2023-10-01T10:10:00Z",
    clientMessage: "Any updates?",
    botMessage:
      "Your order is currently being processed and will be shipped soon.",
  },
];

const ConverssationLists = () => {
  return (
    <div className="flex flex-col gap-2">
      {conversations.map((conversation) => (
        <ConversationListItem conversation={conversation} />
      ))}
    </div>
  );
};

export default ConverssationLists;
