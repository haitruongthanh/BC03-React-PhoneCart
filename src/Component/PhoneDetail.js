import React, { Component } from "react";

export default class PhoneDetail extends Component {
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.props.itemDetail;
    return (
      <div
        className="my-4"
        style={{ display: this.props.display ? "block" : "none" }}
      >
        <hr />
        <div className="row">
          <div className="col-4 text-center">
            {" "}
            <h4>{tenSP}</h4>
            <img src={hinhAnh} alt={tenSP} style={{ width: "100%" }} />
          </div>
          <div className="col-8 text-left">
            <h5 className="mb-5">Thông số kỹ thuật</h5>
            <table className="table table-striped text-left">
              <tbody>
                <tr>
                  <th scope="row" className="w-25">
                    Màn hình
                  </th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th scope="row" className="w-25">
                    Hệ điều hành
                  </th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th scope="row" className="w-25">
                    Camera trước
                  </th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th scope="row" className="w-25">
                    Camera sau
                  </th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th scope="row" className="w-25">
                    Ram
                  </th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th scope="row" className="w-25">
                    Rom
                  </th>
                  <td>{rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
/*     maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg", */
