# Simple Full-Stack Project

A full-stack web application featuring a React frontend with speech recognition capabilities connected to an Express.js backend API.

## Overview

This project demonstrates a basic client-server architecture where:
- **Frontend** (React) captures spoken text using the Web Speech API and sends it to the backend
- **Backend** (Express) receives messages, processes them, and returns a response

## Project Structure

```
.
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── ...
│   └── README.md
└── README.md
```

## Features

- **Speech Recognition** - Converts spoken words to text using Web Speech API
- **REST API** - Express backend handles message processing
- **CORS Enabled** - Frontend and backend can communicate across different ports
- **Automatic Messaging** - Speech is automatically sent to backend after recognition

## Prerequisites

- Node.js (v14 or higher)
- npm
- A modern browser supporting Web Speech API (Chrome, Edge, Safari)

## Installation

### Backend Setup

```bash
cd backend
npm install
```

### Frontend Setup

```bash
cd frontend
npm install
```

## Running the Application

### Start Backend Server

```bash
cd backend
npm start
```

The backend runs on `http://localhost:5000`

### Start Frontend Server

In a new terminal:

```bash
cd frontend
npm start
```

The frontend runs on `http://localhost:3000`

## How It Works

1. User clicks the microphone button on the frontend
2. Browser captures speech using Web Speech API
3. Spoken text is converted to a transcript
4. Frontend sends the transcript to `POST /api/message` on the backend
5. Backend receives the message and returns a confirmation reply
6. Frontend displays the backend's response

## Available Endpoints

### Backend API

- **POST `/api/message`**
  - Request body: `{ "text": "user's message" }`
  - Response: `{ "reply": "Backend confirmation message" }`

## Browser Support

The Web Speech API is supported in:
- ✅ Chrome/Chromium
- ✅ Edge
- ✅ Safari
- ❌ Firefox (limited support)

## Technologies Used

### Frontend
- React 19
- Web Speech API (browser native)

### Backend
- Express.js
- CORS middleware

## Development Scripts

### Frontend

- `npm start` - Run development server
- `npm test` - Run tests
- `npm build` - Build for production

### Backend

- `npm start` - Start the Express server

## Future Enhancements

- Add text-to-speech (TTS) for audio responses
- Implement a database to store messages
- Add user authentication
- Deploy to production servers
- Add more complex backend logic

## Notes

- Both servers must be running for the application to work
- The frontend expects the backend to be accessible at `http://localhost:5000`
- CORS is configured to allow requests from the frontend
