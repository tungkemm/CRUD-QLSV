import React, { useState, useEffect } from "react";
import moment from "moment";
import { Input, InputNumber, Select, Button, DatePicker, Form } from "antd";
import { v4 as uuidv4 } from "uuid";

const InputInfo = (props) => {
  const { onSubmit, onUpdate, currentDataStudent } = props;

  const [inputName, setInputName] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [inputBirthday, setInputBirthday] = useState("");
  const [inputAddress, setInputAddress] = useState(null);
  const [inputPoint, setInputPoint] = useState(null);

  const handleClick = () => {
    if (
      inputName !== "" &&
      inputClass !== "" &&
      inputBirthday !== "" &&
      inputAddress !== null &&
      inputPoint !== null
    ) {
      if (onSubmit) {
        onSubmit({
          id: uuidv4(),
          username: inputName,
          classname: inputClass,
          birthday: inputBirthday,
          address: inputAddress,
          point: inputPoint,
          classification: inputPoint > 5 ? "Gioi" : "Kha",
        });
      } else {
        onUpdate({
          id: currentDataStudent.id,
          username: inputName,
          classname: inputClass,
          birthday: inputBirthday,
          address: inputAddress,
          point: inputPoint,
          classification: inputPoint > 5 ? "Gioi" : "Kha",
        });
      }
    } else {
      onSubmit
        ? alert("Chua nhap day du thong tin")
        : alert("Chua cap nhat day du thong tin");
    }
  };

  const onChangeDatePicker = (date, dateString) => {
    const birthdayInfo = dateString.split("-").reverse().join("/");
    setInputBirthday(birthdayInfo);
  };

  useEffect(() => {
    if (onUpdate) {
      setInputName(currentDataStudent.username);
      setInputClass(currentDataStudent.classname);
      setInputBirthday(currentDataStudent.birthday);
      setInputAddress(currentDataStudent.address);
      setInputPoint(currentDataStudent.point);
    }
  }, [currentDataStudent]);

  useEffect(() => {
    return () => {
      setInputName("");
      setInputClass("");
      setInputBirthday("");
      setInputAddress(null);
      setInputPoint(null);
    };
  }, [onSubmit]);

  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
    >
      <Form.Item label="Name">
        <Input
          placeholder="Nguyen Danh Tung"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Class">
        <Input
          placeholder="60TH3"
          value={inputClass}
          onChange={(e) => setInputClass(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Birthday">
        <DatePicker
          style={{ width: "100%" }}
          value={moment(
            inputBirthday === "" ? "01/01/2000" : inputBirthday,
            "DD/MM/YYYY"
          )}
          format={"DD/MM/YYYY"}
          onChange={onChangeDatePicker}
        />
      </Form.Item>
      <Form.Item label="Address">
        <Select
          placeholder="Ha Noi"
          value={inputAddress}
          onChange={(value) => setInputAddress(value)}
        >
          <Select.Option value="Ha Noi">Ha Noi</Select.Option>
          <Select.Option value="Hoa Binh">Hoa Binh</Select.Option>
          <Select.Option value="Hai Phong">Hai Phong</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Point">
        <InputNumber
          style={{ width: "100%" }}
          placeholder="9"
          min={1}
          max={10}
          value={inputPoint}
          onChange={(value) => setInputPoint(value)}
        />
      </Form.Item>

      <Button type="primary" className="modal-btn-save" onClick={handleClick}>
        {onSubmit ? "Save" : "Update"}
      </Button>
    </Form>
  );
};

export default InputInfo;
