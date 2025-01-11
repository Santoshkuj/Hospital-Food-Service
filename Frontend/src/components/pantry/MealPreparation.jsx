import { Steps } from 'antd';

const MealPreparation = ({ steps }) => {
  return <Steps current={steps.current} items={steps.items} />;
};

export default MealPreparation;
