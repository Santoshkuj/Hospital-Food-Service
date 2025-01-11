import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PatientTable from '../../components/manager/PatientTable';
import DietChartForm from '../../components/manager/DietChartForm';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import { fetchPatients } from '../../redux/patient/patientSlice';
import PatientForm from '../../components/manager/PatientForm';

const ManagerDashboard = () => {
  const dispatch = useDispatch();
  const { patients, status } = useSelector((state) => state.patients);
  
  const [dietModalVisible, setDietModalVisible] = useState(false);
  const [patientFormVisible, setPatientFormVisible] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients());
    }
  }, [status, dispatch]);


  return (
    <div className='m-4'>
      <h1>Manager Dashboard</h1>
      <Button onClick={() => setDietModalVisible(true)} style={{ marginRight: '15px' }}>Create Diet Chart</Button>
      <Button onClick={() => setPatientFormVisible(true)}>Add Patient</Button>

      {patients.length > 0 && <PatientTable
        patients={patients}
      />}

      <Modal
        visible={dietModalVisible}
        title="Create Diet Chart"
        onCancel={() => setDietModalVisible(false)}
        onOk={() => {}}
      >
        <DietChartForm patients={patients}/>
      </Modal>
      <Modal
        visible={patientFormVisible}
        title="Create Diet Chart"
        onCancel={() => setPatientFormVisible(false)}
        onOk={() => {}}
      >
        <PatientForm />
      </Modal>
    </div>
  );
};

export default ManagerDashboard;
