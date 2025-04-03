# DOCS: Docker

## Docker YAML

* [](https://github.com/technovangelist/videoprojects/blob/main/2024-10-25-n8ninstall/docker-compose.yml)


## Docker Desktop vs Docker CE

Grok (23 Mar 2025) https://grok.com/share/bGVnYWN5_d5fc5c1d-3305-4961-a3dd-097612fe445c

Below are the revised step-by-step instructions for setting up an n8n Docker container with the MCP Client node on Ubuntu 22.04 using Docker CE. The original instructions were written for Docker Desktop, but since Docker Desktop was buggy on Ubuntu 22.04 and ignored GPUs, these instructions have been adapted for Docker CE, which is better suited for this environment. The setup focuses on running the n8n container, configuring the MCP Client node, and ensuring compatibility with Docker CE.

---

### Revised Setup Instructions for n8n with Docker CE on Ubuntu 22.04

#### Prerequisites
Before starting, ensure that Docker CE and `docker-compose` are installed on your Ubuntu 22.04 system. Your `docker info` output confirms that Docker Engine - Community (version 28.0.2) and the `compose` plugin (version 2.34.0) are already installed, so you’re ready to proceed. Additionally, your system has NVIDIA GPUs (RTX 3090s) with the NVIDIA driver and CUDA installed, but since n8n and the MCP Client node don’t require GPU support, no GPU-specific configuration is needed here.

---

### Step-by-Step Instructions

#### 1. Create a `docker-compose.yml` File
To run the n8n container with Docker CE, use `docker-compose` to define the service. Create a file named `docker-compose.yml` in your working directory with the following content:

```yaml
version: '3'

services:
  n8n:
    image: n8nio/n8n
    environment:
      - N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
      # Optional: Add MCP_ prefixed environment variables for MCP servers if desired
      # - MCP_BRAVE_API_KEY=your-brave-api-key
      # - MCP_OPENAI_API_KEY=your-openai-key
      # - MCP_SERPER_API_KEY=your-serper-key
      # - MCP_WEATHER_API_KEY=your-weather-api-key
    ports:
      - "5678:5678"
    volumes:
      - ~/.n8n:/home/node/.n8n
```

**Explanation:**
- **Image**: Uses the official `n8nio/n8n` image.
- **Environment Variables**: 
  - `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true` is mandatory to enable the MCP Client node as a tool in AI Agents.
  - Optionally, add `MCP_` prefixed variables (e.g., `MCP_BRAVE_API_KEY`) to pass environment variables to MCP servers globally. Alternatively, you can set these in the n8n credentials UI for better security (see Step 5).
- **Ports**: Maps port 5678 on the host to 5678 in the container, allowing access to n8n’s web interface.
- **Volumes**: Mounts `~/.n8n` from your home directory to persist n8n configuration and workflows.

Unlike Docker Desktop, which has a GUI for configuration, Docker CE relies on this file and CLI commands.

#### 2. Start the n8n Container
Navigate to the directory containing your `docker-compose.yml` file and run:

```bash
docker-compose up -d
```

- The `-d` flag runs the container in detached mode (in the background).
- This command pulls the n8n image (if not already present) and starts the container.

Verify the container is running:

```bash
docker ps
```

You should see the n8n container listed with port 5678 mapped.

#### 3. Access the n8n Web Interface
Open your browser and navigate to:

```
http://localhost:5678
```

Follow the on-screen prompts to set up your n8n instance (e.g., creating an admin user). This step is identical to the Docker Desktop setup, as the web interface is container-driven.

#### 4. Install the MCP Client Community Node (If Necessary)
The MCP Client node is a community node and may not be pre-installed. In the n8n web interface:
- Go to **Settings > Community Nodes**.
- Search for `@n8n/n8n-nodes-mcp-client` (or similar, based on the official name in the n8n community nodes documentation).
- Install it if it’s not already available.

Refer to the [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/) for detailed instructions if needed.

#### 5. Configure MCP Client Credentials
The MCP Client node supports two connection types: **Command-line Based Transport (STDIO)** and **Server-Sent Events (SSE)**. Below are instructions for both, tailored for Docker CE.

##### Option A: Command-line Based Transport (STDIO)
This is the simpler and recommended approach for most setups, as it runs MCP servers as subprocesses within the n8n container.

1. In n8n, add an **MCP Client** node to a workflow.
2. Configure credentials:
   - **Credential Type**: Select “MCP Client (STDIO) API”.
   - **Command**: `npx`
   - **Arguments**: `-y @modelcontextprotocol/server-brave-search` (example for Brave Search; adjust for other servers like `@modelcontextprotocol/server-openai`).
   - **Environment Variables**: Add required variables, e.g., `BRAVE_API_KEY=your-api-key`. Separate multiple variables with newlines or commas.
3. Save the credentials.

**Note**: The n8n container includes Node.js and npm, so `npx` will download and run the specified MCP server package automatically when the node executes.

##### Option B: Server-Sent Events (SSE) Transport
Use this if you’re running an MCP server separately (e.g., on the host or another container). Since Docker CE runs on Linux, `localhost` inside the container refers to the container itself, not the host, unlike Docker Desktop.

1. **Start an MCP Server** (example on the host):
   ```bash
   npx @modelcontextprotocol/server-example-sse
   ```
   This runs on port 3001 by default.
2. **Determine the Host IP**:
   - Find your host’s IP (e.g., `192.168.1.100`) using:
     ```bash
     ip addr show
     ```
     Look for the IP under your network interface (e.g., `eth0` or `wlan0`).
   - Alternatively, inspect the Docker bridge network gateway:
     ```bash
     docker network inspect bridge
     ```
     Use the `Gateway` IP (e.g., `172.17.0.1`).
3. **Configure Credentials in n8n**:
   - Add an MCP Client node and set **Connection Type** to “Server-Sent Events (SSE)”.
   - **Credential Type**: Select “MCP Client (SSE) API”.
   - **SSE URL**: Set to `http://<host-ip>:3001/sse` (e.g., `http://192.168.1.100:3001/sse` or `http://172.17.0.1:3001/sse`).
   - Add headers or additional variables if required by your server.
4. Save the credentials.

**Important**: Unlike Docker Desktop, which provides `host.docker.internal` to access the host, Docker CE on Linux requires the host IP or a custom network setup.

#### 6. Create Workflows with the MCP Client Node
- Add an MCP Client node to a workflow.
- Select your configured credentials.
- Choose an operation (e.g., “List Tools” to explore available tools, or “Execute Tool” with parameters like `{"query": "latest AI news"}` for Brave Search).
- Execute the workflow and review the output.

For an AI Agent workflow:
- Add an **AI Agent** node.
- Enable the MCP Client node as a tool (possible because `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true` is set).
- Configure multiple MCP Client nodes with different credentials for multi-server setups.

#### 7. Test and Refine
Run your workflows to ensure the MCP servers execute correctly. If using SSE, verify connectivity to the external server. Adjust environment variables or credentials as needed.

---

### Key Differences from Docker Desktop
- **Installation**: No GUI-based Docker Desktop installation; use Docker CE and `docker-compose` via CLI.
- **Environment Variables**: Set in `docker-compose.yml` instead of a `.env` file in the desktop app directory or GUI settings.
- **SSE Transport**: Requires host IP or network configuration instead of `host.docker.internal`.
- **GPU Support**: Not needed for n8n or MCP Client, so no NVIDIA runtime configuration is included (unlike GPU-dependent workloads).

---

### Example: Multi-Server Setup with AI Agent
Here’s a complete `docker-compose.yml` for a multi-server setup:

```yaml
version: '3'

services:
  n8n:
    image: n8nio/n8n
    environment:
      - N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
      - MCP_BRAVE_API_KEY=your-brave-api-key
      - MCP_OPENAI_API_KEY=your-openai-key
      - MCP_SERPER_API_KEY=your-serper-key
      - MCP_WEATHER_API_KEY=your-weather-api-key
    ports:
      - "5678:5678"
    volumes:
      - ~/.n8n:/home/node/.n8n
```

- Start with `docker-compose up -d`.
- Configure credentials for each MCP server (e.g., Brave Search, OpenAI) using the STDIO transport.
- Build an AI Agent workflow leveraging multiple tools.

---

### Troubleshooting
- **Container Won’t Start**: Check logs with `docker-compose logs n8n`.
- **MCP Server Errors**: Ensure environment variables are set correctly in credentials or `docker-compose.yml`.
- **SSE Connection Issues**: Verify the host IP and port are accessible from the container (e.g., `curl http://<host-ip>:3001/sse` from inside the container).

---

These instructions replace the Docker Desktop-specific steps with Docker CE equivalents, ensuring a smooth setup on Ubuntu 22.04 while maintaining full functionality with the MCP Client node.