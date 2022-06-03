import React, { Component } from "react";
import PhoneItem from "./PhoneItem";

export default class PhoneList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map((item, i) => {
          return (
            <PhoneItem
              data={item}
              key={i}
              handleItemDetail={this.props.handleItemDetail}
              handleAddToCart={this.props.handleAddToCart}
            />
          );
        })}
      </div>
    );
  }
}
