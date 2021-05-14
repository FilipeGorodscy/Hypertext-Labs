import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DatePicker = () => {
  const dispatch = useDispatch();

  const date = useSelector((state) => state.date);

  const onDateChange = (event) => {
    dispatch({ type: "DATE_CHANGED", payload: { date: event.target.value } });
  };

  return <input type="date" id="start" name="trip-start" value={date} onChange={onDateChange} />;
};

export default DatePicker;
