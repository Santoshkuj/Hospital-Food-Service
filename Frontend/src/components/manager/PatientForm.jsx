import { useState, useEffect } from 'react';
import { Input, Button, Form, Select, Space } from 'antd';
import axios from 'axios';

const PatientForm = ({ patientId, onSave, onCancel }) => {
  const [form] = Form.useForm();
  
  // Define initial patient data
  const [patientData, setPatientData] = useState({
    name: '',
    diseases: '',
    allergies: '',
    roomNumber: '',
    bedNumber: '',
    floorNumber: '',
    age: '',
    gender: '',
    contactInfo: '',
    emergencyContact: '',
    others: ''
  });

  useEffect(() => {
    if (patientId) {
      // If editing an existing patient, fetch the data
      axios.get(`/api/patients/${patientId}`)
        .then((response) => setPatientData(response.data))
        .catch((error) => console.log(error));
    }
  }, [patientId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = () => {
    const method = patientId ? 'put' : 'post';
    const url = patientId ? `/api/patients/${patientId}` : '/api/patients';
    
    axios[method](url, patientData)
      .then((response) => {
        onSave(response.data);
        form.resetFields();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Patient Name" name="name" rules={[{ required: true }]}>
        <Input
          name="name"
          value={patientData.name}
          onChange={handleChange}
          placeholder="Enter Patient Name"
        />
      </Form.Item>

      <Form.Item label="Diseases" name="diseases">
        <Input
          name="diseases"
          value={patientData.diseases}
          onChange={handleChange}
          placeholder="Enter Diseases"
        />
      </Form.Item>

      <Form.Item label="Allergies" name="allergies">
        <Input
          name="allergies"
          value={patientData.allergies}
          onChange={handleChange}
          placeholder="Enter Allergies"
        />
      </Form.Item>

      <Form.Item label="Room Number" name="roomNumber">
        <Input
          name="roomNumber"
          value={patientData.roomNumber}
          onChange={handleChange}
          placeholder="Enter Room Number"
        />
      </Form.Item>

      <Form.Item label="Bed Number" name="bedNumber">
        <Input
          name="bedNumber"
          value={patientData.bedNumber}
          onChange={handleChange}
          placeholder="Enter Bed Number"
        />
      </Form.Item>

      <Form.Item label="Floor Number" name="floorNumber">
        <Input
          name="floorNumber"
          value={patientData.floorNumber}
          onChange={handleChange}
          placeholder="Enter Floor Number"
        />
      </Form.Item>

      <Form.Item label="Age" name="age">
        <Input
          name="age"
          value={patientData.age}
          onChange={handleChange}
          placeholder="Enter Age"
        />
      </Form.Item>

      <Form.Item label="Gender" name="gender">
        <Select
          name="gender"
          value={patientData.gender}
          onChange={(value) => setPatientData({ ...patientData, gender: value })}
          placeholder="Select Gender"
        >
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Contact Information" name="contactInfo">
        <Input
          name="contactInfo"
          value={patientData.contactInfo}
          onChange={handleChange}
          placeholder="Enter Contact Information"
        />
      </Form.Item>

      <Form.Item label="Emergency Contact" name="emergencyContact">
        <Input
          name="emergencyContact"
          value={patientData.emergencyContact}
          onChange={handleChange}
          placeholder="Enter Emergency Contact"
        />
      </Form.Item>

      <Form.Item label="Others" name="others">
        <Input
          name="others"
          value={patientData.others}
          onChange={handleChange}
          placeholder="Additional details"
        />
      </Form.Item>

      <Space>
        <Button type="primary" htmlType="submit">
          {patientId ? 'Update' : 'Add'} Patient
        </Button>
        <Button type="default" onClick={onCancel}>
          Cancel
        </Button>
      </Space>
    </Form>
  );
};

export default PatientForm;
