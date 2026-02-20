
# Project Title

## Overview
Forged In Fire is a text‑based fantasy adventure inspired by Dungeons & Dragons–style storytelling. Players progress through the narrative by making meaningful decisions that shape the world, alter the storyline, and unlock different endings. Every playthrough offers a new experience, encouraging exploration, creativity, and replayability.

## Target Audience
This game is designed for:

●	Gamers

●	Fans of fantasy storytelling

●	D&D enthusiasts

●	Readers who enjoy interactive fiction

●	Ages 13+

## Why This Game Exists
This project exists to give players the ability to:

●	Experience a fantasy story first‑hand

●	Make decisions that directly affect the narrative

●	Explore branching paths and multiple endings

●	Replay the game for new outcomes

●	Enjoy an interactive, creative alternative to passive entertainment like 
doomscrolling or TikTok

## Core Experience
Players can expect to:

●	Choose their path through a branching fantasy storyline

●	Encounter characters, quests, and challenges

●	Make decisions that influence the world and their fate

●	Discover multiple endings

●	Replay the game to uncover new routes and secrets

## Product Vision Statement
For fans of fantasy and storytelling who enjoy experiencing a story first‑hand and making decisions that affect the narrative,
Forged in Fire is a text‑based Choose Your Own Adventure game
that immerses players in a world where they have the autonomy to change how the story ends. Unlike mindless games or doomscrolling on social media, Forged in Fire activates creativity and offers a fantastical escape from the daily grind

## Theme & Style

●	Fantasy setting

●	D&D‑inspired tone

●	Player‑driven narrative

●	Lightweight, text‑only interface

●	Accessible and easy to pick up

---

## Docker Setup (All-in-One)

This project is **Dockerized**, meaning all dependencies and runtime environments are packaged in a container. You do **not** need to install anything besides Docker to build and run the game.

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed.  
- Optional: [Docker Compose](https://docs.docker.com/compose/install/) for multi-container setups.

### Build and Run Commands

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Build Docker image
docker build -t forged-in-fire:latest .

# OR build with Docker Compose
docker-compose build

# Run the application
docker run -p 8080:8080 forged-in-fire:latest

# OR run with Docker Compose
docker-compose up

# Access in browser at:
# http://localhost:8080

# Stop containers
docker stop <container-id>
docker-compose down
