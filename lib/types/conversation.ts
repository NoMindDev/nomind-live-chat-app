export type Role = "AGENT" | "CLIENT";

export interface Message {
  id: number;
  created_at: Date;
  role: Role;
  content: string;
  conversationId: number;
}

interface Agent {
  id: number;
}

interface User {
  id: number;
}

export interface Conversation {
  id: number;
  created_at: Date;
  messages: Message[];
  agents: Agent[];
  userId: User;
}