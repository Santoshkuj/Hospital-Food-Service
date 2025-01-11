import { Table, Tag } from 'antd';
import Button from '../common/Button';

const DeliveryList = ({ deliveries, onComplete }) => {
  const columns = [
    { title: 'Patient', dataIndex: 'patient', key: 'patient' },
    { title: 'Room', dataIndex: 'room', key: 'room' },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => (
        <Tag color={status === 'Pending' ? 'red' : 'green'}>{status}</Tag>
      ),
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <Button onClick={() => onComplete(record)}>Mark Complete</Button>
      ),
    },
  ];

  return <Table dataSource={deliveries} columns={columns} />;
};

export default DeliveryList;
