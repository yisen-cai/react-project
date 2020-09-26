import React from "react";
import FuntionalCom from "../../components/FunctionalCom";
import TableCom, { TableData } from "../../components/TableCom";

import "./HelloView.css";

type MyProp = {
  message: string;
  second?: string;
};

type MyState = {
  value: number;
};

// (aka React.Component<PropType, StateType>),
class Hello extends React.Component<MyProp, MyState> {
  name: String;
  tableData: Array<TableData>;
  constructor(props: MyProp, states: MyState) {
    super(props);
    this.state = states;
    this.name = "Hello";
    this.tableData = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];
  }

  render() {
    return (
      <div className="container">
        <FuntionalCom message="Hello" />
        <TableCom tableData={this.tableData}/>
      </div>
    );
  }
}

export default Hello;
