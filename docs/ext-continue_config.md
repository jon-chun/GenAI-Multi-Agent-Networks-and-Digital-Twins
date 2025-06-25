# INVALID (~9 Apr 2025: https://www.youtube.com/watch?v=7AImkA96mE8&t=210s)

name: Local Assistant
version: 1.0.0
schema: v1
models: 
  - name: deepseek r1
  - provider: ollama
  - model: deepseek-r1
  - name: qwen 2.5 coder:1.5b
  - provider: ollama
  - model: qwen-2.5-coder-1.5b
  - roles:
    - autocomplete
context:
  - provider: code
  - provider: docs
  - provider: diff
  - provider: terminal
  - provider: problems
  - provider: folder
  - provider: codebase



### VALID (23 Apr 2025: Sonnet 3.7 )

name: Local Assistant
version: 1.0.0
schema: v1
models: 
  - name: deepseek r1
    provider: ollama
    model: deepseek-r1
    roles:
      - chat
      - edit
  - name: qwen 2.5 coder:1.5b
    provider: ollama
    model: qwen-2.5-coder-1.5b
    roles:
      - autocomplete
context:
  - provider: code
  - provider: docs
  - provider: diff
  - provider: terminal
  - provider: problems
  - provider: folder
  - provider: codebase