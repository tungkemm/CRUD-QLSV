import React from "react";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentAccountSelector } from "../../features/selectors";
import { dataCurrentAccount } from "../../features/slice/loginSlice";

const NavBar = () => {
  const { Header } = Layout;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentAccount = useSelector(currentAccountSelector);

  const handleClickBtnHome = () => {
    navigate("/");
  };

  const handleClickBtnManage = () => {
    currentAccount.username !== "" ? navigate("/manage") : alert("Chua login");
  };

  const handleClickBtnDecentralization = () => {
    if(currentAccount.username !== "") {
      if(currentAccount.username === "admin") {
        navigate("/decentralization")
      }
      else {
        alert("Ban ko co quyen truy cap")
      }
    }
    else alert("Chua login")
  };

  const handleClickBtnLogin = () => {
    navigate("/login");
  };

  const handleClickBtnLogout = () => {
    dispatch(
      dataCurrentAccount({
        username: "",
        password: "",
      })
    );
    navigate("/")
    alert("Logout thanh cong");
  };

  return (
    <Header className="header">
      <div>
        <div className="header-button" onClick={handleClickBtnHome}>
          Home Page
        </div>
        <div className="header-button" onClick={handleClickBtnManage}>
          Manage Student
        </div>
        <div className="header-button" onClick={handleClickBtnDecentralization}>
          Decentralization
        </div>
      </div>
      <div>
        <div className="header-button">
          {currentAccount.username !== "" ? (
            <div className="header-login">
              <span className="header-usernamelogin">{currentAccount.username}</span>
              <i className="fa-solid fa-angle-down"></i>

              <div
                className="header-usernamelogout"
                onClick={handleClickBtnLogout}
              >
                Log out
              </div>
            </div>
          ) : (
            <div onClick={handleClickBtnLogin}>Login</div>
          )}
        </div>
      </div>
    </Header>
  );
};

export default NavBar;
