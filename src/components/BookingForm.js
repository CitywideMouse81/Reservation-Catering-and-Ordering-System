// BookingForm.js
import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { createReservation } from "../redux/reservationSlice";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background: #fff;
  padding: 2em;
  max-width: 400px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  input {
    padding: 0.8em;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
  }

  button {
    padding: 0.8em;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #5364ca;
    }
  }
`;

function BookingForm() {
  const [inputs, setInputs] = useState({ name: "", date: "", guests: 1 });
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!inputs.name || !inputs.date) throw new Error("All fields required");
      await dispatch(createReservation(inputs)); // Redux-thunk action, async/await
      setInputs({ name: "", date: "", guests: 1 });
      setErrorMsg("");
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <FormWrapper>
      <h2>Book Catering</h2>
      <input
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="date"
        type="date"
        value={inputs.date}
        onChange={handleChange}
        required
      />
      <input
        name="guests"
        type="number"
        min="1"
        value={inputs.guests}
        onChange={handleChange}
      />
      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
      <button onClick={handleSubmit}>Reserve</button>
    </FormWrapper>
  );
}

export default BookingForm;
