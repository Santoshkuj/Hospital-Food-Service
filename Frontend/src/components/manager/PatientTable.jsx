import { List, Button } from 'antd';
import axios from 'axios';

const PatientList = ({ patients, onEdit, onDelete }) => {
  const handleDelete = (patientId) => {
    axios.delete(`/api/patients/${patientId}`)
      .then(() => onDelete(patientId))
      .catch((error) => console.log(error));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={patients}
      renderItem={(patient) => (
        <List.Item
          actions={[
            <Button onClick={() => onEdit(patient)} type="link">
              Edit
            </Button>,
            <Button onClick={() => handleDelete(patient._id)} type="link" danger>
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={`Name: ${patient.name}`}
            description={`Room: ${patient.roomNumber}, Bed: ${patient.bedNumber}`}
          />
        </List.Item>
      )}
    />
  );
};

export default PatientList;
