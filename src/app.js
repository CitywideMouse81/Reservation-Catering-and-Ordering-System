/** @jsxImportSource @emotion/react */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReservationForm from "./components/ReservationForm";
import ReservationsList from "./components/ReservationsList";
import { css } from "@emotion/react";

const containerStyle = css`
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  padding: 1rem;
`;

function App() {
  return (
    <Router>
      <div css={containerStyle}>
        <h1>Catering Reservation & Ordering System</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ReservationForm />
                <ReservationsList />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
