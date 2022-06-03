/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class PhoneItem extends Component {
  render() {
    let { maSP, tenSP, hinhAnh, giaBan } = this.props.data;
    return (
      <div className="col-4">
        <div className="card-sl">
          <div className="card-image">
            <img src={hinhAnh} style={{ width: "250px", minHeight: "250px" }} />
          </div>
          <a className="card-action" href="#">
            <i className="fa fa-heart" />
          </a>
          <div className="card-heading">{tenSP}</div>
          <div className="card-text">VND {giaBan}</div>
          <button
            type="button"
            className="btn btn-outline-success px-5 mx-2"
            onClick={() => {
              this.props.handleAddToCart(this.props.data);
            }}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-warning px-5 mx-2"
            onClick={() => {
              this.props.handleItemDetail(maSP);
            }}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
      </div>
    );
  }
}
