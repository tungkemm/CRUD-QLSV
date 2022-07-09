import React, { useState } from "react";
import { Table, Modal, Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  dataManagerSelector,
  currentObjAccountSelector,
} from "../features/selectors";
import {
  deleteDataManage,
  updateDataManage,
} from "../features/slice/manageSlice";
import InputInfo from "./InputInfo";

const ManagerList = () => {
  const dispatch = useDispatch();
  const dataStudent = useSelector(dataManagerSelector);
  const currentObjAccount = useSelector(currentObjAccountSelector);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [currentDataStudent, setCurrentDataStudent] = useState({});

  //// Delete student
  const handleShowModalDelete = (data) => {
    if (currentObjAccount.action.delete) {
      setShowModalDelete(true);
      setCurrentDataStudent(data);
    } else alert("Ban ko co quyen xoa du lieu");
  };

  const handleCancelModalDelete = () => {
    setShowModalDelete(false);
  };

  const handleClickBtnDelete = () => {
    dispatch(deleteDataManage(currentDataStudent.id));
    setShowModalDelete(false);
  };
  ///

  //// Update student
  const handleShowModalUpdate = (data) => {
    if (currentObjAccount.action.update) {
      setShowModalUpdate(true);
      setCurrentDataStudent(data);
    } else alert("Ban ko co quyen cap nhat du lieu");
  };

  const handleCancelModalUpdate = () => {
    setShowModalUpdate(false);
  };

  const handleClickBtnUpdate = (dataStudent) => {
    dispatch(updateDataManage(dataStudent));
    setShowModalUpdate(false);
  };
  ///

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Class",
      dataIndex: "classname",
      key: "classname",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Classification",
      dataIndex: "classification",
      key: "classification",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <i
            className="fa-solid fa-pen-to-square manager-action-icon"
            onClick={() => handleShowModalUpdate(record)}
          ></i>
          <i
            className="fa-solid fa-delete-left manager-action-icon"
            onClick={() => handleShowModalDelete(record)}
          ></i>
        </>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={dataStudent} />

      {/* Show modal update */}
      <>
        <Modal
          className="managerlist_modal_create-and-update"
          title="Info Student"
          visible={showModalUpdate}
          onCancel={handleCancelModalUpdate}
        >
          <InputInfo
            onUpdate={handleClickBtnUpdate}
            currentDataStudent={currentDataStudent}
          />
        </Modal>
      </>

      {/* Show modal delete */}
      <>
        <Modal
          title="Confirm Delete"
          visible={showModalDelete}
          onOk={handleClickBtnDelete}
          onCancel={handleCancelModalDelete}
        >
          <Alert
            message={`Ban muon xoa hoc sinh ${currentDataStudent.username} ra khoi danh sach ?`}
            type="warning"
          />
        </Modal>
      </>
    </>
  );
};

export default ManagerList;
