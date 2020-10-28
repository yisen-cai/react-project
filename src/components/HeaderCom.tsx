import React from "react";
import "./HeaderCom.css";
import { MenuOutlined } from "@ant-design/icons";

type HeaderType = {
  logo: string;
  title: string;
  isSideOpen: boolean;
  userDetails: string;
};
type HeaderState = {
  isSideOpen: boolean;
};

class Header extends React.Component<HeaderType, HeaderState> {
  constructor(props: HeaderType) {
    super(props);
    this.state = {
      isSideOpen: false,
    };
    this.handleClickSidebar = this.handleClickSidebar.bind(this);
  }

  handleClickSidebar(
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void {
    this.setState({
      isSideOpen: !this.state.isSideOpen,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="left-side">
          <MenuOutlined
            onClick={this.handleClickSidebar}
            rotate={this.state.isSideOpen ? 90 : 0}
          />
        </div>

        <div className="title">{this.props.title}</div>

        <div className="user">{this.props.userDetails}</div>
      </div>
    );
  }
}

export default Header;
