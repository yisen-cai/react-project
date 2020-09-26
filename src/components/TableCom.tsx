import { table } from "console";
import React from "react";

export type TableData = {
  name: string;
  job: string;
};

type Props = {
  tableData?: Array<TableData>;
  removeCharacter?: Function;
};

class TableCom extends React.Component<Props, { tableData: Array<TableData> }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tableData: [
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
      ],
    };
    this.removeCharacter = this.removeCharacter.bind(this);
  }

  removeCharacter(ind: number) {
    const { tableData } = this.state;
    this.setState({
      tableData: tableData.filter((row, index) => {
        return index !== ind;
      }),
    });
  }

  render() {
    return (
      <table>
        <TableHeader />
        <TableBody
          removeCharacter={this.removeCharacter}
          tableData={this.state.tableData}
        />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <td>name</td>
        <td>job</td>
        <td>Edit</td>
      </tr>
    </thead>
  );
};

const TableBody = (props: Props) => {
  const { tableData } = props;
  const rows = tableData!.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter!(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Form extends React.Component<{}, { [key: string]: any }> {
  initialState: TableData = {
    name: "",
    job: "",
  };
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = this.initialState;
    this.submitForm = this.submitForm.bind(this);
  }

  handleSubmit() {

  }

  submitForm() {

  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    // loose object
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, job } = this.state;
    return (
      <div className="add-form">
        <form action="">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={name}
          />
          <label htmlFor="job">Job:</label>
          <input
            type="text"
            name="job"
            id="job"
            onChange={this.handleChange}
            value={job}
          />
        </form>
      </div>
    );
  }
}

export default TableCom;
