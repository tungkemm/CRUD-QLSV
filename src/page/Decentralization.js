import React, { useState } from "react";
import { Table, Checkbox, Modal, Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { accountsListSelector } from "../features/selectors";
import {
  decentralizationActionCreate,
  decentralizationActionDelete,
  decentralizationActionUpdate,
  deleteDataAccount,
} from "../features/slice/loginSlice";

const Decentralization = () => {
  const dispatch = useDispatch();
  const listDataAccount = useSelector(accountsListSelector);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [currentDataAccount, setCurrentDataAccount] = useState({});

  //// Delete Account
  const handleShowModalDelete = (data) => {
    setShowModalDelete(true);
    setCurrentDataAccount(data);
  };

  const handleCancelModalDelete = () => {
    setShowModalDelete(false);
  };

  const handleClickBtnDelete = () => {
    dispatch(deleteDataAccount(currentDataAccount.id));
    setShowModalDelete(false);
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Create",
      key: "create",
      render: (_, record) => (
        <Checkbox
          checked={record.action.create}
          onChange={(e) =>
            dispatch(
              decentralizationActionCreate({
                id: record.id,
                value: e.target.checked,
              })
            )
          }
        />
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => (
        <Checkbox
          checked={record.action.delete}
          onChange={(e) =>
            dispatch(
              decentralizationActionDelete({
                id: record.id,
                value: e.target.checked,
              })
            )
          }
        />
      ),
    },
    {
      title: "Update",
      key: "update",
      render: (_, record) => (
        <Checkbox
          checked={record.action.update}
          onChange={(e) =>
            dispatch(
              decentralizationActionUpdate({
                id: record.id,
                value: e.target.checked,
              })
            )
          }
        />
      ),
    },
    {
      title: "Delete User",
      key: "deleteUser",
      render: (_, record) => (
        <>
          <i
            className="fa-solid fa-delete-left decentralization-action-icon"
            onClick={() => handleShowModalDelete(record)}
          ></i>
        </>
      ),
    },
  ];

  return (
    <div className="decentralization">
      <div className="decentralization-title">Thong tin tai khoan</div>
      <Table columns={columns} dataSource={listDataAccount} />

      {/* Show modal delete */}
      <>
        <Modal
          title="Confirm Delete"
          visible={showModalDelete}
          onOk={handleClickBtnDelete}
          onCancel={handleCancelModalDelete}
        >
          <Alert message={`Ban muon xoa tai khoan nay ?`} type="warning" />
        </Modal>
      </>
    </div>
  );
};

export default Decentralization;
