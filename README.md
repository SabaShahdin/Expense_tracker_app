# Expense Tracker Application - Week 1 Documentation

## Project Overview

The Expense Tracker Application is designed to help users track and categorize their expenses. The app will include features for onboarding, expense entry, and expense summary to provide users with a streamlined, efficient way to monitor spending.

## Technology Stack

### Front-End
- **Framework**: React (for modular, component-based UI development)
- **Styling**: Tailwind CSS (for a customizable and responsive layout)

### Back-End
- **Framework**: Express.js (lightweight and flexible)
- **Database**: MongoDB (NoSQL database chosen for flexibility in managing expense categories and records)
- **Authentication**: JSON Web Tokens (JWT) for secure, stateless user session management

## Development Methodology

### Methodology: Agile (Scrum)
We chose Agile Scrum for its iterative development approach, allowing for flexibility in requirements and regular feedback through sprints.

## Project Structure
expense-tracker/ ├── frontend/ │ ├── public/ │ └── src/ │ ├── components/ │ ├── pages/ │ ├── App.js │ └── index.js ├── backend/ │ ├── config/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── server.js │ └── .env ├── README.md └── .gitignore


- **frontend/**: Contains React components, pages, and styling for the UI.
- **backend/**: Holds all server-side logic, including the user authentication system and data models.
- **config/**: Configuration files, including database connection settings.
- **controllers/**: Contains controller logic for API endpoints.
- **models/**: Defines Mongoose models for data representation.
- **routes/**: Express.js routes for handling API requests.
- **.env**: Stores environment variables (e.g., database connection string, JWT secret).

## Completed Tasks

### 1. Project Planning and Technology Selection
- Finalized the tech stack: MERN (MongoDB, Express.js, React, Node.js).
- Defined project structure and folder organization.

### 2. Front-End Setup and UI
- Implemented initial layout with signup/login, homepage, and basic navigation.
- Placeholder categories on the homepage for expenses like Clothing, Travel, Food, and Education.

### 3. Backend Setup with Authentication
- Developed database schema for users.
- Set up user registration and login with JWT-based authentication.
- Included validation for email and password during user sign-up.

### 4. Project Documentation and Initial Report
- Documented architecture and folder structure.
- Created a project plan for the upcoming weeks, with task milestones and priorities.

## Upcoming Milestones

- Implement expense entry and summary screens.
- Develop backend routes for expense management.
- Establish database models for managing and categorizing expenses.

## Testing and API Endpoints

Postman collection for testing the authentication endpoints is included in the project.

---

## Getting Started
