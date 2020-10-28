/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

// const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
//   <div>{message}</div>
// );

type AppProps = { message: string }; /* could also use interface */
const App = ({ message }: AppProps) => <div>{message}</div>;

/**
 * Explicit about return type
 * @param param0 message
 */
const App1: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);

const Title: React.FunctionComponent<{ title: string }> = ({
  children,
  title,
}) => <div title={title}>{children}</div>;

const App2: React.FC<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);

// conditional rendering
const MyConditionalComponent = ({ shouldRender = false }) =>
  shouldRender ? <div /> : false; // don't do this in JS either, should return JSX | null
// function components cannot return anything other than a JSX expression or null
//const el = <MyConditionalComponent />; // throws an error

export default App;
