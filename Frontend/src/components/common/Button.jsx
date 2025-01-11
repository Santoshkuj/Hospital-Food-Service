import { Button as AntButton } from 'antd';

const Button = ({ type = 'primary', onClick, children, disabled, style }) => {
  return <AntButton type={type} onClick={onClick} disabled={disabled} style={{...style}}>{children}</AntButton>;
};

export default Button;
