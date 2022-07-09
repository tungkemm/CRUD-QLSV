import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">Quan ly sinh vien</div>
      <div className="home-guide">
        <div className="home-guide-item">
          <h2>Chưa đăng nhập</h2>
          <ul>
            <li>Không được làm gì :v</li>
          </ul>
        </div>
        <div className="home-guide-item">
          <h2>Tài khoản Admin</h2>
          <ul>
            <li>Xem thông tin các tài khoản đã đăng nhập</li>
            <li>
              Phân quyền cho các tài khoản người dùng quyền thêm, sửa, xóa, cập
              nhật thông tin sinh viên
            </li>
            <li>
              Xem thông tin các sinh viên và được thêm, sửa, xóa, cập nhật thông
              tin sinh viên
            </li>
          </ul>
        </div>
        <div className="home-guide-item">
          <h2>Tài khoản người dùng</h2>
          <ul>
            <li>Xem thông tin các sinh viên</li>
            <li>
              Chỉ được thêm, sửa, xóa thông tin sinh viên nếu tài khoản Admin
              cấp quyền
            </li>
            <li>Không được xem thông tin các tài khoản đã đăng nhập</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
