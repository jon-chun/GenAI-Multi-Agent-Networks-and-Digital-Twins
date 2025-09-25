#!/bin/bash

# Claude Code Environment Variables Setup Script for GLM API
# Get GLM API Key from: https://z.ai/subscribe
# This script sets up the core environment variables for Claude Code

# Set your values here
ANTHROPIC_AUTH_TOKEN="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
ANTHROPIC_BASE_URL="https://api.openai.com/v1"
ANTHROPIC_MODEL="gpt-5-mini"
ANTHROPIC_SMALL_FAST_MODEL="gpt-5-mini"

# Export the environment variables
export ANTHROPIC_AUTH_TOKEN="$ANTHROPIC_AUTH_TOKEN"
export ANTHROPIC_BASE_URL="$ANTHROPIC_BASE_URL"
export ANTHROPIC_MODEL="$ANTHROPIC_MODEL"
export ANTHROPIC_SMALL_FAST_MODEL="$ANTHROPIC_SMALL_FAST_MODEL"