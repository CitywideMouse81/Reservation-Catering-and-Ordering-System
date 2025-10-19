Catering, Reservation & Ordering System

A modern React-based web application for managing catering reservations and orders with real-time state management and responsive design.

🚀 Live Demo

Check out the live application: heroic-valkyrie-6e5796.netlify.app

✨ Features

    Reservation Management: Create and view catering reservations

    Form Validation: Client-side validation with error handling

    Real-time State: Redux-powered state management

    Responsive Design: Mobile-friendly interface

    Modern UI: Clean and intuitive user interface with Emotion CSS

    Async Operations: Simulated API calls with loading states

🛠️ Tech Stack

    Frontend: React 18.2.0

    State Management: Redux Toolkit, React-Redux

    Styling: Emotion CSS-in-JS

    Routing: React Router DOM

    Build Tool: Create React App

    Deployment: Netlify

📁 Project Structure
text

    Catering, Reservation and Ordering System/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── BookingForm.js
    │   │   ├── ReservationForm.js
    │   │   └── ReservationList.js
    │   ├── redux/
    │   │   ├── reservationSlice.js
    │   │   └── store.js
    │   ├── store/
    │   │   └── store.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── netlify.toml

🚀 Getting Started
Prerequisites

    Node.js (version 14 or higher)

    npm or yarn

Installation

  Clone the repository
  bash

    git clone <repository-url>
    cd "Catering, Reservation and Ordering System"

Install dependencies
bash

    npm install

Start the development server
bash
  
    npm start


🎯 Key Components
ReservationForm

    Handles reservation creation with form validation

    Includes fields for name, email, phone, date, guests, and notes

    Real-time error handling and loading states

ReservationsList

    Displays all created reservations

    Shows empty state when no reservations exist

    Responsive card-based layout

Redux Store

    Manages reservation state globally

    Handles async actions with Redux Thunk

    Provides loading and error states

🔧 State Management

The application uses Redux Toolkit for efficient state management:
javascript
    
    // Example state structure
    {
      reservations: {
        list: [],
        status: 'idle', // 'loading', 'succeeded', 'failed'
        error: null
      }
    }

🎨 Styling

    Emotion CSS: CSS-in-JS solution for component-scoped styling

    Responsive Design: Mobile-first approach

    Modern UI: Clean, professional appearance with subtle shadows and transitions

🌐 Deployment

The application is configured for deployment on Netlify:

    Build Command: npm run build

    Publish Directory: build

    Redirects: SPA-friendly routing configuration

Deploy to Netlify

    Build the project: npm run build

    Deploy the build folder to Netlify

    Or connect your GitHub repository for continuous deployment

📝 Form Fields

    Name (required): Customer's full name

    Email (required): Contact email address

    Phone: Contact phone number

    Date (required): Reservation date

    Guests: Number of guests (1-10)

    Notes: Additional requirements or comments

🔄 Async Operations

The application simulates API calls with a 1-second delay to demonstrate:

    Loading states during form submission

    Error handling for failed operations

    Optimistic updates for better UX
