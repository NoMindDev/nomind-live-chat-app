"use client";

import React, { useState } from "react";

// UI
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChatInput = () => {
  const [text, setText] = useState<string>();
  const handleSendMessage = () => {
    alert(text);
  };
  return (
    <div className="p-5">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <Button onClick={handleSendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
