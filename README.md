# 🧠 Unified Memory MCP Server

A cross-platform memory system that automatically captures and syncs context across Claude Desktop, Cursor, and ChatGPT.

## 🎯 Problem It Solves
No more manual copy/paste when switching between AI tools. This system automatically captures conversations and provides relevant context when you switch platforms.

## 🚀 Quick Start
```bash
# Clone the repo
git clone https://github.com/coladapo/unified-memory-mcp-server
cd unified-memory-mcp-server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Run the server
npm run dev
```

## 🏗️ Architecture
- **Automatic Capture**: Background monitoring of conversations
- **Cross-Platform**: Works with Claude, Cursor, and ChatGPT
- **Smart Context**: AI-powered relevance scoring
- **Vector Search**: Semantic similarity for better results

## 📦 Tech Stack
- Node.js + TypeScript
- Supabase (PostgreSQL + Vector embeddings)
- Express.js for REST API
- MCP SDK for Claude/Cursor integration

## 🗺️ Roadmap
- [x] Initial project setup
- [ ] Core memory engine
- [ ] Supabase integration
- [ ] MCP server implementation
- [ ] ChatGPT browser extension
- [ ] Smart context injection

## 📄 License
MIT