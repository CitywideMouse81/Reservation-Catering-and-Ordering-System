/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../redux/reservationSlice";
import { css } from "@emotion/react";

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  input,
  select,
  textarea {
    padding: 0.6rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    padding: 0.8rem;
    background-color: #667eea;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    &:hover {
      background-color: #5364ca;
    }
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export default function ReservationForm() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.reservations.status);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: 1,
    notes: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date) {
      setError("Name, Email and Date are required");
      return;
    }
    try {
      setError(null);
      await dispatch(createReservation(form)).unwrap();
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: 1,
        notes: "",
      });
    } catch (e) {
      setError("Failed to create reservation");
    }
  };

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <select name="guests" value={form.guests} onChange={handleChange}>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} guest(s)
          </option>
        ))}
      </select>
      <textarea
        name="notes"
        placeholder="Additional notes"
        value={form.notes}
        onChange={handleChange}
        rows="3"
      />
      {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Reserve"}
      </button>
    </form>
  );
}
