/** @jsxImportSource @emotion/react */
import React from "react";
import { useSelector } from "react-redux";
import { css } from "@emotion/react";

const listStyle = css`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const reservationItemStyle = css`
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f9f9f9;

  &:last-child {
    margin-bottom: 0;
  }
`;

const emptyStateStyle = css`
  text-align: center;
  color: #666;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 6px;
`;

export default function ReservationsList() {
  const reservations = useSelector((state) => state.reservations.list);

  if (reservations.length === 0) {
    return (
      <div css={listStyle}>
        <h2>Reservations</h2>
        <div css={emptyStateStyle}>
          <p>No reservations yet. Create your first reservation above!</p>
        </div>
      </div>
    );
  }

  return (
    <div css={listStyle}>
      <h2>Reservations ({reservations.length})</h2>
      {reservations.map((reservation, index) => (
        <div key={index} css={reservationItemStyle}>
          <h3>{reservation.name}</h3>
          <p>
            <strong>Email:</strong> {reservation.email}
          </p>
          <p>
            <strong>Phone:</strong> {reservation.phone || "Not provided"}
          </p>
          <p>
            <strong>Date:</strong> {reservation.date}
          </p>
          <p>
            <strong>Guests:</strong> {reservation.guests}
          </p>
          {reservation.notes && (
            <p>
              <strong>Notes:</strong> {reservation.notes}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
