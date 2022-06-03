/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { maSP, tenSP, hinhAnh, giaBan } = this.props.gioHang;
    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Mã SP</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Tên SP</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn Giá</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col">Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.gioHang.map(
                    ({ maSP, tenSP, hinhAnh, giaBan, soLuong }, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{maSP}</th>
                          <td>
                            <img src={hinhAnh} style={{ width: "80px" }} />
                          </td>
                          <td>{tenSP}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              onClick={() => {
                                this.props.handleQuantity(maSP, 1);
                              }}
                            >
                              +
                            </button>

                            <span className="mx-3">{soLuong}</span>
                            <button
                              type="button"
                              className="btn btn-outline-warning"
                              onClick={() => {
                                this.props.handleQuantity(maSP, -1);
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{giaBan}</td>
                          <td>{soLuong * giaBan}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => {
                                this.props.handleXoaPhone(maSP);
                              }}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
