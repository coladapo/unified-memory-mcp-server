export interface ConversationCapture {
  platform: 'claude' | 'cursor' | 'chatgpt';
  content: string;
  context?: Record<string, any>;
  extractDecisions?: boolean;
}

export interface Decision {
  conversationId: string;
  why: string;
  what: string;
  goal: string;
  solution: string;
}

export interface ContextQuery {
  query: string;
  platform: string;
  maxResults?: number;
}

export interface MemoryEntry {
  id: string;
  platform: string;
  timestamp: Date;
  content: string;
  context?: Record<string, any>;
  embedding?: number[];
}