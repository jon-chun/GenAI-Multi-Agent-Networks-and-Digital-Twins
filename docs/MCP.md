# DOCS: MCP

## MCP with Docker

Sonnet 3.7 (23 Mar 2025): https://claude.ai/share/67ef25b2-9f8b-47de-98ae-33f9dd634c25

# Setting Up n8n with MCP Client Node on Docker CE for Ubuntu 22.04

I'll adapt the MCP Client Node setup instructions specifically for Docker CE on Ubuntu 22.04, ensuring proper GPU access for your NVIDIA RTX 3090 cards.

## Prerequisites

Before starting, ensure you have:
- Docker CE installed (which you already have, version 28.0.2)
- NVIDIA drivers installed (confirmed with your nvidia-smi output)
- nvidia-docker runtime configured (shown in your docker info output)

## Installation Steps

1. **Create a docker-compose.yml file** with proper configuration for Docker CE and GPU support:

```yaml
version: '3.8'

services:
  n8n:
    image: n8nio/n8n
    container_name: n8n
    restart: unless-stopped
    environment:
      # MCP server environment variables (customize as needed)
      - MCP_BRAVE_API_KEY=your-brave-api-key
      - MCP_OPENAI_API_KEY=your-openai-key
      - MCP_SERPER_API_KEY=your-serper-key
      - MCP_WEATHER_API_KEY=your-weather-api-key
      
      # Enable community nodes as tools
      - N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
      
      # Add for production setups
      # - N8N_ENCRYPTION_KEY=your-secret-key
      # - N8N_USER_MANAGEMENT_DISABLED=false
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    # Add GPU access configuration
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1  # Use one GPU (can be increased if needed)
              capabilities: [gpu]

volumes:
  n8n_data:
    name: n8n_data
```

2. **Start the n8n container** with Docker Compose:

```bash
docker-compose up -d
```

3. **Install MCP Client Node** within n8n:

   a. Access the n8n interface at http://localhost:5678
   
   b. Go to Settings → Community Nodes
   
   c. Install the MCP Client node by entering: `n8n-nodes-mcp-client`

## Setting Up MCP Credentials

### Command-line Based Transport (STDIO)

1. In n8n, go to Credentials → New → MCP Client (STDIO) API
2. Configure the credentials:
   - Command: `npx`
   - Arguments: `-y @modelcontextprotocol/server-brave-search` (or other MCP server)
   - Environment Variables: `BRAVE_API_KEY=your-api-key` (as needed)

### Server-Sent Events (SSE) Transport

1. In n8n, go to Credentials → New → MCP Client (SSE) API
2. Configure the credentials:
   - SSE URL: `http://localhost:3001/sse` (adjust as needed)
   - Add any required headers

## Example: Multi-Server Setup with AI Agent

1. **Ensure GPU access** is properly configured in your docker-compose.yml

2. **Create multiple MCP Client credentials** in n8n for different services:
   - Brave Search, OpenAI Tools, Web Search, Weather API, etc.

3. **Create an AI Agent workflow**:
   - Add an AI Agent node
   - Enable MCP Client as a tool
   - Configure different MCP Client nodes with different credentials

## Monitoring GPU Usage

To ensure your n8n container is properly utilizing GPU resources:

```bash
docker exec n8n nvidia-smi
```

## Troubleshooting GPU Access

If you encounter issues with GPU access:

1. **Check NVIDIA runtime is available**:
   ```bash
   docker info | grep nvidia
   ```

2. **Verify correct Docker CE version**:
   ```bash
   docker version
   ```

3. **Ensure all NVIDIA driver components are installed**:
   ```bash
   dpkg -l | grep nvidia
   ```

4. **Check GPU is accessible from container**:
   ```bash
   docker run --rm --gpus all nvidia/cuda:12.2.0-base-ubuntu22.04 nvidia-smi
   ```

These instructions are specifically tailored for Docker CE on Ubuntu 22.04 with GPU support, addressing the issues you encountered with Docker Desktop.