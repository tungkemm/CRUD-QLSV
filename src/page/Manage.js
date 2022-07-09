import React, { useState } from "react";
import { Button, Modal } from "antd";
import ManagerList from "../components/ManagerList";
import { useDispatch, useSelector } from "react-redux";
import { addDataManage } from "../features/slice/manageSlice";
import InputInfo from "../components/InputInfo";
import { currentObjAccountSelector } from "../features/selectors";

const Manage = () => {
  const dispatch = useDispatch();
  const currentObjAccount = useSelector(currentObjAccountSelector);
  // console.log(currentObjAccount);
  const [showModalCreate, setShowModalCreate] = useState(false);

  //// Create student
  const handleShowModalCreate = () => {
    if (currentObjAccount.action.create) setShowModalCreate(true);
    else alert("Ban ko co quyen them moi du lieu");
  };

  const handleCancelModalCreate = () => {
    setShowModalCreate(false);
  };

  const handleSubmitCreate = (dataStudent) => {
    dispatch(addDataManage(dataStudent));
    setShowModalCreate(false);
  };
  ////

  return (
    <div className="manage">
      <div className="manage-title">Thong tin sinh vien</div>
      <ManagerList />
      <Button
        type="primary"
        onClick={handleShowModalCreate}
        className="manage-btn-add"
      >
        Create Student
      </Button>

      {/* Show modal create */}
      <Modal
        className="managerlist_modal_create-and-update"
        title="Info Student"
        visible={showModalCreate}
        onCancel={handleCancelModalCreate}
      >
        <InputInfo onSubmit={handleSubmitCreate} />
      </Modal>
    </div>
  );
};

export default Manage;
