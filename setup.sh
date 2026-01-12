#!/bin/bash

# Nesti Development Scripts
# Usage: source scripts/setup.sh

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Nesti Development Setup${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js 18+${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node -v)${NC}"

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm $(npm -v)${NC}"

# Install dependencies
echo -e "\n${BLUE}📦 Installing dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

# Create .env.local if not exists
if [ ! -f ".env.local" ]; then
    echo -e "\n${BLUE}📝 Creating .env.local...${NC}"
    cp .env.example .env.local
    echo -e "${GREEN}✓ .env.local created. Please edit with your values.${NC}"
else
    echo -e "${GREEN}✓ .env.local already exists${NC}"
fi

# Build check
echo -e "\n${BLUE}🏗️  Building project...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
    echo -e "\n${BLUE}🎉 Setup complete!${NC}"
    echo -e "${GREEN}Ready to run: npm run dev${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
