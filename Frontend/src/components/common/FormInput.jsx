import { Input } from 'antd';

const FormInput = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default FormInput;
