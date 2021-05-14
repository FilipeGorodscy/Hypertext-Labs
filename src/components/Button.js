import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Button = ({ text, type }) => {
  const dispatch = useDispatch();

  const date = useSelector((state) => moment(state.date));

  const onButtonClick = () => {
    if (type === "inc") {
      const nextDay = date.add(1, "day").format("YYYY-MM-DD");
      dispatch({ type: "DATE_CHANGED", payload: { date: nextDay } });
    } else if (type === "dec") {
      const previousDay = date.subtract(1, "day").format("YYYY-MM-DD");
      dispatch({ type: "DATE_CHANGED", payload: { date: previousDay } });
    }
  };

  return <button onClick={onButtonClick}>{text}</button>;
};

export default Button;
