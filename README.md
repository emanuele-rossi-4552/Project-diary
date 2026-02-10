# Project Diary – Activity and Project Tracker

React web app to track projects and ideas over time, with local data persistence and Android build via Capacitor.

**Project Diary** is an application developed to manage and maintain a personal history of activities, projects, and ideas over time.  
The project was born from a real personal need and is shared on GitHub **for demonstration purposes** as an example of a complete, standalone, and finished application.

## Problem Addressed

When developing personal projects, it’s easy to lose track of:
- initial ideas
- motivations
- progress status
- abandoned projects and their reasons

This can lead to repeating mistakes or forgetting useful context over time.

The app solves this problem by providing a **structured diary**, persistent and accessible offline.

## Main Features

- Create and manage activities / projects  
- Categorization by status:
  - To Do
  - In Progress
  - Completed
  - Abandoned
- Comments associated with each project to note thoughts and reflections
- Local data persistence
- Offline usage

## Technology Stack

- **React** (v19)
- **Vite** as build tool
- **React Router DOM** for navigation
- **IndexedDB** for data persistence
- **idb** as an abstraction layer over the database
- **Capacitor** for Android deployment

No backend is present: the architecture is intentionally simple and local.

## Architectural Decisions

### IndexedDB
Chosen to provide:
- data persistence
- offline functionality
- no costs or complexity of a backend that is not needed

### Separation of Responsibilities
- UI components separated for buttons and pages
- centralized data management through context
- database logic isolated in dedicated files

### Web → Mobile
The app was originally developed as a React web app and then:
1. built with Vite
2. converted using Capacitor
3. compiled into an APK via Android Studio

This approach allows maintaining **a single codebase** for both web and mobile.

## Project Status
The project is **complete**.  
No new features are planned, as the app fully satisfies the original purpose it was created for.
