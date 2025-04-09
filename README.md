# React Blog Website

A simple, responsive blog website built with React, TypeScript, and Bootstrap.

## Features

- **Home Page**: Display a list of blog posts with titles, short descriptions, and thumbnails. Includes search and filter functionality.
- **Blog Post Page**: Dynamic routing for individual blog posts with full content display and related posts.
- **Categories/Tags**: Filter blog posts by categories or tags.
- **About Page**: Information about the blog and its purpose.
- **Contact Page**: Contact form for user inquiries (mock implementation).
- **Responsive Design**: Mobile-friendly layout using Bootstrap.

## Technologies Used

- React 18
- TypeScript
- React Router v6
- Bootstrap 5
- CSS

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/              # Page components
├── types/              # TypeScript interfaces
├── utils/              # Utility functions and mock data
└── assets/             # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

```
git clone https://github.com/yourusername/blog-website.git
cd blog-website
```

2. Install dependencies

```
npm install
```

3. Start the development server

```
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm start`: Starts the development server
- `npm test`: Runs tests
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app

## Future Enhancements

- User authentication
- Comments system
- Backend integration
- Pagination
- Dark mode toggle
