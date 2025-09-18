# Project Setup

## Overview

This project consists of a backend built with NestJS and a frontend built with ReactJS (TypeScript, Vite). It uses MongoDB as the database and Docker Compose for local development. The CI pipeline includes linting and building for both backend and frontend.

## Prerequisites

-   Node.js (v18 or higher)
-   Docker and Docker Compose
-   Git

## Repository Structure

-   `backend/`: NestJS application
-   `frontend/`: ReactJS application with TypeScript (Vite)
-   `docker-compose.yml`: Docker Compose configuration for local development

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```
2. **Set up environment variables**:
    - Copy `backend/.env.example` to `backend/.env` and configure as needed.
    - Copy `frontend/.env.example` to `frontend/.env` and configure as needed.
3. **Run locally with Docker**:
    ```bash
    docker-compose up --build
    ```
    - Backend: `http://localhost:3000`
    - Frontend: `http://localhost:5173`
    - MongoDB: `mongodb://localhost:27017`

## CI Pipeline

-   Linting: ESLint for frontend, TSLint/ESLint for backend
-   Build: Vite build for frontend, NestJS build for backend
-   CI configuration is set up in `.github/workflows/ci.yml` for both repos

## Development

-   **Backend**: `cd backend && npm install && npm run start:dev`
-   **Frontend**: `cd frontend && npm install && npm run dev`

## License

MIT
