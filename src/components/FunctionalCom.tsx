import React from "react";

// const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
//   <div>{message}</div>
// );

type AppProps = { message: string }; /* could also use interface */
const App = ({ message }: AppProps) => <div>{message}</div>;

export default App;
