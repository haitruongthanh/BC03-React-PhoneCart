import React, { Component } from "react";
import PhoneList from "./PhoneList";
import PhoneDetail from "./PhoneDetail";
import Cart from "./Cart";
import { phoneData } from "./dataPhone";
import "./style.css";

export default class PhoneShoppingCart extends Component {
  state = {
    dataPhone: phoneData,
    itemDetail: {},
    gioHang: [],
    isDisplay: false,
  };

  handleItemDetail = (maSP) => {
    let clonePhoneList = [...this.state.dataPhone];

    let index = clonePhoneList.findIndex((item) => {
      return item.maSP === maSP;
    });

    let item = clonePhoneList[index];
    this.setState({ itemDetail: item, isDisplay: true });
  };

  handleAddToCart = (sanPham) => {
    let cloneCart = [...this.state.gioHang];

    let index = cloneCart.findIndex((item) => {
      return item.maSP === sanPham.maSP;
    });
    if (index === -1) {
      let newItem = { ...sanPham, soLuong: 1 };
      cloneCart.push(newItem);
    } else {
      cloneCart[index].soLuong++;
    }

    this.setState({ gioHang: cloneCart });
  };

  handleXoaPhone = (maSP) => {
    let cloneCart = [...this.state.gioHang];

    let index = cloneCart.findIndex((item) => {
      return item.maSP === maSP;
    });
    cloneCart.splice(index, 1);
    this.setState({ gioHang: cloneCart });
  };

  handleQuantity = (maSP, giaTri) => {
    let cloneCart = [...this.state.gioHang];

    let index = cloneCart.findIndex((item) => {
      return item.maSP === maSP;
    });

    if (index !== -1) {
      cloneCart[index].soLuong += giaTri;
    }

    cloneCart[index].soLuong === 0 && cloneCart.splice(index, 1);
    this.setState({ gioHang: cloneCart });
  };

  render() {
    return (
      <div className="container mt-5">
        <Cart
          gioHang={this.state.gioHang}
          handleXoaPhone={this.handleXoaPhone}
          handleQuantity={this.handleQuantity}
        />
        <PhoneList
          data={this.state.dataPhone}
          handleItemDetail={this.handleItemDetail}
          handleAddToCart={this.handleAddToCart}
        />
        <PhoneDetail
          itemDetail={this.state.itemDetail}
          display={this.state.isDisplay}
        />
      </div>
    );
  }
}
