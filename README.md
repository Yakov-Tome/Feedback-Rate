# Rate App

## Description
Rate App is a web application for collecting and displaying user feedback. 
It allows users to submit feedback with ratings, view feedback statistics, and manage the feedback data. 
The project is built with React and uses JSON Server as a mock backend.

## Features
- Submit feedback with a rating and comment
- View a list of feedback entries
- See feedback statistics like average rating
- Interactive and responsive user interface

## Installation

```bash
# Clone the repository
git clone https://github.com/Yakov-Tome/Feedback-Rate.git
cd Feedback-Rate/
cd Rate-App/


# Install dependencies
npm install
```

## Usage

### Start the development server
```bash
npm run dev
```

### Start the JSON server
```bash
npm run server
```

### Run both servers concurrently
```bash
npm run both
```

The application will be available at `http://localhost:5173` and the JSON Server at `http://localhost:5000`.

## Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run server` - Start the JSON Server
- `npm run both` - Run the development and JSON servers concurrently
- `npm run lint` - Run ESLint for code linting

## Technologies
- React 19
- React Router DOM 7
- Framer Motion
- JSON Server
- React Icons
- Vite

## Folder Structure
- `/src/components` - React components
- `/src/context` - React context for feedback management
- `/src/data` - Static data
- `/public` - Static assets

Feel free to contribute to the project by submitting issues or pull requests!

