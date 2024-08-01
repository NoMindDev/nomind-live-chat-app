type Role = "AGENT" | "USER";

interface Message {
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

// Actual
// interface Conversation {
//   id: number;
//   created_at: Date;
//   messages: Message[];
//   agents: Agent[];
//   userId: User;
// }

// Dummy
export interface Conversation {
  date: string;
  clientMessage: string;
  botMessage: string;
}