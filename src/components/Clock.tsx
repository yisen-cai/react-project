import React from "react";

type Details = {
  message: string;
};

class Clock extends React.Component {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showDetail: React.FunctionComponent<Details> = (details: Details) => {
  return (
    <div className="container">
      <div className="message">{details.message}</div>
    </div>
  );
};

export default Clock;
