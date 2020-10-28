import React from "react";
import { DatePicker } from "antd";
import moment, { Moment } from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";

type State = {
  name: string;
  text: string;
  favorite: string;
  number: string;
  birthday: Moment | null;
};

type Props = { title: string };

class NameForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      text: "",
      favorite: "coconut",
      number: "",
      birthday: moment("2020-10-24", "YYYY-MM-DD"),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDatePicker = this.handleDatePicker.bind(this);
  }

  handleDatePicker(value: Moment | null): void {
    console.log(moment().format());
    this.setState({
      birthday: value,
    });
  }

  handleChange(
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLSelectElement>
  ): void {
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    alert("A name was submitted: " + this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>{this.props.title}</h4>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <DatePicker
          defaultValue={moment("2015-01-01", "YYYY-MM-DD", false)}
          locale={locale}
          value={this.state.birthday}
          onChange={this.handleDatePicker}
        />
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Textarea:
          <textarea
            id="form-text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
        </label>
        {/* multiple select */}
        {/* <select multiple={true} value={['B', 'C']}></select> */}
        <select
          value={this.state.favorite}
          name="favorite"
          onChange={this.handleChange}
        >
          <option value="grape-fruit">GrapeFruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
