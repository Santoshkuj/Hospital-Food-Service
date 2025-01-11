import { Modal as AntModal } from 'antd';

const Modal = ({ visible, onCancel, onOk, children, title }) => {
  return (
    <AntModal open={visible} onCancel={onCancel} onOk={onOk} title={title}>
      {children}
    </AntModal>
  );
};

export default Modal;
